
const measureModal = document.getElementById("measure-modal");
const measureModal1 = document.getElementById("measure-modal");
const callModal = document.getElementById("call-modal");
const callModal1 = document.getElementById("call-modal");

const orderMeasureBtn = document.getElementById("order-measure");
const orderMeasureBtn1 = document.getElementById("order-measure1");
const orderCallBtn = document.getElementById("order-call");
const orderCallBtn1 = document.getElementById("order-call1");

const closeMeasureModalBtn = document.getElementById("close-measure-modal");
const closeMeasureModalBtn1 = document.getElementById("close-measure-modal1");
const closeCallModalBtn = document.getElementById("close-call-modal");
const closeCallModalBtn1 = document.getElementById("close-call-modal1");

const surveyModal = document.getElementById("survey-modal");
const openSurveyBtn = document.getElementById("open-survey-btn");
const closeSurveyModalBtn = document.getElementById("close-survey-modal");

openSurveyBtn.addEventListener("click", () => {
  surveyModal.classList.add("show");
});

closeSurveyModalBtn.addEventListener("click", () => {
  surveyModal.classList.remove("show");
});

orderMeasureBtn.addEventListener("click", () => {
  measureModal.classList.add("show");
});

orderMeasureBtn1.addEventListener("click", () => {
  measureModal.classList.add("show");
});

orderCallBtn.addEventListener("click", () => {
  callModal.classList.add("show");
});

orderCallBtn1.addEventListener("click", () => {
  callModal.classList.add("show");
});

closeMeasureModalBtn.addEventListener("click", () => {
  measureModal.classList.remove("show");
});

closeMeasureModalBtn1.addEventListener("click", () => {
  measureModal.classList.remove("show");
});

closeCallModalBtn.addEventListener("click", () => {
  callModal.classList.remove("show");
});

closeCallModalBtn1.addEventListener("click", () => {
  callModal.classList.remove("show");
});

window.addEventListener("click", (event) => {
  if (event.target === measureModal) {
    measureModal.classList.remove("show");
  }
  if (event.target === callModal) {
    callModal.classList.remove("show");
  }
  if (event.target === surveyModal) {
    surveyModal.classList.remove("show");
  }
});

document.addEventListener("DOMContentLoaded", function() {
  const carousels = document.querySelectorAll('.carousel');

  carousels.forEach((carousel) => {
    const wrapper = carousel.querySelector('.carousel-wrapper');
    const items = carousel.querySelectorAll('.carousel-item');
    const totalItems = items.length;
    let index = 0;

    const firstSlide = items[0].cloneNode(true);
    wrapper.appendChild(firstSlide);

    function moveToNextSlide() {
      index = (index + 1) % (totalItems + 1);
      wrapper.style.transform = `translateX(-${index * 100}%)`;
    }

    function resetTransition() {
      wrapper.style.transition = 'none';
      wrapper.style.transform = `translateX(0)`;

      setTimeout(() => {
        wrapper.style.transition = 'transform 0.5s ease-in-out';
      }, 50);
    }

    setInterval(() => {
      moveToNextSlide();

      if (index === totalItems) {
        setTimeout(resetTransition, 500);
      }
    }, 3000);
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const promoBlock = document.getElementById('promo-block');
  const listItems = document.querySelectorAll('.custom-bullets li');

  if (promoBlock) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          promoBlock.classList.add('visible');
          listItems.forEach(item => item.style.animationPlayState = 'running');
        }
      });
    }, { threshold: 0.2 });

    observer.observe(promoBlock);
  } else {
    console.error("Элемент promo-block не найден!");
  }
});

document.addEventListener('DOMContentLoaded', () => {
  const animatedText = document.getElementById('animated-text');
  const words = ['Нас', 'Крисмас❤️'];
  let wordIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function typeEffect() {
    const currentWord = words[wordIndex];
    const displayedText = currentWord.substring(0, charIndex);
    animatedText.textContent = displayedText;

    if (!isDeleting && charIndex < currentWord.length) {
      charIndex++;
      setTimeout(typeEffect, 140);
    } else if (isDeleting && charIndex > 0) {
      charIndex--;
      setTimeout(typeEffect, 120);
    } else if (!isDeleting && charIndex === currentWord.length) {
      isDeleting = true;
      setTimeout(typeEffect, 2000);
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
      setTimeout(typeEffect, 500);
    }
  }

  typeEffect();
});



