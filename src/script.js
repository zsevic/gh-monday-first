function shiftDays(yearDays) {
  yearDays.forEach((day, index) => {
    if (index % 7 === 0) {
      // remove first Sunday
      if (index === 0) {
        day.style.display = 'none';
        // shift Sunday box to the bottom and translate it to the left
      } else {
        day.y.baseVal.value = 78;
        day.setAttribute('transform', 'translate(-13,0)');
      }
      // shift other days to the top
    } else {
      day.y.baseVal.value -= 13;
    }
  });
}


export function shiftWeekdayNames(weekDays) {
  const WEEK_DAYS_LENGTH = 7;
  const days = [];
  weekDays.forEach((day, index) => {
    if (index < weekDays.length - WEEK_DAYS_LENGTH) return;
    days.push(day.innerHTML);
  });
  days.push(days.shift());
  weekDays.forEach((day, index) => {
    if (index < weekDays.length - WEEK_DAYS_LENGTH) return;
    const diff = weekDays.length - index;
    const weekDayIndex = WEEK_DAYS_LENGTH - diff;
    day.innerHTML = days[weekDayIndex];
  });
}

const isGithubProfilePage = document.querySelector('.js-calendar-graph');

if (isGithubProfilePage) {
  const weekDays = document.querySelectorAll('.ContributionCalendar-label');
  shiftWeekdayNames(weekDays);

  const yearDays = document.querySelectorAll('.ContributionCalendar-day');
  shiftDays(yearDays);
}
