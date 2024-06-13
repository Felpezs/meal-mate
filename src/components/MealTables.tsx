"use client";
import Button from "./Button";
import MealTable from "./MealTable";

type Meal = {
  id: number;
  name: string;
};

const MealTables = ({ meals }: { meals: Meal[] }) => {
  return (
    <div className="flex flex-col items-center gap-8">
      {meals.map((meal) => (
        <MealTable mealName={meal.name} key={meal.id} />
      ))}
      <Button variant="primary" onClick={() => {}}>
        Add new meal
      </Button>
    </div>
  );
};

export default MealTables;
