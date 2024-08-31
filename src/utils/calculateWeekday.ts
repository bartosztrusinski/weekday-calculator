import {
  DaysInMonth,
  DaysShiftInMonth,
  Month,
  Weekday,
  type MonthKey,
} from './date';

export function calculateWeekday(
  day: number,
  month: MonthKey,
  year: number,
): Weekday {
  const firstDayOfMonth = getFirstDayOfMonth(month, year);
  return (firstDayOfMonth + day - 1) % 7;
}

function getFirstDayOfMonth(month: MonthKey, year: number): Weekday {
  const firstDayOfYear = getFirstDayOfYear(year);
  const daysToShift = DaysShiftInMonth[month];
  const isLeap = isLeapYear(year);
  const firstDayOfMonth =
    (firstDayOfYear +
      daysToShift +
      (isLeap && !['January', 'February'].includes(month) ? 1 : 0)) %
    7;

  return firstDayOfMonth;
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

export function getDaysInMonth(month: MonthKey, year: number): number {
  return (
    DaysInMonth[month] +
    (isLeapYear(year) && Month[month] === Month.February ? 1 : 0)
  );
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
