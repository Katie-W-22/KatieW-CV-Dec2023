'use client'
import Link from 'next/link'

export default function Navbar() {
  return (
    <>
    <nav className="hidden md:block text-xl bg-orange-50">
    <div className='page__nav_top flex space-x-4'>
    <Link href="/">Home</Link>
     <Link href="/screen1" className="hover:underline">Tech</Link>
     <Link href="/screen2" className="hover:underline">Education</Link>
     <Link href="/screen3" className="hover:underline">Hobbies</Link>
     <Link href="/screen4" className="hover:underline">Projects</Link>
     </div>
    </nav>
    <footer className="hidden md:block text-xl bg-orange-50 mt-20">
      <div className='page__nav_bottom flex space-x-4'>
        <p>Under construction</p>
      </div>
    </footer>
    </>
  )
}