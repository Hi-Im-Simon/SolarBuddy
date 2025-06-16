import { useState } from "react";

export default function ContactPage() {
  const [email, setEmail] = useState("");

  return (
    <main className="w-full max-w-4xl p-6 mx-auto space-y-6">
      <div className="flex flex-col gap-3 p-4 bg-white shadow-lg rounded-xl">
        <form className="flex flex-col gap-3">
          <div>
            <h3 className="text-2xl font-semibold">Kontakt</h3>
            <p>SolarBuddy Sp. z o.o.</p>
            <p>Adres: ul. Energetyczna 12, 60-123 Poznań</p>
            <p>Email: kontakt@solarbuddy.pl</p>
          </div>

          <input
            type="text"
            placeholder="Twoje imię"
            className="w-full p-2 m-0 border rounded"
          />
          <input
            type="email"
            placeholder="Twój email"
            className="w-full p-2 m-0 border rounded"
          />
          <textarea
            placeholder="Wiadomość..."
            className="w-full h-32 p-2 m-0 border rounded"
          ></textarea>
          <a
            href="mailto:kontakt@solarbuddy.pl"
            className="w-full text-center hover:underline"
          >
            Wyślij
          </a>
        </form>
      </div>

      <div className="p-4 space-y-2 bg-white shadow-lg rounded-xl">
        <p className="font-semibold">
          Zapisz się do newslettera i zgarnij bonus w grze!
        </p>
        <form className="flex flex-col gap-3">
          <input
            type="email"
            placeholder="Twój e-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 m-0 border rounded"
          />
          <button type="submit" className="w-full hover:underline">
            Zapisz się
          </button>
        </form>
      </div>
    </main>
  );
}
