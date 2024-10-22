const daily = document.querySelector(".daily");
const weekly = document.querySelector(".weekly");
const monthly = document.querySelector(".monthly");
const periods = Array.from(document.querySelectorAll(".period"));

const workHrs = document.querySelector(".workhrs");
const workPrev = document.querySelector(".workprev");

const playHrs = document.querySelector(".playhrs");
const playPrev = document.querySelector(".playprev");

const studyHrs = document.querySelector(".studyhrs");
const studyPrev = document.querySelector(".studyprev");

const exerHrs = document.querySelector(".exerhrs");
const exerPrev = document.querySelector(".exerprev");

const sociHrs = document.querySelector(".socialhrs");
const sociPrev = document.querySelector(".socialprev");

const careHrs = document.querySelector(".carehrs");
const carePrev = document.querySelector(".careprev");

daily.addEventListener("click", () => {
  periods.map((period) => period.classList.remove("period-special"));
  daily.classList.add("period-special");
  weekly.classList.remove("active");

  workHrs.textContent = "5hrs";
  workPrev.textContent = "Previous - 7hrs";

  playHrs.textContent = "1hrs";
  playPrev.textContent = "Previous - 2hrs";

  studyHrs.textContent = "0hrs";
  studyPrev.textContent = "Previous - 1hr";

  exerHrs.textContent = "1hrs";
  exerPrev.textContent = "Previous - 1hr";

  sociHrs.textContent = "1hrs";
  sociPrev.textContent = "Previous - 3hrs";

  careHrs.textContent = "0hrs";
  carePrev.textContent = "Previous - 1hr";
});

weekly.addEventListener("click", (e) => {
  periods.map((period) => {
    period.classList.remove("period-special");
  });
  weekly.classList.add("period-special");
  weekly.classList.remove("active");

  workHrs.textContent = "32hrs";
  workPrev.textContent = "Last-Week - 36hrs";

  playHrs.textContent = "10hrs";
  playPrev.textContent = "Last-Week - 8hrs";

  studyHrs.textContent = "4hrs";
  studyPrev.textContent = "Last-Week - 7hrs";

  exerHrs.textContent = "4hrs";
  exerPrev.textContent = "Last-Week - 5hrs";

  sociHrs.textContent = "5hrs";
  sociPrev.textContent = "Last-Week - 10hrs";

  careHrs.textContent = "2hrs";
  carePrev.textContent = "Last-Week - 2hrs";
});

monthly.addEventListener("click", () => {
  periods.map((period) => {
    period.classList.remove("period-special");
  });
  monthly.classList.add("period-special");
  weekly.classList.remove("active");

  workHrs.textContent = "103hrs";
  workPrev.textContent = "Last-Month - 128hrs";

  playHrs.textContent = "23hrs";
  playPrev.textContent = "Last-Month - 29hrs";

  studyHrs.textContent = "13hrs";
  studyPrev.textContent = "Last-Month - 19hrs";

  exerHrs.textContent = "11hrs";
  exerPrev.textContent = "Last-Month - 18hrs";

  sociHrs.textContent = "21hrs";
  sociPrev.textContent = "Last-Month - 23hrs";

  careHrs.textContent = "7hrs";
  carePrev.textContent = "Last-Month - 11hrs";
});

