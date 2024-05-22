import Search from "./icons/Search";

const Searchbar = () => {
  return (
    <label className="relative inline-block" aria-label="Search for food">
      <input
        type="text"
        placeholder="Search"
        className={`placeholder:dark:text-grey rounded-full bg-surface-light py-2 pl-3 pr-8 placeholder:text-purple-dark-secondary focus:outline-none dark:bg-surface-dark`}
      />
      <Search
        className="absolute right-3 top-1/2 -translate-y-1/2 fill-purple-dark-secondary dark:fill-purple-light-secondary"
        size={16}
      />
    </label>
  );
};

export default Searchbar;
