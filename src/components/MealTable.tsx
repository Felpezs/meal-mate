"use client";

import Filter from "./search/Select";
import Searchbar from "./search/Searchbar";
import Button from "./Button";
import Plus from "./icons/Plus";
import IconButton from "./IconButton";
import Trash from "./icons/Trash";
import FoodCardList from "./foodCard/FoodCardList";

const MealTable = ({ mealName }: { mealName: string }) => {
  return (
    <div className="shadow-card flex flex-col gap-2 rounded-xl p-2 dark:bg-surface-foreground dark:shadow-none">
      <div className="flex items-center justify-between">
        <h2 className="text-md font-extrabold text-purple-dark-primary dark:text-purple-light-primary">
          {mealName}
        </h2>
        <IconButton variant="danger" onClick={() => {}}>
          <Trash size={16} className="fill-danger-500" />
        </IconButton>
      </div>
      <div className="flex flex-wrap items-end justify-between gap-2">
        <div className="max-w-[700px] flex-grow basis-[130px]">
          <Searchbar />
        </div>
        <div className="flex max-w-fit flex-shrink flex-grow basis-[191px] items-end gap-2">
          <Filter options={["Calories", "Proteins", "Fat", "Carbohydrates"]} />
          <Button
            variant="primary"
            onClick={() => {}}
            icon={<Plus size={16} className="fill-purple-dark-primary" />}
          >
            New
          </Button>
        </div>
      </div>
      <FoodCardList />
    </div>
  );
};

export default MealTable;
