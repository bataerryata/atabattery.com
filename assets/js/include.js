// include.js - navbar/footer را به صورت داینامیک لود می‌کند
// نکته: چون از fetch استفاده می‌شود، سایت باید روی یک سرور (Live Server / لوکال هاست) اجرا شود
// باز کردن مستقیم فایل با دابل‌کلیک (file://) کار نمی‌کند.

function includePart(placeholderId, url) {
  const el = document.getElementById(placeholderId);
  if (!el) return;
  fetch(url)
    .then(function (res) {
      if (!res.ok) throw new Error('خطا در بارگذاری ' + url);
      return res.text();
    })
    .then(function (html) {
      el.outerHTML = html;
    })
    .catch(function (err) {
      console.error(err);
    });
}

document.addEventListener('DOMContentLoaded', function () {
  includePart('navbar-placeholder', '/partials/navbar.html');
  includePart('footer-placeholder', '/partials/footer.html');
});

// باز/بسته کردن پنل نمایش شماره تماس در navbar
function toggleContactPanel(btn) {
  var panel = btn.parentElement.querySelector('.contact-panel');
  if (!panel) return;
  var wasOpen = panel.classList.contains('show');
  document.querySelectorAll('.contact-panel.show').forEach(function (p) {
    p.classList.remove('show');
  });
  if (!wasOpen) panel.classList.add('show');
}

// 3. Highlight Active Nav Link Based on Current Page
(function () {
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';

    // لینک‌های مستقیم (صفحه اصلی، محصولات، وبلاگ، درباره ما، ارتباط با ما)
    const directLinks = document.querySelectorAll('.nav-menu > .nav-item > a.nav-link');
    directLinks.forEach(link => {
        link.classList.remove('active');
        const linkPath = link.getAttribute('href').split('/').pop().split('?')[0];
        if (linkPath === currentPath) {
            link.classList.add('active');
        }
    });

    // آیتم‌های دراپ‌دان (خدمات پس از فروش)
    const dropdownParents = document.querySelectorAll('.nav-menu > .nav-item > span.nav-link');
    dropdownParents.forEach(span => {
        span.classList.remove('active');
        const dropdown = span.nextElementSibling;
        if (dropdown) {
            const innerLinks = dropdown.querySelectorAll('a');
            innerLinks.forEach(a => {
                const linkPath = a.getAttribute('href').split('/').pop().split('?')[0];
                if (linkPath && linkPath === currentPath) {
                    span.classList.add('active');
                }
            });
        }
    });
})();