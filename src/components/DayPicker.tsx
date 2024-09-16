type Props = {
  selectedDay: number;
  days: number;
  onPick: (event: Event) => void;
};

export default function DayPicker({ selectedDay, days, onPick }: Props) {
  return (
    <label>
      <p class="mb-1">Day</p>
      <select
        data-day-input
        class="border-spacing-1 rounded-sm p-1 text-lg text-slate-900"
        onChange={onPick}
      >
        {Array.from({ length: days }, (_, i) => i + 1).map((day) => (
          <option value={day} selected={day === selectedDay}>
            {day}
          </option>
        ))}
      </select>
    </label>
  );
}
