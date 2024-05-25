import Search from "../icons/Search";

const Searchbar = () => {
  return (
    <div className="relative">
      <label className="hidden" htmlFor="search"></label>
      <input
        id="search"
        type="text"
        placeholder="Search"
        className="placeholder:text-grey-700 placeholder:dark:text-grey-200 w-full rounded-full border-2 border-purple-100 bg-surface-light py-2 pl-3 pr-8 focus:outline-none dark:border-none dark:bg-surface-dark"
      />
      <Search
        className="absolute right-3 top-1/2 -translate-y-1/2 fill-purple-dark-secondary dark:fill-purple-light-secondary"
        size={16}
      />
    </div>
  );
};

export default Searchbar;
