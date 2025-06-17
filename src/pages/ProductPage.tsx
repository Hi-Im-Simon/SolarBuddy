export default function ProductPage() {
  return (
    <main className="w-full max-w-4xl p-6 mx-auto space-y-6">
      <h3 className="mb-4 text-3xl font-semibold">Poznaj SolarBuddy</h3>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <img
          src="./product.png"
          alt="Panel SolarBuddy"
          className="shadow-md rounded-2xl"
        />
        <div className="space-y-3">
          <p>
            SolarBuddy to domowy system solarny typu plug-and-play, który
            pozwala Ci oszczędzać na energii już od pierwszego dnia.
          </p>
          <ul className="list-disc list-inside">
            <li>Łatwa instalacja</li>
            <li>Monitoring zużycia energii</li>
            <li>Integracja z aplikacją</li>
          </ul>
          <a className="font-bold" href="SolarBuddy-katalog.pdf" download>
            Pobierz katalog PDF
          </a>
        </div>
      </div>
      {/* <img src="/y.png" alt="Bonus w grze za zakup" className="mx-auto mt-6" /> */}
    </main>
  );
}
