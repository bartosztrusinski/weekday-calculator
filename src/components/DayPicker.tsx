type Props = {
  selectedDay: number;
  days: number;
  onPick: (day: number) => void;
};

export default function DayPicker(props: Props) {
  const selectedDay = () => props.selectedDay;
  const days = () => props.days;

  return (
    <label>
      <p class="mb-1">Day</p>
      <select
        class="border-spacing-1 rounded-sm p-1 text-lg text-slate-900"
        onChange={(event) => {
          const day = Number(event.target.value);
          props.onPick(day);
        }}
      >
        {Array.from({ length: days() }, (_, i) => i + 1).map((day) => (
          <option value={day} selected={day === selectedDay()}>
            {day}
          </option>
        ))}
      </select>
    </label>
  );
}
