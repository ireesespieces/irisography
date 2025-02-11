let slideIndex = 0;
showSlides();

function showSlides() {
  let slides = document.getElementsByClassName("mySlides");
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1; }
  slides[slideIndex - 1].style.display = "block";
  slides[slideIndex - 1].style.animation = "slideIn 1.5s ease-in-out";
  setTimeout(showSlides, 3000);
}
function toggleMenu() {
  if (window.innerWidth < 500) { // Only toggle menu if screen is less than 500px
      document.querySelector('.nav-right').classList.toggle('open');
      document.querySelector('.overlay').classList.toggle('active');
  }
}

function closeMenu() {
  document.querySelector('.nav-right').classList.remove('open');
  document.querySelector('.overlay').classList.remove('active');
}
