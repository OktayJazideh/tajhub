const screens = ['welcome', 'mobile', 'otp', 'unit', 'confirm', 'dashboard', 'payment'];
let currentScreen = 0;

const root = document.getElementById('screenRoot');

function goTo(screenName) {
  const index = screens.indexOf(screenName);
  if (index >= 0) {
    currentScreen = index;
    render();
  }
}

function next() {
  currentScreen = Math.min(currentScreen + 1, screens.length - 1);
  render();
}

function previous() {
  currentScreen = Math.max(currentScreen - 1, 0);
  render();
}

function authHeader(step) {
  return `
    <header class="auth-header">
      <button class="icon-button" data-action="back" aria-label="بازگشت">‹</button>
      <span class="step-badge">مرحله ${step} از ۴</span>
    </header>
  `;
}

function primaryButton(label, action = 'next') {
  return `<button class="primary-button" data-action="${action}">${label}</button>`;
}

function bottomNav(active) {
  const items = [
    ['dashboard', 'خانه', 'خانه'],
    ['payment', 'شارژ', 'پرداخت'],
    ['requests', 'درخواست‌ها', 'درخواست‌ها'],
    ['notices', 'اطلاعیه‌ها', 'اطلاعیه‌ها'],
    ['profile', 'پروفایل', 'پروفایل'],
  ];

  return `
    <nav class="bottom-nav" aria-label="منوی اصلی اپلیکیشن">
      ${items
        .map(([key, shortLabel, fullLabel]) => {
          const disabled = key === 'requests' || key === 'notices' || key === 'profile';
          return `
            <button class="nav-item ${active === key ? 'active' : ''}" data-action="${disabled ? 'disabled' : key}">
              <span class="nav-dot"></span>
              <span>${shortLabel}</span>
            </button>
          `;
        })
        .join('')}
    </nav>
  `;
}

const templates = {
  welcome: () => `
    <section class="screen welcome-screen">
      <div class="brand-lockup">
        <strong>TAJ HUB</strong>
        <span>Resident App</span>
      </div>
      <div class="hero-copy">
        <p class="eyebrow">تجربه اختصاصی ساکنین</p>
        <h1>به TAJ HUB خوش آمدید</h1>
        <p>ورود سریع، امن و بدون فرم‌های طولانی</p>
      </div>
      <div class="action-stack">
        ${primaryButton('ورود به اپلیکیشن')}
        <small>خدمات ساختمان شما در چند مرحله ساده در دسترس است.</small>
      </div>
    </section>
  `,
  mobile: () => `
    <section class="screen form-screen">
      ${authHeader(1)}
      <div class="screen-copy">
        <h1>شماره موبایل خود را وارد کنید</h1>
        <p>برای ورود امن به خدمات ساختمان، یک کد تایید برای شما ارسال می‌شود.</p>
      </div>
      <input class="text-input" inputmode="numeric" value="09123456789" placeholder="0912 345 6789" />
      ${primaryButton('ارسال کد تایید')}
      <small>شماره شما فقط برای شناسایی واحد و ورود امن استفاده می‌شود.</small>
    </section>
  `,
  otp: () => `
    <section class="screen form-screen">
      ${authHeader(2)}
      <div class="screen-copy">
        <h1>کد تایید را وارد کنید</h1>
        <p>کد ۵ رقمی ارسال‌شده به شماره <bdi>0912 *** 6789</bdi> را وارد کنید.</p>
      </div>
      <div class="otp-row">
        <input value="1" maxlength="1" />
        <input value="4" maxlength="1" />
        <input value="8" maxlength="1" />
        <input value="2" maxlength="1" />
        <input value="9" maxlength="1" />
      </div>
      <p class="timer">ارسال مجدد کد تا ۴۵ ثانیه دیگر</p>
      ${primaryButton('تایید و ادامه')}
      <button class="text-button">تغییر شماره موبایل</button>
    </section>
  `,
  unit: () => `
    <section class="screen form-screen">
      ${authHeader(3)}
      <div class="screen-copy">
        <h1>شماره واحد خود را وارد کنید</h1>
        <p>برای اتصال به خدمات ساختمان، شماره واحد خود را وارد کنید.</p>
      </div>
      <input class="text-input" inputmode="numeric" value="۱۲" placeholder="مثلاً ۱۲" />
      <small>شماره واحد همان شماره ثبت‌شده نزد مدیریت ساختمان است.</small>
      ${primaryButton('جستجوی واحد')}
    </section>
  `,
  confirm: () => `
    <section class="screen form-screen">
      ${authHeader(4)}
      <div class="screen-copy">
        <h1>آیا این اطلاعات صحیح است؟</h1>
        <p>لطفاً اطلاعات واحد خود را بررسی و تایید کنید.</p>
      </div>
      <div class="info-card">
        <span>نام ساختمان</span><strong>برج رز طلایی</strong>
        <span>شماره واحد</span><strong>۱۲</strong>
        <span>نام ثبت‌شده</span><strong>علی رضایی</strong>
      </div>
      ${primaryButton('تایید و اتصال به TAJ HUB')}
      <button class="text-button">این اطلاعات صحیح نیست</button>
    </section>
  `,
  dashboard: () => `
    <section class="screen app-screen scrollable">
      <header class="dashboard-header">
        <div>
          <p class="eyebrow">TAJ HUB</p>
          <h1>سلام، علی رضایی</h1>
          <span>برج رز طلایی · واحد ۱۲</span>
        </div>
        <button class="profile-chip">پروفایل</button>
      </header>

      <article class="notice-card">
        <strong>اطلاعیه مهم</strong>
        <p>سرویس آسانسور غربی امروز ساعت ۱۸ انجام می‌شود.</p>
      </article>

      <article class="charge-card">
        <div class="card-header">
          <span>وضعیت شارژ</span>
          <b class="status warning">بدهی فعال</b>
        </div>
        <strong class="amount">۴,۸۵۰,۰۰۰ تومان</strong>
        <p>سررسید پرداخت: ۵ تیر ۱۴۰۵</p>
        ${primaryButton('پرداخت شارژ', 'payment')}
      </article>

      <section class="quick-actions">
        <button data-action="payment">پرداخت شارژ</button>
        <button>ثبت درخواست</button>
        <button>اطلاعیه‌ها</button>
        <button>صندوق‌ها</button>
      </section>

      <article class="summary-card">
        <div>
          <span>درخواست‌های فعال</span>
          <strong>۲ درخواست باز</strong>
          <p>آخرین مورد: نشتی آب · در حال بررسی</p>
        </div>
        <button>مشاهده</button>
      </article>

      <article class="funds-card">
        <h2>صندوق‌ها</h2>
        <div class="fund-row">
          <span>صندوق شارژ ساکنین</span>
          <strong>۱۲۸,۰۰۰,۰۰۰ تومان</strong>
        </div>
        <div class="fund-row">
          <span>صندوق مالکانه</span>
          <strong>۷۵,۰۰۰,۰۰۰ تومان</strong>
        </div>
      </article>
      ${bottomNav('dashboard')}
    </section>
  `,
  payment: () => `
    <section class="screen app-screen scrollable">
      <header class="page-header">
        <button class="icon-button" data-action="dashboard" aria-label="بازگشت">‹</button>
        <div>
          <p class="eyebrow">برج رز طلایی · واحد ۱۲</p>
          <h1>پرداخت شارژ</h1>
        </div>
      </header>

      <article class="charge-card payment-main">
        <div class="card-header">
          <span>دوره مالی جاری</span>
          <b class="status warning">بدهکار</b>
        </div>
        <strong class="amount">۴,۸۵۰,۰۰۰ تومان</strong>
        <div class="payment-grid">
          <span>شارژ دوره</span><strong>۶,۰۰۰,۰۰۰</strong>
          <span>پرداخت شده</span><strong>۱,۱۵۰,۰۰۰</strong>
          <span>مانده بدهی</span><strong>۴,۸۵۰,۰۰۰</strong>
          <span>سررسید</span><strong>۵ تیر ۱۴۰۵</strong>
        </div>
        ${primaryButton('پرداخت آنلاین')}
      </article>

      <section class="soft-card">
        <h2>گزارش سریع</h2>
        <div class="mini-stats">
          <div><strong>۲۴,۵۰۰,۰۰۰</strong><span>پرداخت سال جاری</span></div>
          <div><strong>۵</strong><span>تعداد پرداخت‌ها</span></div>
        </div>
      </section>

      <section class="history-card">
        <div class="card-header">
          <h2>سوابق پرداخت</h2>
          <button>جدیدترین</button>
        </div>
        <div class="history-row">
          <div><strong>۲۸ خرداد ۱۴۰۵</strong><span>شارژ ماهانه</span></div>
          <b>۱,۱۵۰,۰۰۰ تومان</b>
        </div>
        <div class="history-row">
          <div><strong>۲ اردیبهشت ۱۴۰۵</strong><span>صندوق مالکانه</span></div>
          <b>۳,۰۰۰,۰۰۰ تومان</b>
        </div>
        <div class="history-row">
          <div><strong>۱ فروردین ۱۴۰۵</strong><span>شارژ ماهانه</span></div>
          <b>۴,۲۰۰,۰۰۰ تومان</b>
        </div>
      </section>
      ${bottomNav('payment')}
    </section>
  `,
};

function render() {
  root.innerHTML = templates[screens[currentScreen]]();
  root.querySelectorAll('[data-action]').forEach((element) => {
    element.addEventListener('click', () => {
      const action = element.dataset.action;
      if (action === 'next') next();
      if (action === 'back') previous();
      if (action === 'dashboard') goTo('dashboard');
      if (action === 'payment') goTo('payment');
    });
  });
}

render();
