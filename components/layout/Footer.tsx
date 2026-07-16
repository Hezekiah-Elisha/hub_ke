import Link from 'next/link'
import React from 'react'

export default function Footer() {
  return (
    <footer className="font-archivo py-12 px-4 bg-main border-t-[3px] border-border select-none">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-6 items-center justify-between">
        <div className="bg-secondary-background border-[3px] border-border px-4 py-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] rounded-base font-black uppercase text-xl text-black">
          Hub KE
        </div>
        <p className='text-center md:text-left text-sm md:text-base font-bold text-main-foreground max-w-xl leading-relaxed'>
          Built with 🧠 &amp; ⚡ by <Link href="https://www.linkedin.com/in/hezekiah-elisha" className="underline text-black hover:text-chart-2 transition-all font-black" target="_blank">Hezekiah Elisha</Link>. Connect with me for project collaborations or custom software development!
        </p>
        <p className="text-center md:text-right text-xs font-black uppercase tracking-wider text-black bg-secondary-background border-[2px] border-border px-3 py-1 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] rounded-base">
          &copy; {new Date().getFullYear()} Hub KE. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
