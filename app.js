const decrease = document.querySelector("#decreaseBtn");
const reset = document.querySelector("#resetBtn");
const increase = document.querySelector("#increaseBtn");
const countTxt = document.querySelector("#counterTxt");

let count = 0;

function upCt() {
  countTxt.classList.remove("downCount");
  count += 1;
  countTxt.textContent = count;
  countTxt.classList.add("upCount");
}

function downCt() {
  countTxt.classList.remove("upCount");
  count -= 1;
  countTxt.textContent = count;
  countTxt.classList.add("downCount");
}

function rst() {
  countTxt.classList.remove("upCount");
  countTxt.classList.remove("downCount");
  countTxt.textContent = 0;
}

increase.addEventListener("click", upCt);
decrease.addEventListener("click", downCt);
reset.addEventListener("click", rst);
