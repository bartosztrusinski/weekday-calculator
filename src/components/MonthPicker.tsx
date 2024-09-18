import { Month, monthData } from '../utils/date';

type Props = {
  selectedMonth: Month;
  onPick: (month: Month) => void;
};

export default function MonthPicker(props: Props) {
  const selectedMonth = () => props.selectedMonth;

  return (
    <label>
      <p class="mb-1">Month</p>
      <select
        class="border-spacing-1 rounded-sm p-1 text-lg text-slate-900"
        onInput={(event) => {
          const month = Number(event.target.value);
          props.onPick(month);
        }}
      >
        {Object.entries(monthData).map(([month, data]) => (
          <option selected={selectedMonth() === Number(month)} value={month}>
            {data.name}
          </option>
        ))}
      </select>
    </label>
  );
}
