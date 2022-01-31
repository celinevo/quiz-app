export function navbar() {
  const allButtons = document.querySelectorAll('[data-nav]');
  const allPages = document.querySelectorAll('[data-page]');

  allButtons.forEach(button => {
    button.addEventListener('click', event => {
      allPages.forEach(page => {
        page.classList.add('hidden');
      });
      const buttonAttribute = event.currentTarget.getAttribute('data-nav');
      const currentPage = document.querySelector(
        `[data-page="${buttonAttribute}"]`
      );
      currentPage.classList.remove('hidden');
    });
  });

  /*const buttonHome = document.querySelector('[data-nav="home"]');
  const buttonBookmark = document.querySelector('[data-nav="bookmark"]');
  const buttonCreate = document.querySelector('[data-nav="create"]');
  const buttonProfil = document.querySelector('[data-nav="profil"]');

  const pageHome = document.querySelector('[data-page="home"]');
  const pageBookmark = document.querySelector('[data-page="bookmark"]');
  const pageCreate = document.querySelector('[data-page="create"]');
  const pageProfil = document.querySelector('[data-page="profil"]');

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
  */
}
