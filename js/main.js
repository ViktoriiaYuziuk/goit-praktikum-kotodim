const slider = new Siema({
  selector: ".hero-list",
  loop: true,
  duration: 500,
  easing: "cubic-bezier(.17,.67,.32,1.34)",
});

document.querySelector(".prev").addEventListener("click", () => slider.prev());
document.querySelector(".next").addEventListener("click", () => slider.next());

const lightBox = new SimpleLightbox(".gallery a", {});
