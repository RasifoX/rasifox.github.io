// Language and currency toggles. Plain vanilla JS, no build step.
// The dictionary drives every visible string via data-i18n keys. main.js reads
// the active language (document.documentElement.lang) and listens for the
// "languagechange" event to re-render the live GitHub cards.

const DICT = {
  en: {
    "meta.title": "RasifoX, freelance developer for websites, bots, and automations",
    "meta.description": "Freelance developer building websites, Discord and Telegram bots, web scrapers, and automations. TypeScript first, also Python, C and C++. You try a working demo before you commit.",

    "aria.language": "Language",
    "aria.currency": "Currency",

    "nav.work": "Work",
    "nav.services": "Services",
    "nav.contact": "Contact",

    "hero.kicker": "Freelance developer",
    "hero.h1": "Custom software that fits the problem you actually have.",
    "hero.lead": "Self-taught developer. I build websites, Discord and Telegram bots, web scrapers, and automations. Mostly TypeScript and JavaScript, with Python, C and C++ when the job calls for it.",
    "hero.trust": "I send a small working demo before you pay anything.",
    "hero.start": "Start a project",
    "hero.github": "See the code on GitHub",

    "work.kicker": "Recent work",
    "work.h2": "Code I wrote and ship publicly",
    "work.note": "Live from GitHub, so the language, stars, and last update are always current.",

    "services.kicker": "What I build",
    "services.h2": "Services and pricing",
    "services.note": "Price ranges below, and you can switch the currency at the top. Your fixed price is agreed before any work starts.",

    "svc.site.title": "Company website",
    "svc.site.desc": "A clean, responsive informational site: a few pages, contact form, fast and mobile friendly.",
    "svc.app.title": "Web app or custom tool",
    "svc.app.desc": "An interactive app with a backend and a database: dashboards, internal tools, small products.",
    "svc.store.title": "Online store",
    "svc.store.desc": "A product ordering site: catalogue, cart, checkout, and the integrations to run it.",
    "svc.bot.title": "Discord or Telegram bot",
    "svc.bot.desc": "A self-hostable bot for moderation, utility, or connecting your community to other services.",
    "svc.scraper.title": "Web scraper",
    "svc.scraper.desc": "Pull structured data from a site into clean CSV or JSON, with pagination and rate limiting.",
    "svc.automation.title": "Automation and integrations",
    "svc.automation.desc": "Connect the tools you already use and automate the repetitive parts. APIs, workflows, scripts.",
    "svc.small.title": "Small jobs and fixes",
    "svc.small.desc": "Quick changes, bug fixes, and one-off tasks, billed by the hour.",

    "price.site.usd": "$300 to $600",
    "price.site.try": "about 10,500 to 21,000 TRY",
    "price.app.usd": "$500 to $1,200",
    "price.app.try": "about 17,500 to 42,000 TRY",
    "price.store.usd": "$750 to $1,800",
    "price.store.try": "about 26,000 to 63,000 TRY",
    "price.bot.usd": "$90 to $300",
    "price.bot.try": "about 3,200 to 10,500 TRY",
    "price.scraper.usd": "$150 to $500",
    "price.scraper.try": "about 5,300 to 17,500 TRY",
    "price.automation.usd": "$150 to $600",
    "price.automation.try": "about 5,300 to 21,000 TRY",
    "price.small.usd": "$18 to $25 / hour",
    "price.small.try": "about 630 to 880 TRY / hour",

    "guarantee.price": "Fixed price agreed before any work starts.",
    "guarantee.own": "You own all the code and repos.",
    "guarantee.reply": "I reply within 24 hours.",

    "cta.text": "Not sure which one fits? Tell me what you need and I will scope it, quote a fixed price, and get something working in front of you first.",
    "cta.button": "Get a fixed quote",

    "contact.kicker": "Let's talk",
    "contact.h2": "Get in touch",
    "contact.text": "Available for freelance work. Tell me what you need and I will reply with an honest timeline and a fixed price. Payment via Wise or bank transfer.",
    "contact.start": "Start a project",
    "contact.alt": "Prefer to read the code first? ",

    "card.link": "View on GitHub",
    "card.star": "star",
    "card.stars": "stars",
    "updated.today": "updated today",
    "updated.days": "updated {n} days ago",
    "updated.month": "updated {n} month ago",
    "updated.months": "updated {n} months ago",
    "updated.year": "updated {n} year ago",
    "updated.years": "updated {n} years ago",
  },
  tr: {
    "meta.title": "RasifoX, web siteleri, botlar ve otomasyonlar için freelance yazılımcı",
    "meta.description": "Web siteleri, Discord ve Telegram botları, veri kazıyıcılar ve otomasyonlar geliştiren freelance yazılımcı. Öncelikle TypeScript, ayrıca Python, C ve C++. İşe başlamadan önce çalışan bir demoyu deneyebilirsiniz.",

    "aria.language": "Dil",
    "aria.currency": "Para birimi",

    "nav.work": "Projeler",
    "nav.services": "Hizmetler",
    "nav.contact": "İletişim",

    "hero.kicker": "Freelance yazılımcı",
    "hero.h1": "Tam da yaşadığınız soruna göre yazılmış özel yazılım.",
    "hero.lead": "Kendi kendini yetiştirmiş bir yazılımcıyım. Web siteleri, Discord ve Telegram botları, veri kazıyıcılar ve otomasyonlar geliştiriyorum. Çoğunlukla TypeScript ve JavaScript; iş gerektirdiğinde Python, C ve C++ kullanıyorum.",
    "hero.trust": "Siz herhangi bir ödeme yapmadan önce çalışan küçük bir demo gönderiyorum.",
    "hero.start": "Projeye başlayın",
    "hero.github": "Kodları GitHub'da görün",

    "work.kicker": "Son işler",
    "work.h2": "Yazdığım ve herkese açık yayınladığım kodlar",
    "work.note": "Doğrudan GitHub'dan geliyor; dil, yıldız sayısı ve son güncelleme her zaman günceldir.",

    "services.kicker": "Neler yapıyorum",
    "services.h2": "Hizmetler ve fiyatlar",
    "services.note": "Fiyat aralıkları aşağıda; para birimini üstten değiştirebilirsiniz. Size vereceğim sabit fiyat, işe başlamadan önce netleştirilir.",

    "svc.site.title": "Kurumsal web sitesi",
    "svc.site.desc": "Sade, hızlı ve mobil uyumlu bir tanıtım sitesi: birkaç sayfa ve iletişim formu.",
    "svc.app.title": "Web uygulaması veya özel araç",
    "svc.app.desc": "Arka uç ve veritabanı olan etkileşimli bir uygulama: panolar, şirket içi araçlar, küçük ürünler.",
    "svc.store.title": "Çevrimiçi mağaza",
    "svc.store.desc": "Ürün sipariş sitesi: katalog, sepet, ödeme adımı ve işletmek için gereken entegrasyonlar.",
    "svc.bot.title": "Discord veya Telegram botu",
    "svc.bot.desc": "Moderasyon, yardımcı işlevler veya topluluğunuzu başka servislere bağlamak için kendi sunucunuzda barındırabileceğiniz bot.",
    "svc.scraper.title": "Veri kazıyıcı",
    "svc.scraper.desc": "Bir siteden yapılandırılmış veriyi temiz CSV veya JSON olarak çeker; sayfalama ve hız sınırlama dahil.",
    "svc.automation.title": "Otomasyon ve entegrasyonlar",
    "svc.automation.desc": "Halihazırda kullandığınız araçları birbirine bağlar, tekrar eden işleri otomatikleştiririm. API'ler, iş akışları, betikler.",
    "svc.small.title": "Küçük işler ve düzeltmeler",
    "svc.small.desc": "Hızlı değişiklikler, hata düzeltmeleri ve tek seferlik işler; saatlik ücretlendirilir.",

    "price.site.usd": "$300 - $600",
    "price.site.try": "yaklaşık 10.500 - 21.000 TL",
    "price.app.usd": "$500 - $1.200",
    "price.app.try": "yaklaşık 17.500 - 42.000 TL",
    "price.store.usd": "$750 - $1.800",
    "price.store.try": "yaklaşık 26.000 - 63.000 TL",
    "price.bot.usd": "$90 - $300",
    "price.bot.try": "yaklaşık 3.200 - 10.500 TL",
    "price.scraper.usd": "$150 - $500",
    "price.scraper.try": "yaklaşık 5.300 - 17.500 TL",
    "price.automation.usd": "$150 - $600",
    "price.automation.try": "yaklaşık 5.300 - 21.000 TL",
    "price.small.usd": "$18 - $25 / saat",
    "price.small.try": "yaklaşık 630 - 880 TL / saat",

    "guarantee.price": "İşe başlamadan önce sabit fiyatta anlaşırız.",
    "guarantee.own": "Tüm kodlar ve repolar size ait olur.",
    "guarantee.reply": "24 saat içinde yanıt veririm.",

    "cta.text": "Hangisinin size uyduğundan emin değil misiniz? İhtiyacınızı anlatın; kapsamı çıkarayım, sabit fiyat vereyim ve önce çalışan bir şeyi karşınıza koyayım.",
    "cta.button": "Sabit fiyat teklifi alın",

    "contact.kicker": "Konuşalım",
    "contact.h2": "İletişime geçin",
    "contact.text": "Freelance işlere açığım. İhtiyacınızı anlatın; dürüst bir zaman çizelgesi ve sabit bir fiyatla dönüş yapayım. Ödeme Wise veya banka havalesi ile.",
    "contact.start": "Projeye başlayın",
    "contact.alt": "Önce kodları incelemek ister misiniz? ",

    "card.link": "GitHub'da görüntüle",
    "card.star": "yıldız",
    "card.stars": "yıldız",
    "updated.today": "bugün güncellendi",
    "updated.days": "{n} gün önce güncellendi",
    "updated.month": "{n} ay önce güncellendi",
    "updated.months": "{n} ay önce güncellendi",
    "updated.year": "{n} yıl önce güncellendi",
    "updated.years": "{n} yıl önce güncellendi",
  },
};

const LS_LANG = "rasifox.lang";
const LS_CUR = "rasifox.currency";

let currentLang = "en";
let currentCurrency = "usd";

function t(key, lang) {
  const table = DICT[lang || currentLang] || DICT.en;
  return table[key] != null ? table[key] : (DICT.en[key] != null ? DICT.en[key] : key);
}

// Exposed so main.js can read the active language and translate its strings.
window.RASI_I18N = { t, get lang() { return currentLang; } };

function applyLang(lang) {
  currentLang = DICT[lang] ? lang : "en";
  document.documentElement.lang = currentLang;

  document.title = t("meta.title");
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) metaDesc.setAttribute("content", t("meta.description"));

  document.querySelectorAll("[data-i18n]").forEach((node) => {
    node.textContent = t(node.getAttribute("data-i18n"));
  });
  document.querySelectorAll("[data-i18n-aria-label]").forEach((node) => {
    node.setAttribute("aria-label", t(node.getAttribute("data-i18n-aria-label")));
  });

  document.querySelectorAll("[data-lang-btn]").forEach((btn) => {
    const active = btn.getAttribute("data-lang-btn") === currentLang;
    btn.setAttribute("aria-pressed", active ? "true" : "false");
  });

  document.dispatchEvent(new CustomEvent("languagechange", { detail: { lang: currentLang } }));
}

function applyCurrency(cur) {
  currentCurrency = cur === "try" ? "try" : "usd";
  document.body.setAttribute("data-currency", currentCurrency);
  document.querySelectorAll("[data-cur-btn]").forEach((btn) => {
    const active = btn.getAttribute("data-cur-btn") === currentCurrency;
    btn.setAttribute("aria-pressed", active ? "true" : "false");
  });
}

function initToggles() {
  document.querySelectorAll("[data-lang-btn]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const lang = btn.getAttribute("data-lang-btn");
      applyLang(lang);
      try { localStorage.setItem(LS_LANG, lang); } catch (e) {}
    });
  });
  document.querySelectorAll("[data-cur-btn]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const cur = btn.getAttribute("data-cur-btn");
      applyCurrency(cur);
      try { localStorage.setItem(LS_CUR, cur); } catch (e) {}
    });
  });
}

function readStored(key) {
  try { return localStorage.getItem(key); } catch (e) { return null; }
}

(function init() {
  let savedLang = readStored(LS_LANG);
  let savedCur = readStored(LS_CUR);

  const startLang = (savedLang === "tr" || savedLang === "en")
    ? savedLang
    : ((navigator.language || "").toLowerCase().startsWith("tr") ? "tr" : "en");

  const startCur = (savedCur === "usd" || savedCur === "try")
    ? savedCur
    : (startLang === "tr" ? "try" : "usd");

  initToggles();
  applyCurrency(startCur);
  applyLang(startLang);
})();
