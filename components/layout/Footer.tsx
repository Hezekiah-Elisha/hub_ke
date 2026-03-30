import Link from 'next/link'
import React from 'react'

export default function Footer() {
  return (
    <div className="font-archivo p-10 bg-main">
      <div className="container mx-auto flex flex-col gap-4 items-center justify-center">
        <p className='text-center'>
          Built with ❤️ by <Link href="https://www.linkedin.com/in/hezekiah-elisha" className="underline text-main-foreground" target="_blank">Hezekiah Elisha</Link>. If you have any questions, suggestions, or just want to say hi, feel free to reach out!
        </p>
        <p className="text-center text-sm text-foreground">
          &copy; {new Date().getFullYear()} Hub KE. All rights reserved.
        </p>
      </div>
    </div>
  )
}
