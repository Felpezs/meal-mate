import Dropdown from "../icons/Dropdown";

const Select = ({ options }: { options: string[] }) => {
  return (
    <div className="flex min-w-[100px] flex-col gap-1">
      <label
        className="text-grey-700 dark:text-grey-200 text-sm"
        htmlFor="sortBy"
      >
        Sort By
      </label>
      <div className="relative rounded-full bg-surface-light dark:bg-surface-dark">
        <select
          id="orderBy"
          className="w-full appearance-none overflow-hidden text-ellipsis whitespace-nowrap rounded-full border-2 border-purple-100 py-2 pl-3 pr-7 dark:border-none dark:bg-surface-dark"
        >
          {options.map((option, index) => (
            <option key={index}>{option}</option>
          ))}
        </select>
        <Dropdown className="pointer-events-none absolute right-0 top-1/2 -translate-x-1/2 -translate-y-1/2 fill-purple-dark-secondary dark:fill-purple-light-secondary" />
      </div>
    </div>
  );
};

export default Select;
