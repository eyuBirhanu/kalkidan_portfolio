// src/components/ProjectCard.tsx
import type { Project } from "../types";

interface ProjectCardProps {
    project: Project;
    onClick: (project: Project) => void;
}

export default function ProjectCard({ project, onClick }: ProjectCardProps) {
    return (
        <div
            className="mb-4 break-inside-avoid group relative cursor-pointer overflow-hidden rounded-xl bg-light-black border border-white/5 hover:border-accent-color/50 transition-all duration-300"
            onClick={() => onClick(project)}
        >
            {/* Image Container */}
            <div className="relative w-full overflow-hidden">
                <img
                    src={project.thumbnailUrl}
                    alt={project.title}
                    loading="lazy"
                    className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Overlay with Icon */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="bg-accent-color/90 p-3 rounded-full text-black transform scale-0 group-hover:scale-100 transition-transform duration-300 delay-75">
                        {project.type === "video" && (
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z" /></svg>
                        )}
                        {project.type === "graphic" && (
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" /></svg>
                        )}
                        {project.type === "social" && (
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3" /></svg>
                        )}
                    </div>
                </div>
            </div>

            {/* Info Content */}
            <div className="p-4">
                <div className="flex justify-between items-start mb-1">
                    <p className="font-Oxanium text-xs text-accent-color uppercase tracking-wider">{project.type}</p>
                    {project.client && <span className="text-[10px] bg-white/10 px-2 py-0.5 rounded text-white/70">{project.client}</span>}
                </div>
                <h3 className="font-Lato font-bold text-white text-lg leading-tight group-hover:text-accent-color transition-colors">{project.title}</h3>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-3">
                    {project.tags.slice(0, 2).map(tag => (
                        <span key={tag} className="text-xs text-paragraph">#{tag}</span>
                    ))}
                </div>
            </div>
        </div>
    );
}