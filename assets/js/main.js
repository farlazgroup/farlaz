/* ==========================================================================
   Farlaz — Lógica del sitio
   ========================================================================== */

(function () {
  "use strict";

  var STORE = "farlaz-lang";
  var DICT  = window.FARLAZ_I18N || {};
  var lang  = "es";

  /* --- Idioma ---------------------------------------------------------- */

  function detectLang() {
    var url = new URLSearchParams(window.location.search).get("lang");
    if (url && DICT[url]) return url;

    var saved;
    try { saved = localStorage.getItem(STORE); } catch (e) { saved = null; }
    if (saved && DICT[saved]) return saved;

    var nav = (navigator.language || "es").slice(0, 2).toLowerCase();
    return DICT[nav] ? nav : "es";
  }

  function t(key) {
    var pack = DICT[lang] || {};
    return Object.prototype.hasOwnProperty.call(pack, key) ? pack[key] : key;
  }

  function applyLang(next) {
    lang = DICT[next] ? next : "es";
    try { localStorage.setItem(STORE, lang); } catch (e) {}

    document.documentElement.setAttribute("lang", lang);

    // Texto
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      el.textContent = t(el.getAttribute("data-i18n"));
    });

    // Atributos: data-i18n-attr="placeholder:clave, aria-label:otra"
    document.querySelectorAll("[data-i18n-attr]").forEach(function (el) {
      el.getAttribute("data-i18n-attr").split(",").forEach(function (pair) {
        var bits = pair.split(":");
        if (bits.length === 2) {
          el.setAttribute(bits[0].trim(), t(bits[1].trim()));
        }
      });
    });

    // Título y descripción
    var titleKey = document.documentElement.getAttribute("data-title-key");
    if (titleKey) document.title = t(titleKey);

    var descKey = document.documentElement.getAttribute("data-desc-key");
    var descTag = document.querySelector('meta[name="description"]');
    if (descKey && descTag) descTag.setAttribute("content", t(descKey));

    // Botones del selector
    document.querySelectorAll(".lang__btn").forEach(function (btn) {
      var on = btn.getAttribute("data-lang") === lang;
      btn.classList.toggle("is-active", on);
      btn.setAttribute("aria-pressed", on ? "true" : "false");
    });

    renderPosts();
  }

  /* --- Navegación ------------------------------------------------------- */

  function initNav() {
    var nav = document.querySelector(".nav");
    var toggle = document.querySelector(".nav__toggle");
    var links = document.querySelector(".nav__links");

    if (nav) {
      var onScroll = function () {
        nav.classList.toggle("is-stuck", window.scrollY > 8);
      };
      window.addEventListener("scroll", onScroll, { passive: true });
      onScroll();
    }

    if (toggle && links) {
      toggle.addEventListener("click", function () {
        var open = links.classList.toggle("is-open");
        toggle.setAttribute("aria-expanded", open ? "true" : "false");
      });
      links.querySelectorAll("a").forEach(function (a) {
        a.addEventListener("click", function () {
          links.classList.remove("is-open");
          toggle.setAttribute("aria-expanded", "false");
        });
      });
    }

    // Marca el enlace de la página actual
    var here = window.location.pathname.split("/").pop() || "index.html";
    document.querySelectorAll(".nav__link").forEach(function (a) {
      if (a.getAttribute("href") === here) a.classList.add("is-active");
    });
  }

  /* --- Artículos --------------------------------------------------------- */

  function fmtDate(iso) {
    var d = new Date(iso + "T00:00:00");
    return d.toLocaleDateString(lang === "es" ? "es-ES" : "en-GB", {
      day: "2-digit", month: "short", year: "numeric"
    }).replace(".", "");
  }

  function catLabel(cat) {
    return t("in.filter." + cat);
  }

  function postCard(p) {
    var loc = p[lang] || p.es;
    var mins = lang === "es" ? p.minutes + " min lectura" : p.minutes + " min read";

    var a = document.createElement("a");
    a.className = "post reveal";
    a.href = "article.html?a=" + p.slug;
    a.setAttribute("data-cat", p.cat);
    a.innerHTML =
      '<div class="post__thumb"></div>' +
      '<div class="post__body">' +
        '<div class="post__meta">' +
          '<span class="tag">' + catLabel(p.cat) + "</span>" +
          "<span>" + fmtDate(p.date) + "</span>" +
          "<span>" + mins + "</span>" +
        "</div>" +
        '<h3 class="post__title"></h3>' +
        '<p class="post__excerpt"></p>' +
        '<div class="post__foot"><span class="link-arrow">' +
          t("posts.read") + ' <span aria-hidden="true">&rarr;</span>' +
        "</span></div>" +
      "</div>";

    a.querySelector(".post__title").textContent = loc.title;
    a.querySelector(".post__excerpt").textContent = loc.excerpt;
    return a;
  }

  function renderPosts() {
    var posts = window.FARLAZ_POSTS || [];

    document.querySelectorAll("[data-posts]").forEach(function (host) {
      var limit = parseInt(host.getAttribute("data-posts"), 10);
      var list = isNaN(limit) ? posts : posts.slice(0, limit);

      host.innerHTML = "";
      list.forEach(function (p) { host.appendChild(postCard(p)); });

      revealIn(host);
    });

    applyFilter();
  }

  var activeCat = "all";

  function applyFilter() {
    var empty = document.querySelector("[data-empty]");
    var shown = 0;

    document.querySelectorAll("[data-posts] .post").forEach(function (el) {
      var ok = activeCat === "all" || el.getAttribute("data-cat") === activeCat;
      el.style.display = ok ? "" : "none";
      if (ok) shown++;
    });

    if (empty) empty.hidden = shown > 0;
  }

  function initFilters() {
    var bar = document.querySelector("[data-filters]");
    if (!bar) return;

    bar.addEventListener("click", function (e) {
      var btn = e.target.closest("[data-cat-filter]");
      if (!btn) return;

      activeCat = btn.getAttribute("data-cat-filter");
      bar.querySelectorAll("[data-cat-filter]").forEach(function (b) {
        b.classList.toggle("btn--primary", b === btn);
        b.classList.toggle("btn--ghost", b !== btn);
      });
      applyFilter();
    });
  }

  /* --- Acordeón ------------------------------------------------------------ */

  function initFaq() {
    document.querySelectorAll(".faq__q").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var item = btn.closest(".faq__item");
        var open = item.classList.toggle("is-open");
        btn.setAttribute("aria-expanded", open ? "true" : "false");
      });
    });
  }

  /* --- Animación de entrada -------------------------------------------------- */

  var io = null;

  function revealIn(scope) {
    var nodes = (scope || document).querySelectorAll(".reveal:not(.is-in)");
    if (!("IntersectionObserver" in window)) {
      nodes.forEach(function (n) { n.classList.add("is-in"); });
      return;
    }
    if (!io) {
      io = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-in");
            io.unobserve(entry.target);
          }
        });
      }, { rootMargin: "0px 0px -8% 0px", threshold: 0.05 });
    }
    nodes.forEach(function (n, i) {
      n.style.transitionDelay = Math.min(i % 4, 3) * 70 + "ms";
      io.observe(n);
    });
  }

  /* --- Formularios ------------------------------------------------------------- */

  function initForms() {
    document.querySelectorAll("form[data-demo]").forEach(function (form) {
      form.addEventListener("submit", function (e) {
        e.preventDefault();
        var btn = form.querySelector('[type="submit"]');
        if (!btn) return;

        var was = btn.textContent;
        btn.textContent = lang === "es" ? "Configura el destino ↗" : "Set the endpoint ↗";
        btn.disabled = true;
        setTimeout(function () {
          btn.textContent = was;
          btn.disabled = false;
        }, 2400);
      });
    });
  }

  /* --- Año en curso -------------------------------------------------------------- */

  function initYear() {
    var y = new Date().getFullYear();
    document.querySelectorAll("[data-year]").forEach(function (el) {
      el.textContent = el.textContent.replace(/20\d{2}/, y);
    });
  }

  /* --- Contenido del CMS ------------------------------------------------------------ */
  /* Si existe content/posts.json (lo escribe el panel de Decap), tiene prioridad.
     Si no —por ejemplo al abrir el sitio con doble clic desde el escritorio—
     se usa la lista incluida en assets/js/posts.js. */

  function loadContent() {
    if (!window.fetch || window.location.protocol === "file:") {
      return Promise.resolve();
    }
    return fetch("content/posts.json", { cache: "no-cache" })
      .then(function (r) { return r.ok ? r.json() : null; })
      .then(function (data) {
        if (data && Array.isArray(data.posts) && data.posts.length) {
          window.FARLAZ_POSTS = data.posts;
        }
      })
      .catch(function () { /* sin conexión o sin archivo: seguimos con el fallback */ });
  }

  /* --- Aviso de convocatoria ------------------------------------------------------- */

  var PROMO_KEY   = "farlaz-promo-junta-2026";  // cambia el sufijo para volver a mostrarlo
  var PROMO_PAGE  = "unete.html";
  var PROMO_DELAY = 5000;

  function promoVisto() {
    try { return localStorage.getItem(PROMO_KEY) === "1"; } catch (e) { return false; }
  }

  function promoCerrar(box) {
    try { localStorage.setItem(PROMO_KEY, "1"); } catch (e) {}
    box.classList.remove("is-in");
    setTimeout(function () { box.remove(); }, 400);
  }

  function initPromo() {
    // No molestar en la propia página de la convocatoria
    if (location.pathname.indexOf("unete") !== -1) return;
    if (promoVisto()) return;

    var box = document.createElement("aside");
    box.className = "promo";
    box.setAttribute("role", "complementary");
    box.setAttribute("aria-label", "Convocatoria");
    box.innerHTML =
      '<button class="promo__close" type="button" aria-label="Cerrar" ' +
      'data-i18n-attr="aria-label:pm.close">&#215;</button>' +
      '<span class="promo__tag" data-i18n="pm.tag">Convocatoria abierta</span>' +
      '<h3 data-i18n="pm.h">Estamos formando la junta directiva</h3>' +
      '<p data-i18n="pm.p">Nueve posiciones abiertas para el periodo 2026-2027.</p>' +
      '<div class="promo__row">' +
      '<a class="btn btn--primary btn--sm" href="' + PROMO_PAGE + '" data-i18n="pm.cta">Ver posiciones</a>' +
      '<button class="promo__later" type="button" data-i18n="pm.cta2">Ahora no</button>' +
      '</div>';

    document.body.appendChild(box);

    box.querySelector(".promo__close").addEventListener("click", function () { promoCerrar(box); });
    box.querySelector(".promo__later").addEventListener("click", function () { promoCerrar(box); });
    box.querySelector(".btn").addEventListener("click", function () {
      try { localStorage.setItem(PROMO_KEY, "1"); } catch (e) {}
    });

    setTimeout(function () { box.classList.add("is-in"); }, PROMO_DELAY);
  }

  /* --- Arranque -------------------------------------------------------------------- */

  function boot() {
    lang = detectLang();

    initNav();
    initFilters();
    initFaq();
    initForms();
    initPromo();

    document.querySelectorAll(".lang__btn").forEach(function (btn) {
      btn.addEventListener("click", function () {
        applyLang(btn.getAttribute("data-lang"));
      });
    });

    applyLang(lang);
    initYear();
    revealIn(document);

    loadContent().then(renderPosts);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})();
