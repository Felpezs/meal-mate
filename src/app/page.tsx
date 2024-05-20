import CaloriesCard from "@/components/CaloriesCard";
import MacroCard from "@/components/MacroCard";

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
      <section className="col-span-full flex gap-4">
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
    </main>
  );
}
