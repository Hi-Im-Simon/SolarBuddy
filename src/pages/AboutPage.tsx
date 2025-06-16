export default function AboutPage() {
  return (
    <main className="w-full max-w-4xl p-6 mx-auto space-y-6">
      <h3 className="text-2xl font-semibold">O nas</h3>
      <p>
        Jesteśmy zespołem inżynierów i pasjonatów energii odnawialnej. Naszym
        celem jest dostarczenie prostych i efektywnych rozwiązań solarnych dla
        każdego domu.
      </p>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div>
          <h4 className="font-semibold">Zespół</h4>
          <ul className="list-disc list-inside">
            <li>Szymon Stanisławski – CEO</li>
            <li>Piotr Polcyn – CEO</li>
            <li>Adam Adamski – CTO</li>
            <li>Karol Karolak – Marketing</li>
          </ul>
        </div>
        <img
          src="/skyscraper-ad.jpg"
          alt="Reklama boczna"
          className="rounded-xl"
        />
      </div>
    </main>
  );
}
