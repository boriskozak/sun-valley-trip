// Sun Valley trip brief: countdown, drop slider, reveals, nav state.
(function () {
  // Countdown to departure day, Sat Jan 30, 2027 (Ketchum local).
  var el = document.getElementById('countdown');
  if (el) {
    var target = new Date('2027-01-30T00:00:00-07:00');
    var days = Math.ceil((target - new Date()) / 86400000);
    el.textContent = days > 0 ? days + ' days out' : (days === 0 ? 'Today' : 'We are there');
  }

  // Feel the drop: per-run vertical drives the day total at six runs.
  var range = document.getElementById('dropRange');
  var ft = document.getElementById('dropFt');
  var note = document.getElementById('dropNote');
  function fmt(n) { return n.toLocaleString('en-US'); }
  function updateDrop() {
    var v = parseInt(range.value, 10);
    ft.textContent = fmt(v);
    var total = fmt(v * 6);
    note.textContent = v <= 1400
      ? 'Gentle opener energy. Six at this size is roughly ' + total + ' feet on the day, and the legs will still work at dinner.'
      : (v >= 3100
        ? 'Full-send territory. Six at this size is roughly ' + total + ' feet on the day. The hot tub earns its keep tonight.'
        : 'That is a proper Baldy top-to-bottom, but in untouched backcountry. Six at this size is roughly ' + total + ' feet on the day.');
  }
  if (range) { range.addEventListener('input', updateDrop); updateDrop(); }

  // Reveal on scroll.
  var items = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -6% 0px' });
    items.forEach(function (i) { io.observe(i); });
  } else {
    items.forEach(function (i) { i.classList.add('in'); });
  }

  // Nav gains a paper background after the hero top.
  var nav = document.querySelector('.nav');
  function onScroll() { nav.classList.toggle('scrolled', window.scrollY > 40); }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
})();
