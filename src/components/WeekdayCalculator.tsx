import DatePicker from './DatePicker';

export default function WeekdayCalculator() {
  return (
    <article class="flex flex-col items-center gap-5">
      <section>
        <DatePicker />
      </section>
      <section class="pt-2" data-weekday>
        <p class="px-2 text-2xl sm:text-4xl"></p>
        <p class="bg-gradient bg-clip-text px-2 pb-10 text-center text-6xl font-black tracking-tight text-transparent sm:text-8xl md:text-9xl lg:text-[10rem] xl:text-[13rem]"></p>
      </section>
    </article>
  );
}
