import ProjectCard from "../ProjectCard";

export default function OurApps() {
  return (
    <div className="w-full py-12 md:py-20 font-archivo border-t-[3px] border-border bg-background" id="our-products">
      {/* Neubrutalist Marquee Banner */}
      <div className="w-full bg-chart-1 border-y-[3px] border-border py-3 overflow-hidden select-none mb-16 relative">
        <div className="animate-marquee whitespace-nowrap flex gap-8 font-black uppercase text-sm tracking-widest text-black">
          <span>Hub KE Apps &bull; Innovation &bull; Clarity &bull; Accommodica &bull; tazx &bull; Chess Hub Ke &bull; Hub KE Apps &bull; Innovation &bull; Clarity &bull; Accommodica &bull; tazx &bull; Chess Hub Ke &bull; Hub KE Apps &bull; Innovation &bull; Clarity &bull; Accommodica &bull; tazx &bull; Chess Hub Ke &bull;</span>
          <span>Hub KE Apps &bull; Innovation &bull; Clarity &bull; Accommodica &bull; tazx &bull; Chess Hub Ke &bull; Hub KE Apps &bull; Innovation &bull; Clarity &bull; Accommodica &bull; tazx &bull; Chess Hub Ke &bull; Hub KE Apps &bull; Innovation &bull; Clarity &bull; Accommodica &bull; tazx &bull; Chess Hub Ke &bull;</span>
        </div>
      </div>

      <section className="container mx-auto px-4 md:px-8 flex flex-col gap-12">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center gap-2 max-w-2xl mx-auto">
          <span className="bg-chart-3 text-white border-[3px] border-border px-4 py-1.5 shadow-[4px_4px_0px_0px_var(--border)] font-black text-sm uppercase -rotate-1 tracking-wider">
            Active Catalog
          </span>
          <h2 className="text-4xl md:text-5xl font-black uppercase mt-4 text-main-foreground">Our Apps</h2>
          <p className="text-foreground/80 font-medium leading-relaxed mt-2 text-sm md:text-base">
            We have a variety of apps that cater to different needs. Whether
            you&apos;re looking for productivity tools, entertainment, or observability cli systems, we&apos;ve got you covered.
          </p>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto w-full">
          <ProjectCard
            title="Accommodica"
            category="Travel & Hospitality"
            badgeColor="bg-chart-5"
            description="Accommodica is a platform that connects people with unique and affordable accommodations around the world. Whether you're looking for a cozy cabin in the mountains, a beachfront villa, or a stylish city apartment, Accommodica makes it easy to find the perfect place for your next adventure."
            link="https://accommodica.com"
          />
          <ProjectCard
            title="tazx"
            category="DevOps & Observability"
            badgeColor="bg-chart-1"
            description="Originating from Swahili 'tazama' (to look), tazx is a powerful command line tool that simplifies server observability. It provides a unified terminal interface for querying and visualizing system logs, metrics, and traces, enabling developers to monitor performance in real-time."
            link="https://github.com/Hezekiah-Elisha/tazx" 
          />
          <ProjectCard
            title="Chess Hub Ke"
            category="Gaming & Portal"
            badgeColor="bg-chart-2"
            description="Chess Hub Ke is the ultimate platform for chess enthusiasts in Kenya. Connect with local players, join competitive tournaments, and track official FIDE ratings. Designed to enhance the chess experience from beginners to national masters."
            link="https://chess.hub.ke"
          />
        </div>
      </section>
    </div>
  );
}
