import useSetTitle from "../hooks/useSetTitle";
import { Link } from "react-router-dom";
import personalInfo from "../data/personalInfo.json";
import projects from "../data/projects.json";
import VideoCard from "../components/VideoCard";

const featuredProjects = projects.slice(0, 3); // Show first 3 projects

export default function HomePage() {
  useSetTitle("Kalkidan Birhanu | Creative Portfolio");
  return (
    <>
      {/* Hero Section */}
      <section className="relative flex items-center justify-center top-0 z-0 bg-home-mobile-hero sm:bg-home-desktop-hero w-screen h-screen bg-cover bg-center rounded-b-lg">
        <div className="flex items-center justify-center gap-8 flex-col w-11/12 sm:w-9/12 text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl text-primary-white font-Orbitron font-semibold sm:w-11/12">
            Transforming Ideas into{" "}
            <span className="text-accent-color font-black">Captivating</span>{" "}
            Visuals.
          </h1>
          <p className="sm:w-8/12">
            Hi, I'm{" "}
            <span className="text-dark-yellow">{personalInfo.name}</span>, a
            video editor and designer. I create compelling videos, design unique
            logos, and bring graphics to life, transforming ideas into visual
            stories.
          </p>
          <Link
            to="/works"
            className="flex gap-2 items-center text-center justify-center bg-white/10 backdrop-blur-lg border rounded-2xl ps-6 pe-4 py-1 hover:bg-white/20 transition-colors duration-300  text-white hover:text-dark-yellow"
          >
            <p className="font-Oxanium text-white text-lg text-center ">
              Featured Projects
            </p>
            <svg
              width="51"
              height="50"
              viewBox="0 0 51 50"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M42.5 25C42.5 34.4 34.9 42 25.5 42C16.1 42 8.5 34.4 8.5 25C8.5 15.6 16.1 8 25.5 8C34.9 8 42.5 15.6 42.5 25ZM10.5 25C10.5 33.3 17.2 40 25.5 40C33.8 40 40.5 33.3 40.5 25C40.5 16.7 33.8 10 25.5 10C17.2 10 10.5 16.7 10.5 25Z"
                fill="white"
              />
              <path
                d="M34.9001 25L25.2001 34.7L23.8 33.3L32.1 25L23.8 16.7L25.2 15.2999L34.9001 25Z"
                fill="white"
              />
              <path
                d="M16.5 26L16.5 24L33.5 24L33.5 26L16.5 26Z"
                fill="white"
              />
            </svg>
          </Link>
        </div>
        {/* ... scroll indicator ... */}
      </section>

      {/* About Section */}
      <section
        id="about"
        className="relative flex flex-col items-center justify-center lg:flex-row-reverse gap-12 lg:gap-32 py-12 mx-6"
      >
        <div className="absolute left-0 -bottom-24 z-0 w-36 h-36 rounded-full bg-accent-color blur-[150px]"></div>
        <div className="self-center w-1/2 lg:w-3/12">
          <img src="/assets/kalkidan-mobile.png" alt="kalkidan-image" />
        </div>
        <div className="flex flex-col gap-4 lg:w-1/2 lg:justify-self-start -start">
          <div>
            <h2 className="flex items-center gap-2 font-Oxanium text-white font-semibold text-2xl">
              Meet Kalkidan{" "}
              <div className="h-0.5 w-20 bg-paragraph rounded-sm"></div>
            </h2>
            <p className="text-dark-yellow">About me</p>
          </div>
          <div className="flex flex-col gap-3 w-11/12">
            <p>{personalInfo.about_p1}</p>
            <p>{personalInfo.about_p2}</p>
            <p>{personalInfo.about_p3}</p>
          </div>
          <a
            href={personalInfo.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-accent-color text-lg font-Oxanium font-bold w-fit px-10 py-2 text-dark-gray rounded-lg hover:bg-dark-yellow"
          >
            RESUME
          </a>
          <div className="flex gap-4">
            <p className="font-Oxanium text-white text-lg">Social links :</p>
            <div className="flex gap-2 items-center">
              {personalInfo.socialLinks.map((link, index) => (
                <span key={link.name} className="flex gap-2 items-center">
                  <a className="hover:underline" href={link.url}>
                    {link.name}
                  </a>
                  {index < personalInfo.socialLinks.length - 1 && <p>/</p>}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="relative z-20 flex items-center justify-center pb-20">
        <div className="bg-light-black w-11/12 rounded-lg">
          <div className="relative flex flex-col gap-6 pt-8 pb-12 mx-auto max-w-7xl px-6">
            {" "}
            {/* Use mx-auto and max-width */}
            <div>
              <h2 className="flex items-center gap-2 font-Oxanium text-white font-semibold text-2xl">
                Featured Projects
              </h2>
              <p className="text-dark-yellow">My Works</p>
            </div>
            {/* --- FIX: Use our new responsive grid class --- */}
            <div className="grid grid-cols-responsive gap-6">
              {featuredProjects.map((project) => (
                <VideoCard key={project.id} project={project} />
              ))}
            </div>
            <Link
              to="/works"
              className="absolute w-32 sm:w-40 -bottom-4 translate-x-1/2 right-1/2 px-4 py-2 bg-white/25 text-white font-semibold text-lg rounded-lg font-Oxanium hover:bg-white/35 text-center"
            >
              See More
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
