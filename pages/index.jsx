import FixedBtns from "@/components/modules/FixedBtns";
import HomePage from "@/components/templates/HomePage";

export default function Home() {
  return (
    <main className="container mx-auto p-10 px-3 text-darkChocolate">
      <HomePage />
      <FixedBtns />
    </main>
  );
}
