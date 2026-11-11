// assets/js/language.js

// ==========================================
// Language Switcher - بدون نیاز به data-i18n
// ==========================================
const translations = {
    fa: {
        // Hero Section - Slide 1
        '.hero-slide:nth-child(1) .hero-badge': '۱۵ ماه گارانتی معتبر',
        '.hero-slide:nth-child(1) .hero-title': 'باتری‌های <span>ATA</span><br>قدرت بی‌پایان',
        '.hero-slide:nth-child(1) .hero-text': 'مجموعه کامل باتری‌های خودرویی، UPS و صنعتی با بالاترین استانداردهای جهانی',
        '.hero-slide:nth-child(1) .btn-primary': '<i class="fas fa-arrow-down"></i> مشاهده محصولات',
        
        // Hero Section - Slide 2
        '.hero-slide:nth-child(2) .hero-badge': 'کیفیت برتر جهانی',
        '.hero-slide:nth-child(2) .hero-title': 'تکنولوژی <span>پیشرفته</span><br>عملکرد بی‌نظیر',
        '.hero-slide:nth-child(2) .hero-text': 'باتری‌های ATA با استانداردهای ISO 9001 و تاییدیه‌های بین‌المللی',
        '.hero-slide:nth-child(2) .btn-primary': '<i class="fas fa-info-circle"></i> اطلاعات بیشتر',

        // Vehicle Buttons
        '.vehicle-btn[data-vehicle="car"]': '<i class="fas fa-car"></i> باتری خودرو',
        '.vehicle-btn[data-vehicle="motorcycle"]': '<i class="fas fa-motorcycle"></i> باتری موتور',
        '.vehicle-btn[data-vehicle="ups"]': '<i class="fas fa-server"></i> باتری UPS',

        // Car Battery Info
        '#carDisplay .battery-card-attached:nth-child(4) h4': '۱۵ ماه گارانتی',
        '#carDisplay .battery-card-attached:nth-child(4) p': 'تعویض بی‌قید و شرط',
        '#carDisplay .battery-card-attached:nth-child(5) h4': 'قدرت بالا',
        '#carDisplay .battery-card-attached:nth-child(5) p': '۶۶ آمپر استارت قوی',
        '#carDisplay .battery-card-attached:nth-child(6) h4': 'عمر طولانی',
        '#carDisplay .battery-card-attached:nth-child(6) p': 'بیش از ۳ سال کارکرد',
        '#carDisplay .battery-cta-attached': '<i class="fas fa-arrow-left"></i> مشاهده و خرید',

        // Motorcycle Battery Info
        '#motorcycleDisplay .battery-card-attached:nth-child(4) h4': '۱۵ ماه گارانتی',
        '#motorcycleDisplay .battery-card-attached:nth-child(4) p': 'تعویض بی‌قید و شرط',
        '#motorcycleDisplay .battery-card-attached:nth-child(5) h4': 'مقاوم در لرزش',
        '#motorcycleDisplay .battery-card-attached:nth-child(5) p': 'تکنولوژی ضد لرزش',
        '#motorcycleDisplay .battery-card-attached:nth-child(6) h4': '۷ آمپر',
        '#motorcycleDisplay .battery-card-attached:nth-child(6) p': 'قدرت مناسب موتور',
        '#motorcycleDisplay .battery-cta-attached': '<i class="fas fa-arrow-left"></i> مشاهده و خرید',

        // UPS Battery Info
        '#upsDisplay .battery-card-attached:nth-child(2) h4': '۱۵ ماه گارانتی',
        '#upsDisplay .battery-card-attached:nth-child(2) p': 'تعویض بی‌قید و شرط',
        '#upsDisplay .battery-card-attached:nth-child(3) h4': 'Deep Cycle',
        '#upsDisplay .battery-card-attached:nth-child(3) p': 'شارژ عمیق',
        '#upsDisplay .battery-card-attached:nth-child(4) h4': '۱۰۰ آمپر',
        '#upsDisplay .battery-card-attached:nth-child(4) p': 'مناسب سرور و UPS',
        '#upsDisplay .battery-cta-attached': '<i class="fas fa-arrow-left"></i> مشاهده و خرید',

        // Battery Info Section
        '.battery-info-section .section-title': 'ویژگی‌های <span>باتری ATA</span>',
        '.battery-features .feature-box:nth-child(1) h3': '۱۵ ماه گارانتی',
        '.battery-features .feature-box:nth-child(1) p': 'ضمانت تعویض بی‌قید و شرط',
        '.battery-features .feature-box:nth-child(2) h3': 'قدرت بالا',
        '.battery-features .feature-box:nth-child(2) p': 'آمپر دهی عالی در استارت',
        '.battery-features .feature-box:nth-child(3) h3': 'عمر طولانی',
        '.battery-features .feature-box:nth-child(3) p': 'بیش از ۳ سال کارکرد',
        '.battery-features .feature-box:nth-child(4) h3': 'استاندارد جهانی',
        '.battery-features .feature-box:nth-child(4) p': 'تاییدیه ISO 9001',

        // Blog Section
        '#blogSection .section-title': 'وبلاگ و <span>اخبار شرکت</span>',
        '.blog-card:nth-child(1) .blog-date': '۱۰ شهریور ۱۴۰۳',
        '.blog-card:nth-child(1) h4': 'معرفی نسل جدید باتری‌های اتمی ATA با عمر مفید بالاتر',
        '.blog-card:nth-child(1) .blog-link': 'ادامه مطلب <i class="fas fa-arrow-left"></i>',
        '.blog-card:nth-child(2) .blog-date': '۵ شهریور ۱۴۰۳',
        '.blog-card:nth-child(2) h4': 'کسب نشان استاندارد بین‌المللی از اتحادیه اروپا',
        '.blog-card:nth-child(2) .blog-link': 'ادامه مطلب <i class="fas fa-arrow-left"></i>',
        '.blog-card:nth-child(3) .blog-date': '۱ شهریور ۱۴۰۳',
        '.blog-card:nth-child(3) h4': 'راهنمای جامع نگهداری از باتری خودرو در فصول گرم',
        '.blog-card:nth-child(3) .blog-link': 'ادامه مطلب <i class="fas fa-arrow-left"></i>',

        // Representatives Section
        '.representatives-info h3': '<i class="fas fa-map-marker-alt" style="margin-left: 10px;"></i>نمایندگان ATA Battery',
        '.province-search': 'جستجوی استان یا شهر...',
        '.map-container p': 'برای مشاهده نمایندگان، روی استان کلیک کنید یا جستجو کنید',

        // Customers Section
        '.customers-content h2': '<i class="fas fa-handshake" style="margin-left: 15px;"></i>مشتریان ما',
        '.customer-desc': 'تامین کننده رسمی باتری',
    },
    
    en: {
        // Hero Section - Slide 1
        '.hero-slide:nth-child(1) .hero-badge': '15 Months Valid Warranty',
        '.hero-slide:nth-child(1) .hero-title': 'ATA <span>Batteries</span><br>Endless Power',
        '.hero-slide:nth-child(1) .hero-text': 'Complete range of automotive, UPS and industrial batteries with the highest global standards',
        '.hero-slide:nth-child(1) .btn-primary': '<i class="fas fa-arrow-down"></i> View Products',
        
        // Hero Section - Slide 2
        '.hero-slide:nth-child(2) .hero-badge': 'World-Class Quality',
        '.hero-slide:nth-child(2) .hero-title': 'Advanced <span>Technology</span><br>Unmatched Performance',
        '.hero-slide:nth-child(2) .hero-text': 'ATA batteries with ISO 9001 standards and international certifications',
        '.hero-slide:nth-child(2) .btn-primary': '<i class="fas fa-info-circle"></i> More Info',

        // Vehicle Buttons
        '.vehicle-btn[data-vehicle="car"]': '<i class="fas fa-car"></i> Car Battery',
        '.vehicle-btn[data-vehicle="motorcycle"]': '<i class="fas fa-motorcycle"></i> Motorcycle Battery',
        '.vehicle-btn[data-vehicle="ups"]': '<i class="fas fa-server"></i> UPS Battery',

        // Car Battery Info
        '#carDisplay .battery-card-attached:nth-child(4) h4': '15 Months Warranty',
        '#carDisplay .battery-card-attached:nth-child(4) p': 'Unconditional replacement',
        '#carDisplay .battery-card-attached:nth-child(5) h4': 'High Power',
        '#carDisplay .battery-card-attached:nth-child(5) p': '66A strong start',
        '#carDisplay .battery-card-attached:nth-child(6) h4': 'Long Life',
        '#carDisplay .battery-card-attached:nth-child(6) p': 'Over 3 years lifespan',
        '#carDisplay .battery-cta-attached': '<i class="fas fa-arrow-right"></i> View & Buy',

        // Motorcycle Battery Info
        '#motorcycleDisplay .battery-card-attached:nth-child(4) h4': '15 Months Warranty',
        '#motorcycleDisplay .battery-card-attached:nth-child(4) p': 'Unconditional replacement',
        '#motorcycleDisplay .battery-card-attached:nth-child(5) h4': 'Vibration Resistant',
        '#motorcycleDisplay .battery-card-attached:nth-child(5) p': 'Anti-vibration technology',
        '#motorcycleDisplay .battery-card-attached:nth-child(6) h4': '7 Amps',
        '#motorcycleDisplay .battery-card-attached:nth-child(6) p': 'Perfect for motorcycles',
        '#motorcycleDisplay .battery-cta-attached': '<i class="fas fa-arrow-right"></i> View & Buy',

        // UPS Battery Info
        '#upsDisplay .battery-card-attached:nth-child(2) h4': '15 Months Warranty',
        '#upsDisplay .battery-card-attached:nth-child(2) p': 'Unconditional replacement',
        '#upsDisplay .battery-card-attached:nth-child(3) h4': 'Deep Cycle',
        '#upsDisplay .battery-card-attached:nth-child(3) p': 'Deep charging capability',
        '#upsDisplay .battery-card-attached:nth-child(4) h4': '100 Amps',
        '#upsDisplay .battery-card-attached:nth-child(4) p': 'Ideal for servers & UPS',
        '#upsDisplay .battery-cta-attached': '<i class="fas fa-arrow-right"></i> View & Buy',

        // Battery Info Section
        '.battery-info-section .section-title': 'ATA Battery <span>Features</span>',
        '.battery-features .feature-box:nth-child(1) h3': '15 Months Warranty',
        '.battery-features .feature-box:nth-child(1) p': 'Unconditional replacement guarantee',
        '.battery-features .feature-box:nth-child(2) h3': 'High Power',
        '.battery-features .feature-box:nth-child(2) p': 'Excellent amperage for starting',
        '.battery-features .feature-box:nth-child(3) h3': 'Long Life',
        '.battery-features .feature-box:nth-child(3) p': 'Over 3 years lifespan',
        '.battery-features .feature-box:nth-child(4) h3': 'Global Standard',
        '.battery-features .feature-box:nth-child(4) p': 'ISO 9001 certified',

        // Blog Section
        '#blogSection .section-title': 'Blog & <span>Company News</span>',
        '.blog-card:nth-child(1) .blog-date': 'September 1, 2024',
        '.blog-card:nth-child(1) h4': 'Introducing the new generation of ATA atomic batteries with longer lifespan',
        '.blog-card:nth-child(1) .blog-link': 'Read More <i class="fas fa-arrow-right"></i>',
        '.blog-card:nth-child(2) .blog-date': 'August 27, 2024',
        '.blog-card:nth-child(2) h4': 'Winning international standard award from European Union',
        '.blog-card:nth-child(2) .blog-link': 'Read More <i class="fas fa-arrow-right"></i>',
        '.blog-card:nth-child(3) .blog-date': 'August 23, 2024',
        '.blog-card:nth-child(3) h4': 'Comprehensive guide to car battery maintenance in hot seasons',
        '.blog-card:nth-child(3) .blog-link': 'Read More <i class="fas fa-arrow-right"></i>',

        // Representatives Section
        '.representatives-info h3': '<i class="fas fa-map-marker-alt" style="margin-left: 10px;"></i>ATA Battery Representatives',
        '.province-search': 'Search province or city...',
        '.map-container p': 'Click on a province or search to view representatives',

        // Customers Section
        '.customers-content h2': '<i class="fas fa-handshake" style="margin-left: 15px;"></i>Our Customers',
        '.customer-desc': 'Official battery supplier',
    }
};

let currentLang = localStorage.getItem('siteLanguage') || 'fa';

function applyLanguage(lang) {
    // تغییر direction و lang
    if (lang === 'en') {
        document.documentElement.setAttribute('dir', 'ltr');
        document.documentElement.setAttribute('lang', 'en');
        document.body.classList.add('lang-en');
        document.body.classList.remove('lang-fa');
    } else {
        document.documentElement.setAttribute('dir', 'rtl');
        document.documentElement.setAttribute('lang', 'fa');
        document.body.classList.add('lang-fa');
        document.body.classList.remove('lang-en');
    }

    // اعمال ترجمه‌ها بر اساس selector
    const langData = translations[lang];
    if (!langData) return;

    Object.keys(langData).forEach(selector => {
        const elements = document.querySelectorAll(selector);
        elements.forEach(el => {
            const newText = langData[selector];
            
            // اگر متن شامل HTML است (مثل <i> یا <span>) از innerHTML استفاده کن
            if (newText.includes('<')) {
                el.innerHTML = newText;
            } else {
                // برای input ها از placeholder استفاده کن
                if (el.tagName === 'INPUT') {
                    el.placeholder = newText;
                } else {
                    el.textContent = newText;
                }
            }
        });
    });

    // ذخیره زبان
    localStorage.setItem('siteLanguage', lang);
    currentLang = lang;

    // تغییر آیکون کره زمین
    const globeIcon = document.querySelector('button[title="تغییر زبان"] i, button[title="Change Language"] i');
    if (globeIcon) {
        globeIcon.style.color = lang === 'en' ? '#C9A227' : '';
    }
}

function toggleLanguage() {
    const newLang = currentLang === 'fa' ? 'en' : 'fa';
    applyLanguage(newLang);
}

// اجرای اولیه
document.addEventListener('DOMContentLoaded', () => {
    applyLanguage(currentLang);
});