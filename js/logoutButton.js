export function logoutButton() {
  const logoutButton = document.querySelector('[data-js="user-logout"]');
  const userProfil = document.querySelector('[data-js="user-profil"]');
  const userLogoutText = document.querySelector('[data-js="user-logout-text"]');

  const textLogin = 'Login';
  const textLogout = 'Logout';

  logoutButton?.addEventListener('click', () => {
    if (logoutButton.textContent === 'Login') {
      logoutButton.textContent = 'Logout';
      userProfil.classList.remove('user-profil--hidden');
      userLogoutText.classList.add('user-logout-text--hidden');
    } else {
      logoutButton.textContent = 'Login';
      userProfil.classList.add('user-profil--hidden');
      alert('Already gone? Hope you come back soon!');
    }
  });
}
