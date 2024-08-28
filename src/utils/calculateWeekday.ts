import { Month } from '../components/MonthPicker.astro';

export enum Weekday {
  Monday = 0,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

enum DaysShiftInMonth {
  January = 0,
  February = 3,
  March = 3,
  April = 6,
  May = 1,
  June = 4,
  July = 6,
  August = 2,
  September = 5,
  October = 0,
  November = 3,
  December = 5,
}

export function calculateWeekday(
  day: number,
  month: keyof typeof Month,
  year: number,
): Weekday {
  const firstDayOfMonth = getFirstDayOfMonth(month, year);
  console.log(`First day of month is ${firstDayOfMonth}`, `\nDay is ${day}`);
  return (firstDayOfMonth + day - 1) % 7;
}

function getFirstDayOfMonth(month: keyof typeof Month, year: number): Weekday {
  const firstDayOfYear = getFirstDayOfYear(year);
  const daysToShift = DaysShiftInMonth[month];
  const isLeap = isLeapYear(year);
  const firstDayOfMonth =
    (firstDayOfYear +
      daysToShift +
      (isLeap && !['January', 'February'].includes(month) ? 1 : 0)) %
    7;

  console.log(
    `${firstDayOfYear} + ${daysToShift} + ${isLeap && !['January', 'February'].includes(month) ? 1 : 0} = ${firstDayOfMonth}`,
  );

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
