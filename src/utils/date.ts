export enum Weekday {
  Monday = 0,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
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

type MonthData = {
  name: string;
  days: number;
  daysShift: number;
};

export const monthData: {
  [key in Month]: MonthData;
} = {
  [Month.January]: {
    name: 'January',
    days: 31,
    daysShift: 0,
  },
  [Month.February]: {
    name: 'February',
    days: 28,
    daysShift: 3,
  },
  [Month.March]: {
    name: 'March',
    days: 31,
    daysShift: 3,
  },
  [Month.April]: {
    name: 'April',
    days: 30,
    daysShift: 6,
  },
  [Month.May]: {
    name: 'May',
    days: 31,
    daysShift: 1,
  },
  [Month.June]: {
    name: 'June',
    days: 30,
    daysShift: 4,
  },
  [Month.July]: {
    name: 'July',
    days: 31,
    daysShift: 6,
  },
  [Month.August]: {
    name: 'August',
    days: 31,
    daysShift: 2,
  },
  [Month.September]: {
    name: 'September',
    days: 30,
    daysShift: 5,
  },
  [Month.October]: {
    name: 'October',
    days: 31,
    daysShift: 0,
  },
  [Month.November]: {
    name: 'November',
    days: 30,
    daysShift: 3,
  },
  [Month.December]: {
    name: 'December',
    days: 31,
    daysShift: 5,
  },
};
