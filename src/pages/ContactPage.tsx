import useSetTitle from "../hooks/useSetTitle";
import personalInfo from "../data/personalInfo.json";

export default function ContactPage() {
  useSetTitle("Contact | Kalkidan Birhanu");

  const contactOptions = [
    {
      title: "Email Me",
      value: personalInfo.email,
      action: "Send Email",
      link: `mailto:${personalInfo.email}`,
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
      ),
      desc: "For project inquiries, bookings, and official business."
    },
    {
      title: "LinkedIn",
      value: "Connect professionally",
      action: "View Profile",
      link: "https://www.linkedin.com/in/kalkidan-birhanu/",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
      ),
      desc: "For networking, verifying experience, and endorsements."
    },
    {
      title: "Telegram",
      value: "Quick Chat",
      action: "Message Me",
      // MAKE SURE to update this link in your JSON or here directly
      link: "https://t.me/kal982",
      icon: (
        <svg
          className="w-8 h-8"
          viewBox="0 0 100 100"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M89.442 11.418c-12.533 5.19-66.27 27.449-81.118 33.516-9.958 3.886-4.129 7.529-4.129 7.529s8.5 2.914 15.786 5.1 11.172-.243 11.172-.243l34.244-23.073c12.143-8.257 9.229-1.457 6.315 1.457-6.315 6.315-16.758 16.272-25.501 24.287-3.886 3.4-1.943 6.315-.243 7.772 6.315 5.343 23.558 16.272 24.53 17.001 5.131 3.632 15.223 8.861 16.758-2.186l6.072-38.13c1.943-12.872 3.886-24.773 4.129-28.173.728-8.257-8.015-4.857-8.015-4.857z" />
        </svg>
      ),
      desc: "For quick questions, collaboration ideas, and fast chats."
    }
  ];

  return (
    <section className="relative min-h-screen pt-32 pb-20 bg-[#050505] overflow-hidden px-6">

      {/* --- BACKGROUND EFFECTS --- */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] pointer-events-none"></div>
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent-color/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-white/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="relative z-10 max-w-6xl mx-auto">

        {/* --- HEADER --- */}
        <div className="text-center mb-20 space-y-4">
          <div className="inline-block px-3 py-1 border border-white/10 rounded-full bg-white/5 backdrop-blur-sm mb-4">
            <span className="text-xs font-mono text-accent-color uppercase tracking-widest">Available for Hire</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-Orbitron font-bold text-white tracking-tight">
            Let's <span className="text-accent-color">Create</span> Together
          </h1>
          <p className="text-paragraph text-lg max-w-xl mx-auto leading-relaxed">
            Whether you need a video edited, a brand identity designed, or social media managed—I'm ready to help you tell your story.
          </p>
        </div>

        {/* --- CARDS GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
          {contactOptions.map((opt, idx) => (
            <a
              key={idx}
              href={opt.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-[#0B0B0B] border border-white/10 hover:border-accent-color/50 rounded-2xl p-8 flex flex-col items-center text-center transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(255,200,0,0.1)] overflow-hidden"
            >
              {/* Internal Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

              {/* Large Background Icon Faded */}
              <div className="absolute -right-6 -bottom-6 text-white/[0.03] transform scale-[2.5] group-hover:rotate-12 transition-transform duration-700 pointer-events-none">
                {opt.icon}
              </div>

              {/* Icon Circle */}
              <div className="relative z-10 bg-white/5 p-5 rounded-full text-white group-hover:text-accent-color group-hover:bg-accent-color/10 transition-colors mb-6 border border-white/5 group-hover:border-accent-color/20">
                {opt.icon}
              </div>

              <div className="relative z-10">
                <h3 className="text-2xl font-Oxanium font-bold text-white mb-2">{opt.title}</h3>
                <p className="text-white/50 text-sm mb-8">{opt.desc}</p>

                <span className="inline-flex items-center gap-2 text-accent-color font-bold border-b-2 border-transparent group-hover:border-accent-color transition-all pb-0.5">
                  {opt.action}
                  <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                </span>
              </div>
            </a>
          ))}
        </div>

        {/* --- RESUME SECTION (Technical Style) --- */}
        <div className="flex justify-center">
          <div className="relative group bg-[#0F0F0F] rounded-2xl p-8 md:p-10 w-full max-w-4xl border border-dashed border-white/20 hover:border-accent-color/40 transition-colors flex flex-col md:flex-row items-center justify-between gap-8">

            {/* Left Side Info */}
            <div className="flex items-start gap-6 text-center md:text-left">
              <div className="hidden sm:flex h-16 w-16 items-center justify-center rounded-lg bg-[#1A1A1A] text-white/40 border border-white/10 group-hover:text-white group-hover:border-white/30 transition-colors">
                <span className="font-Oxanium font-bold text-xl">CV</span>
              </div>
              <div>
                <h3 className="text-2xl font-Oxanium font-bold text-white mb-2 group-hover:text-accent-color transition-colors">Professional Resume</h3>
                <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-sm text-paragraph font-mono">
                  <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-green-500"></span> Updated Jan 2025</span>
                  <span>Format: PDF</span>
                  <span>Size: 2.4 MB</span>
                </div>
              </div>
            </div>

            {/* Button */}
            <a
              href={personalInfo.resumeUrl}
              download
              className="bg-white text-black font-Oxanium font-bold px-8 py-4 rounded-lg hover:bg-accent-color transition-all hover:scale-105 hover:shadow-lg flex items-center gap-3"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
              Download CV
            </a>

          </div>
        </div>

      </div>
    </section>
  );
}