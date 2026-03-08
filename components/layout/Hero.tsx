import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";

export default function Hero() {
    return (
        <section className="h-screen relative flex md:flex-row flex-col justify-center items-center font-archivo">
            <div className="flex-1 w-full px-10 flex md:flex-row flex-col justify-center align-middle pt-10 md:pt-0">
                <Image
                    src={'/hero-background.webp'}
                    alt="Hero Background"
                    width={1500}
                    height={1200}
                    className="object-cover object-center shadow-shadow border-border w-full h-full"
                />
            </div>
            <div className='flex-1 p-2 justify-center items-center md:items-start flex flex-col gap-4 text-center md:text-left'>
                <h2 className='text-xl md:text-8xl font-bold text-main-foreground border-border shadow-shadow'>Hub KE</h2>
                <p>
                    Hub KE is a technology organization that specializes in
                    providing innovative solutions to businesses and
                    individuals. We are committed to delivering high-quality products and services that meet the needs of our clients. Our team of experts is dedicated to helping our clients achieve their goals through the use of cutting-edge technology and exceptional customer service.
                    Main Developer is <Link href="https://www.linkedin.com/in/hezekiah-elisha" className="underline text-main-foreground" target="_blank">Hezekiah Elisha</Link>.
                </p>
                <p className="text-xs text-main-foreground bg-main italic p-2 pl-8 border-l-2">
                    The home of innovation and clarity
                </p>
                <Button>Talk to us</Button>
            </div>
        </section>
    )
}
