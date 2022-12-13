// for slide show
//select left and right arrow and slide
const slider = document.querySelector(".slider");
const slides = document.querySelectorAll(".slide");
const leftBtn = document.querySelector(".prev-btn");
const rightBtn = document.querySelector(".next-btn");
const slideIcons = document.querySelectorAll(".slide-icon");

const numberofSlide = slides.length;
//set activeslide = 0;
let activeSlide = 0;

rightBtn.addEventListener("click", () => {
  slides.forEach((slide) => {
    slide.classList.remove("active");
  });
  slideIcons.forEach((slide) => {
    slide.classList.remove("active");
  });

  activeSlide++;
  if (activeSlide > numberofSlide - 1) {
    activeSlide = 0;
  }
  slides[activeSlide].classList.add("active");
  slideIcons[activeSlide].classList.add("active");
});

leftBtn.addEventListener("click", () => {
  slides.forEach((slide) => {
    slide.classList.remove("active");
  });
  slideIcons.forEach((slide) => {
    slide.classList.remove("active");
  });

  activeSlide--;
  if (activeSlide < 0) {
    activeSlide = numberofSlide - 1;
  }
  slides[activeSlide].classList.add("active");
  slideIcons[activeSlide].classList.add("active");
});

//image autoplay

let playSlider;
const repeater = () => {
  playSlider = setInterval(function () {
    slides.forEach((slide) => {
      slide.classList.remove("active");
    });
    slideIcons.forEach((slide) => {
      slide.classList.remove("active");
    });

    activeSlide++;
    if (activeSlide > numberofSlide - 1) {
      activeSlide = 0;
    }
    slides[activeSlide].classList.add("active");
    slideIcons[activeSlide].classList.add("active");
  }, 4000);
};

repeater();

//stop the image slider autoplay
slider.addEventListener("mouseover", () => {
  clearInterval(playSlider);
});

//start the image slider autoplay again on mouseout
slider.addEventListener("mouseout", () => {
  repeater();
});

// for click on view button and scroll down to project list

$(document).ready(function () {
  $("#viewbtn").click(function () {
    var x = $(window).scrollTop();
    $(window).scrollTop(x + 2100);
  });
});

//click on project image display pop up for project

const modalOpen = document.querySelectorAll(".modal-open");
console.log(modalOpen);
document.addEventListener('DOMContentLoaded',function()
{
  modalOpen.forEach(function (btn) {
    btn.addEventListener("click", () => {
      let modal = btn.getAttribute("data-modal");
  
      document.getElementById(modal).style.display = "block";
  
      console.log('clicked image')
    });
  });
});


const closeBtns = document.querySelectorAll(".modal-close");

closeBtns.forEach(function (btn) {
  btn.addEventListener("click", () => {
    let modal = (btn.closest(".modal").style.display = "none");
  });
});

window.addEventListener("click", (e) => {
  if (e.target.className === "modal") {
    e.target.style.display = "none";
  }
});
