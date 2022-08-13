const selectBeep = document.querySelector("#select");
const confirmBeep = document.querySelector("#confirm");

const nextButton = document.querySelector("#next");
let value = 0;
let correctValue = 2;

Array.from(document.querySelectorAll("main button")).forEach((button, i) => {
  button.addEventListener("click", () => {
    selectBeep.play();
    value = i;

    nextButton.removeAttribute("disabled");
    Array.from(document.querySelectorAll(".buttonSelected")).forEach((b) =>
    b.classList.remove("buttonSelected"));


    button.classList.add("buttonSelected");
  });
});

document.querySelector("#start").addEventListener("click", () => {
  confirmBeep.play();

  document.querySelector("#page1").classList.add("up");
  document.querySelector("#page2").classList.remove("none");

  setTimeout(() => document.querySelector("#page2").classList.remove("down"), 1);

  setTimeout(() => document.querySelector("#page1").classList.add("none"), 200);
});

nextButton.addEventListener("click", () => {
  confirmBeep.play();

  if (value == correctValue) {
    document.querySelector("#iq").innerText = "∞";
    document.querySelector("#percentile").innerText = "100";
    document.querySelector("#perfectText").innerText = "Perfect Nerd";
    document.querySelector(".finish").classList.add("success");
  } else {
    document.querySelector(".finish").classList.add("fail");
  }
  document.querySelector("#page2").classList.add("up");
  document.querySelector("#page3").classList.remove("none");

  setTimeout(() => document.querySelector("#page3").classList.remove("down"), 1);

  setTimeout(() => {
    document.querySelector("#page2").classList.add("none");
    document.querySelector(".finish").classList.add("start");

    setTimeout(() => {
      const end = Date.now() + 2 * 1000;

      (function frame() {
        confetti({
          particleCount: 6,
          angle: 60,
          spread: 55,
          origin: { x: 0 } });


        confetti({
          particleCount: 6,
          angle: 120,
          spread: 55,
          origin: { x: 1 } });


        if (Date.now() < end) {
          requestAnimationFrame(frame);
        }
      })();
    }, 1700);

    setTimeout(
    () => document.querySelector(".invisible").classList.remove("invisible"),
    3300);

  }, 200);
});