
const measureModal = document.getElementById("measure-modal");
const callModal = document.getElementById("call-modal");
const reviewModal = document.getElementById("review-modal");

const orderMeasureBtn = document.getElementById("order-measure");
const orderCallBtn = document.getElementById("order-call");
const leaveReviewBtn = document.getElementById("leave-review");

const closeMeasureModalBtn = document.getElementById("close-measure-modal");
const closeCallModalBtn = document.getElementById("close-call-modal");
const closeReviewModalBtn = document.getElementById("close-review-modal");

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

orderCallBtn.addEventListener("click", () => {
  callModal.classList.add("show");
});

leaveReviewBtn.addEventListener("click", () => {
  reviewModal.classList.add("show");
});

closeMeasureModalBtn.addEventListener("click", () => {
  measureModal.classList.remove("show");
});

closeCallModalBtn.addEventListener("click", () => {
  callModal.classList.remove("show");
});

closeReviewModalBtn.addEventListener("click", () => {
  reviewModal.classList.remove("show");
});

window.addEventListener("click", (event) => {
  if (event.target === measureModal) {
    measureModal.classList.remove("show");
  }
  if (event.target === callModal) {
    callModal.classList.remove("show");
  }
  if (event.target === reviewModal) {
    reviewModal.classList.remove("show");
  }
  if (event.target === surveyModal) {
    surveyModal.classList.remove("show");
  }
});

const slider = document.getElementById("slider");
const sliderValue = document.getElementById("slider-value");

slider.addEventListener("input", () => {
  sliderValue.textContent = slider.value;
});
