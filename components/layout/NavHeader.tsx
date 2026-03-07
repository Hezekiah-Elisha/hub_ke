import Link from 'next/link'
import { Button } from '../ui/button'
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from '../ui/sheet'
import { MenuIcon } from 'lucide-react'

export default function NavHeader() {
    return (
        <header className='sticky top-0 z-50 bg-main/80 backdrop-blur-sm border-b border-border shadow-shadow'>
            <nav className='container mx-auto font-archivo text-xl font-bold py-4 flex flex-row justify-between items-center gap-4 w-full px-4 md:px-0'>
                <Link href="/" className='flex flex-row gap-2 items-center uppercase'>
                    Hub KE
                </Link>
                <div className='md:flex flex-row gap-4 items-center hidden'>
                    <Link href={'/'} className='hover:underline'>
                        Home
                    </Link>
                    <Link href={'/#our-products'} className='hover:underline'>
                        Our Products
                    </Link>
                    <Link href={'/#about-us'} className='hover:underline'>
                        Who are we?
                    </Link>
                    <Button size={'sm'} className='' variant="noShadow">
                        Contact Us
                    </Button>
                </div>
                <div className="block md:hidden">
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button><MenuIcon className="h-6 w-6" /> </Button>
                        </SheetTrigger>
                        <SheetContent>
                            <SheetHeader>
                                <SheetTitle>Edit profile</SheetTitle>
                                <SheetDescription>
                                    Make changes to your profile here. Click save when you&apos;re done.
                                </SheetDescription>
                            </SheetHeader>
                            <div className='flex flex-col gap-4 items-center'>
                                <Link href={'/'} className='hover:underline'>
                                    Home
                                </Link>
                                <Link href={'/#our-products'} className='hover:underline'>
                                    Our Products
                                </Link>
                                <Link href={'/#about-us'} className='hover:underline'>
                                    Who are we?
                                </Link>
                                <Button size={'sm'} className='' variant="noShadow">
                                    Contact Us
                                </Button>
                            </div>
                            <SheetFooter>
                                <Button type="submit">Save changes</Button>
                                <SheetClose asChild>
                                    <Button variant="neutral">Close</Button>
                                </SheetClose>
                            </SheetFooter>
                        </SheetContent>
                    </Sheet>
                </div>
            </nav>
        </header>
    )
}
