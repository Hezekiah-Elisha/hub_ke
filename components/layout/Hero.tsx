import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";

export default function Hero() {
    return (
        <section className="min-h-[85vh] py-12 md:py-16 max-w-7xl mx-auto px-4 md:px-8 flex md:flex-row flex-col gap-12 items-center font-archivo relative">
            {/* Left Column: Retro OS Browser Window Mockup */}
            <div className="w-full flex-1 border-[3px] border-border bg-secondary-background shadow-[8px_8px_0px_0px_var(--border)] rounded-base overflow-hidden flex flex-col animate-in fade-in-50 duration-500">
                {/* Title Bar */}
                <div className="bg-main border-b-[3px] border-border px-4 py-3 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <span className="w-3.5 h-3.5 rounded-full bg-chart-4 border-[2px] border-border inline-block"></span>
                        <span className="w-3.5 h-3.5 rounded-full bg-chart-5 border-[2px] border-border inline-block"></span>
                        <span className="w-3.5 h-3.5 rounded-full bg-chart-1 border-[2px] border-border inline-block"></span>
                    </div>
                    <div className="text-xs font-black uppercase text-main-foreground select-none tracking-widest">
                        hub_preview.exe
                    </div>
                    <div className="w-8"></div>
                </div>
                
                {/* Browser Address Bar */}
                <div className="bg-background border-b-[3px] border-border p-2 flex items-center gap-2">
                    <div className="flex gap-1">
                        <span className="w-6 h-6 border-[2px] border-border bg-secondary-background flex items-center justify-center text-xs font-black select-none">←</span>
                        <span className="w-6 h-6 border-[2px] border-border bg-secondary-background flex items-center justify-center text-xs font-black select-none">→</span>
                    </div>
                    <div className="flex-1 bg-secondary-background border-[2px] border-border px-3 py-0.5 text-xs text-foreground/80 font-mono flex items-center gap-1 select-none overflow-hidden truncate">
                        <span className="text-chart-3 font-black">https://</span>hub.ke/workspace
                    </div>
                </div>

                {/* Window Image Body */}
                <div className="relative w-full h-[250px] sm:h-[350px] md:h-[420px]">
                    <Image
                        src="/hero-background.webp"
                        alt="Hub KE Workspace Preview"
                        fill
                        className="object-cover object-center"
                        priority
                    />
                </div>
            </div>

            {/* Right Column: Hero Content Card */}
            <div className="flex-1 w-full justify-center items-center md:items-start flex flex-col gap-6 text-center md:text-left bg-secondary-background border-[3px] border-border p-6 md:p-10 shadow-[8px_8px_0px_0px_var(--border)] rounded-base relative overflow-hidden animate-in slide-in-from-bottom-6 duration-700">
                <div className="absolute top-0 right-0 bg-chart-2 text-main-foreground font-black text-xs px-4 py-1.5 border-b-[3px] border-l-[3px] border-border uppercase tracking-wide">
                    Dev Active
                </div>
                
                <h2 className="text-5xl md:text-7xl font-black text-main-foreground uppercase tracking-tight flex flex-col py-2">
                    <span className="bg-chart-5 text-black border-[3px] border-border px-4 py-1 shadow-[4px_4px_0px_0px_var(--border)] inline-block -rotate-1 self-center md:self-start w-fit">
                        Hub KE
                    </span>
                </h2>

                <p className="text-base md:text-lg text-foreground font-medium leading-relaxed">
                    Hub KE is a technology organization that specializes in
                    providing innovative solutions to businesses and
                    individuals. We are committed to delivering high-quality products and services that meet the needs of our clients. Our team of experts is dedicated to helping our clients achieve their goals through the use of cutting-edge technology and exceptional customer service.
                </p>

                <div className="text-sm font-bold text-main-foreground bg-main border-[3px] border-border p-3 pl-6 w-full text-left flex flex-col gap-1 shadow-[4px_4px_0px_0px_var(--border)]">
                    <span className="uppercase text-xs tracking-wider text-main-foreground/70">Main Developer</span>
                    <Link href="https://www.linkedin.com/in/hezekiah-elisha" className="underline text-main-foreground hover:text-chart-2 font-black text-base transition-all flex items-center gap-1.5" target="_blank">
                        Hezekiah Elisha &rarr;
                    </Link>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 items-center w-full mt-2">
                    <Link href="#our-products" className="w-full sm:w-auto">
                        <Button className="w-full sm:w-auto font-black text-base px-6 py-5 cursor-pointer">
                            Explore Apps
                        </Button>
                    </Link>
                    <Link href="#about-us" className="w-full sm:w-auto">
                        <Button className="w-full sm:w-auto font-black text-base px-6 py-5 cursor-pointer" variant="neutral">
                            Who are we?
                        </Button>
                    </Link>
                </div>
            </div>
        </section>
    );
}
