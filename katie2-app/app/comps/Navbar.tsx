'use client'
import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="hidden md:block text-xl">
    <div className='page__nav_top flex space-x-4'>
    <Link href="/">Home</Link>
     <Link href="/screen1" className="hover:underline">Tech Experience</Link>
     <Link href="/screen2" className="hover:underline">Education</Link>
     <Link href="/screen3" className="hover:underline">Hobbies</Link>
     <Link href="/screen4" className="hover:underline">Projects</Link>
     </div>
    </nav>
  )
}