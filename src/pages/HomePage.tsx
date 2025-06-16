import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <main className="flex flex-col items-center w-full max-w-4xl p-6 mx-auto space-y-12">
      <h2 className="text-4xl font-bold">SolarBuddy – Twoje domowe słońce</h2>

      <Link to="/sklep">
        <img
          src="/game-promo.png"
          alt="Promocja SolarBuddy"
          className="max-w-4xl w-sm rounded-2xl"
        />
      </Link>

      <div className="flex flex-col items-center gap-2">
        <p className="m-0 text-lg">
          Zagraj w "Energy Tycoon" i zbuduj własne imperium energii!
        </p>
        <Link to="/gra" className="text-3xl hover:underline">
          Zagraj teraz!
        </Link>
      </div>
    </main>
  );
}
