/* ************************************************ FORM FIELD COUNTER EVENTS *************************************************************** */

const form = document.querySelector('[data-js="form"]');
const submitButton = document.querySelector('[data-js="submitButton"]');
const questionInput = document.querySelector('[data-js="newQuestion"]');
const answerInput = document.querySelector('[data-js="newAnswer"]');
const tagInput = document.querySelector('[data-js="newTag"]');
const main = document.querySelector('[data-js="addPage"');

form.addEventListener("submit", (event) => {
  event.preventDefault();

  // --------  CREATE ELEMENTS AND ADD ATRIBUTES --------

  const newCard = document.createElement("section");
  newCard.classList.add("card");

  const newBookmarkButton = document.createElement("button");
  newBookmarkButton.classList.add("card__bookmark");
  newBookmarkButton.setAttribute("type", "image");
  newBookmarkButton.setAttribute("aria-label", "Add to Bookmarks");

  const bookmarkImage = document.createElement("img");
  bookmarkImage.classList.add("card__bookmark__img");
  bookmarkImage.setAttribute("src", "./assets/bookmark.png");
  bookmarkImage.setAttribute("alt", "bookmark");

  const cardQuestion = document.createElement("h3");
  cardQuestion.classList.add("card__question");
  cardQuestion.textContent = questionInput.value;

  const cardAnswer = document.createElement("p");
  cardAnswer.classList.add("card__answer");
  cardAnswer.textContent = answerInput.value;

  const buttonShowAnswer = document.createElement("button");
  buttonShowAnswer.classList.add("card__button");
  buttonShowAnswer.setAttribute("type", "button");
  buttonShowAnswer.setAttribute("aria-label", "Show answer");
  buttonShowAnswer.textContent = "Show Answer";

  const tagList = document.createElement("ul");
  tagList.classList.add("card__tags");

  const tagElement = document.createElement("li");
  tagElement.classList.add("card__tags__tag");
  tagElement.textContent = tagInput.value;

  // --------  APPEND ELEMENTS TO ONE ANOTHER --------

  newBookmarkButton.append(bookmarkImage);
  tagList.append(tagElement);
  newCard.append(
    newBookmarkButton,
    cardQuestion,
    cardAnswer,
    buttonShowAnswer,
    tagList
  );

  main.append(newCard);

  form.reset();

  // --------  TOGGLE BOOKMARK --------

  newBookmarkButton.addEventListener("click", () => {
    if (!bookmarkImage.src.includes("bookmark_filled.png")) {
      bookmarkImage.setAttribute("src", "./assets/bookmark_filled.png");
    } else {
      bookmarkImage.setAttribute("src", "./assets/bookmark.png");
    }
  });

  // --------  TOGGLE ANSWER --------

  buttonShowAnswer.addEventListener("click", () => {
    if (!cardAnswer.classList.contains("card__answer--hidden")) {
      cardAnswer.classList.toggle("card__answer--hidden");
      buttonShowAnswer.innerHTML = "Show Answer";
    } else {
      cardAnswer.classList.toggle("card__answer--hidden");
      buttonShowAnswer.innerHTML = "Hide Answer";
    }
  });
});

/* ************************************************ FORM FIELD COUNTER EVENTS *************************************************************** 

- document.querySelectorAll('[data-js="remaining-characters"]')[0]; --> because we have 2 'data-js="remaining-characters"' so with [0/1/2/...] I can indicate which one to attribute the variable to. The other alternative would be changing the name of one of the 'data-js'.

- I was initially repeating "xxx.textContent = 150 - event.target.value.length" twice, one for questionCounter and another for answerCounter. But creating a function allows me to only state the expression once while attributing both elements to my function parameters.

***************************************************************************************************************************************** */

const questionCounter = document.querySelectorAll(
  '[data-js="remaining-characters"]'
)[0];
const answerCounter = document.querySelectorAll(
  '[data-js="remaining-characters"]'
)[1];

questionInput.addEventListener("input", (event) => {
  counting(questionCounter, event.target.value.length);
});

answerInput.addEventListener("input", (event) => {
  counting(answerCounter, event.target.value.length);
});

function counting(element, elementLength) {
  element.textContent = 150 - elementLength;
}
