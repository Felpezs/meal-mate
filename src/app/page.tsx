import CaloriesCard from "@/components/CaloriesCard";

export default function Home() {
  return (
    <main className="mx-4 grid grid-cols-4 gap-8">
      <section className="col-span-4 mt-4">
        <h1 className="bold mb-1 text-center text-2xl font-extrabold">
          Hello Felipe!
        </h1>
        <h2 className="text-center text-md ">What&apos;s your goal today ?</h2>
      </section>
      <CaloriesCard />
    </main>
  );
}
