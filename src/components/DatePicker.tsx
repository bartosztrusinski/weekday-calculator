import { createEffect, createSignal } from 'solid-js';

import DayPicker from './DayPicker';
import MonthPicker from './MonthPicker';
import YearPicker from './YearPicker';
import { getDaysInMonth } from '../utils/calculateWeekday';
import { Month } from '../utils/date';

export default function DatePicker() {
  const now = new Date();

  const [day, setDay] = createSignal<number>(now.getDate());
  const [month, setMonth] = createSignal<Month>(now.getMonth());
  const [year, setYear] = createSignal<number>(now.getFullYear());

  const daysInMonth = () => getDaysInMonth(month(), year());

  const handleDayChange = (newDay: number) => {
    setDay(newDay);
  };

  const handleMonthChange = (newMonth: Month) => {
    setMonth(newMonth);
  };

  const handleYearChange = (newYear: number) => {
    console.log(newYear);
    setYear(newYear);
  };

  return (
    <div class="mt-4 flex flex-row items-center justify-center gap-3">
      <DayPicker
        selectedDay={day()}
        days={daysInMonth()}
        onPick={handleDayChange}
      />
      <MonthPicker selectedMonth={month()} onPick={handleMonthChange} />
      <YearPicker selectedYear={year()} onPick={handleYearChange} />
    </div>
  );
}
