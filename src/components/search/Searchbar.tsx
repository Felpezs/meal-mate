import Search from "../icons/Search";

const Searchbar = () => {
  return (
    <div className="relative">
      <label className="hidden" htmlFor="search"></label>
      <input
        id="search"
        type="text"
        placeholder="Search"
        className={`rounded-full bg-surface-light py-2 pl-3 pr-8 placeholder:text-purple-dark-secondary focus:outline-none dark:bg-surface-dark placeholder:dark:text-grey`}
      />
      <Search
        className="absolute right-3 top-1/2 -translate-y-1/2 fill-purple-dark-secondary dark:fill-purple-light-secondary"
        size={16}
      />
    </div>
  );
};

export default Searchbar;
