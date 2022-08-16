const monthlyPay = document.getElementById('monthlyPay');
const otherMonthly = document.getElementById('otherMonthly');
const food = document.getElementById('food');
const housing = document.getElementById('housing');
const clothing = document.getElementById('clothing');
const household = document.getElementById('household');
const transportation = document.getElementById('transportation');
const health = document.getElementById('health');
const loans = document.getElementById('loans');
const personal = document.getElementById('personal');
const misc = document.getElementById('misc');
const submit = document.getElementById('submit');

let totalIncome = 0;
let totalExpenses = 0;

submit.addEventListener('click', function () {
  totalIncome = calcIncome(parseInt(monthlyPay.value), parseInt(otherMonthly.value));
  totalExpenses = calcExpenses(parseInt(food.value), parseInt(housing.value), parseInt(clothing.value),
    parseInt(household.value), parseInt(transportation.value), parseInt(health.value), parseInt(loans.value),
    parseInt(personal.value), parseInt(misc.value));
});

function calcIncome(income1, income2) {
  let income = income1 + income2;
  return income;
}

function calcExpenses(one, two, three, four, five, six, seven, eight, nine) {
  let expenses = one + two + three + four + five + six + seven + eight + nine;
  return expenses;
}

function removeAllChildNodes(parent) {
  while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
  }
}

function calcRemainder(income, expenses) {
  let remainder = income - expenses;
  return remainder;
}
