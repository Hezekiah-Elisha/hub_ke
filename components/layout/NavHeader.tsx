import Link from 'next/link'
import { Button } from '../ui/button'

export default function NavHeader() {
    return (
        <nav className='container mx-auto font-archivo text-xl font-bold py-4 flex flex-row justify-between items-center gap-4 w-full'>
            <div>
                Hub
            </div>
            <div className='flex flex-row gap-4 items-center'>
                <Link href={'/'} className='hover:underline'>
                    Who are we?
                </Link>
                <Button size={'sm'} className='' variant="noShadow">
                    Contact Us
                </Button>
            </div>
        </nav>
    )
}
