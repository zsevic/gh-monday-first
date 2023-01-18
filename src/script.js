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
  const days = [];
  weekDays.forEach((day) => {
    days.push(day.innerHTML);
  });
  days.push(days.shift());
  weekDays.forEach((day, index) => {
    day.innerHTML = days[index];
    if (index % 2) {
      day.style.display = 'none';
    } else {
      day.style.display = 'inline';
    }
  });
}

const isGithubProfilePage = document.querySelector('.js-calendar-graph');

if (isGithubProfilePage) {
  const weekDays = document.querySelectorAll('.ContributionCalendar-label');
  shiftWeekdayNames(weekDays);

  const yearDays = document.querySelectorAll('.ContributionCalendar-day');
  shiftDays(yearDays);
}
