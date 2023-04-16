window.addEventListener('load', () => {
  let activeImage = 0;
  const images = document.querySelectorAll(".slider img");

  setInterval(() => {

    images[activeImage].classList.remove("active");
    activeImage = (activeImage + 1) % images.length;
    images[activeImage].classList.add("active");
  }, 2000);
})

const countdown = document.querySelector(".countdown");
const days = countdown.querySelector(".days h1");
const hours = countdown.querySelector(".hours h1");
const minutes = countdown.querySelector(".minutes h1");
const seconds = countdown.querySelector(".seconds h1");

const endDate = new Date("2023-04-20T00:00:00").getTime();

function updateCountdown() {
  const now = new Date().getTime();
  const remainingTime = endDate - now;

  const daysRemaining = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
  const hoursRemaining = Math.floor(
    (remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutesRemaining = Math.floor(
    (remainingTime % (1000 * 60 * 60)) / (1000 * 60)
  );
  const secondsRemaining = Math.floor((remainingTime % (1000 * 60)) / 1000);

  days.textContent = daysRemaining;
  hours.textContent = hoursRemaining.toString().padStart(2, "0");
  minutes.textContent = minutesRemaining.toString().padStart(2, "0");
  seconds.textContent = secondsRemaining.toString().padStart(2, "0");
}

setInterval(updateCountdown, 1000);
// Scroll-up animation
var scrollUpBtn = document.getElementById("scroll-up");
scrollUpBtn.addEventListener("click", function () {
  document.documentElement.scrollTop = 0;
});
$("button.button-scroll-up").click(function() {
  $("html, body").animate({ scrollTop: 0 }, "slow");
});
// End Scroll-up animation




