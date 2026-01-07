import { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import Logo from "./Logo";

// --- Sub-component for Navigation Links ---
interface NavLinksProps {
  closeMenu?: () => void;
  isMobile?: boolean;
}

const NavLinks = ({ closeMenu, isMobile = false }: NavLinksProps) => {
  const baseLinkClass =
    "font-Oxanium tracking-wider transition-all duration-300 hover:text-accent-color relative group";

  const mobileLinkClass = "text-2xl font-bold py-2";
  const desktopLinkClass = "text-sm font-medium";

  // Active state styling
  const activeStyle = ({ isActive }: { isActive: boolean }) =>
    isActive ? "text-accent-color" : "text-white/70";

  return (
    <>
      <NavLink
        to="/"
        onClick={closeMenu}
        className={({ isActive }) =>
          `${baseLinkClass} ${isMobile ? mobileLinkClass : desktopLinkClass} ${activeStyle({ isActive })}`
        }
      >
        HOME
        {/* Animated Underline (Desktop Only) */}
        {!isMobile && (
          <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-accent-color transition-all duration-300 group-hover:w-full"></span>
        )}
      </NavLink>

      <NavLink
        to="/works"
        onClick={closeMenu}
        className={({ isActive }) =>
          `${baseLinkClass} ${isMobile ? mobileLinkClass : desktopLinkClass} ${activeStyle({ isActive })}`
        }
      >
        WORKS
        {!isMobile && (
          <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-accent-color transition-all duration-300 group-hover:w-full"></span>
        )}
      </NavLink>
      {/* <NavLink
        to="/upload"
        onClick={closeMenu}
        className={({ isActive }) =>
          `${baseLinkClass} ${isMobile ? mobileLinkClass : desktopLinkClass} ${activeStyle({ isActive })}`
        }
      >
        upload
        {!isMobile && (
          <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-accent-color transition-all duration-300 group-hover:w-full"></span>
        )}
      </NavLink> */}

      {/* Contact is special: It looks like a button on Desktop */}
      <NavLink
        to="/contact"
        onClick={closeMenu}
        className={({ isActive }) =>
          isMobile
            ? `${baseLinkClass} ${mobileLinkClass} ${activeStyle({ isActive })}`
            : `ml-4 px-6 py-2 rounded-full font-Oxanium font-bold text-sm transition-all duration-300 border ${isActive
              ? "bg-accent-color text-black border-accent-color"
              : "bg-transparent text-white border-white/20 hover:border-accent-color hover:text-accent-color"
            }`
        }
      >
        CONTACT
      </NavLink>
    </>
  );
};

// --- Main Header Component ---
export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);

  // Add subtle shadow/border on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* 
        Fixed Container. 
        We use w-full to center the inner container.
      */}
      <header className="fixed top-0 left-0 w-full z-40 flex justify-center py-4 px-4 pointer-events-none">

        {/* The actual navbar "capsule" */}
        <div
          className={`
            pointer-events-auto relative flex justify-between items-center 
            w-full max-w-7xl h-16 px-6 
            rounded-2xl transition-all duration-500
            ${scrolled
              ? "bg-[#0B0B0B]/80 backdrop-blur-xl border border-white/10 shadow-lg shadow-black/50"
              : "bg-[#0B0B0B]/50 backdrop-blur-md border border-transparent"}
          `}
        >
          {/* Logo */}
          <Link to="/" onClick={closeMenu} className="flex-shrink-0 opacity-90 hover:opacity-100 transition-opacity">
            <Logo className="h-8 w-auto text-white" />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden sm:flex items-center gap-8">
            <NavLinks />
          </nav>

          {/* Mobile Hamburger Button */}
          <button
            onClick={toggleMenu}
            aria-label="Toggle menu"
            className="sm:hidden p-2 text-white/80 hover:text-accent-color transition-colors"
          >
            {isMenuOpen ? (
              // Close Icon
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            ) : (
              // Hamburger Icon
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            )}
          </button>
        </div>
      </header>

      {/* --- Mobile Menu Overlay --- */}
      <div
        className={`fixed inset-0 z-50 sm:hidden transition-all duration-300 ${isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
          }`}
      >
        {/* Dark Backdrop */}
        <div
          onClick={closeMenu}
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          aria-hidden="true"
        />

        {/* Sliding Panel */}
        <div
          className={`
            absolute top-0 right-0 h-full w-[75%] max-w-xs 
            bg-[#121212] border-l border-white/10 shadow-2xl 
            flex flex-col p-6 transition-transform duration-300 ease-out
            ${isMenuOpen ? "translate-x-0" : "translate-x-full"}
          `}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header inside mobile menu */}
          <div className="flex justify-between items-center mb-10 border-b border-white/10 pb-4">
            <span className="font-Oxanium text-white/50 text-sm tracking-widest">MENU</span>
            <button
              onClick={closeMenu}
              className="p-2 bg-white/5 rounded-full text-accent-color hover:bg-white/10 transition-colors"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Mobile Links */}
          <nav className="flex flex-col gap-6 items-center text-center">
            <NavLinks isMobile={true} closeMenu={closeMenu} />
          </nav>

          {/* Decorative footer in menu */}
          <div className="mt-auto text-center">
            <p className="text-white/20 text-xs font-Lato">© 2025 Kalkidan Birhanu</p>
          </div>
        </div>
      </div>
    </>
  );
}