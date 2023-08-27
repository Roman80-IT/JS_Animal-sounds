//* Обробник події для натискання клавіш
window.addEventListener("keydown", (e) => {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

  if (!audio) return; //* Якщо немає аудіо-елемента для цього коду клавіші, виходимо

  audio.currentTime = 0; //* Перемотувати аудіо в початок
  audio.play(); //* Відтворити аудіо

  key.classList.add("playing"); //* Додати клас "playing" до кнопки для анімації
});

//* Обробник події для натискання миші на кнопку
window.addEventListener("mousedown", (e) => {
  const letter = e.srcElement.outerText;
  const keyCodes = {
    //* Мапа для відображення літер в коди клавіш
    A: "65",
    // ...
    Z: "90",
  };
  const keyCode = keyCodes[letter]; //* Отримати код клавіші за літерою
  const audio = document.querySelector(`audio[data-key="${keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${keyCode}"]`);

  if (!audio) return; //* Якщо немає аудіо-елемента для цього коду клавіші, виходимо

  audio.currentTime = 0; //* Перемотувати аудіо в початок
  audio.play(); //* Відтворити аудіо

  key.classList.add("playing"); //* Додати клас "playing" до кнопки для анімації
});

//* Обробник події завершення анімації на кнопці
const keys = document.querySelectorAll(".key");
keys.forEach((key) =>
  key.addEventListener("transitionend", function (e) {
    if (e.propertyName !== "transform") return; //* Якщо властивість не є "transform", виходимо

    this.classList.remove("playing"); //* Видалити клас "playing" для зупинки анімації
  })
);
