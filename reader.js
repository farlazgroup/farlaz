/* ==========================================================================
   Farlaz — Lector de curso y artículos
   Depende de: i18n.js, main.js, course-*.js, articles-*.js, posts.js
   ========================================================================== */

(function () {
  "use strict";

  var PROGRESS = "farlaz-progress";

  function lang() {
    return document.documentElement.getAttribute("lang") === "en" ? "en" : "es";
  }
  function t(k) {
    var d = (window.FARLAZ_I18N || {})[lang()] || {};
    return Object.prototype.hasOwnProperty.call(d, k) ? d[k] : k;
  }
  function param(n) {
    return new URLSearchParams(window.location.search).get(n);
  }
  function el(tag, cls, html) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (html != null) e.innerHTML = html;
    return e;
  }

  /* --- Progreso guardado en el navegador ------------------------------- */

  function readProgress() {
    try { return JSON.parse(localStorage.getItem(PROGRESS)) || {}; }
    catch (e) { return {}; }
  }
  function markDone(moduleId, lessonId) {
    var p = readProgress();
    p[moduleId] = p[moduleId] || [];
    if (p[moduleId].indexOf(lessonId) === -1) p[moduleId].push(lessonId);
    try { localStorage.setItem(PROGRESS, JSON.stringify(p)); } catch (e) {}
  }
  function doneCount(moduleId) {
    return (readProgress()[moduleId] || []).length;
  }
  function isDone(moduleId, lessonId) {
    return (readProgress()[moduleId] || []).indexOf(lessonId) !== -1;
  }

  /* --- Renderizado de bloques ------------------------------------------ */

  function renderBlocks(blocks, host) {
    (blocks || []).forEach(function (b) {
      if (b.h)    return host.appendChild(el("h2", null, b.h));
      if (b.p)    return host.appendChild(el("p", null, b.p));

      if (b.ul) {
        var ul = el("ul");
        b.ul.forEach(function (li) { ul.appendChild(el("li", null, li)); });
        return host.appendChild(ul);
      }

      if (b.note) {
        var n = el("div", "notice");
        n.innerHTML =
          '<svg width="17" height="17" viewBox="0 0 17 17" fill="none" aria-hidden="true">' +
          '<circle cx="8.5" cy="8.5" r="6.8" stroke="currentColor" stroke-width="1.3"/>' +
          '<path d="M8.5 7.6V12M8.5 5.2v.9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>' +
          "<p>" + b.note + "</p>";
        return host.appendChild(n);
      }

      if (b.key) {
        var k = el("div", "keypoint");
        k.innerHTML = '<span class="keypoint__tag">' + t("rd.key") + "</span><p>" + b.key + "</p>";
        return host.appendChild(k);
      }

      if (b.table) {
        var wrap = el("div", "tablewrap");
        var tb = el("table", "data");
        var thead = el("thead"), tr = el("tr");
        b.table.head.forEach(function (h) { tr.appendChild(el("th", null, h)); });
        thead.appendChild(tr);
        var tbody = el("tbody");
        b.table.rows.forEach(function (row) {
          var r = el("tr");
          row.forEach(function (c) { r.appendChild(el("td", null, c)); });
          tbody.appendChild(r);
        });
        tb.appendChild(thead); tb.appendChild(tbody);
        wrap.appendChild(tb);
        return host.appendChild(wrap);
      }

      if (b.quiz) return host.appendChild(buildQuiz(b.quiz));
    });
  }

  function buildQuiz(q) {
    var box = el("div", "quiz");
    box.appendChild(el("span", "quiz__tag", t("rd.check")));
    box.appendChild(el("p", "quiz__q", q.q));

    var opts = el("div", "quiz__opts");
    var answered = false;

    q.options.forEach(function (text, i) {
      var btn = el("button", "quiz__opt", text);
      btn.type = "button";
      btn.addEventListener("click", function () {
        if (answered) return;
        answered = true;
        opts.querySelectorAll(".quiz__opt").forEach(function (b, j) {
          b.disabled = true;
          if (j === q.answer) b.classList.add("is-right");
          else if (j === i)   b.classList.add("is-wrong");
        });
        var fb = el("p", "quiz__explain", q.explain);
        box.appendChild(fb);
      });
      opts.appendChild(btn);
    });

    box.appendChild(opts);
    return box;
  }

  /* --- Índice del curso por niveles (learn.html) ------------------------- */

  function moduleCard(m) {
    var loc = m[lang()] || m.es;
    var total = m.lessons.length;
    var done = doneCount(m.id);
    var pct = total ? Math.round((done / total) * 100) : 0;
    var ready = total > 0;

    var a = el("a", "modcard reveal" + (ready ? "" : " is-soon"));
    a.href = ready ? "module.html?m=" + m.id : "learn.html#" + m.id;
    if (!ready) a.setAttribute("aria-disabled", "true");

    var topics = (loc.topics || []).map(function (x) {
      return '<li>' + x + "</li>";
    }).join("");

    a.innerHTML =
      '<div class="modcard__top">' +
        '<span class="modcard__num">' + m.num + "</span>" +
        '<span class="tag">' + (ready ? total + " " + t("rd.lessons") : t("rd.soon.tag")) + "</span>" +
      "</div>" +
      "<h3></h3>" +
      '<p class="modcard__tag"></p>' +
      '<ul class="modcard__topics">' + topics + "</ul>" +
      '<div class="modcard__foot">' +
        (ready
          ? '<div class="bar"><span style="width:' + pct + '%"></span></div>' +
            '<span class="modcard__meta">' + done + "/" + total + "</span>"
          : '<span class="modcard__meta">' + t("rd.soon.note") + "</span>") +
      "</div>";

    a.querySelector("h3").textContent = loc.title;
    a.querySelector(".modcard__tag").textContent = loc.tagline;
    return a;
  }

  function renderModuleIndex() {
    var host = document.querySelector("[data-modules]");
    if (!host) return;

    var mods = window.FARLAZ_COURSE || [];
    var levels = (window.FARLAZ_LEVELS || {})[lang()] || [];
    host.innerHTML = "";

    levels.forEach(function (lv) {
      var group = mods.filter(function (m) { return m.level === lv.n; });
      if (!group.length) return;

      var totalL = group.reduce(function (s, m) { return s + m.lessons.length; }, 0);
      var doneL  = group.reduce(function (s, m) { return s + doneCount(m.id); }, 0);

      var sec = el("section", "levelblock reveal");
      sec.id = "nivel-" + lv.n;
      sec.innerHTML =
        '<div class="levelhead">' +
          '<div class="levelhead__n">' + t("rd.level") + " " + lv.n + "</div>" +
          "<div><h2></h2><p></p></div>" +
          '<div class="levelhead__meta mono">' + doneL + "/" + totalL + " " + t("rd.lessons") + "</div>" +
        "</div>" +
        '<div class="grid grid--2 levelblock__grid"></div>';

      sec.querySelector("h2").textContent = lv.name;
      sec.querySelector(".levelhead p").textContent = lv.desc;

      var grid = sec.querySelector(".levelblock__grid");
      group.forEach(function (m) { grid.appendChild(moduleCard(m)); });
      host.appendChild(sec);
    });

    renderPremium();
  }

  /* --- Academia premium --------------------------------------------------- */

  function renderPremium() {
    var host = document.querySelector("[data-premium]");
    if (!host) return;
    var p = (window.FARLAZ_PREMIUM || {})[lang()];
    if (!p) return;

    host.innerHTML =
      '<div class="section-head">' +
        '<span class="eyebrow"></span><h2></h2>' +
        '<p class="lede" style="margin-top:16px"></p>' +
      "</div>" +
      '<div class="grid grid--4"></div>';

    host.querySelector(".eyebrow").textContent = p.tagline;
    host.querySelector("h2").textContent = p.title;
    host.querySelector(".lede").textContent = p.intro;

    var grid = host.querySelector(".grid");
    p.groups.forEach(function (g) {
      var c = el("div", "card");
      c.innerHTML = "<h3></h3><ul class='modcard__topics'>" +
        g.items.map(function (i) { return "<li>" + i + "</li>"; }).join("") + "</ul>";
      c.querySelector("h3").textContent = g.name;
      grid.appendChild(c);
    });
  }

  /* --- Página de módulo (module.html) ----------------------------------- */

  function renderModule() {
    var host = document.querySelector("[data-module]");
    if (!host) return;

    var mods = (window.FARLAZ_COURSE || []).filter(function (x) { return x.lessons.length; });
    var m = mods.filter(function (x) { return x.id === param("m"); })[0] || mods[0];
    if (!m) return;

    var L = lang();
    var loc = m[L] || m.es;
    var lessonId = param("l");
    var idx = 0;
    m.lessons.forEach(function (les, i) { if (les.id === lessonId) idx = i; });
    var lesson = m.lessons[idx];
    var lloc = lesson[L] || lesson.es;

    document.title = loc.title + " · " + lloc.title + " — Farlaz";

    /* Cabecera */
    var head = document.querySelector("[data-module-head]");
    if (head) {
      var lv = ((window.FARLAZ_LEVELS || {})[L] || []).filter(function (x) { return x.n === m.level; })[0];
      head.innerHTML =
        '<a class="crumb" href="learn.html">&larr; ' + t("rd.allcourse") + "</a>" +
        '<span class="eyebrow">' + t("rd.module") + " " + m.num +
          (lv ? " · " + t("rd.level") + " " + lv.n + " " + lv.name : "") + "</span>" +
        "<h1></h1><p class=\"lede\"></p>";
      head.querySelector("h1").textContent = loc.title;
      head.querySelector(".lede").textContent = loc.tagline;
    }

    /* Índice lateral */
    var side = document.querySelector("[data-lessons]");
    if (side) {
      side.innerHTML = "";
      side.appendChild(el("h4", "side__title", t("rd.contents")));
      var ol = el("ol", "side__list");
      m.lessons.forEach(function (les, i) {
        var ll = les[L] || les.es;
        var li = el("li");
        var a = el("a", i === idx ? "is-current" : "");
        a.href = "module.html?m=" + m.id + "&l=" + les.id;
        a.innerHTML =
          '<span class="side__n">' + (isDone(m.id, les.id) ? "✓" : (i + 1)) + "</span>" +
          "<span></span>";
        a.querySelector("span:last-child").textContent = ll.title;
        if (isDone(m.id, les.id)) a.classList.add("is-done");
        li.appendChild(a);
        ol.appendChild(li);
      });
      side.appendChild(ol);

      var out = el("div", "side__outcomes");
      out.appendChild(el("h4", "side__title", t("rd.outcomes")));
      var ul = el("ul");
      (loc.outcomes || []).forEach(function (o) { ul.appendChild(el("li", null, o)); });
      out.appendChild(ul);
      side.appendChild(out);
    }

    /* Contenido */
    host.innerHTML = "";
    var meta = el("div", "lesson__meta");
    meta.innerHTML =
      '<span class="mono">' + t("rd.lesson") + " " + (idx + 1) + "/" + m.lessons.length + "</span>" +
      "<span>" + lesson.minutes + " " + t("rd.min") + "</span>";
    host.appendChild(meta);
    host.appendChild(el("h1", "lesson__title", lloc.title));

    var body = el("div", "prose lesson__body");
    renderBlocks(lloc.body, body);
    host.appendChild(body);

    /* Navegación entre lecciones */
    markDone(m.id, lesson.id);

    var nav = el("div", "lessonnav");
    if (idx > 0) {
      var prev = el("a", "btn btn--ghost btn--sm", "← " + t("rd.prev"));
      prev.href = "module.html?m=" + m.id + "&l=" + m.lessons[idx - 1].id;
      nav.appendChild(prev);
    } else {
      nav.appendChild(el("span"));
    }
    if (idx < m.lessons.length - 1) {
      var next = el("a", "btn btn--primary btn--sm", t("rd.next") + " →");
      next.href = "module.html?m=" + m.id + "&l=" + m.lessons[idx + 1].id;
      nav.appendChild(next);
    } else {
      var back = el("a", "btn btn--primary btn--sm", t("rd.finish") + " →");
      back.href = "learn.html";
      nav.appendChild(back);
    }
    host.appendChild(nav);
  }

  /* --- Página de artículo (article.html) --------------------------------- */

  function renderArticle() {
    var host = document.querySelector("[data-article]");
    if (!host) return;

    var slug = param("a");
    var posts = window.FARLAZ_POSTS || [];
    var meta = posts.filter(function (p) { return p.slug === slug; })[0] || posts[0];
    var art = (window.FARLAZ_ARTICLES || {})[meta ? meta.slug : ""];
    if (!meta) return;

    var L = lang();
    var mloc = meta[L] || meta.es;
    var aloc = art ? (art[L] || art.es) : null;

    document.title = mloc.title + " — Farlaz";

    var head = document.querySelector("[data-article-head]");
    if (head) {
      var d = new Date(meta.date + "T00:00:00").toLocaleDateString(
        L === "es" ? "es-ES" : "en-GB",
        { day: "2-digit", month: "long", year: "numeric" }
      );
      head.innerHTML =
        '<div class="post__meta">' +
          '<span class="tag">' + t("in.filter." + meta.cat) + "</span>" +
          "<span>" + d + "</span>" +
          "<span>" + meta.minutes + " " + t("rd.min") + "</span>" +
        "</div><h1></h1><p class=\"lede\"></p>" +
        (aloc ? '<p class="byline mono">' + aloc.author + "</p>" : "");
      head.querySelector("h1").textContent = mloc.title;
      head.querySelector(".lede").textContent = mloc.excerpt;
    }

    host.innerHTML = "";
    if (aloc) {
      renderBlocks(aloc.body, host);
      var dis = el("div", "notice");
      dis.style.marginTop = "40px";
      dis.innerHTML =
        '<svg width="17" height="17" viewBox="0 0 17 17" fill="none" aria-hidden="true">' +
        '<circle cx="8.5" cy="8.5" r="6.8" stroke="currentColor" stroke-width="1.3"/>' +
        '<path d="M8.5 7.6V12M8.5 5.2v.9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>' +
        "<p>" + aloc.disclosure + "</p>";
      host.appendChild(dis);
    } else {
      host.appendChild(el("p", null, t("rd.soon")));
    }

    /* Siguiente lectura */
    var more = document.querySelector("[data-more]");
    if (more) {
      var others = posts.filter(function (p) { return p.slug !== meta.slug; }).slice(0, 3);
      more.innerHTML = "";
      others.forEach(function (p) {
        var pl = p[L] || p.es;
        var a = el("a", "post");
        a.href = "article.html?a=" + p.slug;
        a.innerHTML =
          '<div class="post__thumb"></div><div class="post__body">' +
          '<div class="post__meta"><span class="tag">' + t("in.filter." + p.cat) + "</span></div>" +
          '<h3 class="post__title"></h3></div>';
        a.querySelector(".post__title").textContent = pl.title;
        more.appendChild(a);
      });
    }
  }

  /* --- Arranque --------------------------------------------------------- */

  function run() {
    renderModuleIndex();
    renderModule();
    renderArticle();
  }

  // Se ejecuta al cargar y cada vez que main.js cambia el idioma
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", function () { setTimeout(run, 0); });
  } else {
    setTimeout(run, 0);
  }

  document.addEventListener("click", function (e) {
    if (e.target.closest(".lang__btn")) setTimeout(run, 30);
  });
})();
