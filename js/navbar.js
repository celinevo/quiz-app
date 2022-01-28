export function navbar() {
  const buttonHome = document.querySelector('[data-js="home"]');
  const buttonBookmark = document.querySelector('[data-js="bookmark"]');
  const buttonCreate = document.querySelector('[data-js="create"]');
  const buttonProfil = document.querySelector('[data-js="profil"]');

  const pageHome = document.querySelector('[data-js="homepage"]');
  const pageBookmark = document.querySelector('[data-js="bookmarkpage"]');
  const pageCreate = document.querySelector('[data-js="createpage"]');
  const pageProfil = document.querySelector('[data-js="profilpage"]');

  buttonHome?.addEventListener('click', () => {
    pageHome.classList.remove('hidden');
    pageBookmark.classList.add('hidden');
    pageCreate.classList.add('hidden');
    pageProfil.classList.add('hidden');

    buttonHome.classList.add('footer__button--active');
    buttonBookmark.classList.remove('footer__button--active');
    buttonCreate.classList.remove('footer__button--active');
    buttonProfil.classList.remove('footer__button--active');
  });

  buttonBookmark?.addEventListener('click', () => {
    pageBookmark.classList.remove('hidden');
    pageHome.classList.add('hidden');
    pageCreate.classList.add('hidden');
    pageProfil.classList.add('hidden');

    buttonBookmark.classList.add('footer__button--active');
    buttonHome.classList.remove('footer__button--active');
    buttonCreate.classList.remove('footer__button--active');
    buttonProfil.classList.remove('footer__button--active');
  });

  buttonCreate?.addEventListener('click', () => {
    pageCreate.classList.remove('hidden');
    pageBookmark.classList.add('hidden');
    pageHome.classList.add('hidden');
    pageProfil.classList.add('hidden');

    buttonCreate.classList.add('footer__button--active');
    buttonBookmark.classList.remove('footer__button--active');
    buttonHome.classList.remove('footer__button--active');
    buttonProfil.classList.remove('footer__button--active');
  });

  buttonProfil?.addEventListener('click', () => {
    pageProfil.classList.remove('hidden');
    pageBookmark.classList.add('hidden');
    pageCreate.classList.add('hidden');
    pageHome.classList.add('hidden');

    buttonProfil.classList.add('footer__button--active');
    buttonBookmark.classList.remove('footer__button--active');
    buttonCreate.classList.remove('footer__button--active');
    buttonHome.classList.remove('footer__button--active');
  });
}
