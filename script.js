(function () {
  'use strict';

  var CV = window.CV;
  var LANGS = ['en', 'ru'];

  var UI = {
    en: {
      docTitle: 'Denis Sidorenko — Senior Frontend Engineer',
      docDescription: 'Senior Frontend Engineer with 7+ years of experience: JavaScript, TypeScript, React, Redux, Vue.js. HR/workforce management, iGaming and Smart TV domains.',
      about: 'About', skills: 'Skills', experience: 'Experience', courses: 'Courses & certifications',
      languages: 'Languages', education: 'Education', contacts: 'Contacts',
      download: 'Save as PDF', team: 'Team', project: 'Project',
      present: 'present', openToWork: 'Open to new opportunities'
    },
    ru: {
      docTitle: 'Денис Сидоренко — Senior Frontend Engineer',
      docDescription: 'Senior Frontend Engineer с опытом более 7 лет: JavaScript, TypeScript, React, Redux, Vue.js. Домены HR и управления персоналом, iGaming и Smart TV.',
      about: 'Обо мне', skills: 'Навыки', experience: 'Опыт работы', courses: 'Курсы и сертификаты',
      languages: 'Языки', education: 'Образование', contacts: 'Контакты',
      download: 'Сохранить в PDF', team: 'Команда', project: 'Проект',
      present: 'н. в.', openToWork: 'Открыт к новым предложениям'
    }
  };

  var ICONS = {
    mail: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>',
    telegram: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M21 4 3 11l6 2.5M21 4l-3 16-6.5-5M21 4 9 13.5m0 0V19l2.5-4"/></svg>',
    linkedin: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="3"/><path d="M8 10v7M8 7v.01M12 17v-4a2 2 0 0 1 4 0v4M12 10v7"/></svg>',
    pin: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 21s-7-6.2-7-11a7 7 0 0 1 14 0c0 4.8-7 11-7 11z"/><circle cx="12" cy="10" r="2.5"/></svg>',
    download: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 4v11m0 0-4-4m4 4 4-4M5 20h14"/></svg>',
    print: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 9V4h10v5M7 17H5a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-2"/><rect x="7" y="14" width="10" height="6"/></svg>'
  };

  var lang = 'en';

  function t(value) {
    if (value == null) return '';
    if (typeof value === 'string') return value;
    return value[lang] != null ? value[lang] : value.en;
  }

  function esc(str) {
    return String(str)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
  }

  function parseYm(ym) {
    var p = ym.split('-');
    return { y: +p[0], m: +p[1] };
  }

  function formatMonth(ym) {
    var d = parseYm(ym);
    var date = new Date(Date.UTC(d.y, d.m - 1, 1));
    var s = new Intl.DateTimeFormat(lang === 'ru' ? 'ru-RU' : 'en-US', { month: 'short', year: 'numeric', timeZone: 'UTC' }).format(date);
    return s.replace(/\s?г\.$/, '');
  }

  function plural(n, forms) {
    // forms: { one, few, many, other }
    var rule = new Intl.PluralRules(lang === 'ru' ? 'ru-RU' : 'en-US').select(n);
    return forms[rule] || forms.other;
  }

  function duration(from, to) {
    var a = parseYm(from), b = parseYm(to);
    var months = (b.y - a.y) * 12 + (b.m - a.m) + 1;
    var y = Math.floor(months / 12), m = months % 12;
    var parts = [];
    if (lang === 'ru') {
      if (y) parts.push(y + ' ' + plural(y, { one: 'год', few: 'года', many: 'лет', other: 'года' }));
      if (m) parts.push(m + ' мес.');
    } else {
      if (y) parts.push(y + ' ' + (y === 1 ? 'yr' : 'yrs'));
      if (m) parts.push(m + ' ' + (m === 1 ? 'mo' : 'mos'));
    }
    return parts.join(' ');
  }

  function period(from, to, withDuration) {
    var s = formatMonth(from) + ' — ' + (to ? formatMonth(to) : UI[lang].present);
    if (withDuration && to) s += ' · ' + duration(from, to);
    return s;
  }

  function sectionHead(num, label) {
    return '<h2 class="section-head"><span class="section-num">' + num + '</span>' + esc(label) + '</h2>';
  }

  function renderSide() {
    var c = CV.contacts, ui = UI[lang];
    var html = '';
    html += '<div class="id">';
    html += '<img class="photo" src="' + esc(CV.photo) + '" width="280" height="280" alt="' + esc(t(CV.name)) + '">';
    html += '<h1 class="name">' + esc(t(CV.name)) + '</h1>';
    html += '<p class="role">' + esc(t(CV.title)) + '</p>';
    html += '<p class="loc">' + ICONS.pin + esc(t(CV.location)) + '</p>';
    html += '</div>';

    html += '<ul class="contacts" aria-label="' + esc(ui.contacts) + '">';
    html += '<li><a href="mailto:' + esc(c.email) + '">' + ICONS.mail + '<span>' + esc(c.email) + '</span></a></li>';
    html += '<li><a href="https://t.me/' + esc(c.telegram) + '" target="_blank" rel="noopener">' + ICONS.telegram + '<span>@' + esc(c.telegram) + '</span></a></li>';
    html += '<li><a href="' + esc(c.linkedin) + '" target="_blank" rel="noopener">' + ICONS.linkedin + '<span>LinkedIn</span></a></li>';
    html += '</ul>';

    html += '<div class="actions">';
    html += '<button class="btn btn-primary" type="button" data-print>' + ICONS.download + esc(ui.download) + '</button>';
    html += '</div>';

    html += '<section class="side-block"><h2 class="side-head">' + esc(ui.languages) + '</h2><ul class="langs">';
    CV.languages.forEach(function (l) {
      html += '<li><span>' + esc(t(l.name)) + '</span><span class="lvl">' + esc(l.level) + (l.note ? ' · ' + esc(t(l.note)) : '') + '</span></li>';
    });
    html += '</ul></section>';

    html += '<section class="side-block"><h2 class="side-head">' + esc(ui.education) + '</h2>';
    CV.education.forEach(function (e) {
      html += '<div class="edu"><p class="edu-degree">' + esc(t(e.degree)) + '</p><p class="edu-school">' + esc(t(e.school)) + ', ' + esc(e.year) + '</p></div>';
    });
    html += '</section>';

    document.getElementById('side').innerHTML = html;
  }

  function renderTags(tags) {
    if (!tags || !tags.length) return '';
    return '<ul class="tags">' + tags.map(function (tag) { return '<li>' + esc(t(tag)) + '</li>'; }).join('') + '</ul>';
  }

  function renderProject(p) {
    var ui = UI[lang];
    var html = '<article class="project">';
    if (p.name) {
      html += '<p class="project-name">' + esc(p.name) + (p.domain ? '<span class="project-domain"> · ' + esc(t(p.domain)) + '</span>' : '') + '</p>';
    }
    html += '<ul class="roles">';
    p.roles.forEach(function (r) {
      html += '<li><span class="role-title">' + esc(t(r.title)) + '</span><span class="role-period">' + esc(period(r.from, r.to, true)) + '</span></li>';
    });
    html += '</ul>';
    if (p.team) html += '<p class="team"><span>' + esc(ui.team) + ':</span> ' + esc(p.team) + '</p>';
    if (p.intro) html += '<p class="intro">' + esc(t(p.intro)) + '</p>';
    html += '<ul class="bullets">' + (p.bullets[lang] || p.bullets.en).map(function (b) { return '<li>' + esc(b) + '</li>'; }).join('') + '</ul>';
    html += renderTags(p.tags);
    html += '</article>';
    return html;
  }

  function renderMain() {
    var ui = UI[lang];
    var html = '';

    html += '<section class="section" id="about">' + sectionHead('01', ui.about);
    html += '<p class="summary">' + esc(t(CV.summary)) + '</p>';
    html += '<ul class="highlights">';
    CV.highlights.forEach(function (h) {
      html += '<li><span class="hl-value">' + esc(h.value) + '</span><span class="hl-label">' + esc(t(h.label)) + '</span></li>';
    });
    html += '</ul></section>';

    html += '<section class="section" id="skills">' + sectionHead('02', ui.skills) + '<dl class="skills">';
    CV.skills.forEach(function (s) {
      html += '<div class="skill-row"><dt>' + esc(t(s.group)) + '</dt><dd>' + renderTags(s.items) + '</dd></div>';
    });
    html += '</dl></section>';

    html += '<section class="section" id="experience">' + sectionHead('03', ui.experience) + '<ol class="timeline">';
    CV.experience.forEach(function (job) {
      html += '<li class="job">';
      html += '<header class="job-head"><div><h3 class="company">' + esc(job.company) + '</h3>';
      html += '<p class="company-meta">' + [t(job.kind), t(job.country)].filter(Boolean).map(esc).join(' · ') + '</p></div>';
      html += '<p class="job-period">' + esc(period(job.from, job.to, false)) + '</p></header>';
      job.projects.forEach(function (p) { html += renderProject(p); });
      html += '</li>';
    });
    html += '</ol></section>';

    html += '<section class="section" id="courses">' + sectionHead('04', ui.courses) + '<ul class="courses">';
    CV.courses.forEach(function (c) {
      html += '<li><span class="course-year">' + esc(c.year) + '</span><span>' + esc(t(c.text)) + '</span></li>';
    });
    html += '</ul></section>';

    html += '<footer class="foot"><span>© ' + new Date().getFullYear() + ' ' + esc(t(CV.name)) + '</span></footer>';

    document.getElementById('main').innerHTML = html;
  }

  function storageGet(key) {
    try { return window.localStorage.getItem(key); } catch (e) { return null; }
  }
  function storageSet(key, value) {
    try { window.localStorage.setItem(key, value); } catch (e) { /* ignore */ }
  }

  function detectLang() {
    var fromUrl = new URLSearchParams(window.location.search).get('lang');
    if (LANGS.indexOf(fromUrl) !== -1) return fromUrl;
    var saved = storageGet('cv-lang');
    if (LANGS.indexOf(saved) !== -1) return saved;
    var nav = (navigator.languages && navigator.languages[0]) || navigator.language || 'en';
    return /^(ru|be|uk|kk)\b/i.test(nav) ? 'ru' : 'en';
  }

  function setLang(next, updateUrl) {
    lang = next;
    var ui = UI[lang];
    document.documentElement.lang = lang;
    document.documentElement.setAttribute('data-lang', lang);
    document.title = ui.docTitle;
    var meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute('content', ui.docDescription);

    renderSide();
    renderMain();

    document.querySelectorAll('[data-set-lang]').forEach(function (btn) {
      var active = btn.getAttribute('data-set-lang') === lang;
      btn.classList.toggle('is-active', active);
      btn.setAttribute('aria-pressed', active ? 'true' : 'false');
    });

    if (updateUrl) {
      storageSet('cv-lang', lang);
      var url = new URL(window.location.href);
      url.searchParams.set('lang', lang);
      window.history.replaceState(null, '', url);
    }
  }

  document.addEventListener('click', function (e) {
    var langBtn = e.target.closest('[data-set-lang]');
    if (langBtn) { setLang(langBtn.getAttribute('data-set-lang'), true); return; }
    if (e.target.closest('[data-print]')) window.print();
  });

  setLang(detectLang(), false);
})();
