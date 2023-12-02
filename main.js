const sound = [...document.querySelectorAll(".sound")];
const clap = new Audio("assets/clap.wav");
const hihat = new Audio("assets/hihat.wav");
const kick = new Audio("assets/kick.wav");
const openhihat = new Audio("assets/openhihat.wav");
const snare = new Audio("assets/snare.wav");
const transitionEnd = 70;

document.addEventListener("keydown", function (e) {
  let audio;

  switch (e.keyCode) {
    case 65:
      audio = clap.cloneNode();
      sound[0].classList.add("playing");
      setTimeout(() => {
        sound[0].classList.remove("playing");
      }, transitionEnd);
      break;
    case 83:
      audio = hihat.cloneNode();
      sound[1].classList.add("playing");
      setTimeout(() => {
        sound[1].classList.remove("playing");
      }, transitionEnd);
      break;
    case 68:
      audio = kick.cloneNode();
      sound[2].classList.add("playing");
      setTimeout(() => {
        sound[2].classList.remove("playing");
      }, transitionEnd);
      break;
    case 70:
      audio = openhihat.cloneNode();
      sound[3].classList.add("playing");
      setTimeout(() => {
        sound[3].classList.remove("playing");
      }, transitionEnd);
      break;
    case 71:
      audio = snare.cloneNode();
      sound[4].classList.add("playing");
      setTimeout(() => {
        sound[4].classList.remove("playing");
      }, transitionEnd);
      break;
    default:
      return;
  }

  if (audio) {
    audio.currentTime = 0;
  }
  audio.play();
});
