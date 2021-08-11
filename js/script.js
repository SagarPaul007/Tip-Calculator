const items = document.querySelectorAll(".item");
let btn = document.querySelector(".temp");
let tipValue = document.querySelector(".tip-value");
let totalValue = document.querySelector(".total-value");

let bill, percentage, custom, people, tip, total;

items.forEach((item) => {
  item.addEventListener("click", () => {
    items.forEach((n) => {
      n.classList.remove("active");
    });
    item.classList.toggle("active");
    percentage = Number(item.textContent.split("%")[0]);
  });
});

document.querySelector(".btn-div").addEventListener("click", () => {
  bill = document.querySelector(".bill-input").value;
  people = document.querySelector(".people-input").value;
  custom = document.querySelector(".custom-input").value;

  if (custom !== "") percentage = custom;
  if (people === "") people = 1;
  if (!percentage) percentage = 0;

  tip = (bill * percentage) / 100 / people;
  total = bill / people + tip;

  tipValue.textContent = "$" + `${tip.toFixed(2)}`;
  totalValue.textContent = "$" + `${total.toFixed(2)}`;

  document.querySelector(".btn-div").style.display = "none";
  document.querySelector(".reset").style.display = "block";
});

document.querySelector(".reset").addEventListener("click", () => {
  bill = 0;
  percentage = 0;

  document.querySelector(".btn").textContent = "SHOW";
  document.querySelector(".bill-input").value = "";
  document.querySelector(".people-input").value = "";
  document.querySelector(".custom-input").value = "";

  document.querySelector(".btn-div").style.display = "block";
  document.querySelector(".reset").style.display = "none";

  items.forEach((item) => {
    item.classList.remove("active");
  });

  tipValue.textContent = "$0.00";
  totalValue.textContent = "$0.00";
});
