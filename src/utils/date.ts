export enum DaysInMonth {
  January = 31,
  February = 28,
  March = 31,
  April = 30,
  May = 31,
  June = 30,
  July = 31,
  August = 31,
  September = 30,
  October = 31,
  November = 30,
  December = 31,
}

export enum Month {
  January = 1,
  February,
  March,
  April,
  May,
  June,
  July,
  August,
  September,
  October,
  November,
  December,
}

export type MonthKey = keyof typeof Month;

export enum Weekday {
  Monday = 0,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

export enum DaysShiftInMonth {
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
