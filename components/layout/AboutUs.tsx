import React from 'react'
import Link from 'next/link'

export default function AboutUs() {
  const skills = [
    { name: "Next.js", color: "bg-chart-1" },
    { name: "TypeScript", color: "bg-chart-2" },
    { name: "TailwindCSS", color: "bg-chart-3" },
    { name: "React", color: "bg-chart-4" },
    { name: "Go / CLI Tools", color: "bg-chart-5" },
    { name: "Observability", color: "bg-chart-1" },
    { name: "FIDE Chess Portal", color: "bg-chart-2" },
    { name: "Docker", color: "bg-chart-3" },
    { name: "Linux Systems", color: "bg-chart-4" },
    { name: "API Design", color: "bg-chart-5" },
  ]

  return (
    <div className="w-full py-16 md:py-24 font-archivo border-t-[3px] border-border bg-background" id="about-us">
      <section className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Main Info Board (7 Cols) */}
          <div className="lg:col-span-7 flex flex-col justify-between bg-secondary-background border-[3px] border-border p-6 md:p-10 shadow-[8px_8px_0px_0px_var(--border)] rounded-base relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-chart-4 text-black font-black text-xs px-4 py-1.5 border-b-[3px] border-l-[3px] border-border uppercase">
              Who We Are
            </div>
            
            <div className="flex flex-col gap-6">
              <span className="bg-chart-2 text-black border-[3px] border-border px-4 py-1 shadow-[4px_4px_0px_0px_var(--border)] font-black text-sm uppercase -rotate-1 tracking-wider w-fit">
                Our Vision
              </span>
              <h2 className="text-4xl md:text-5xl font-black uppercase text-main-foreground mt-2">
                Clarity Meets Innovation
              </h2>
              <p className="text-foreground/90 font-medium leading-relaxed text-sm md:text-base">
                Hub KE was established to build tools that simplify everyday digital interactions. We cut through the noise to engineer high-performance systems with gorgeous, intuitive interfaces. 
              </p>
              <p className="text-foreground/90 font-medium leading-relaxed text-sm md:text-base">
                Our engineering practices prioritize speed, visual design integrity, and open-source contribution. We believe that tools should not only work flawlessly but also be delightful to look at and interact with.
              </p>
            </div>

            <div className="mt-8 border-t-[3px] border-border pt-6 flex flex-wrap gap-3">
              <span className="text-xs font-black uppercase text-foreground/50 w-full mb-1">Key Focus Areas:</span>
              {skills.map((skill, idx) => (
                <span 
                  key={idx} 
                  className={`text-xs font-black uppercase border-[2px] border-border px-2.5 py-1 shadow-[2px_2px_0px_0px_var(--border)] rounded-base ${skill.color} text-black select-none hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[0px_0px_0px_0px_var(--border)] transition-all`}
                >
                  {skill.name}
                </span>
              ))}
            </div>
          </div>

          {/* Stats & Dev Bio (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            {/* Stats Card */}
            <div className="bg-chart-5 border-[3px] border-border p-6 shadow-[8px_8px_0px_0px_var(--border)] rounded-base flex flex-col gap-4 text-black">
              <h3 className="text-xl font-black uppercase tracking-tight border-b-[2px] border-black pb-2">
                Hub KE Stats
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-secondary-background border-[2px] border-black p-3 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] rounded-base text-center">
                  <div className="text-3xl font-black">3+</div>
                  <div className="text-[10px] font-black uppercase text-foreground/75">Active Apps</div>
                </div>
                <div className="bg-secondary-background border-[2px] border-black p-3 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] rounded-base text-center">
                  <div className="text-3xl font-black">100%</div>
                  <div className="text-[10px] font-black uppercase text-foreground/75">Open Source</div>
                </div>
                <div className="bg-secondary-background border-[2px] border-black p-3 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] rounded-base text-center">
                  <div className="text-3xl font-black">1</div>
                  <div className="text-[10px] font-black uppercase text-foreground/75">Lead Dev</div>
                </div>
                <div className="bg-secondary-background border-[2px] border-black p-3 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] rounded-base text-center">
                  <div className="text-3xl font-black">KE</div>
                  <div className="text-[10px] font-black uppercase text-foreground/75">Proudly Kenyan</div>
                </div>
              </div>
            </div>

            {/* Developer Card */}
            <div className="bg-secondary-background border-[3px] border-border p-6 shadow-[8px_8px_0px_0px_var(--border)] rounded-base flex-1 flex flex-col justify-between">
              <div className="flex flex-col gap-3">
                <div className="flex justify-between items-center">
                  <span className="text-[10px] font-black uppercase tracking-wider text-chart-4 bg-black px-2 py-0.5 rounded-xs select-none">
                    Lead Creator
                  </span>
                  <span className="w-2.5 h-2.5 rounded-full bg-green-500 border border-border animate-ping animate-duration-1000"></span>
                </div>
                <h3 className="text-2xl font-black uppercase tracking-tight mt-1">Hezekiah Elisha</h3>
                <p className="text-xs md:text-sm text-foreground/80 font-medium leading-relaxed">
                  Hezekiah is a software engineer specializing in scalable system backends, API development, devops workflows, and observability tooling. He built tazx to fill developer tooling gaps and coordinates Chess Hub Ke to empower the Kenyan chess community.
                </p>
              </div>
              <div className="mt-4 pt-4 border-t-[2px] border-border">
                <Link 
                  href="https://www.linkedin.com/in/hezekiah-elisha" 
                  target="_blank" 
                  className="w-full text-center block font-black uppercase text-xs border-[2px] border-border bg-main py-2.5 shadow-[3px_3px_0px_0px_var(--border)] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[1px_1px_0px_0px_var(--border)] transition-all rounded-base"
                >
                  View LinkedIn Profile &rarr;
                </Link>
              </div>
            </div>

          </div>

        </div>
      </section>
    </div>
  )
}
