import { Month, monthData, Weekday } from './date';

export function calculateWeekday(
  day: number,
  month: Month,
  year: number,
): Weekday {
  const firstDayOfMonth = getFirstDayOfMonth(month, year);
  return (firstDayOfMonth + day - 1) % 7;
}

function getFirstDayOfMonth(month: Month, year: number): Weekday {
  const firstDayOfYear = getFirstDayOfYear(year);
  const daysToShift = monthData[month].daysShift;
  const isLeap = isLeapYear(year);

  return (
    (firstDayOfYear +
      daysToShift +
      (isLeap && month > Month.February ? 1 : 0)) %
    7
  );
}

function getFirstDayOfYear(year: number): Weekday {
  const leapYears = countLeapYears(year - 1);
  return (year + leapYears - 1) % 7;
}

function countLeapYears(year: number): number {
  return Math.floor(year / 4) - Math.floor(year / 100) + Math.floor(year / 400);
}

export function isLeapYear(year: number): boolean {
  return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
}

export function getDaysInMonth(month: Month, year: number): number {
  const data = monthData[month];

  return month === Month.February && isLeapYear(year) ?
      data.days + 1
    : data.days;
}

export function suggestYear(
  year: number,
  maxYear: number,
  suggestedYearsCount: number,
): number {
  if (year > maxYear - suggestedYearsCount) {
    return maxYear - suggestedYearsCount;
  }

  year = Math.max(year, 1);

  const firstDigit = Number(String(year)[0]);
  const minYear = [1, 2].includes(firstDigit) ? 1000 : 100;

  while (year < minYear) {
    year *= 10;
  }

  return year;
}
