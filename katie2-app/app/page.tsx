'use client'
import Image from 'next/image'
import Link from 'next/link'
import cakeImage from '../images/cake.png'
import archery from '../images/archery1.jpeg'

export default function Home() {
  return (
    <main>
  <div>
      <p className='name__title'>Katie Williams </p>
     <div className='page__nav'>
     <Link href="/screen1">Tech Experience</Link>
     <Link href="/screen2">Education</Link>
     <Link href="/screen3">Hobbies</Link>
     </div>
     <div className='floating__pics'>
     <p className='floating__welcome'>Welcome...</p>
     <Image
      src={cakeImage}
      width={500}
      height={500}
      alt="Picture of a cake"
      className='cake__pic'
      />
      
     </div>
     
  </div>
    </main>
  )
}
