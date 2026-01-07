import clientsData from "../data/clients.json";

interface Client {
    id: number;
    name: string;
    logo: string;
}

const clients = clientsData as Client[];

export default function ClientMarquee() {
    return (
        <div className="w-full bg-black border-y border-white/5 py-12 flex flex-col items-center gap-6">

            {/* Optional Label */}
            <p className="text-white/30 text-xs font-Oxanium tracking-[0.3em] uppercase">
                Trusted by Innovative Teams
            </p>

            <div className="relative flex w-full max-w-[100vw] overflow-hidden group">

                {/* The Scrolling Container */}
                <div className="flex animate-marquee whitespace-nowrap min-w-full items-center">

                    {/* First Set of Logos */}
                    {clients.map((client) => (
                        <div
                            key={`1-${client.id}`}
                            className="mx-8 sm:mx-12 flex items-center justify-center opacity-40 grayscale transition-all duration-500 hover:opacity-100 hover:grayscale-0 cursor-pointer"
                        >
                            <img
                                src={client.logo}
                                alt={`${client.name} logo`}
                                className="h-8 sm:h-10 w-auto object-contain brightness-200 contrast-0 hover:brightness-100 hover:contrast-100 transition-all duration-300"
                            // The styling 'brightness-200 contrast-0' makes any colored logo appear white/grey initially
                            />
                        </div>
                    ))}

                    {/* Second Set (Duplicate for smooth loop) */}
                    {clients.map((client) => (
                        <div
                            key={`2-${client.id}`}
                            className="mx-8 sm:mx-12 flex items-center justify-center opacity-40 grayscale transition-all duration-500 hover:opacity-100 hover:grayscale-0 cursor-pointer"
                        >
                            <img
                                src={client.logo}
                                alt={`${client.name} logo`}
                                className="h-8 sm:h-10 w-auto object-contain brightness-200 contrast-0 hover:brightness-100 hover:contrast-100 transition-all duration-300"
                            />
                        </div>
                    ))}

                </div>

                {/* Cinematic Fade Edges */}
                <div className="absolute top-0 left-0 w-24 h-full bg-gradient-to-r from-black via-black/80 to-transparent pointer-events-none z-10"></div>
                <div className="absolute top-0 right-0 w-24 h-full bg-gradient-to-l from-black via-black/80 to-transparent pointer-events-none z-10"></div>
            </div>
        </div>
    );
}