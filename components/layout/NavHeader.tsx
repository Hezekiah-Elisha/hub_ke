"use client"
import Link from 'next/link'
import { Button } from '../ui/button'
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from '../ui/sheet'
import { MenuIcon } from 'lucide-react'

export default function NavHeader() {
    return (
        <header className='sticky top-4 z-50 w-full px-4 font-archivo max-w-7xl mx-auto'>
            <nav className='font-archivo text-xl font-bold py-3 px-6 flex flex-row justify-between items-center gap-4 w-full bg-main border-[3px] border-border shadow-[4px_4px_0px_0px_var(--border)] rounded-base'>
                <Link href="/" className='flex flex-row gap-2 items-center uppercase tracking-wider text-2xl font-black bg-secondary-background border-[3px] border-border px-3 py-1 shadow-[3px_3px_0px_0px_var(--border)] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[1px_1px_0px_0px_var(--border)] transition-all'>
                    Hub KE
                </Link>
                <div className='md:flex flex-row gap-4 items-center hidden'>
                    <Link href={'/'} className='px-3 py-1.5 border-[2px] border-transparent hover:border-border hover:bg-secondary-background hover:shadow-[3px_3px_0px_0px_var(--border)] transition-all rounded-base text-base font-bold'>
                        Home
                    </Link>
                    <Link href={'/#our-products'} className='px-3 py-1.5 border-[2px] border-transparent hover:border-border hover:bg-secondary-background hover:shadow-[3px_3px_0px_0px_var(--border)] transition-all rounded-base text-base font-bold'>
                        Our Products
                    </Link>
                    <Link href={'/#about-us'} className='px-3 py-1.5 border-[2px] border-transparent hover:border-border hover:bg-secondary-background hover:shadow-[3px_3px_0px_0px_var(--border)] transition-all rounded-base text-base font-bold'>
                        Who are we?
                    </Link>
                    <Button size={'sm'} className='hover:cursor-pointer' variant="neutral">
                        Contact Us
                    </Button>
                </div>
                <div className="block md:hidden font-archivo">
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button size="icon" variant="neutral"><MenuIcon className="h-6 w-6" /></Button>
                        </SheetTrigger>
                        <SheetContent className="border-l-[3px] border-border">
                            <SheetHeader>
                                <SheetTitle className="text-2xl font-black uppercase">Menu</SheetTitle>
                                <SheetDescription className="text-sm">
                                    Tap on a link to navigate.
                                </SheetDescription>
                            </SheetHeader>
                            <div className='flex flex-col gap-4 items-start justify-start mt-4 p-4 w-full'>
                                <SheetClose asChild>
                                    <Link href={'/'} className='w-full px-4 py-2 text-left border-[2px] border-border bg-main font-bold shadow-[3px_3px_0px_0px_var(--border)] hover:bg-secondary-background hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[1px_1px_0px_0px_var(--border)] transition-all'>
                                        Home
                                    </Link>
                                </SheetClose>
                                <SheetClose asChild>
                                    <Link href={'/#our-products'} className='w-full px-4 py-2 text-left border-[2px] border-border bg-main font-bold shadow-[3px_3px_0px_0px_var(--border)] hover:bg-secondary-background hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[1px_1px_0px_0px_var(--border)] transition-all'>
                                        Our Products
                                    </Link>
                                </SheetClose>
                                <SheetClose asChild>
                                    <Link href={'/#about-us'} className='w-full px-4 py-2 text-left border-[2px] border-border bg-main font-bold shadow-[3px_3px_0px_0px_var(--border)] hover:bg-secondary-background hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[1px_1px_0px_0px_var(--border)] transition-all'>
                                        Who are we?
                                    </Link>
                                </SheetClose>
                            </div>
                            <SheetFooter className='flex flex-col sm:flex-row justify-end items-center gap-4 mt-auto p-4 w-full'>
                                <Button type="submit" className="w-full sm:w-auto">Contact Us</Button>
                                <SheetClose asChild>
                                    <Button variant="neutral" className="w-full sm:w-auto">Close</Button>
                                </SheetClose>
                            </SheetFooter>
                        </SheetContent>
                    </Sheet>
                </div>
            </nav>
        </header>
    )
}
