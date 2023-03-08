const WEEK_DAYS_LENGTH = 7;

function shiftDays(yearDays) {
  yearDays.forEach((day, index) => {
    if (index === 0) {
      day.style.display = 'none';
      return;
    }

    if (day.innerHTML.includes('Sunday')) {
      day.style.transform = 'translate(0, 78px)';
      return;
    }

    day.style.transform = 'translateY(-13px)';
  });
}

export function shiftWeekdayNames(weekDays) {
  const days = [];

  weekDays.forEach((day, index) => {
    if (index < weekDays.length - WEEK_DAYS_LENGTH) return;
    days.push(day);
  });

  days.push(days.shift());

  weekDays.forEach((day, index) => {
    if (index < weekDays.length - WEEK_DAYS_LENGTH) return;

    const diff = weekDays.length - index;
    const weekDayIndex = WEEK_DAYS_LENGTH - diff;

    day.innerHTML = days[weekDayIndex].innerHTML;
  });
}

const isGithubProfilePage = document.querySelector('.js-calendar-graph');

if (isGithubProfilePage) {
  const weekDays = document.querySelectorAll('.ContributionCalendar-label');
  shiftWeekdayNames(weekDays);

  const yearDays = document.querySelectorAll('.ContributionCalendar-day');
  shiftDays(yearDays);
}
