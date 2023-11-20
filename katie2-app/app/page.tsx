'use client'
import Image from 'next/image'
import Link from 'next/link'
import cakeImage from '../images/cake.png'

export default function Home() {
  return (
    <main>
      <div>
      <p className='name__title'>Katie Williams </p>
     <div className='page__nav'>
     <Link href="/screen1">Tech Experience</Link>
     <Link href="/screen2">Education</Link>
     <Link href="/screen3">Hobbies</Link>
     <Image
      src={cakeImage}
      width={500}
      height={500}
      alt="Picture of the author"
      className='cake__pic'
    />
     </div>
      </div>
    </main>
  )
}
