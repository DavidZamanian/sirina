import { NavLink, Navigate, Route, Routes } from "react-router-dom";
import Contact from "@/pages/Contact";
import Home from "@/pages/Home";
import Privacy from "@/pages/Privacy";
import Terms from "@/pages/Terms";

const links = [
  { to: "/", label: "Home", end: true },
  { to: "/privacy", label: "Privacy" },
  { to: "/terms", label: "Terms" },
  { to: "/contact", label: "Contact" },
];

export default function App() {
  return (
    <div className="siteShell">
      <header className="siteHeader">
        <NavLink className="brand" to="/" end aria-label="Sirina Chat home">
          <span className="brandStars" aria-hidden="true">
            <svg viewBox="0 0 44 34" role="img">
              <path d="M27 4L31.2 14L41 18L31.2 22L27 32L22.8 22L13 18L22.8 14Z" />
              <path d="M13 4L14.6 7.4L18 9L14.6 10.6L13 14L11.4 10.6L8 9L11.4 7.4Z" />
              <path d="M6 12L7 14.2L9.2 15.2L7 16.2L6 18.4L5 16.2L2.8 15.2L5 14.2Z" />
            </svg>
          </span>
        </NavLink>
        <nav className="siteNav" aria-label="Primary navigation">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.end}
              className={({ isActive }) =>
                isActive ? "navLink navLinkActive" : "navLink"
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
      </header>

      <main className="siteMain">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      <footer className="siteFooter">
        <p>
          &copy; {new Date().getFullYear()} Sirina Chat. All rights reserved.
        </p>
        <div className="footerLinks">
          <NavLink to="/privacy">Privacy Policy</NavLink>
          <NavLink to="/terms">Terms of Use</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </div>
      </footer>
    </div>
  );
}
