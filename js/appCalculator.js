const select = document.querySelector('.custom-select')
const customSelect = document.querySelector('.custom-select-wrapper')
const calculateInput = document.querySelector('.calculate__input--box')
const packageOption = calculateInput.querySelectorAll('.custom-option')
const calculateResult = document.querySelector('.calculate__result')
const sumOfAll = calculateResult.querySelector('.calculate__total--sum')
const accounting = document.querySelector('.calculate__accounting')
const paymentTerminal = document.querySelector('.calculate__terminal')
let totalCost = 0
let costOfProducts = 0
let ordersInMonth = 0
let selectedPackage = 0
let accountingCost = 0
let terminalCost = 0

!!customSelect &&
  customSelect.addEventListener('click', function () {
    this.querySelector('.custom-select').classList.toggle('open')
    this.querySelector('.arrow').classList.toggle('arrow-rotate')
  })

for (const option of document.querySelectorAll('.custom-option')) {
  option.addEventListener('click', function () {
    if (!this.classList.contains('selected')) {
      this.parentNode
        .querySelector('.custom-option.selected')
        .classList.remove('selected')
      this.classList.add('selected')
      this.closest('.custom-select').querySelector(
        '.custom-select__trigger span'
      ).textContent = this.textContent
    } else this.closest('.custom-select').querySelector('.custom-select__trigger span').textContent = this.textContent
  })
}

window.addEventListener('click', function (e) {
  if (!select.contains(e.target)) {
    select.classList.remove('open')
  }
})

calculateInput.firstElementChild.addEventListener('change', function () {
  calculateResult.querySelector('.calculate__product').classList.remove('hide')
  calculateResult.querySelector(
    '.calculate__product--option'
  ).firstElementChild.textContent = this.value
  costOfProducts = parseInt(this.value) * 0.5
  calculateResult.querySelector(
    '.calculate__product--price'
  ).firstElementChild.textContent = costOfProducts
  costSum()
})

calculateInput.children[1].addEventListener('change', function () {
  calculateResult.querySelector('.calculate__orders').classList.remove('hide')
  calculateResult.querySelector(
    '.calculate__orders--option'
  ).firstElementChild.textContent = this.value
  ordersInMonth = parseInt(this.value) * 0.25
  calculateResult.querySelector(
    '.calculate__orders--price'
  ).firstElementChild.textContent = ordersInMonth
  costSum()
})

packageOption.forEach((element) => {
  element.addEventListener('click', function () {
    calculateResult
      .querySelector('.calculate__package')
      .classList.remove('hide')
    calculateResult.querySelector(
      '.calculate__package--option'
    ).textContent = this.textContent
    if (this.textContent === 'Basic') {
      selectedPackage = 20
    } else if (this.textContent === 'Professional') {
      selectedPackage = 40
    } else {
      selectedPackage = 60
    }
    calculateResult.querySelector(
      '.calculate__package--price'
    ).firstElementChild.textContent = selectedPackage
    costSum()
  })
})

function accountingChecked() {
  accounting.classList.remove('hide')
  accountingCost = 20
}

function accountingUnchecked() {
  accounting.classList.add('hide')
  accountingCost = 0
}

calculateInput.children[3].addEventListener('change', function (e) {
  this.firstElementChild.checked ? accountingChecked() : accountingUnchecked()
  calculateResult.querySelector(
    '.calculate__accounting--price'
  ).firstElementChild.textContent = accountingCost
  costSum()
})

function paymentTerminalChecked() {
  paymentTerminal.classList.remove('hide')
  terminalCost = 5
}

function paymentTerminalUnchecked() {
  paymentTerminal.classList.add('hide')
  terminalCost = 0
}

calculateInput.children[4].addEventListener('change', function () {
  this.firstElementChild.checked
    ? paymentTerminalChecked()
    : paymentTerminalUnchecked()
  calculateResult.querySelector(
    '.calculate__terminal--price'
  ).firstElementChild.textContent = terminalCost
  costSum()
})

function costSum() {
  totalCost =
    costOfProducts +
    ordersInMonth +
    selectedPackage +
    accountingCost +
    terminalCost
  return (sumOfAll.textContent = totalCost)
}
