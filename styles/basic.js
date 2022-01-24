const bookmarkElement = document.querySelector('[data-js="bookmark-clicked"]');

bookmarkElement.addEventListener("click", () => {
  bookmarkElement.classList.toggle("card__bookmark--clicked");
});
