'use client'
import Link from 'next/link'
import { useState } from 'react'

export default function Navbar() {

  const [activeLink, setActiveLink] = useState('');

  const handleSetActiveLink = (link) => {
    setActiveLink(link);
  };

  return (
    <>
    <nav className="hidden md:block text-xl bg-orange-50">
    <div className='page__nav_top flex space-x-4'>
    <Link href="/" className={activeLink === '/' ? 'text-red-300 text-bold hover:underline' : 'hover:underline'}
    onMouseEnter={() => handleSetActiveLink('/')}>Home</Link>
     <Link href="/screen1" className={activeLink === '/screen1' ? 'text-red-300 hover:underline' : 'hover:underline'}
    onMouseEnter={() => handleSetActiveLink('/screen1')}  >Tech</Link>
     <Link href="/screen2" className={activeLink === '/screen2' ? 'text-red-300 hover:underline' : 'hover:underline'}
    onMouseEnter={() => handleSetActiveLink('/screen2')}>Education</Link>
     <Link href="/screen3" className={activeLink === '/screen3' ? 'text-red-300 hover:underline' : 'hover:underline'}
    onMouseEnter={() => handleSetActiveLink('/screen3')}>Hobbies</Link>
     <Link href="/screen4" className={activeLink === '/screen4' ? 'text-red-300 hover:underline' : 'hover:underline'}
    onMouseEnter={() => handleSetActiveLink('/screen4')}>Projects</Link>
     </div>
    </nav>
    <footer className="hidden md:block text-xl bg-red-200">
    </footer>
    </>
  )
}