const card = document.querySelector(".live_card");
const card2 = document.querySelector(".live_card2");
const card3 = document.querySelector(".live_card3");
const connect_acc = document.querySelector(".connect_acct");
const connect_acc2 = document.querySelector(".connect_acct2");
const connect_acc3 = document.querySelector(".connect_acct3");
const border_width = document.querySelector(".border_width");
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
  border_width.style.height = '100px'
});

connect_acc2.addEventListener("click", function () {
  card2.classList.toggle("hidden");
  card.classList.add("hidden");
  card3.classList.add("hidden");
  border_width.style.height = '0px'
});
connect_acc3.addEventListener("click", function () {
  card3.classList.toggle("hidden");
  card.classList.add("hidden");
  card2.classList.add("hidden");
});
