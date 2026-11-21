/* Lokal Pilipinas theme scripts: product gallery swap and auto-submitting sort select. */
(function () {
  document.addEventListener('click', function (e) {
    var btn = e.target.closest('.thumbs button');
    if (!btn) return;
    var main = document.getElementById('gallery-main-img');
    if (main && btn.dataset.full) {
      main.removeAttribute('srcset');
      main.src = btn.dataset.full;
    }
  });
  document.addEventListener('change', function (e) {
    if (e.target.matches('[data-autosubmit]') && e.target.form) e.target.form.submit();
  });
})();
