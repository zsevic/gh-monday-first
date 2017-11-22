const gh = document.querySelector('.js-calendar-graph')
if (gh) {
  console.log('gh profile')
  const weekDays = document.querySelectorAll('.wday')
  const days = []
  weekDays.forEach((day) => {
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
