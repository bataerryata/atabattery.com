require('dotenv').config();
const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// --- تنظیمات Sandbox زرین‌پال ---
const MERCHANT_ID = '00000000-0000-0000-0000-000000000000'; // مرچنت‌آیدی تستی ثابت زرین‌پال
const ZARINPAL_REQUEST_URL = 'https://sandbox.zarinpal.com/pg/v4/payment/request.json';
const ZARINPAL_VERIFY_URL = 'https://sandbox.zarinpal.com/pg/v4/payment/verify.json';
const ZARINPAL_STARTPAY_URL = 'https://sandbox.zarinpal.com/pg/StartPay/';

// آدرس سایت خودتون رو اینجا بذارید (بعداً با دامنهٔ واقعی جایگزین کنید)
const CALLBACK_URL = 'http://localhost:3000/verify';
// ذخیره موقت مبلغ هر تراکنش (بعداً باید با دیتابیس واقعی جایگزین بشه)
const pendingPayments = {};

// --- مرحله ۱: درخواست ساخت لینک پرداخت ---
app.post('/request-payment', async (req, res) => {
  try {
    const { amount, description, email, mobile } = req.body;

    if (!amount || !description) {
      return res.status(400).json({ error: 'مبلغ و توضیحات الزامی است' });
    }

    const response = await axios.post(ZARINPAL_REQUEST_URL, {
      merchant_id: MERCHANT_ID,
      amount: amount, // مبلغ به تومان (زرین‌پال v4 با تومان کار میکنه، دقت کنید نسخه رو چک کنید)
      callback_url: CALLBACK_URL,
      description: description,
      metadata: { email, mobile }
    });

    const data = response.data.data;

    if (data && data.code === 100) {
      // موفق - لینک پرداخت رو برمی‌گردونیم
      const paymentUrl = ZARINPAL_STARTPAY_URL + data.authority;
      pendingPayments[data.authority] = amount;
      res.json({ success: true, url: paymentUrl, authority: data.authority });
    } else {
      res.status(400).json({ success: false, error: response.data.errors });
    }
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: 'خطا در ارتباط با درگاه پرداخت' });
  }
});

// --- مرحله ۲: تأیید پرداخت (بعد از برگشت از درگاه) ---
app.get('/verify', async (req, res) => {
  const { Authority, Status } = req.query;

  if (Status !== 'OK') {
    return res.send('پرداخت لغو شد یا ناموفق بود.');
  }

  try {
    // توجه: amount باید دقیقاً همون مبلغی باشه که در مرحله request فرستاده بودید
    // بهتره amount رو بر اساس authority از دیتابیس خودتون بخونید، نه مقدار ثابت
    const amount = pendingPayments[Authority] || 0;
const response = await axios.post(ZARINPAL_VERIFY_URL, {
  merchant_id: MERCHANT_ID,
  amount: amount,
  authority: Authority
});
    const data = response.data.data;

    if (data && data.code === 100) {
      res.send(`پرداخت موفق بود. کد پیگیری: ${data.ref_id}`);
      // اینجا باید وضعیت سفارش رو در دیتابیس آپدیت کنید
    } else if (data && data.code === 101) {
      res.send('این تراکنش قبلاً تأیید شده است.');
    } else {
      res.send('پرداخت ناموفق بود.');
    }
  } catch (err) {
    console.error(err.message);
    res.status(500).send('خطا در تأیید پرداخت');
  }
  delete pendingPayments[Authority];
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`سرور روی پورت ${PORT} در حال اجراست`);
});