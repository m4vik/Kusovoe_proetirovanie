let containers = document.querySelector(".containers");
let nav = document.querySelector(".nav");

containers.addEventListener("click", () => {
  containers.classList.toggle("change");
  if (!nav.classList.contains("active")) {
    nav.classList.add("active");
    document.body.style.overflow = "hidden";
  } else {
    nav.classList.remove("active");
    document.body.style.overflow = "visible";
  }
});
