const screens = [
  { key: 'welcome', label: 'خوش‌آمدگویی' },
  { key: 'mobile', label: 'موبایل' },
  { key: 'otp', label: 'کد تایید' },
  { key: 'unit', label: 'واحد' },
  { key: 'confirm', label: 'تایید' },
  { key: 'success', label: 'اتصال' },
];

let screen = 0;
const root = document.getElementById('screenRoot');
const topRow = document.getElementById('topRow');
const stepBadge = document.getElementById('stepBadge');
const progressFill = document.getElementById('progressFill');
const tabs = document.getElementById('tabs');

document.getElementById('backBtn').addEventListener('click', () => go(Math.max(0, screen - 1)));

function goldLineArt(variant = 'tower') {
  if (variant === 'check') {
    return `<svg class="line-art check-art" viewBox="0 0 320 230" aria-hidden="true"><circle cx="160" cy="112" r="66"/><path d="M121 113l27 27 55-63"/><path d="M54 176c48-46 94-67 142-62 31 3 54 15 83 39"/><path d="M77 70c37-31 76-45 118-41 27 3 49 12 73 31"/></svg>`;
  }
  return `<svg class="line-art" viewBox="0 0 320 250" aria-hidden="true"><path d="M44 207V82l68-42 68 42v125"/><path d="M180 207V64l46-29 50 31v141"/><path d="M70 207V111h83v96"/><path d="M205 207V92h48v115"/><path d="M38 207h244"/><path d="M84 128h18M119 128h18M84 154h18M119 154h18M84 180h18M119 180h18"/><path d="M215 113h29M215 139h29M215 165h29"/><path d="M30 67c46-36 90-49 132-39 32 8 52 27 86 22 18-3 33-11 48-24"/></svg>`;
}

function button(label, disabled = false) {
  return `<button class="primary-button" ${disabled ? 'disabled' : ''} data-next>${label}</button>`;
}

const templates = {
  welcome: () => `<div class="screen welcome-screen"><div class="brand"><strong>TAJ HUB</strong><span>تجربه اختصاصی ساکنین</span></div>${goldLineArt()}<div class="copy center"><h2>به TAJ HUB خوش آمدید</h2><p>اکوسیستم مدیریت و خدمات ساختمان‌های لوکس</p><small>مدیریتی پیچیده، با کنترلی ساده و آرام</small></div><div class="bottom-actions">${button('ورود به اپلیکیشن')}<p>ورود سریع، امن و بدون فرم‌های طولانی</p></div></div>`,
  mobile: () => `<div class="screen form-screen"><h2>شماره موبایل خود را وارد کنید</h2><p>برای ورود امن به خدمات ساختمان، یک کد تایید برای شما ارسال می‌شود.</p><input class="text-input" inputmode="numeric" value="09123456789" placeholder="0912 345 6789" />${button('ارسال کد تایید')}<small>شماره شما فقط برای شناسایی واحد و ورود امن استفاده می‌شود.</small></div>`,
  otp: () => `<div class="screen form-screen"><h2>کد تایید را وارد کنید</h2><p>کد ۵ رقمی ارسال‌شده به شماره <bdi>0912 *** 6789</bdi> را وارد کنید.</p><div class="otp-row"><input value="1" maxlength="1"><input value="4" maxlength="1"><input value="8" maxlength="1"><input value="2" maxlength="1"><input value="9" maxlength="1"></div><div class="timer">ارسال مجدد کد تا ۴۵ ثانیه دیگر</div>${button('تایید و ادامه')}<button class="text-button">تغییر شماره موبایل</button></div>`,
  unit: () => `<div class="screen form-screen"><h2>شماره واحد خود را وارد کنید</h2><p>برای اتصال به خدمات ساختمان، شماره واحد خود را وارد کنید.</p><input class="text-input" inputmode="numeric" value="۱۲" placeholder="مثلاً ۱۲" /><small>شماره واحد همان شماره ثبت‌شده نزد مدیریت ساختمان است.</small>${button('جستجوی واحد')}</div>`,
  confirm: () => `<div class="screen form-screen"><h2>آیا این اطلاعات صحیح است؟</h2><p>لطفاً اطلاعات واحد خود را بررسی و تایید کنید.</p><div class="info-card"><label>نام ساختمان</label><strong>برج رز طلایی</strong><label>شماره واحد</label><strong>۱۲</strong><label>نام ثبت‌شده</label><strong>علی رضایی</strong></div>${button('تایید و اتصال به TAJ HUB')}<button class="text-button">این اطلاعات صحیح نیست</button></div>`,
  success: () => `<div class="screen success-screen">${goldLineArt('check')}<div class="copy center"><h2>خوش آمدید</h2><p>شما با موفقیت به TAJ HUB متصل شدید.</p><small>از این لحظه، خدمات ساختمان شما در دسترس است.</small></div>${button('ورود به داشبورد', true)}</div>`,
};

function renderTabs() {
  tabs.innerHTML = screens.map((item, index) => `<button class="${index === screen ? 'active' : ''}" data-tab="${index}">${item.label}</button>`).join('');
  tabs.querySelectorAll('[data-tab]').forEach((el) => el.addEventListener('click', () => go(Number(el.dataset.tab))));
}

function go(index) {
  screen = index;
  const key = screens[screen].key;
  const authScreen = key !== 'welcome' && key !== 'success';
  topRow.classList.toggle('hidden', !authScreen);
  stepBadge.textContent = `مرحله ${Math.min(screen, 4)} از ۴`;
  progressFill.style.width = `${(screen / (screens.length - 1)) * 100}%`;
  root.innerHTML = templates[key]();
  root.querySelectorAll('[data-next]').forEach((el) => el.addEventListener('click', () => go(Math.min(screen + 1, screens.length - 1))));
  renderTabs();
}

go(0);
