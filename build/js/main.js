const card = document.querySelector(".live_card");
const card2 = document.querySelector(".live_card2");
const card3 = document.querySelector(".live_card3");
const connect_acc = document.querySelector(".connect_acct");
const connect_acc2 = document.querySelector(".connect_acct2");
const connect_acc3 = document.querySelector(".connect_acct3");
const border_width = document.querySelector(".border_width");
const border_width2 = document.querySelector(".border_width2");
const border_width3 = document.querySelector(".border_width3");
const image_dom = document.querySelector(".image_dom");
const images_arr = [
  "./images/live_card",
  "./images/live_card_2",
  "./images/live_car_3",
];

card.classList.add("hidden");
card2.classList.add("hidden");
card3.classList.add("hidden");

connect_acc.addEventListener("click", function () {
  card.classList.toggle("hidden");
  card2.classList.add("hidden");
  card3.classList.add("hidden");
  border_width.style.height = "100px";
  border_width2.style.height = "40px";
  border_width3.style.height = "40px";
});

connect_acc2.addEventListener("click", function () {
  card2.classList.toggle("hidden");
  card.classList.add("hidden");
  card3.classList.add("hidden");
  border_width2.style.height = "100px";
  border_width.style.height = "40px";
  border_width3.style.height = "40px";
});
connect_acc3.addEventListener("click", function () {
  card3.classList.toggle("hidden");
  card.classList.add("hidden");
  card2.classList.add("hidden");
  border_width3.style.height = "100px";
  border_width2.style.height = "40px";
  border_width.style.height = "40px";
});
// toggl tst

const toggle_btn1 = document.querySelector(".toggle_btn1");
const toggle_btn2 = document.querySelector(".toggle_btn2");

toggle_btn2.addEventListener("click", function () {
  toggle_btn2.classList.add("toggle_btn");
});


