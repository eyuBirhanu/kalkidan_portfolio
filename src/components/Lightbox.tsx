// src/components/Lightbox.tsx
import { useEffect, useCallback } from "react";
import type { Project } from "../types";

interface LightboxProps {
    project: Project;
    onClose: () => void;
    onNext: () => void;
    onPrev: () => void;
    hasNext: boolean;
    hasPrev: boolean;
}

export default function Lightbox({
    project,
    onClose,
    onNext,
    onPrev,
    hasNext,
    hasPrev,
}: LightboxProps) {

    // Handle Keyboard Navigation
    const handleKeyDown = useCallback(
        (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
            if (e.key === "ArrowRight" && hasNext) onNext();
            if (e.key === "ArrowLeft" && hasPrev) onPrev();
        },
        [onClose, onNext, onPrev, hasNext, hasPrev]
    );

    useEffect(() => {
        document.addEventListener("keydown", handleKeyDown);
        document.body.style.overflow = "hidden"; // Prevent background scroll
        return () => {
            document.removeEventListener("keydown", handleKeyDown);
            document.body.style.overflow = "auto";
        };
    }, [handleKeyDown]);

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md">
            {/* Close Button */}
            <button
                onClick={onClose}
                className="absolute top-4 right-4 z-50 p-2 text-white/50 hover:text-accent-color transition-colors"
            >
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M18 6L6 18M6 6l12 12" />
                </svg>
            </button>

            {/* Prev Button */}
            {hasPrev && (
                <button
                    onClick={(e) => { e.stopPropagation(); onPrev(); }}
                    className="absolute left-4 z-50 p-2 text-white/50 hover:text-white transition-colors hidden sm:block bg-black/50 rounded-full"
                >
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M15 19l-7-7 7-7" />
                    </svg>
                </button>
            )}

            {/* Main Content */}
            <div className="relative w-full h-full max-w-7xl max-h-screen p-4 sm:p-10 flex flex-col items-center justify-center" onClick={(e) => e.stopPropagation()}>

                {project.type === "video" && (
                    <div className={`w-full ${project.format === 'portrait' ? 'max-w-md aspect-[9/16]' : 'aspect-video'} bg-black rounded-lg overflow-hidden shadow-2xl border border-white/10`}>
                        <iframe
                            className="w-full h-full"
                            src={`${project.videoUrl}${project.videoUrl.includes("?") ? "&" : "?"}autoplay=1`}
                            title={project.title}
                            allow="autoplay; encrypted-media"
                            allowFullScreen
                        ></iframe>
                    </div>
                )}

                {project.type === "graphic" && (
                    <img
                        src={project.fullImageUrl}
                        alt={project.title}
                        className="max-h-[85vh] max-w-full object-contain shadow-2xl rounded-sm"
                    />
                )}

                {project.type === "social" && (
                    <div className="bg-light-black p-8 rounded-xl max-w-lg text-center border border-white/10">
                        <img src={project.thumbnailUrl} alt={project.title} className="w-full h-64 object-cover rounded-lg mb-6" />
                        <h2 className="text-2xl font-Oxanium font-bold text-white mb-2">{project.title}</h2>
                        <p className="text-paragraph mb-6">{project.description}</p>
                        {project.stats && (
                            <div className="mb-6 inline-block px-4 py-1 border border-accent-color/30 rounded text-accent-color font-mono text-sm">
                                {project.stats}
                            </div>
                        )}
                        <a
                            href={project.link}
                            target="_blank"
                            className="block w-full bg-accent-color text-black font-bold py-3 rounded hover:bg-white transition-colors"
                        >
                            View Live Post
                        </a>
                    </div>
                )}

                {/* Caption */}
                {project.type !== "social" && (
                    <div className="absolute bottom-4 sm:bottom-8 bg-black/60 px-6 py-3 rounded-full backdrop-blur-sm border border-white/10">
                        <p className="text-white font-Oxanium text-lg">
                            <span className="text-accent-color font-bold">{project.client}</span> {project.client && "|"} {project.title}
                        </p>
                    </div>
                )}
            </div>

            {/* Next Button */}
            {hasNext && (
                <button
                    onClick={(e) => { e.stopPropagation(); onNext(); }}
                    className="absolute right-4 z-50 p-2 text-white/50 hover:text-white transition-colors hidden sm:block bg-black/50 rounded-full"
                >
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M9 5l7 7-7 7" />
                    </svg>
                </button>
            )}
        </div>
    );
}