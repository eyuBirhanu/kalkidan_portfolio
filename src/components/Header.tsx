// src/components/Header.tsx
import { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import Logo from "./Logo";

// NavLinks component (no changes needed, but kept for context)
interface NavLinksProps {
  isMobile: boolean;
  closeMenu?: () => void;
}
const NavLinks = ({ isMobile, closeMenu }: NavLinksProps) => {
  const linkClass =
    "relative w-fit group cursor-pointer flex flex-col justify-center items-center hover:text-accent-color transition-colors";
  const activeLinkClass = "text-accent-color";
  const underlineClass =
    "absolute bottom-0 h-0.5 w-0 group-hover:w-11/12 transition-all delay-150 rounded-sm bg-accent-color";
  const mobileUnderline =
    "h-0.5 w-0 group-hover:w-11/12 transition-all delay-150 rounded-sm bg-accent-color mt-1";
  return (
    <>
      <NavLink
        to="/"
        className={({ isActive }) =>
          `${linkClass} ${isActive ? activeLinkClass : ""}`
        }
        onClick={closeMenu}
      >
        HOME <div className={isMobile ? mobileUnderline : underlineClass}></div>
      </NavLink>
      <NavLink
        to="/works"
        className={({ isActive }) =>
          `${linkClass} ${isActive ? activeLinkClass : ""}`
        }
        onClick={closeMenu}
      >
        WORKS{" "}
        <div className={isMobile ? mobileUnderline : underlineClass}></div>
      </NavLink>
      <NavLink
        to="/contact"
        className={({ isActive }) =>
          `${linkClass} ${isActive ? activeLinkClass : ""}`
        }
        onClick={closeMenu}
      >
        CONTACT{" "}
        <div className={isMobile ? mobileUnderline : underlineClass}></div>
      </NavLink>
    </>
  );
};

// Main Header Component
export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  // No change to toggle/close functions
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);

  return (
    <>
      {/* The main header bar (z-50) */}
      <header className="flex justify-center">
        <div className="fixed top-4 z-40 flex justify-between items-center w-11/12 h-12 px-4 bg-white/5 backdrop-blur-xl rounded-lg">
          <Link
            to="/"
            onClick={closeMenu}
            className="font-Lato text-lg font-extrabold"
          >
            <Logo />
          </Link>

          <button
            id="menu"
            className="sm:hidden"
            onClick={toggleMenu}
            aria-label="Open menu"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 18L19 18M13 6L19 6M5 12H19"
                stroke="#FFC800"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </button>

          <nav className="hidden font-Oxanium text-base font-extralight text-white sm:flex items-center text-center justify-center gap-20 list-none">
            <NavLinks isMobile={false} />
          </nav>
        </div>
      </header>

      {/* --- REVISED MOBILE MENU OVERLAY AND PANEL --- */}
      {/* This is the container for the entire mobile menu experience */}
      <div
        id="mobile-menu-container"
        className={`fixed inset-0 z-50 sm:hidden transition-opacity duration-300 ease-in-out ${
          isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* The darker background overlay. It calls closeMenu when clicked. */}
        <div
          onClick={closeMenu}
          // FIX 1: Increased opacity for better contrast
          className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          aria-hidden="true"
        ></div>

        {/* The menu panel itself, which slides in from the right */}
        <div
          id="mobile-menu-panel"
          // We stop propagation so clicking inside the menu doesn't close it
          onClick={(e) => e.stopPropagation()}
          className={`absolute top-0 right-0 h-full w-4/5 max-w-xs bg-light-black/95 flex flex-col gap-4 p-4 transition-transform duration-300 ease-in-out ${
            isMenuOpen
              ? "transform translate-x-0"
              : "transform translate-x-full"
          }`}
        >
          {/* FIX 2: Close button is now the FIRST item inside the panel */}
          <div className="self-end mt-4 pl-4">
            <button id="close" onClick={closeMenu} aria-label="Close menu">
              <svg
                width="24"
                height="24"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M24.4129 6.91291C24.7791 6.5468 24.7791 5.9532 24.4129 5.58709C24.0468 5.22097 23.4532 5.22097 23.0871 5.58709L15 13.6742L6.91291 5.58709C6.5468 5.22097 5.9532 5.22097 5.58709 5.58709C5.22097 5.95321 5.22097 6.5468 5.58709 6.91292L13.6742 15L5.58712 23.0871C5.221 23.4532 5.221 24.0468 5.58712 24.4129C5.95324 24.779 6.54683 24.779 6.91295 24.4129L15 16.3258L23.0871 24.4129C23.4532 24.779 24.0468 24.779 24.4129 24.4129C24.779 24.0468 24.779 23.4532 24.4129 23.0871L16.3258 15L24.4129 6.91291Z"
                  fill="#FFC800"
                />
              </svg>
            </button>
          </div>

          {/* Navigation Links inside the panel */}
          <nav className="font-Oxanium text-xl font-extralight text-white flex flex-col bg-light-black gap-12 mx-2 ps-4 py-8 list-none rounded-xl ">
            <NavLinks isMobile={true} closeMenu={closeMenu} />
          </nav>
        </div>
      </div>
    </>
  );
}
