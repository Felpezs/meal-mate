import Scale from "@/components/icons/Scale";

const CaloriesCard = () => {
  return (
    <div className="flex items-center justify-between rounded-xl bg-surface-light p-4 dark:bg-surface-foreground">
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-4">
          <span className="rounded-md bg-primary-100 p-1">
            <Scale className="fill-primary-500" />
          </span>
          <h2 className="text-lg font-extrabold">Calories</h2>
        </div>
        <div className="flex flex-col items-center gap-1">
          <span className="text-base font-extrabold text-purple-dark-primary dark:text-purple-light-primary">
            1500 kcal
          </span>
          <span className="border-t-[1px] border-t-purple-200 pt-1 text-sm text-purple-dark-secondary dark:text-purple-light-secondary">
            of 2272 kcal
          </span>
        </div>
      </div>
      <div className="w-full max-w-[120px]">
        <div className="relative h-0 w-full overflow-hidden rounded-tl-[100%_200%] rounded-tr-[100%_200%] bg-primary-50 pb-[50%]">
          <div className="absolute left-0 top-full h-full w-full origin-[center_top] rotate-[0.25turn] bg-primary-500 transition-transform duration-200 ease-out"></div>
          <div className="bold absolute left-[50%] top-[25%] flex h-[150%] w-[75%] translate-x-[-50%] items-center justify-center rounded-[50%] bg-surface-foreground pb-[25%] text-md text-accent-900 dark:text-accent-500">
            66%
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaloriesCard;
