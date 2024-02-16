//Footer component
'use client'
import Link from 'next/link';
import { Home, Computer, GraduationCapIcon, FerrisWheel, Laptop2 } from 'lucide-react';
import { useState } from 'react';

export default function Footer() {
  const [activeLink, setActiveLink] = useState('');

  const handleSetActiveLink = (link: string) => {
    setActiveLink(link);
  };

  return (
    <footer className="sm:hidden block fixed bottom-0 w-full bg-orange-50">
      <div className='page__nav_bottom flex justify-evenly items-center'>
        <Link href="/" className={activeLink === '/' ? 'text-red-300 text-bold hover:underline' : 'hover:underline'}
    onMouseEnter={() => handleSetActiveLink('/')}>
          <div className="flex flex-col items-center cursor-pointer">
            <Home />
            <span className="text-xs">Home</span>
          </div>
        </Link>
        <Link href="/screen1" className={activeLink === '/screen1' ? 'text-red-300 text-bold hover:underline' : 'hover:underline'}
    onMouseEnter={() => handleSetActiveLink('/screen1')}>
          <div className="flex flex-col items-center cursor-pointer">
            <Computer />
            <span className="text-xs">Tech</span>
          </div>
        </Link>
        <Link href="/screen2" className={activeLink === '/screen2' ? 'text-red-300 text-bold hover:underline' : 'hover:underline'}
    onMouseEnter={() => handleSetActiveLink('/screen2')}>
          <div className="flex flex-col items-center cursor-pointer">
            <GraduationCapIcon />
            <span className="text-xs">Ed</span>
          </div>
        </Link>
        <Link href="/screen3" className={activeLink === '/screen3' ? 'text-red-300 text-bold hover:underline' : 'hover:underline'}
    onMouseEnter={() => handleSetActiveLink('/screen3')}>
          <div className="flex flex-col items-center cursor-pointer">
            <FerrisWheel />
            <span className="text-xs">Fun</span>
          </div>
        </Link>
        <Link href="/screen4" className={activeLink === '/screen4' ? 'text-red-300 text-bold hover:underline' : 'hover:underline'}
    onMouseEnter={() => handleSetActiveLink('/screen4')}>
          <div className="flex flex-col items-center cursor-pointer">
            <Laptop2 />
            <span className="text-xs">Git</span>
          </div>
        </Link>
      </div>
    </footer>
  );
}