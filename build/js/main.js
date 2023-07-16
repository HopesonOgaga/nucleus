const card = document.querySelector(".live_card");
const connect_acc = document.querySelector(".connect_acct");
const border_width = document.querySelector(".border_width");





card.classList.add('hidden')
connect_acc.addEventListener("click", function () {
    
  border_width.style.height = '28%';
  card.classList.toggle('hidden')
});
