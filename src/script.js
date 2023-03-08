const WEEK_DAYS_LENGTH = 7;

function shiftDays(yearDays) {
  yearDays.forEach((day, index) => {
    if (index % WEEK_DAYS_LENGTH === 0) {
      if (index === 0) {
        // remove first Sunday
        day.style.display = 'none';
      } else {
        // shift Sunday box to the bottom and translate it to the left
        day.setAttribute('transform', 'translate(-13, 0)');
        day.setAttribute('transform', 'translate(0, -78)');
      }
    } else {
      // shift other days to the top
      day.setAttribute('transform', 'translate(13, 0)');
    }
  });
}


export function shiftWeekdayNames(weekDays) {
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
