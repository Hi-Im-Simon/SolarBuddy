import { useEffect, useState } from "react";
import { useLocalStorage } from "usehooks-ts";
import { calcPrice, getPlayTime } from "./utils";
import _ from "lodash";
import { Link } from "react-router-dom";

type Upgrade = {
  type: "clickBoost" | "passiveBoost" | "priceBoost";
  scaling: "addative" | "multiplicative";
  name: string;
  baseBonus: number;
  basePrice: number;
  nBought: number;
  maxNBought?: number;
};

const defaultUpgrades: Upgrade[] = [
  {
    name: "+1 kW / klik (100 zł)",
    type: "clickBoost",
    scaling: "addative",
    baseBonus: 1,
    basePrice: 100,
    nBought: 0,
  },
  {
    name: "Mały panel domowy – 1 kWh",
    type: "passiveBoost",
    scaling: "addative",
    baseBonus: 1,
    basePrice: 250,
    nBought: 0,
  },
  {
    name: "Nowoczesny panel 300W – 3 kWh",
    type: "passiveBoost",
    scaling: "addative",
    baseBonus: 3,
    basePrice: 1200,
    nBought: 0,
  },
  {
    name: "SolarBuddy ☀️ – 7 kWh",
    type: "passiveBoost",
    scaling: "addative",
    baseBonus: 7,
    basePrice: 1800,
    nBought: 0,
  },
  {
    name: "Farmka osiedlowa – 20 kWh",
    type: "passiveBoost",
    scaling: "addative",
    baseBonus: 20,
    basePrice: 9000,
    nBought: 0,
  },
  {
    name: "Przekupienie partii rządzącej – +1 zł / kW",
    type: "priceBoost",
    scaling: "addative",
    baseBonus: 1,
    basePrice: 36000,
    nBought: 0,
  },
  {
    name: "SolarFarm AI 5000™ – 100 kWh",
    type: "passiveBoost",
    scaling: "addative",
    baseBonus: 100,
    basePrice: 72000,
    nBought: 0,
  },
];

export default function EnergyTycoon() {
  const [playTime, setPlayTime] = useLocalStorage("playTime", 0);
  const [energy, setEnergy] = useLocalStorage("energy", 0);
  const [money, setMoney] = useLocalStorage("money", 0);
  const [energyPerClick, setEnergyPerClick] = useLocalStorage(
    "energyPerClick",
    1
  );
  const [energyPerSecond, setEnergyPerSecond] = useLocalStorage(
    "energyPerSecond",
    0
  );
  const [pricePerUnit, setPricePerUnit] = useLocalStorage("pricePerUnit", 2);
  const [upgrades, setUpgrades] = useLocalStorage<Upgrade[]>(
    "upgrades",
    _.cloneDeep(defaultUpgrades)
  );
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [showPromo, setShowPromo] = useState<"SolarBuddy" | "generic" | false>(
    false
  );

  const generateEnergy = () => {
    setEnergy((prev) => prev + energyPerClick);
  };

  const sellEnergy = () => {
    setMoney((prev) => prev + energy * pricePerUnit);
    setEnergy(0);
  };

  const buyUpgrade = (id: number) => {
    if (upgrades[id]) {
      const price = calcPrice(upgrades[id].basePrice, upgrades[id].nBought);
      if (money >= price) {
        setMoney((prev) => prev - price);
        upgrades[id].nBought = (upgrades[id].nBought || 0) + 1;
        setUpgrades([...upgrades]);

        switch (upgrades[id].type) {
          case "clickBoost":
            if (upgrades[id].scaling === "addative") {
              setEnergyPerClick((prev) => prev + upgrades[id].baseBonus);
            } else {
              setEnergyPerClick((prev) => prev * upgrades[id].baseBonus);
            }
            break;
          case "passiveBoost":
            if (upgrades[id].scaling === "addative") {
              setEnergyPerSecond((prev) => prev + upgrades[id].baseBonus);
            } else {
              setEnergyPerSecond((prev) => prev * upgrades[id].baseBonus);
            }
            break;
          case "priceBoost":
            if (upgrades[id].scaling === "addative") {
              setPricePerUnit((prev) => prev + upgrades[id].baseBonus);
            } else {
              setPricePerUnit((prev) => prev * upgrades[id].baseBonus);
            }
            break;
        }

        if (upgrades[id].name.includes("SolarBuddy")) {
          setShowPromo("SolarBuddy");
          setTimeout(() => setShowPromo(false), 15000);
        } else if (upgrades[id].nBought % 5 === 0) {
          setShowPromo("generic");
          setTimeout(() => setShowPromo(false), 15000);
        }
      }
    }
  };

  const resetGame = () => {
    setPlayTime(0);
    setEnergy(0);
    setMoney(0);
    setEnergyPerClick(1);
    setEnergyPerSecond(0);
    setUpgrades(_.cloneDeep(defaultUpgrades));
    setSettingsOpen(false);
  };

  // Passive energy generation.
  useEffect(() => {
    const interval = setInterval(() => {
      setPlayTime((prev) => prev + 1);

      if (energyPerSecond > 0) {
        setEnergy((prev) => prev + energyPerSecond);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [energyPerSecond, setEnergy, setPlayTime]);

  return (
    <div className="relative max-w-xl p-6 mx-auto space-y-6 text-center bg-white shadow-xl rounded-xl">
      {/* ⚙️ PRZYCISK USTAWIEŃ */}
      <button
        onClick={() => setSettingsOpen((prev) => !prev)}
        className="absolute text-xl text-gray-600 top-4 right-4 hover:text-black"
        title="Ustawienia"
      >
        ⚙️
      </button>

      {/* 🔧 MENU USTAWIEŃ */}
      {settingsOpen && (
        <div className="absolute z-10 p-4 space-y-2 bg-white border border-gray-200 rounded shadow-lg top-14 right-4">
          <h3 className="mb-2 font-semibold text-gray-700">Ustawienia</h3>
          <button
            onClick={resetGame}
            className="w-full px-3 py-1 text-white transition bg-red-500 rounded hover:bg-red-700 active:scale-95"
          >
            🔄 Reset gry
          </button>
        </div>
      )}

      <h1 className="text-3xl font-bold text-yellow-600">☀️ Energy Tycoon</h1>

      {showPromo && (
        <div className="relative px-4 py-3 mt-2 text-sm text-yellow-800 bg-yellow-100 border border-yellow-400 rounded shadow animate-pulse">
          <button
            onClick={() => setShowPromo(false)}
            className="absolute top-auto text-lg font-bold text-yellow-800 mt-[-3px] right-2 hover:text-red-500"
            aria-label="Zamknij"
          >
            ×
          </button>
          {showPromo === "SolarBuddy"
            ? "🌞 Odblokowałeś SolarBuddy w grze – "
            : "Świetnie Ci idzie generowanie energii! "}
          <Link to="/SolarBuddy/sklep" className="hover:underline">
            {showPromo === "SolarBuddy"
              ? "sprawdź go w realu!"
              : "Wypróbuj SolarBuddy!"}
          </Link>
        </div>
      )}

      <div className="space-y-2">
        <p className="text-lg">
          🔋 Energia: <strong>{energy} kW</strong>
        </p>
        <p className="text-lg">
          💰 Gotówka: <strong>{money.toFixed(2)} zł</strong>
        </p>
        <p className="text-sm text-gray-500">
          • Produkcja: {energyPerSecond} kWh
        </p>
        <p className="text-sm text-gray-500">
          • Czas gry: {getPlayTime(playTime).val}
        </p>
      </div>

      <div className="space-x-4">
        <button
          onClick={generateEnergy}
          className="px-4 py-2 text-white transition bg-yellow-500 rounded shadow hover:bg-yellow-600 active:scale-95"
        >
          Kliknij, aby wygenerować ☀️
          <p className="text-xs font-bold text-gray-700">
            {energyPerClick} kW / klik
          </p>
        </button>

        <button
          onClick={sellEnergy}
          className="px-4 py-2 text-white transition bg-green-600 rounded shadow hover:bg-green-700 active:scale-95"
        >
          Sprzedaj energię
          <p className="text-xs font-bold text-gray-700">
            {pricePerUnit} zł / kW
          </p>
        </button>
      </div>

      <div className="mt-6">
        <h2 className="text-xl font-semibold">Ulepszenia</h2>
        <div className="space-y-2">
          {upgrades.map((upg, id) => {
            const price = calcPrice(upg.basePrice, upg.nBought);
            return (
              <button
                key={id}
                disabled={money < price}
                onClick={() => buyUpgrade(id)}
                className={`block w-full px-4 py-2 rounded shadow active:scale-95 transition ${
                  upg.maxNBought && (upg.nBought ?? 0) >= upg.maxNBought
                    ? "bg-green-200 text-gray-500 cursor-not-allowed"
                    : money >= price
                    ? "bg-blue-400 hover:bg-blue-500 text-white"
                    : "bg-gray-200 text-gray-400 cursor-not-allowed"
                }`}
              >
                {upg.name} ({price.toFixed(2)} zł)
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
