const items = document.querySelectorAll(".slider__image__item");
const btnLeft = document.getElementById("sliderLeft");
const btnRight = document.getElementById("sliderRight");
const boxes = document.getElementById("boxs");

console.log(btnLeft, "f");

items.forEach((_, index) => {
  const node = document.createElement("div");
  node.classList.add("slider__box");
  if (index === 0) node.classList.add("active");
  node.dataset.index = index;
  boxes.append(node);
});

btnLeft.addEventListener("click", () => {
  let index = [...items].findIndex((item) => item.classList.contains("active"));
  showItem((index - 1 + items.length) % items.length);
});

btnRight.addEventListener("click", () => {
  let index = [...items].findIndex((item) => item.classList.contains("active"));
  showItem((index + 1) % items.length);
});

const boxItems = document.querySelectorAll(".slider__box");
function showItem(index) {
  items.forEach((item, idx) => {
    item.classList.remove("active");
    boxItems[idx].classList.remove("active");
    if (idx === index) {
      item.classList.add("active");
      boxItems[idx].classList.add("active");
    }
  });
}


boxItems.forEach((item) => {
    item.addEventListener("click", () => {
      let index = parseInt(item.dataset.index);
      showItem(index);
    });
});



setInterval(() => {
    btnRight.click()
}, 3000)