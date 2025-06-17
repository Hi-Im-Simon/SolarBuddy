import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import GamePage from "./pages/GamePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";

export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <header className="flex items-center justify-between w-full p-4 shadow-md">
          <h1 className="text-2xl font-bold">
            <Link to="/SolarBuddy/">SolarBuddy</Link>
          </h1>
          <Navigation />
        </header>

        <div className="flex-grow">
          <Routes>
            <Route path="/SolarBuddy/" element={<HomePage />} />
            <Route path="/SolarBuddy/produkt" element={<ProductPage />} />
            <Route path="/SolarBuddy/gra" element={<GamePage />} />
            <Route path="/SolarBuddy/o-nas" element={<AboutPage />} />
            <Route path="/SolarBuddy/kontakt" element={<ContactPage />} />
            <Route path="/SolarBuddy/sklep" element={<h1>TODO</h1>} />
          </Routes>
        </div>

        <footer className="w-full p-4 mt-10 text-sm text-center text-gray-500 border-t">
          &copy; {new Date().getFullYear()} SolarBuddy Sp. z o.o.
        </footer>
      </div>
    </Router>
  );
}

const links = [
  { to: "/SolarBuddy/", label: "Strona główna" },
  { to: "/SolarBuddy/produkt/", label: "Produkt" },
  {
    to: "/SolarBuddy/gra/",
    label: "Gra Energy Tycoon!",
    style: "text-red-400",
  },
  { to: "/SolarBuddy/o-nas/", label: "O nas" },
  { to: "/SolarBuddy/kontakt/", label: "Kontakt" },
];

function Navigation() {
  const location = useLocation();

  return (
    <nav className="flex gap-4">
      {links.map((link) => (
        <Link
          key={link.to}
          to={link.to}
          className={`hover:underline ${
            location.pathname === link.to ? "font-semibold" : ""
          } ${link.style || ""}`}
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
}
