// src/pages/HomePage.tsx
import { Link } from "react-router-dom";
import useSetTitle from "../hooks/useSetTitle";
import Timeline from "../components/Timeline";
import ClientMarquee from "../components/ClientMarquee";
import personalInfo from "../data/personalInfo.json";
import type { Project } from "../types";
import ProjectCard from "../components/ProjectCard";
import { useState } from "react";
import projectsData from "../data/projects.json";
import Lightbox from "../components/Lightbox";

export default function HomePage() {
  useSetTitle("Kalkidan Birhanu | Creative Professional");
  const allProjects = projectsData as Project[];
  const featuredProjects = allProjects.slice(0, 3);

  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <>
      {/* 1. Hero Section (Updated Copy) */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">

        {/* --- BACKGROUND LAYERS --- */}

        {/* 1. The Image (Fixed attachment creates parallax effect) */}
        <div className="absolute inset-0 bg-home-mobile-hero sm:bg-home-desktop-hero bg-cover bg-center sm:bg-fixed scale-110 motion-safe:animate-[shrink_20s_linear_infinite_alternate]"></div>

        {/* 2. Dark Gradient Overlay (Top to Bottom) */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-[#0B0B0B]"></div>

        {/* 3. Grid Pattern Overlay */}
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.05]"></div>

        {/* --- CONTENT --- */}
        <div className="relative z-10 w-11/12 max-w-5xl text-center flex flex-col items-center gap-8 pt-10">

          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md animate-fade-in-down">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>
            <span className="text-sm font-mono text-white/80 tracking-wide uppercase">Available for new projects</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl sm:text-7xl md:text-8xl font-Orbitron font-black text-white leading-[1.1] tracking-tight drop-shadow-2xl">
            Visuals that <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">Speak</span>.
            <br />
            Stories that <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-color to-yellow-200">Connect</span>.
          </h1>

          {/* Subtext with "Skill Pills" */}
          <p className="text-lg sm:text-xl text-white/70 max-w-3xl leading-relaxed font-Lato">
            I am a multi-disciplinary creative fusing
            <span className="inline-block mx-1.5 px-3 py-0.5 bg-white/10 border border-white/10 rounded-md text-white font-bold text-sm align-middle hover:bg-white/20 transition-colors cursor-default">
              Video Editing
            </span>
            <span className="inline-block mx-1.5 px-3 py-0.5 bg-white/10 border border-white/10 rounded-md text-white font-bold text-sm align-middle hover:bg-white/20 transition-colors cursor-default">
              Graphic Design
            </span>
            and
            <span className="inline-block mx-1.5 px-3 py-0.5 bg-white/10 border border-white/10 rounded-md text-white font-bold text-sm align-middle hover:bg-white/20 transition-colors cursor-default">
              Digital Strategy
            </span>
            to build brands that dominate their niche.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-5 mt-4 w-full sm:w-auto">
            <Link
              to="/works"
              className="group relative px-8 py-4 bg-accent-color text-black font-Oxanium font-bold text-lg rounded-lg overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_20px_rgba(255,200,0,0.4)]"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                View Selected Works
                <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </span>
            </Link>

            <Link
              to="/contact"
              className="group px-8 py-4 bg-transparent border border-white/30 text-white font-Oxanium font-bold text-lg rounded-lg backdrop-blur-sm transition-all hover:bg-white hover:text-black hover:border-white"
            >
              Let's Talk
            </Link>
          </div>

        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 animate-bounce">
          <span className="text-[10px] uppercase tracking-[0.2em] text-white">Scroll</span>
          <div className="w-5 h-8 border-2 border-white/50 rounded-full flex justify-center pt-1">
            <div className="w-1 h-1.5 bg-accent-color rounded-full animate-ping"></div>
          </div>
        </div>

      </section>
      <ClientMarquee />

      <section className="py-24 bg-[#0B0B0B] border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6">

          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <h2 className="text-3xl font-Oxanium font-bold text-white mb-2">Selected Works</h2>
              <p className="text-paragraph">A glimpse into my recent creations.</p>
            </div>
            <Link to="/works" className="hidden md:flex items-center gap-2 text-accent-color hover:text-white transition-colors font-bold">
              View Full Archive &rarr;
            </Link>
          </div>

          {/* Reuse the Project Cards in a Simple Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onClick={setSelectedProject}
              />
            ))}
          </div>

          <Link to="/works" className="md:hidden mt-8 flex items-center justify-center gap-2 text-accent-color hover:text-white transition-colors font-bold">
            View Full Archive &rarr;
          </Link>

        </div>
      </section>

      {/* 2. Services Section (New) */}
      <section className="relative py-32 bg-black overflow-hidden">

        {/* Subtle Background Textures */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">

          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <h2 className="text-4xl md:text-5xl font-Orbitron font-bold text-white mb-4">
                My <span className="text-accent-color">Expertise</span>
              </h2>
              <p className="text-paragraph max-w-md">
                A comprehensive suite of creative services designed to elevate your brand presence across every digital channel.
              </p>
            </div>
            {/* Decorative Line */}
            <div className="hidden md:block h-px w-32 bg-white/20 mb-4"></div>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {personalInfo.services.map((service, index) => (
              <div
                key={index}
                className="group relative bg-[#0B0B0B] border border-white/10 p-8 sm:p-10 overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:border-white/20 hover:shadow-2xl hover:shadow-accent-color/5"
              >

                {/* Background Large Number (01, 02...) */}
                <span className="absolute -right-4 -top-8 text-[180px] font-Orbitron font-bold text-white/[0.03] group-hover:text-accent-color/[0.05] transition-colors duration-500 select-none pointer-events-none">
                  0{index + 1}
                </span>

                {/* Icon Container */}
                <div className="relative w-14 h-14 mb-8 flex items-center justify-center bg-white/5 rounded-lg border border-white/5 group-hover:border-accent-color/50 group-hover:bg-accent-color/10 transition-all duration-500">
                  {/* We render specific icons based on the index since we know the order */}
                  {index === 0 && ( // Video
                    <svg className="w-7 h-7 text-white group-hover:text-accent-color transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>
                  )}
                  {index === 1 && ( // Graphic
                    <svg className="w-7 h-7 text-white group-hover:text-accent-color transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" /></svg>
                  )}
                  {index === 2 && ( // Strategy/Social
                    <svg className="w-7 h-7 text-white group-hover:text-accent-color transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
                  )}
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-2xl font-Oxanium font-bold text-white mb-4 group-hover:text-accent-color transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-paragraph leading-relaxed mb-6 group-hover:text-white/80 transition-colors">
                    {service.desc}
                  </p>

                  {/* Fake "Learn More" Text */}
                  <div className="flex items-center gap-2 text-sm font-bold text-white/40 group-hover:text-white transition-colors">
                    <span className="uppercase tracking-widest">Capabilities</span>
                    <div className="h-px w-8 bg-white/20 group-hover:bg-accent-color transition-colors"></div>
                  </div>
                </div>

                {/* Animated Bottom Bar */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-white/5">
                  <div className="h-full bg-accent-color w-0 group-hover:w-full transition-all duration-700 ease-out"></div>
                </div>

              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-32 bg-[#050505] overflow-hidden">

        {/* --- Background Textures --- */}
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]"></div>
        {/* Soft Spotlights */}
        <div className="absolute left-0 top-1/4 w-[500px] h-[500px] bg-accent-color/5 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute right-0 bottom-0 w-[400px] h-[400px] bg-white/5 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16">

          {/* Left Column: Timeline (Spans 7 columns) */}
          <div className="lg:col-span-7">
            <div className="flex items-end gap-4 mb-10">
              <h2 className="text-4xl md:text-5xl font-Orbitron font-bold text-white">
                My Journey
              </h2>
              <div className="h-1 flex-grow bg-gradient-to-r from-accent-color/50 to-transparent rounded-full mb-3"></div>
            </div>
            <Timeline />
          </div>

          {/* Right Column: Bio & Skills (Spans 5 columns) - STICKY ON DESKTOP */}
          <div className="lg:col-span-5 relative">
            <div className="lg:sticky lg:top-24 flex flex-col gap-12">

              {/* Bio Card */}
              <div className="bg-[#0B0B0B]/80 border border-white/5 p-8 rounded-2xl backdrop-blur-sm">
                <h2 className="text-2xl font-Oxanium font-bold text-white mb-6 flex items-center gap-2">
                  <span className="text-accent-color">/</span> Behind the Scenes
                </h2>
                <p className="text-paragraph text-lg leading-relaxed">
                  I don't just use tools; I solve problems. Whether it's leading a creative team at <span className="text-white font-bold">Emagn</span> or crafting a solo campaign for <span className="text-white font-bold">SkillBridge</span>, I bring technical precision and creative direction to every project.
                </p>
                <p className="text-paragraph text-lg leading-relaxed mt-4">
                  My background in Engineering gives me a unique structured approach to creativity.
                </p>
              </div>

              {/* Tech Stack Grid */}
              <div>
                <h3 className="text-xl font-Oxanium font-bold text-white mb-6 flex items-center gap-2">
                  <span className="text-accent-color">/</span> The Arsenal
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {personalInfo.tools.map((tool) => (
                    <div
                      key={tool.name}
                      className="group flex flex-col items-center justify-center gap-2 p-4 bg-white/5 border border-white/5 rounded-xl hover:border-accent-color/50 hover:bg-white/10 transition-all duration-300 cursor-default"
                    >
                      {/* We simulate an icon placeholder if you don't have SVGs yet */}
                      <div className="w-2 h-2 rounded-full bg-accent-color/30 group-hover:bg-accent-color mb-1 transition-colors"></div>
                      <span className="text-sm font-medium text-white/80 group-hover:text-white">{tool.name}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* 4. CTA */}
      <section className="relative py-32 flex items-center justify-center overflow-hidden">

        {/* --- BACKGROUND EFFECTS --- */}

        {/* 1. The Grid Pattern (Low opacity) */}
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] pointer-events-none"></div>

        {/* 2. The Massive Glow (Blurry Thing) */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-color/20 rounded-full blur-[120px] pointer-events-none animate-pulse"></div>

        {/* 3. Floating Geometric Shapes (Optional creative touch) */}
        <div className="absolute left-[10%] top-[20%] w-20 h-20 border border-white/10 rounded-full blur-[1px] animate-bounce duration-[3000ms]"></div>
        <div className="absolute right-[15%] bottom-[20%] w-32 h-32 border border-accent-color/10 rounded-full blur-[2px] animate-pulse"></div>

        {/* --- MAIN CARD CONTENT --- */}
        <div className="relative z-10 w-11/12 max-w-4xl">
          <div className="group relative bg-[#0B0B0B]/60 backdrop-blur-xl border border-white/10 rounded-3xl p-8 sm:p-16 text-center overflow-hidden transition-all duration-500 hover:border-accent-color/30 hover:shadow-[0_0_50px_rgba(0,0,0,0.5)]">

            {/* Hover Shine Effect across the card */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] pointer-events-none"></div>

            <h2 className="text-3xl sm:text-5xl font-Orbitron font-bold text-white mb-6 leading-tight">
              Have a vision in mind? <br />
              Let's make it <span className="text-accent-color inline-block transform group-hover:scale-110 transition-transform duration-300">Iconic.</span>
            </h2>

            <p className="text-paragraph text-lg mb-10 max-w-lg mx-auto">
              From raw footage to polished masterpiece, or from blank canvas to brand identity. I'm ready to join your team.
            </p>

            <Link
              to="/contact"
              className="relative inline-flex items-center justify-center px-10 py-4 font-Oxanium font-bold text-lg text-black transition-all duration-300 bg-white rounded-full group-hover:bg-accent-color group-hover:shadow-[0_0_20px_rgba(255,200,0,0.6)] hover:scale-105 active:scale-95"
            >
              Start a Project
              <svg className="w-5 h-5 ml-2 -mr-1 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
            </Link>

          </div>
        </div>
      </section>
      {selectedProject && (
        <Lightbox
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
          onNext={() => { }} // Disabled for homepage (keep it simple)
          onPrev={() => { }} // Disabled for homepage
          hasNext={false}
          hasPrev={false}
        />
      )}
    </>
  );
}