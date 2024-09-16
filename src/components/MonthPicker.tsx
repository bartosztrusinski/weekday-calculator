import { Month } from '../utils/date';

type Props = {
  selectedMonth: number;
  onPick: (event: Event) => void;
};

export default function MonthPicker({ selectedMonth, onPick }: Props) {
  const months = Array.from({ length: 12 }, (_, i) => i + 1);

  return (
    <label>
      <p class="mb-1">Month</p>
      <select
        data-month-input
        class="border-spacing-1 rounded-sm p-1 text-lg text-slate-900"
        onInput={onPick}
      >
        {months.map((month) => (
          <option selected={month === selectedMonth} value={Month[month]}>
            {Month[month]}
          </option>
        ))}
      </select>
    </label>
  );
}
