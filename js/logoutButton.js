export function logoutButton() {
  const logoutButton = document.querySelector('[data-js="user-logout"]');

  const textLogin = 'Login';
  const textLogout = 'Logout';

  logoutButton?.addEventListener('click', () => {
    if (logoutButton.textContent === 'Login') {
      logoutButton.textContent = 'Logout';
    } else {
      logoutButton.textContent = 'Login';
    }
  });
}
