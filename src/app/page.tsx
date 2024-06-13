import CaloriesCard from "@/components/CaloriesCard";
import MacroCard from "@/components/MacroCard";
import MealTables from "@/components/MealTables";

const meals = [
  { id: 1, name: "Breakfast" },
  { id: 2, name: "Lunch" },
];

export default function Home() {
  return (
    <main className="mx-4 grid grid-cols-4 gap-8">
      <section className="col-span-4 mt-4">
        <h1 className="mb-1 text-center text-2xl font-extrabold">
          Hello Felipe!
        </h1>
        <h2 className="text-center text-md">What&apos;s your goal today ?</h2>
      </section>
      <section className="col-span-full">
        <CaloriesCard />
      </section>
      <section className="col-span-full flex justify-center gap-4">
        <MacroCard
          macroName="Proteins"
          maxValue={300}
          percentage={55}
          value={175}
        />
        <MacroCard
          macroName="Proteins"
          maxValue={300}
          percentage={55}
          value={175}
        />
        <MacroCard
          macroName="Proteins"
          maxValue={300}
          percentage={55}
          value={175}
        />
      </section>
      <section className="col-span-full">
        <MealTables meals={meals} />
      </section>
    </main>
  );
}
