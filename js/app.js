document.querySelector(".custom-select-wrapper").addEventListener("click", function () {
    this.querySelector(".custom-select").classList.toggle("open");
    this.querySelector(".arrow").classList.toggle("arrow-rotate");
  });
for (const option of document.querySelectorAll(".custom-option")) {
  option.addEventListener("click", function () {
    if (!this.classList.contains("selected")) {
      this.parentNode.querySelector(".custom-option.selected").classList.remove("selected");
      this.classList.add("selected");
      this.closest(".custom-select").querySelector(".custom-select__trigger span").textContent = this.textContent;
    } else this.closest(".custom-select").querySelector(".custom-select__trigger span").textContent = this.textContent;
  });
}
window.addEventListener("click", function (e) {
  const select = document.querySelector(".custom-select");
  if (!select.contains(e.target)) {
    select.classList.remove("open");
  }
});
const calculateInput = document.querySelector(".calculate__input--box");
const calculateResult = document.querySelector(".calculate__result");
let totalCost = 0;
let costOfProducts = 0;
let ordersInMonth = 0;
let selectedPackage = 0;
let accountingCost = 0;
let terminalCost = 0;
calculateInput.firstElementChild.addEventListener("change", function () {
  calculateResult.querySelector(".calculate__product").classList.remove("hide");
  calculateResult.querySelector(".calculate__product--option").firstElementChild.textContent = this.value;
  costOfProducts = parseInt(this.value) * 0.5;
  calculateResult.querySelector(".calculate__product--price").firstElementChild.textContent = costOfProducts;
  costSum();
});
calculateInput.children[1].addEventListener("change", function () {
  calculateResult.querySelector(".calculate__orders").classList.remove("hide");
  calculateResult.querySelector(".calculate__orders--option").firstElementChild.textContent = this.value;
  ordersInMonth = parseInt(this.value) * 0.25;
  calculateResult.querySelector(".calculate__orders--price").firstElementChild.textContent = ordersInMonth;
  costSum();
});
const packageOption = calculateInput.querySelectorAll(".custom-option");
  packageOption.forEach(element => {
    element.addEventListener("click", function () {
      calculateResult.querySelector(".calculate__package").classList.remove("hide");
      calculateResult.querySelector(".calculate__package--option").textContent = this.textContent;
      if (this.textContent === "Basic") {
        selectedPackage = 20;
      } else if (this.textContent === "Professional") {
        selectedPackage = 40;
      } else {
        selectedPackage = 60;
      }
      calculateResult.querySelector(".calculate__package--price").firstElementChild.textContent = selectedPackage;
      costSum();
    });
  });
calculateInput.children[3].addEventListener('change', function() {
  calculateResult.querySelector(".calculate__accounting").classList.toggle("hide");
  this.firstElementChild.checked == true ? accountingCost = 20 : accountingCost = 0;
  calculateResult.querySelector('.calculate__accounting--price').firstElementChild.textContent = accountingCost;
  costSum();
})
calculateInput.children[4].addEventListener('change', function() {
  calculateResult.querySelector(".calculate__terminal").classList.toggle("hide");
  this.firstElementChild.checked == true ? terminalCost = 5 : terminalCost = 0;
  calculateResult.querySelector('.calculate__terminal--price').firstElementChild.textContent = terminalCost;
  costSum();
})

function costSum() {
  // const calculateSum = calculateResult.querySelectorAll('.calculate__sum');

  totalCost = costOfProducts + ordersInMonth + selectedPackage + accountingCost + terminalCost;
  const sumOfAll = calculateResult.querySelector('.calculate__total--sum');
  return sumOfAll.textContent = totalCost;
  };
