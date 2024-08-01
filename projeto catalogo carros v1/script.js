let prevButton = document.getElementById("prev");
let nextButton = document.getElementById("next");
let container = document.querySelector(".container");

let items = container.querySelectorAll(".list .item");

let indicator = document.querySelector(".indicators");

let dots = indicator.querySelectorAll("ul li");
let list = container.querySelector(".list");

let active = 0;
let fisrtposition = 0;
let lastposition = items.length - 1;

function setSlider() {
  let itemOld = container.querySelector(".list .item.active");
  itemOld.classList.remove("active");

  let dotsOld = indicator.querySelector("ul li.active");
  dotsOld.classList.remove("active");
  dots[active].classList.add("active");

  indicator.querySelector(".number").innerHTML = "0" + (active + 1);
}

nextButton.onclick = () => {
  list.style.setProperty("--calculation", 1);
  active = active + 1 > lastposition ? 0 : active + 1;
  setSlider();
  items[active].classList.add("active");
};

prevButton.onclick = () => {
  list.style.setProperty("--calculation", -1);
  active = active - 1 < fisrtposition ? lastposition : active - 1;
  setSlider();
  items[active].classList.add("active");
};
