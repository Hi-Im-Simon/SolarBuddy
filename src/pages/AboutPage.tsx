export default function AboutPage() {
  return (
    <main className="w-full max-w-4xl p-6 mx-auto space-y-6">
      <h3 className="text-2xl font-semibold">O nas</h3>
      <p>
        Jesteśmy zespołem inżynierów i pasjonatów energii odnawialnej. Naszym
        celem jest dostarczenie prostych i efektywnych rozwiązań solarnych dla
        każdego domu.
      </p>

      <img src="/us.jpg" alt="Us" className="rounded-xl" />

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div>
          <h4 className="font-semibold">Zespół</h4>
          <ul className="list-disc list-inside">
            <li>Kacper Kacperski – CEO</li>
            <li>Malina Malinowska – CTO</li>
            <li>Karolina Karolak – Marketing</li>
            <li>Anastazja Tacka – Development</li>
            <li>Adam Adamski – Development</li>
            <li>Bogna Bagno – Księgowość</li>
          </ul>
        </div>
      </div>
    </main>
  );
}
