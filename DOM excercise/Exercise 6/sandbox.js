const element = document.querySelector("#element");

const toggleColor = (isEntering) => {
  if (isEntering) {
    element.style.background = "orange";
  } else {
    element.style.background = "green";
  }
};

element.addEventListener("mouseenter", () => {
  toggleColor((isEntering = true));
});

element.addEventListener("mouseleave", () => {
  toggleColor((isEntering = false));
});
