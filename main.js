// Featured projects, in the order they should appear. The blurb and tags are
// curated here; stars, language and last update are pulled live from GitHub.
const FEATURED = [
  {
    repo: "scrapekit",
    title: "Web scraper toolkit",
    titleTr: "Veri kazıma araç seti",
    blurb: "Configurable command-line web scraper. Describe the selectors in JSON and export clean CSV or JSON, with retries and rate limiting.",
    blurbTr: "Yapılandırılabilir komut satırı veri kazıyıcı. Seçicileri JSON ile tanımlayın, temiz CSV veya JSON olarak dışa aktarın; yeniden deneme ve hız sınırlama dahil.",
    tags: ["TypeScript", "CLI"],
  },
  {
    repo: "cronwatch",
    title: "Scheduled job monitor",
    titleTr: "Zamanlanmış iş izleyici",
    blurb: "Self-hosted monitor for scheduled jobs. Your cron pings it on success and it alerts when a run is overdue. Includes a cron parser written from scratch.",
    blurbTr: "Zamanlanmış işler için kendi sunucunuzda barındırılan izleyici. Cron göreviniz başarıda haber verir, bir çalışma geciktiğinde uyarır. Sıfırdan yazılmış bir cron ayrıştırıcı içerir.",
    tags: ["TypeScript", "Express"],
  },
  {
    repo: "discord-mod-bot",
    title: "Discord moderation bot",
    titleTr: "Discord moderasyon botu",
    blurb: "Self-hostable Discord moderation and utility bot with slash commands, permission checks, and a clean command structure.",
    blurbTr: "Slash komutları, yetki kontrolleri ve düzenli bir komut yapısına sahip, kendi sunucunuzda barındırılabilen Discord moderasyon ve yardımcı botu.",
    tags: ["TypeScript", "discord.js"],
  },
  {
    repo: "evensplit",
    title: "Shared expense splitter",
    titleTr: "Ortak masraf paylaştırıcı",
    blurb: "Shared-expense tracker that settles group debts in the fewest payments, with rounding that never loses a cent.",
    blurbTr: "Grup borçlarını en az sayıda ödemeyle kapatan ortak masraf takipçisi; yuvarlama tek kuruş bile kaybettirmez.",
    tags: ["TypeScript", "Express"],
  },
  {
    repo: "linear-regex",
    title: "Linear-time regex engine",
    titleTr: "Doğrusal zamanlı regex motoru",
    blurb: "Regex engine with guaranteed linear-time matching (Thompson NFA plus a Pike VM), so it never falls into catastrophic backtracking.",
    blurbTr: "Garantili doğrusal zamanlı eşleştirme yapan regex motoru (Thompson NFA ve Pike VM), böylece asla felaket geri izlemeye düşmez.",
    tags: ["C++", "automata"],
  },
  {
    repo: "redzone",
    title: "Debug memory allocator",
    titleTr: "Hata ayıklama bellek ayırıcı",
    blurb: "Drop-in debug allocator that catches buffer overflows, invalid frees, and leaks using canary red zones and guard pages.",
    blurbTr: "Tampon taşmalarını, geçersiz free çağrılarını ve sızıntıları canary kırmızı bölgeler ve koruma sayfalarıyla yakalayan, doğrudan yerine geçen hata ayıklama ayırıcısı.",
    tags: ["C", "systems"],
  },
  {
    repo: "lockcheck",
    title: "Safe SQL migration linter",
    titleTr: "Güvenli SQL migrasyon denetleyicisi",
    blurb: "Lints SQL migrations for locking and table-rewriting operations that cause downtime on Postgres, and suggests a safer rewrite.",
    blurbTr: "SQL migrasyonlarını, Postgres'te kesintiye yol açan kilitleme ve tablo yeniden yazma işlemlerine karşı denetler ve daha güvenli bir alternatif önerir.",
    tags: ["Python", "CLI"],
  },
];

const USER = "RasifoX";

function activeLang() {
  return (window.RASI_I18N && window.RASI_I18N.lang) || document.documentElement.lang || "en";
}

function tr(key) {
  return (window.RASI_I18N && window.RASI_I18N.t) ? window.RASI_I18N.t(key) : key;
}

function el(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text != null) node.textContent = text;
  return node;
}

function formatUpdated(iso) {
  if (!iso) return "";
  const then = new Date(iso).getTime();
  const days = Math.round((Date.now() - then) / 86400000);
  if (days <= 1) return tr("updated.today");
  if (days < 30) return tr("updated.days").replace("{n}", days);
  const months = Math.round(days / 30);
  if (months < 12) return tr(months === 1 ? "updated.month" : "updated.months").replace("{n}", months);
  const years = Math.round(months / 12);
  return tr(years === 1 ? "updated.year" : "updated.years").replace("{n}", years);
}

function renderCard(item, live, index) {
  const uiLang = activeLang();
  const title = (uiLang === "tr" && item.titleTr) || item.title || item.repo;
  const blurb = (uiLang === "tr" && item.blurbTr) || item.blurb;

  const card = el("article", "card project-card");
  if (index === 0) card.classList.add("featured");
  card.appendChild(el("h3", null, title));
  card.appendChild(el("div", "repo-slug", item.repo));

  if (item.tags && item.tags.length) {
    const tags = el("div", "tags");
    for (const t of item.tags) tags.appendChild(el("span", "tag", t));
    card.appendChild(tags);
  }

  card.appendChild(el("p", null, blurb));

  const meta = el("div", "project-meta");
  const lang = (live && live.language) || (item.tags && item.tags[0]);
  if (lang) {
    const langEl = el("span", "lang");
    langEl.appendChild(el("span", "dot"));
    langEl.appendChild(document.createTextNode(lang));
    meta.appendChild(langEl);
  }
  if (live && live.stargazers_count > 0) {
    const starKey = live.stargazers_count === 1 ? "card.star" : "card.stars";
    meta.appendChild(el("span", null, `${live.stargazers_count} ${tr(starKey)}`));
  }
  if (live && live.pushed_at) {
    meta.appendChild(el("span", null, formatUpdated(live.pushed_at)));
  }
  card.appendChild(meta);

  const link = el("a", "repo-link", tr("card.link"));
  link.href = (live && live.html_url) || `https://github.com/${USER}/${item.repo}`;
  link.rel = "noopener";
  card.appendChild(link);

  return card;
}

let lastLive = {};

function render(liveByName) {
  lastLive = liveByName || {};
  const container = document.getElementById("projects");
  container.textContent = "";
  FEATURED.forEach((item, index) => {
    container.appendChild(renderCard(item, lastLive[item.repo], index));
  });
}

// Re-render the cards when the language changes so titles, blurbs, and the
// live meta strings follow the active language.
document.addEventListener("languagechange", () => render(lastLive));

async function load() {
  // Render immediately from the curated list so the page is never empty.
  render({});
  try {
    const res = await fetch(`https://api.github.com/users/${USER}/repos?per_page=100&sort=updated`);
    if (!res.ok) return;
    const repos = await res.json();
    const byName = {};
    for (const r of repos) byName[r.name] = r;
    render(byName);
  } catch {
    // Offline or rate limited: the curated cards are already on screen.
  }
}

load();
