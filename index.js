window.addEventListener("keydown", (e) => {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  if (!audio) return;
  audio.currentTime = 0;
  audio.play();
  key.classList.add("playing");
});

window.addEventListener("mousedown", (e) => {
  const letter = e.srcElement.outerText;
  const keyCodes = {
    A: "65",
    B: "66",
    C: "67",
    D: "68",
    E: "69",
    F: "70",
    G: "71",
    H: "72",
    I: "73",
    J: "74",
    K: "75",
    L: "76",
    M: "77",
    N: "78",
    O: "79",
    P: "80",
    R: "82",
    S: "83",
    T: "84",
    U: "85",
    V: "86",
    W: "87",
    Y: "89",
    Z: "90",
  };
  const keyCode = keyCodes[letter];
  const audio = document.querySelector(`audio[data-key="${keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${keyCode}"]`);
  if (!audio) return;
  audio.currentTime = 0;
  audio.play();
  key.classList.add("playing");
});

const keys = document.querySelectorAll(".key");
keys.forEach((key) =>
  key.addEventListener("transitionend", function (e) {
    if (e.propertyName !== "transform") return;
    this.classList.remove("playing");
  })
);
