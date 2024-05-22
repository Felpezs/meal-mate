import Searchbar from "./Searchbar";

const MealTable = ({ mealName }: { mealName: string }) => {
  return (
    <div className="gap-2 rounded-xl p-2 dark:bg-surface-foreground">
      <div className="flex">
        <h2 className="text-md font-extrabold text-purple-dark-primary dark:text-purple-light-primary">
          {mealName}
        </h2>
      </div>
      <div>
        <Searchbar />
      </div>
    </div>
  );
};

export default MealTable;
