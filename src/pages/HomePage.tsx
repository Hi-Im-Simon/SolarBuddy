import { Link } from "react-router-dom";
import companyLogosImg from "/company-logos.png";
import gamePromoImg from "/game-promo.png";

const faq = [
  {
    q: "Czy SolarBuddy działa zimą?",
    a: "Tak, SolarBuddy działa również przy zachmurzeniu i w chłodniejszych warunkach, choć z mniejszą wydajnością.",
  },
  {
    q: "Czy mogę samodzielnie zainstalować panel?",
    a: "Tak! SolarBuddy jest systemem typu plug-and-play, więc nie wymaga pomocy specjalisty.",
  },
  {
    q: "Czy mogę go zabrać na działkę?",
    a: "Oczywiście – panel jest przenośny i świetnie sprawdza się również poza domem.",
  },
  {
    q: "Jakie urządzenia mogę zasilać?",
    a: "Małe urządzenia AGD, oświetlenie LED, ładowarki, routery i inne urządzenia do 500W.",
  },
  {
    q: "Jak długo działa w pełni naładowana bateria?",
    a: "W zależności od zużycia – przeciętnie 6–12h pracy bez ładowania.",
  },
  {
    q: "Czy SolarBuddy współpracuje z aplikacją mobilną?",
    a: "Tak, dedykowana aplikacja umożliwia podgląd i analizę produkcji energii.",
  },
  {
    q: "Czy panel trzeba czyścić?",
    a: "Tak, zaleca się przemywanie panelu raz na kilka miesięcy, by zachować jego efektywność.",
  },
];

const revs = [
  {
    author: "Anna, Poznań",
    content:
      "SolarBuddy przyniósł mi realne oszczędności na rachunkach za prąd. Bardzo polecam!",
  },
  {
    author: "Marek, Złotów",
    content:
      "Zabrałem go na działkę i od tej pory nie używam generatora. Świetna sprawa!",
  },
  {
    author: "Karolina, Kraków",
    content: "Prosta instalacja i szybka oszczędność. Idealne do mieszkania!",
  },
  {
    author: "Tomasz, Ostrów Wlkp.",
    content: "SolarBuddy świetnie się sprawdził w naszym domku letniskowym.",
  },
  {
    author: "Zofia, Gdynia",
    content: "Panel wygląda nowocześnie i działa bez zarzutu.",
  },
  {
    author: "Kamil, Warszawa",
    content: "Szybka dostawa i łatwa konfiguracja. Produkt godny polecenia.",
  },
  {
    author: "Natalia, Toruń",
    content: "Oszczędzam miesięcznie 80 zł – jestem bardzo zadowolona!",
  },
  {
    author: "Łukasz, Katowice",
    content: "Działa również zimą i przy chmurach – jestem pod wrażeniem.",
  },
  {
    author: "Monika, Rzeszów",
    content:
      "Polecam każdemu, kto szuka ekologicznego i mobilnego źródła energii.",
  },
  {
    author: "Piotr, Lublin",
    content: "Świetna jakość wykonania, panel bardzo solidny.",
  },
];

export default function HomePage() {
  return (
    <main className="flex flex-col items-center w-full max-w-4xl p-6 mx-auto space-y-16">
      <h2 className="text-4xl font-bold">SolarBuddy – Twoje domowe słońce</h2>

      <Link to="/SolarBuddy/sklep/">
        <img
          src={gamePromoImg}
          alt="Promocja SolarBuddy"
          className="max-w-4xl w-sm rounded-2xl"
        />
      </Link>

      <div className="flex flex-col items-center gap-2">
        <p className="m-0 text-lg">
          Zagraj w "Energy Tycoon" i zbuduj własne imperium energii!
        </p>
        <Link to="/SolarBuddy/gra/" className="text-3xl hover:underline">
          Zagraj teraz!
        </Link>
      </div>

      {/* References Section */}
      <section className="w-full space-y-4">
        <h3 className="text-2xl font-semibold">Zaufali nam</h3>
        <center>
          <img
            src={companyLogosImg}
            alt="Loga firm które nam zaufały"
            className="h-24 w-fit"
          />
        </center>
      </section>

      {/* Customer Reviews Section */}
      <section className="w-full space-y-4">
        <h3 className="text-2xl font-semibold">Opinie klientów</h3>
        <div className="flex pb-2 space-x-4 overflow-x-auto whitespace-nowrap scrollbar-hide">
          {revs.map(({ author, content }, i) => (
            <div
              key={i}
              className="inline-block min-w-[250px] p-4 border rounded shadow"
            >
              <p className="h-16 text-sm italic text-wrap">{content}</p>
              <p className="mt-2 text-sm font-semibold text-right">
                – {author}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full space-y-4">
        <h3 className="text-2xl font-semibold">
          Najczęściej zadawane pytania (FAQ)
        </h3>
        <div className="space-y-2">
          {faq.map(({ q, a }, i) => (
            <details key={i} className="p-3 border rounded">
              <summary className="font-medium cursor-pointer">{q}</summary>
              <p className="mt-2">{a}</p>
            </details>
          ))}
        </div>
      </section>
    </main>
  );
}
