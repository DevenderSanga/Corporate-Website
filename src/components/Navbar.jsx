
import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  FiSun,
  FiMoon,
  FiMenu,
  FiX,
  FiGlobe
} from "react-icons/fi";

import { useTheme } from "../context/ThemeContext";
import "../styles/Navbar.css"

function Navbar() {
  const {
    theme,
    direction,
    toggleTheme,
    toggleDirection
  } = useTheme();

  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" }
  ];

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="navbar">
      <div className="navbar-container">

        {/* Logo */}
        <NavLink to="/" className="navbar-logo" onClick={closeMenu}>
          <span className="logo-mark">RK</span>
          <span className="logo-text">
            R.K <strong>CONSULTANTS</strong>
            <small>Digital Growth Agency</small>
          </span>
        </NavLink>

        {/* Navigation Links */}
        <nav className={`nav-links ${menuOpen ? "active" : ""}`}>
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              end={link.path === "/"}
              className={({ isActive }) =>
                isActive ? "nav-link active-link" : "nav-link"
              }
              onClick={closeMenu}
            >
              {link.name}
            </NavLink>
          ))}

          {/* Mobile Controls */}
          <div className="mobile-nav-controls">
            <button onClick={toggleTheme} className="nav-control-btn">
              {theme === "light" ? <FiMoon /> : <FiSun />}
              {theme === "light" ? "Dark Mode" : "Light Mode"}
            </button>

            <button onClick={toggleDirection} className="nav-control-btn">
              <FiGlobe />
              {direction === "ltr" ? "RTL" : "LTR"}
            </button>
          </div>
        </nav>

        {/* Desktop Actions */}
        <div className="navbar-actions">

          <button
            className="nav-icon-btn"
            onClick={toggleTheme}
            title="Toggle theme"
            aria-label="Toggle theme"
          >
            {theme === "light" ? <FiMoon /> : <FiSun />}
          </button>

          <button
            className="nav-icon-btn"
            onClick={toggleDirection}
            title="Toggle text direction"
            aria-label="Toggle text direction"
          >
            <FiGlobe />
            <span>{direction.toUpperCase()}</span>
          </button>

          <NavLink to="/contact" className="navbar-cta">
            Let's Talk <span>↗</span>
          </NavLink>

        </div>

        {/* Mobile Menu Button */}
        <button
          className="mobile-menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>

      </div>
    </header>
  );
}

export default Navbar;
