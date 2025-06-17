import EnergyTycoon from "../components/game/EnergyTycoon";

export default function GamePage() {
  return (
    <main className="w-full max-w-5xl p-6 mx-auto space-y-6 text-center">
      <h3 className="text-3xl font-semibold">Zagraj w Energy Tycoon</h3>
      <p>
        Klikaj, inwestuj, rozwijaj farmy słoneczne i zdobywaj realne nagrody
        (już wkrótce)!
      </p>
      <EnergyTycoon />
    </main>
  );
}
