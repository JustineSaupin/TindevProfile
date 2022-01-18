// Swiper
var swiper = new Swiper(".mySwiper", {
      effect: "cards",
      grabCursor: true,
    });

// Match hide/show

const match = document.querySelector('.match');
const reseau = document.querySelector('.reseau');

match.onclick = function() {
  reseau.classList.toggle('hidden');
}

const swipe = document.querySelector('.swiper');

swipe.ontouchmove = function() {
  match.classList.add('shady')
}
