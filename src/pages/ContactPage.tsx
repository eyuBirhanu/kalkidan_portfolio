import useSetTitle from "../hooks/useSetTitle";
import ContactForm from "../components/ContactForm";
import personalInfo from "../data/personalInfo.json";

export default function ContactPage() {
  useSetTitle("Contact Me | Kalkidan Birhanu");
  return (
    <>
      <section className="hero contact-hero relative flex items-center justify-center top-0 z-0 w-screen h-[60vh] bg-contact-mobile-hero sm:bg-contact-desktop-hero bg-cover bg-center">
        <div className="flex items-center justify-center gap-4 flex-col w-11/12 sm:w-9/12 text-center">
          <h1 className="text-xl sm:text-2xl lg:text-3xl text-primary-white font-Orbitron font-semibold sm:w-11/12">
            Feel free to{" "}
            <span className="text-accent-color font-black">Reach Out</span>
          </h1>
          <p className="sm:w-8/12">
            Have a project in mind or just want to connect? I’d love to hear
            from you. Fill out the form below or reach out via my social links.
            Let's create something amazing together!
          </p>
        </div>
      </section>

      <section
        id="contact-form"
        className="flex items-center justify-center pt-24 pb-16 "
      >
        <div className="flex flex-col lg:flex-row items-start sm:items-center lg:items-start justify-center gap-16 w-11/12">
          {/* Left Column Info */}
          <div className="flex flex-col gap-12 w-fit pt-4">
            {/* Get in Touch */}
            <div className="flex flex-col gap-4 ">
              <h2 className="flex items-center gap-2 font-Oxanium text-white font-semibold text-2xl">
                Get In <span className="text-accent-color">Touch</span>
              </h2>
              <p className="w-full sm:w-100 ">
                Reach out with any ideas or questions. I’m excited to explore
                the possibilities together.
              </p>
              <div className="flex gap-4">
                <p className="font-Oxanium text-white text-lg">
                  Social links :
                </p>
                <div className="flex gap-2 items-center">
                  {personalInfo.socialLinks.map((link, index) => (
                    <span key={link.name} className="flex gap-2 items-center">
                      <a
                        className="hover:underline text-nowrap"
                        target="_blank"
                        href={link.url}
                      >
                        {link.name}
                      </a>
                      {index < personalInfo.socialLinks.length - 1 && <p>/</p>}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            {/* Subscribe */}
            <div className="flex flex-col gap-2">
              <h2 className="flex items-center gap-2 font-Oxanium text-white font-semibold text-2xl">
                <span className="text-accent-color">Subscribe</span> to my
                channel
              </h2>
              <div className="flex justify-start items-center gap-10">
                <div className="flex gap-2 items-center justify-start">
                  <img
                    className="w-12 h-12"
                    src={personalInfo.youtube.logo}
                    alt="YouTube Logo"
                  />
                  <div className="flex flex-col items-start justify-center">
                    <a
                      href={personalInfo.youtube.channelUrl}
                      className="text-white text-lg"
                    >
                      {personalInfo.youtube.channelName}
                    </a>
                    <p className="text-white/60 text-sm">
                      {personalInfo.youtube.subscribers}
                    </p>
                  </div>
                </div>
                <a
                  href={personalInfo.youtube.channelUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white hover:bg-white/85 text-black px-6 py-2 font-semibold rounded-3xl"
                >
                  Subscribe
                </a>
              </div>
            </div>
          </div>
          {/* Right Column Form */}
          <ContactForm />
        </div>
      </section>
    </>
  );
}
