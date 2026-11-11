
const CART_KEY = 'ata_cart';

// خواندن سبد خرید فعلی
function getCart() {
  try {
    const data = localStorage.getItem(CART_KEY);
    return data ? JSON.parse(data) : [];
  } catch (e) {
    console.error('خطا در خواندن سبد خرید از localStorage:', e);
    return [];
  }
}

// ذخیره سبد خرید
function saveCart(cart) {
  try {
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
    updateCartBadge();
  } catch (e) {
    console.error('خطا در ذخیره سبد خرید:', e);
  }
}

// افزودن محصول به سبد خرید
function addToCart(product, quantity = 1) {
  if (!product || product.id === undefined || product.id === null) {
    console.error('محصول معتبر نیست یا ID ندارد.');
    return;
  }

  const qty = parseInt(quantity, 10) || 1;
  const cart = getCart();
  
  // مقایسه شناسه با تبدیل هر دو به رشته (برای جلوگیری از باگ عدم تطابق نوع داده)
  const existing = cart.find(item => String(item.id) === String(product.id));

  if (existing) {
    existing.quantity += qty;
  } else {
    cart.push({
      id: product.id,
      title: product.title || 'محصول بدون نام',
      price: Number(product.price) || 0,
      image: product.image || '',
      quantity: qty
    });
  }

  saveCart(cart);
}

// حذف محصول از سبد خرید
function removeFromCart(id) {
  let cart = getCart();
  // تبدیل هر دو ID به رشته جهت مقایسه دقیق
  cart = cart.filter(item => String(item.id) !== String(id));
  saveCart(cart);
}

// تغییر تعداد یک محصول
function updateQuantity(id, quantity) {
  const qty = parseInt(quantity, 10);
  if (qty <= 0) {
    removeFromCart(id);
    return;
  }

  const cart = getCart();
  const item = cart.find(i => String(i.id) === String(id));

  if (item) {
    item.quantity = qty;
    saveCart(cart);
  }
}

// محاسبه مجموع مبلغ سبد خرید
function getCartTotal() {
  return getCart().reduce((sum, item) => sum + (Number(item.price) * Number(item.quantity)), 0);
}

// تعداد کل آیتم‌ها (تعداد مجموع اجناس)
function getCartCount() {
  return getCart().reduce((sum, item) => sum + Number(item.quantity), 0);
}

// آپدیت نشانگر (Badge) آیکون سبد خرید در هدر
function updateCartBadge() {
  const badges = document.querySelectorAll('.cart-badge');
  const count = getCartCount();
  
  badges.forEach(badge => {
    if (badge) {
      badge.textContent = count;
      badge.style.display = count > 0 ? 'flex' : 'none';
    }
  });
}

// خالی کردن سبد بعد از پرداخت موفق
function clearCart() {
  localStorage.removeItem(CART_KEY);
  updateCartBadge();
}

// بروزرسانی نشانگر هنگام بارگذاری کامل صفحه
document.addEventListener('DOMContentLoaded', updateCartBadge);