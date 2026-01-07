import { Link } from "react-router-dom";
import Logo from "./Logo";
import personalInfo from "../data/personalInfo.json";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-white/5 pt-16 pb-8 font-Lato text-paragraph">
      <div className="w-11/12 max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-start gap-10">

        {/* 1. Brand Section */}
        <div className="flex flex-col items-center md:items-start gap-4 text-center md:text-left">
          <Link to="/" className="text-white hover:text-accent-color transition-colors opacity-90 hover:opacity-100">
            <Logo className="h-8 w-auto" />
          </Link>
          <p className="max-w-xs text-sm text-white/50 leading-relaxed">
            Visual Storyteller & Digital Strategist based in Addis Ababa.
            Turning ideas into impact.
          </p>
        </div>

        {/* 2. Navigation Links */}
        <div className="flex gap-8 font-Oxanium font-bold text-sm tracking-wider text-white/80">
          <Link to="/" className="hover:text-accent-color transition-colors">
            HOME
          </Link>
          <Link to="/works" className="hover:text-accent-color transition-colors">
            WORKS
          </Link>
          <Link to="/contact" className="hover:text-accent-color transition-colors">
            CONTACT
          </Link>
        </div>

        {/* 3. Social Links (Pulled from JSON) */}
        <div className="flex gap-4">
          {personalInfo.socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/5 rounded-full text-white/70 hover:text-black hover:bg-accent-color transition-all duration-300"
              aria-label={social.name}
            >
              {/* Simple Dynamic Icon Logic based on name */}
              {social.name.toLowerCase().includes("linkedin") && (
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
              )}
              {social.name.toLowerCase().includes("telegram") && (
                <svg
                  className="w-[20px] h-[20px]"
                  viewBox="0 0 100 100"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M89.442 11.418c-12.533 5.19-66.27 27.449-81.118 33.516-9.958 3.886-4.129 7.529-4.129 7.529s8.5 2.914 15.786 5.1 11.172-.243 11.172-.243l34.244-23.073c12.143-8.257 9.229-1.457 6.315 1.457-6.315 6.315-16.758 16.272-25.501 24.287-3.886 3.4-1.943 6.315-.243 7.772 6.315 5.343 23.558 16.272 24.53 17.001 5.131 3.632 15.223 8.861 16.758-2.186l6.072-38.13c1.943-12.872 3.886-24.773 4.129-28.173.728-8.257-8.015-4.857-8.015-4.857z" />
                </svg>
              )}
              {social.name.toLowerCase().includes("youtube") && (
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" /></svg>
              )}
              {/* Fallback Icon for Email/Other */}
              {(!social.name.toLowerCase().match(/linkedin|telegram|youtube/)) && (
                <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" /></svg>
              )}
            </a>
          ))}
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="w-11/12 max-w-7xl mx-auto mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-white/30">
        <p>
          Copyright © {currentYear} Kalkidan Birhanu. All rights reserved.
        </p>
        <p>
          Developed by{" "}
          <a
            className="text-white/60 hover:text-accent-color hover:underline transition-colors"
            href="https://www.linkedin.com/in/eyu-birhanu/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Eyu Birhanu
          </a>
        </p>
      </div>
    </footer>
  );
}