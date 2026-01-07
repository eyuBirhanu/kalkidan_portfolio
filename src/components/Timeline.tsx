// src/components/Timeline.tsx
import personalInfo from "../data/personalInfo.json";

export default function Timeline() {
    return (
        <div className="relative space-y-8 my-4">

            {/* The Timeline Track (Gradient Line) */}
            <div className="absolute left-4 md:left-0 top-2 bottom-2 w-0.5 bg-gradient-to-b from-accent-color via-white/10 to-transparent rounded-full"></div>

            {personalInfo.experience.map((exp, index) => (
                <div key={exp.id} className="relative pl-12 md:pl-12 group">

                    {/* The Glowing Dot */}
                    <div
                        className={`
              absolute left-[13px] md:left-[-3px] top-6 
              h-3 w-3 rounded-full border border-black
              transition-all duration-500 z-10
              ${index === 0 ? "bg-accent-color shadow-[0_0_15px_rgba(255,200,0,0.8)] animate-pulse" : "bg-white/20 group-hover:bg-accent-color group-hover:shadow-[0_0_10px_rgba(255,200,0,0.5)]"}
            `}
                    ></div>

                    {/* The Glass Card */}
                    <div className="relative bg-[#0B0B0B]/40 backdrop-blur-sm border border-white/5 rounded-2xl p-6 transition-all duration-300 hover:border-accent-color/30 hover:bg-[#0B0B0B]/80 hover:-translate-y-1 hover:shadow-xl">

                        {/* Header: Role & Date */}
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2 gap-2">
                            <h3 className="text-xl font-Oxanium font-bold text-white group-hover:text-accent-color transition-colors">
                                {exp.role}
                            </h3>
                            <span className="w-fit text-xs font-mono font-bold text-accent-color bg-accent-color/10 px-3 py-1 rounded-full border border-accent-color/20">
                                {exp.date}
                            </span>
                        </div>

                        {/* Company Name */}
                        <p className="text-white/60 text-sm font-bold uppercase tracking-wider mb-4 flex items-center gap-2">
                            <span className="w-2 h-0.5 bg-accent-color/50"></span>
                            {exp.company}
                        </p>

                        {/* Description */}
                        <p className="text-paragraph text-sm leading-relaxed">
                            {exp.description}
                        </p>

                    </div>
                </div>
            ))}
        </div>
    );
}