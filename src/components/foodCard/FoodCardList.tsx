import FoodCard from "./FoodCard";

const FoodCardList = () => {
  const dummyFoodInfo = [
    {
      foodName: "Chicken Breast",
      proteins: 30,
      carbs: 2,
      fat: 2,
      grams: 30,
      calories: 20,
      index: 0,
    },
    {
      foodName: "Banana",
      proteins: 0,
      carbs: 12,
      fat: 1,
      grams: 90,
      calories: 41,
      index: 1,
    },
  ];

  return (
    <div className="flex flex-col gap-1">
      {dummyFoodInfo.map((food) => (
        <FoodCard
          key={food.index}
          foodName={food.foodName}
          calories={food.calories}
          carbs={food.carbs}
          fat={food.fat}
          grams={food.grams}
          proteins={food.proteins}
        />
      ))}
    </div>
  );
};

export default FoodCardList;
