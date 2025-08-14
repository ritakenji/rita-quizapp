/* ************************************************  TOGGLE BOOKMARK

- first tried '.checked' on 'bookmarkButton' variable (on addEventListener) but this button is not the check type so decided to do it another way

************************************************************************************************************************************************ */

const bookmarkButton = document.querySelector('[data-js="cardBookmark"]');
const imageButton = document.querySelector('[data-js="imgCardBookmark"]');

bookmarkButton.addEventListener("click", () => {
  if (!imageButton.src.includes("bookmark_filled.png")) {
    imageButton.setAttribute("src", "./assets/bookmark_filled.png");
  } else {
    imageButton.setAttribute("src", "./assets/bookmark.png");
  }
});

/* ************************************************  TOGGLE ANSWER ***************************************************************************** */

const answer = document.querySelector('[data-js="answer"]');
const cardButton = document.querySelector('[data-js="cardButton"]');

cardButton.addEventListener("click", () => {
  if (!answer.classList.contains("card__answer--hidden")) {
    answer.classList.toggle("card__answer--hidden");
    cardButton.innerHTML = "Show Answer";
  } else {
    answer.classList.toggle("card__answer--hidden");
    cardButton.innerHTML = "Hide Answer";
  }
});
