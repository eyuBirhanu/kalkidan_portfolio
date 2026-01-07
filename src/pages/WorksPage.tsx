// src/pages/WorksPage.tsx
import { useState, useMemo, useEffect } from "react";
import useSetTitle from "../hooks/useSetTitle";
import projectsData from "../data/projects.json";
import ProjectCard from "../components/ProjectCard";
import Lightbox from "../components/Lightbox";
import Skeleton from "../components/Skeleton";
import type { Project } from "../types";

// 1. Cast the JSON data to our Typed Array
const allProjects = projectsData as Project[];

// 2. Define Filter Types
type FilterType = "All" | "Video" | "Graphics" | "Social Media";

export default function WorksPage() {
  useSetTitle("Works | Kalkidan Birhanu");

  // --- STATE ---
  const [activeTab, setActiveTab] = useState<FilterType>("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Simulate loading effect for smooth UX
  useEffect(() => {
    // Scroll to top on mount
    window.scrollTo(0, 0);
    const timer = setTimeout(() => setIsLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  // --- FILTERING LOGIC ---
  const filteredProjects = useMemo(() => {
    return allProjects.filter((project) => {
      // 1. Filter by Tab
      const matchesTab =
        activeTab === "All"
          ? true
          : activeTab === "Video"
            ? project.type === "video"
            : activeTab === "Graphics"
              ? project.type === "graphic"
              : project.type === "social";

      // 2. Filter by Search (Title, Client, or Tags)
      const query = searchQuery.toLowerCase();
      const matchesSearch =
        project.title.toLowerCase().includes(query) ||
        project.client?.toLowerCase().includes(query) ||
        project.tags.some((tag) => tag.toLowerCase().includes(query));

      return matchesTab && matchesSearch;
    });
  }, [activeTab, searchQuery]);

  // --- LIGHTBOX NAVIGATION LOGIC ---
  const handleNext = () => {
    if (!selectedProject) return;
    const currentIndex = filteredProjects.findIndex((p) => p.id === selectedProject.id);
    if (currentIndex < filteredProjects.length - 1) {
      setSelectedProject(filteredProjects[currentIndex + 1]);
    }
  };

  const handlePrev = () => {
    if (!selectedProject) return;
    const currentIndex = filteredProjects.findIndex((p) => p.id === selectedProject.id);
    if (currentIndex > 0) {
      setSelectedProject(filteredProjects[currentIndex - 1]);
    }
  };

  const hasNext = selectedProject
    ? filteredProjects.findIndex((p) => p.id === selectedProject.id) < filteredProjects.length - 1
    : false;

  const hasPrev = selectedProject
    ? filteredProjects.findIndex((p) => p.id === selectedProject.id) > 0
    : false;

  return (
    <>
      {/* --- HERO SECTION --- */}
      <section className="relative w-full pt-32 pb-20 bg-[#050505] overflow-hidden flex flex-col items-center justify-center text-center px-4">

        {/* Background Effects */}
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] pointer-events-none"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-accent-color/10 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#050505]/50 to-[#050505] pointer-events-none"></div>

        <div className="relative z-10 max-w-3xl space-y-4">
          <div className="inline-block px-3 py-1 mb-2 border border-white/10 rounded-full bg-white/5 backdrop-blur-sm">
            <p className="text-xs font-mono text-accent-color uppercase tracking-widest">Portfolio 2025</p>
          </div>
          <h1 className="text-4xl sm:text-6xl font-Orbitron font-bold text-white tracking-tight">
            Creative <span className="text-accent-color">Archive</span>
          </h1>
          <p className="text-paragraph text-lg leading-relaxed max-w-xl mx-auto">
            Explore a curated selection of my best work across video editing, brand identity, and digital strategy.
          </p>
        </div>
      </section>

      {/* --- STICKY CONTROL CENTER --- */}
      <section className="sticky top-0 z-30 bg-[#050505]/80 backdrop-blur-xl border-y border-white/5 py-4 shadow-2xl">
        <div className="w-11/12 max-w-7xl mx-auto flex flex-col md:flex-row gap-4 items-center justify-between">

          {/* Filter Tabs */}
          <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0 w-full md:w-auto scrollbar-hide mask-image-fade">
            {["All", "Video", "Graphics", "Social Media"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab as FilterType)}
                className={`relative px-6 py-2.5 rounded-lg font-Oxanium text-sm transition-all whitespace-nowrap overflow-hidden group ${activeTab === tab
                  ? "bg-white text-black font-bold shadow-[0_0_15px_rgba(255,255,255,0.2)]"
                  : "bg-white/5 text-white/60 hover:bg-white/10 hover:text-white border border-white/5"
                  }`}
              >
                <span className="relative z-10">{tab}</span>
                {/* Subtle shine on hover for inactive tabs */}
                {activeTab !== tab && <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:animate-[shimmer_1s_infinite]"></div>}
              </button>
            ))}
          </div>

          {/* Search Bar */}
          <div className="relative w-full md:w-80 group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-accent-color to-white opacity-0 group-focus-within:opacity-20 transition duration-500 rounded-lg blur"></div>
            <div className="relative flex items-center bg-[#111] border border-white/10 rounded-lg overflow-hidden transition-colors group-focus-within:border-accent-color/50">
              <svg
                className="ml-3 text-white/30 group-focus-within:text-accent-color transition-colors"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
              <input
                type="text"
                placeholder="Search projects..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-transparent text-white px-3 py-2.5 focus:outline-none placeholder:text-white/20 font-Lato text-sm"
              />
            </div>
          </div>
        </div>
      </section>

      {/* --- GALLERY GRID --- */}
      <section className="bg-[#050505] min-h-screen pt-10 pb-24">
        <div className="w-11/12 max-w-7xl mx-auto">

          {/* Results Count (Optional but nice) */}
          <div className="flex justify-between items-center mb-6 px-1">
            <p className="text-white/40 text-sm font-mono">
              Showing {filteredProjects.length} result{filteredProjects.length !== 1 && 's'}
            </p>
            {/* If needed, a 'Clear Filters' button could go here */}
          </div>

          {isLoading ? (
            // SKELETON LOADING
            <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="break-inside-avoid">
                  <Skeleton className={`w-full rounded-xl ${i % 2 === 0 ? 'h-64' : 'h-96'}`} />
                </div>
              ))}
            </div>
          ) : filteredProjects.length > 0 ? (
            // MASONRY LAYOUT
            // We use 'animate-fade-in-up' (add this to tailwind config if not there, or use 'animate-pulse' temporarily)
            <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6 animate-fade-in-up">
              {filteredProjects.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  onClick={setSelectedProject}
                />
              ))}
            </div>
          ) : (
            // EMPTY STATE
            <div className="flex flex-col items-center justify-center py-20 text-white/30 border border-dashed border-white/10 rounded-2xl bg-white/[0.02]">
              <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="mb-4 opacity-50">
                <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <p className="font-Oxanium text-xl text-white/50 mb-2">No projects found</p>
              <p className="text-sm max-w-xs text-center">We couldn't find anything matching "{searchQuery}" in {activeTab}.</p>
              <button
                onClick={() => { setSearchQuery(''); setActiveTab('All'); }}
                className="mt-6 text-accent-color hover:underline text-sm font-bold"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* --- LIGHTBOX --- */}
      {selectedProject && (
        <Lightbox
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
          onNext={handleNext}
          onPrev={handlePrev}
          hasNext={hasNext}
          hasPrev={hasPrev}
        />
      )}
    </>
  );
}