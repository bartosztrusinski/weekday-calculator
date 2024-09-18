import { createSignal } from 'solid-js';

import { suggestYear } from '../utils/calculateWeekday';

type Props = {
  selectedYear: number;
  onPick: (year: number) => void;
};

const MAX_YEAR = 4000;
const SUGGESTED_YEARS = 20;

export default function YearPicker(props: Props) {
  const [isDropdownOpen, setIsDropdownOpen] = createSignal(false);

  const selectedYear = () => props.selectedYear;
  const onPick = (year: number) => props.onPick(year);
  const suggestedYear = () =>
    suggestYear(selectedYear(), MAX_YEAR, SUGGESTED_YEARS);
  const years = () =>
    Array.from({ length: SUGGESTED_YEARS }, (_, i) => suggestedYear() + i + 1);

  let buttonsRef!: HTMLDivElement;

  return (
    <label>
      <p class="mb-1">Year</p>
      <div class="relative w-24">
        <input
          onFocusIn={() => setIsDropdownOpen(true)}
          onFocusOut={() => setIsDropdownOpen(false)}
          onInput={(event) => {
            const year = Number(event.target.value);

            onPick(year);
          }}
          type="text"
          class="z-10 w-full p-1 pl-2 text-lg text-slate-900"
          value={selectedYear()}
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="absolute right-0 top-0 size-6 h-full align-middle text-slate-900"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M8.25 15 12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
          ></path>
        </svg>
        <div
          ref={buttonsRef}
          class={`${isDropdownOpen() ? 'flex' : 'hidden'} absolute z-20 max-h-56 w-full flex-col overflow-scroll bg-slate-50`}
        >
          {years().map((year) => (
            <button
              type="button"
              class="p-1 pl-2 text-left text-lg text-slate-900 hover:bg-slate-200"
              onClick={(event) => {
                const year = Number(event.target.textContent);

                onPick(year);
              }}
            >
              {year}
            </button>
          ))}
        </div>
      </div>
    </label>
  );
}
