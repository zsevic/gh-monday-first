const gh = document.querySelector('.js-calendar-graph')
// check if the user is on some Github profile's page
if (gh) {
  console.log('gh profile')
  const weekDays = document.querySelectorAll('.wday')
  // shift names of the days on the left side
  shiftNames(weekDays)
  const yearDays = document.querySelectorAll('.day')
  shiftDays(yearDays)
}

function shiftDays (yearDays) {
  yearDays.forEach((day, index) => {
    if (index % 7 === 0) {
      // remove first Sunday
      if (index === 0) {
        day.style['display'] = 'none'
        // shift Sunday box to the bottom and translate it to the left
      } else {
        day.y.baseVal.value = 72
        day.setAttribute('transform', 'translate(-12,0)')
      }
      // shift other days to the top
    } else {
      day.y.baseVal.value = day.y.baseVal.value - 12
    }
  })
}

export default function shiftNames (weekDays) {
  const days = []
  weekDays.forEach(day => {
    days.push(day.innerHTML)
  })
  days.push(days.shift())
  weekDays.forEach((day, index) => {
    day.innerHTML = days[index]
    if (index % 2) {
      day.style['display'] = 'none'
    } else {
      day.style['display'] = 'inline'
    }
  })
}