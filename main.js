const bill = document.querySelector("[data-bill]");
const percentage = document.querySelectorAll("[data-percentage]");
const people = document.querySelector("[data-people]");
const customTip = document.querySelector("[data-customTip]");
const tipPerPerson = document.querySelector("[data-tipPerPerson]");
const totalTip = document.querySelector("[data-totalTip]");
let billValue = 0;
let percentageValue = 0;
let peopleValue = 0;
let output;
const calculate = () => {
  bill.addEventListener("change", (event) => {
    event.preventDefault();
    billValue = +bill.value;
    output = (billValue * percentageValue) / 100;
    tipPerPerson.innerText = `$${output.toFixed(2)}`;
  });
  percentage.forEach((percent) => {
    percent.addEventListener("change", (event) => {
      event.preventDefault();
      percentageValue = +percent.value;
      output = (billValue * percentageValue) / 100;
      tipPerPerson.innerText = `$${output.toFixed(2)}`;
    });
  });
  customTip.addEventListener("change", (event) => {
    event.preventDefault();
    percentageValue = +customTip.value;
    output = (billValue * percentageValue) / 100;
    tipPerPerson.innerText = `$${output.toFixed(2)}`;
  });
  people.addEventListener("change", (event) => {
    event.preventDefault();
    peopleValue = +people.value;
    output = billValue * peopleValue * (percentageValue / 100);
    totalTip.innerText = `$${output.toFixed(2)}`;
  });
};
calculate();

const reset = document.querySelector("[data-reset]");
reset.addEventListener("click", (event) => {
  event.preventDefault();
  tipPerPerson.innerText = `$0.00`;
  totalTip.innerText = `$0.00`;
  bill.value = 0;
  people.value = 0;
  customTip.value = 0;
});
