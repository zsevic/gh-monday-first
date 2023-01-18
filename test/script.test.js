import { shiftWeekdayNames } from '../src/script';

describe('check location', () => {
  it('should work only on Github profile pages', () => {
    document.body.innerHTML = '';

    const element = document.querySelector('.js-calendar-graph');

    expect(element).toBeNull();
  });
});

describe('shift weekday names', () => {
  it('should display Sunday', () => {
    document.body.innerHTML = `
        <text text-anchor="start" class="wday" dx="-14" dy="8" style="display: none;">Sun</text>
        <text text-anchor="start" class="wday" dx="-14" dy="20">Mon</text>
        <text text-anchor="start" class="wday" dx="-14" dy="32" style="display: none;">Tue</text>
        <text text-anchor="start" class="wday" dx="-14" dy="44">Wed</text>
        <text text-anchor="start" class="wday" dx="-14" dy="57" style="display: none;">Thu</text>
        <text text-anchor="start" class="wday" dx="-14" dy="69">Fri</text>
        <text text-anchor="start" class="wday" dx="-14" dy="81" style="display: none;">Sat</text>
    `;
    const weekDays = document.querySelectorAll('.wday');

    shiftWeekdayNames(weekDays);

    const style = weekDays[6].style.display;
    expect(style).toBe('inline');
  });

  it('should display Monday as first day', () => {
    document.body.innerHTML = `
        <text text-anchor="start" class="wday" dx="-14" dy="8" style="display: none;">Sun</text>
        <text text-anchor="start" class="wday" dx="-14" dy="20">Mon</text>
        <text text-anchor="start" class="wday" dx="-14" dy="32" style="display: none;">Tue</text>
        <text text-anchor="start" class="wday" dx="-14" dy="44">Wed</text>
        <text text-anchor="start" class="wday" dx="-14" dy="57" style="display: none;">Thu</text>
        <text text-anchor="start" class="wday" dx="-14" dy="69">Fri</text>
        <text text-anchor="start" class="wday" dx="-14" dy="81" style="display: none;">Sat</text>
    `;
    const weekDays = document.querySelectorAll('.wday');

    shiftWeekdayNames(weekDays);

    const firstDay = weekDays[0].innerHTML;
    expect(firstDay).toBe('Mon');
  });

  it('should display Sunday as last day', () => {
    document.body.innerHTML = `
        <text text-anchor="start" class="wday" dx="-14" dy="8" style="display: none;">Sun</text>
        <text text-anchor="start" class="wday" dx="-14" dy="20">Mon</text>
        <text text-anchor="start" class="wday" dx="-14" dy="32" style="display: none;">Tue</text>
        <text text-anchor="start" class="wday" dx="-14" dy="44">Wed</text>
        <text text-anchor="start" class="wday" dx="-14" dy="57" style="display: none;">Thu</text>
        <text text-anchor="start" class="wday" dx="-14" dy="69">Fri</text>
        <text text-anchor="start" class="wday" dx="-14" dy="81" style="display: none;">Sat</text>
    `;
    const weekDays = document.querySelectorAll('.wday');

    shiftWeekdayNames(weekDays);

    const lastDay = weekDays[6].innerHTML;
    expect(lastDay).toBe('Sun');
  });
});
