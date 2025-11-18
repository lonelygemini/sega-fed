document.addEventListener('DOMContentLoaded', function () {
  const btn = document.getElementById('theme-toggle');
  const body = document.body;

  function applyTheme(theme) {
    if (theme === 'light') {
      body.setAttribute('data-theme', 'light');
      btn.textContent = 'Dark mode';
      btn.setAttribute('aria-label', 'Schakel naar donkere modus');
      btn.setAttribute('aria-pressed', 'false');
    } else {
      body.setAttribute('data-theme', 'dark');
      btn.textContent = 'Light mode';
      btn.setAttribute('aria-label', 'Schakel naar lichte modus');
      btn.setAttribute('aria-pressed', 'true');
    }
  }

  // Start met systeemvoorkeur
  const prefersDark = window.matchMedia &&
    window.matchMedia('(prefers-color-scheme: dark)').matches;

  let currentTheme = prefersDark ? 'dark' : 'light';
  applyTheme(currentTheme);

  btn.addEventListener('click', function () {
    currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
    applyTheme(currentTheme);
  });
});