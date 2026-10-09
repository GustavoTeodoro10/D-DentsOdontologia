/* D+Dents | JS mínimo, sem dependências.
   1) cabeçalho ganha sombra ao rolar   2) menu móvel   3) revelação ao rolar
   4) carrossel de resultados           5) GoatCounter nos CTAs (um único listener) */
(function () {
  'use strict';
  window.__ddReady = true; /* avisa o fallback do <head> que o script carregou */

  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* 1) Cabeçalho: observa uma "sentinela" no topo (sem listener de scroll) */
  var header = document.querySelector('.site-header');
  var sentinel = document.getElementById('sentinel');
  if (header && sentinel && 'IntersectionObserver' in window) {
    new IntersectionObserver(function (entries) {
      header.classList.toggle('is-stuck', !entries[0].isIntersecting);
    }).observe(sentinel);
  }

  /* 2) Menu móvel */
  var menuBtn = document.getElementById('menu-btn');
  var menuPanel = document.getElementById('menu-panel');
  function setMenu(open) {
    if (!menuBtn || !menuPanel) return;
    menuBtn.setAttribute('aria-expanded', String(open));
    menuBtn.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
    menuBtn.firstElementChild.className = open ? 'ph ph-x' : 'ph ph-list';
    menuPanel.classList.toggle('is-open', open);
  }
  if (menuBtn && menuPanel) {
    menuBtn.addEventListener('click', function () {
      setMenu(menuBtn.getAttribute('aria-expanded') !== 'true');
    });
    menuPanel.addEventListener('click', function (e) {
      if (e.target.closest('a')) setMenu(false);
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && menuBtn.getAttribute('aria-expanded') === 'true') {
        setMenu(false);
        menuBtn.focus();
      }
    });
    window.matchMedia('(min-width: 1024px)').addEventListener('change', function (e) {
      if (e.matches) setMenu(false);
    });
  }

  /* 3) Revelação ao rolar (o CSS só esconde os itens quando o JS está ativo).
        Itens de [data-stagger] entram em cascata curta (60ms entre eles, no máximo 300ms).
        Com movimento reduzido o CSS troca o deslocamento por um fade simples. */
  document.querySelectorAll('[data-stagger]').forEach(function (group) {
    Array.prototype.forEach.call(group.children, function (child, i) {
      child.classList.add('reveal');
      child.style.setProperty('--d', Math.min(i * 60, 300) + 'ms');
    });
  });
  var items = document.querySelectorAll('.reveal');
  if (!('IntersectionObserver' in window)) {
    items.forEach(function (el) { el.classList.add('is-in'); });
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-in');
          io.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
    items.forEach(function (el) { io.observe(el); });
  }

  /* 4) Carrossel de resultados
        Com movimento liberado: rolagem automática lenta e contínua (CSS), que pausa com o mouse em cima
        (a imagem também é ampliada), com foco no teclado, ao tocar e no botão de pausa.
        Com movimento reduzido: faixa rolável com setas, sem rolagem automática. */
  var carousel = document.querySelector('.carousel');
  var viewport = document.getElementById('viewport');
  var track = document.getElementById('track');
  var prev = document.getElementById('prev');
  var next = document.getElementById('next');
  var pauseBtn = document.getElementById('pause');
  if (carousel && viewport && track) {
    var slides = track.querySelectorAll('.slide');

    if (!reduceMotion) {
      /* duplica os slides (cópias escondidas dos leitores de tela) para o laço contínuo */
      Array.prototype.forEach.call(slides, function (s) {
        var clone = s.cloneNode(true);
        clone.setAttribute('aria-hidden', 'true');
        clone.querySelectorAll('img').forEach(function (img) { img.setAttribute('alt', ''); img.removeAttribute('loading'); });
        track.appendChild(clone);
      });
      viewport.removeAttribute('tabindex');
      carousel.classList.add('is-marquee');

      /* botão de pausa (exigência de acessibilidade para movimento automático) */
      if (pauseBtn) {
        pauseBtn.addEventListener('click', function () {
          var paused = carousel.classList.toggle('is-paused');
          pauseBtn.setAttribute('aria-pressed', String(paused));
          pauseBtn.setAttribute('aria-label', paused ? 'Retomar rolagem automática' : 'Pausar rolagem automática');
          pauseBtn.firstElementChild.className = paused ? 'ph ph-play' : 'ph ph-pause';
        });
      }

      /* toque: segurar a imagem pausa; soltar retoma */
      viewport.addEventListener('pointerdown', function (e) {
        if (e.pointerType !== 'mouse') carousel.classList.add('is-touching');
      });
      ['pointerup', 'pointercancel', 'pointerleave'].forEach(function (ev) {
        viewport.addEventListener(ev, function () { carousel.classList.remove('is-touching'); });
      });

      /* economiza bateria: pausa quando a seção está fora da tela */
      if ('IntersectionObserver' in window) {
        new IntersectionObserver(function (entries) {
          carousel.classList.toggle('is-offscreen', !entries[0].isIntersecting);
        }).observe(carousel);
      }
    } else if (prev && next) {
      var step = function () {
        var s = slides[0];
        return s ? s.getBoundingClientRect().width + 20 : 300;
      };
      prev.addEventListener('click', function () { viewport.scrollBy({ left: -step(), behavior: 'auto' }); });
      next.addEventListener('click', function () { viewport.scrollBy({ left: step(), behavior: 'auto' }); });
      if ('IntersectionObserver' in window && slides.length > 1) {
        var edge = new IntersectionObserver(function (entries) {
          entries.forEach(function (entry) {
            if (entry.target === slides[0]) prev.disabled = entry.isIntersecting;
            if (entry.target === slides[slides.length - 1]) next.disabled = entry.isIntersecting;
          });
        }, { root: viewport, threshold: 0.95 });
        edge.observe(slides[0]);
        edge.observe(slides[slides.length - 1]);
      }
      viewport.addEventListener('keydown', function (e) {
        if (e.key === 'ArrowRight') { e.preventDefault(); next.click(); }
        if (e.key === 'ArrowLeft') { e.preventDefault(); prev.click(); }
      });
    }
  }

  /* 5) GoatCounter: um único listener para todos os [data-gc-event].
        O link do WhatsApp funciona mesmo se o rastreio falhar (adblock). */
  document.addEventListener('click', function (e) {
    var el = e.target.closest('[data-gc-event]');
    if (!el) return;
    var name = el.getAttribute('data-gc-event');
    try {
      if (window.goatcounter && window.goatcounter.count) {
        window.goatcounter.count({ path: name, title: name, event: true });
      }
    } catch (err) { /* o rastreio nunca deve bloquear o link */ }
  });
})();
