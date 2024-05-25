import IconButton from "../IconButton";
import Edit from "../icons/Edit";
import Trash from "../icons/Trash";

type FoodCardProps = {
  foodName: string;
  calories: number;
  proteins: number;
  carbs: number;
  fat: number;
  grams: number;
};

const FoodCard = ({
  foodName,
  calories,
  proteins,
  carbs,
  fat,
  grams,
}: FoodCardProps) => {
  return (
    <div className="flex flex-col rounded-xl bg-inherit p-4 shadow-sm dark:bg-surface-dark dark:shadow-none">
      <div className="flex">
        <h2 className="mr-auto text-base font-extrabold text-purple-dark-primary dark:text-purple-light-primary">
          {foodName}
        </h2>
        <p className="text-sm text-purple-dark-secondary dark:text-purple-light-secondary">
          {calories} kcal
        </p>
      </div>
      <p className="text-sm text-purple-dark-secondary dark:text-purple-light-secondary">
        {proteins}g Protein, {carbs}g Carbs, {fat}g Fat
      </p>
      <div className="flex items-center">
        <h3 className="mr-auto text-base font-extrabold text-purple-dark-primary dark:text-purple-light-primary">
          {grams}g
        </h3>
        <div>
          <IconButton onClick={() => {}} variant="secondary" className="mr-1">
            <Edit size={16} className="fill-violet-500" />
          </IconButton>
          <IconButton onClick={() => {}} variant="danger">
            <Trash size={16} className="fill-danger-500" />
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
