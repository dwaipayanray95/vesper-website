// Vesper Cine — scroll reveals and before/after slider
document.documentElement.classList.add("js");

(function () {
  var items = document.querySelectorAll(".reveal, .pipeline");
  if (!("IntersectionObserver" in window)) {
    items.forEach(function (el) { el.classList.add("is-in"); });
    return;
  }
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) { e.target.classList.add("is-in"); io.unobserve(e.target); }
    });
  }, { rootMargin: "0px 0px -10% 0px", threshold: 0.12 });
  items.forEach(function (el) { io.observe(el); });
})();

document.querySelectorAll(".compare").forEach(function (box) {
  var input = box.querySelector("input[type=range]");
  var set = function () {
    box.style.setProperty("--pos", input.value + "%");
    input.setAttribute("aria-valuetext", input.value + "% Apple Log, " + (100 - input.value) + "% graded");
  };
  input.addEventListener("input", set);
  set();
});

var y = document.getElementById("year");
if (y) y.textContent = new Date().getFullYear();
