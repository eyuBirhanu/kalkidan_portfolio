import { Link } from "react-router-dom";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="bg-light-black font-Lato flex flex-col gap-4 text-center py-6 px-6 text-sm sm:text-base text-paragraph">
      <div className="flex flex-col sm:flex-row sm:justify-between px-20 gap-2 text-center items-center justify-center ">
        <Link to="/">
          <div className="opacity-50">
            <Logo />
          </div>
        </Link>
        <div className="flex gap-2 ">
          <Link className="hover:text-white/80" to="/">
            Home
          </Link>
          <p>/</p>
          <Link className="hover:text-white/80" to="/works">
            Works
          </Link>
          <p>/</p>
          <Link className="hover:text-white/80" to="/contact">
            Contact
          </Link>
        </div>
      </div>
      <hr className="border-white/20" />
      <p className="text-sm">
        Copyright © 2025{" "}
        <a
          className="text-white/70 hover:text-white/90 hover:underline"
          href="https://www.linkedin.com/in/eyu-birhanu/"
          target="_blank"
        >
          Eyu Birhanu
        </a>
        {". "}
        All rights reserved.
      </p>
    </footer>
  );
}
