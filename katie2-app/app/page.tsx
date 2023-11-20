'use client'
import Image from 'next/image'
import Link from 'next/link'
import train from '../images/train3.png'
import cheer from '../images/cheer.webp'

export default function Home() {
  return (
    <main>
  <div>
      <p className='name__title'>Katie Williams </p>
     <div className='page__nav'>
    <Link href="/">Home</Link>
     <Link href="/screen1">Tech Experience</Link>
     <Link href="/screen2">Education</Link>
     <Link href="/screen3">Hobbies</Link>
     <Link href="/screen4">Screen 4</Link>
     </div>
  </div>
     <div className='floating__pics'>
     <Image
      src={train}
      width={100}
      height={100}
      alt="Picture of a cake"
      className='cake__pic'
      />
      </div>
     <div className='intro__text'>
      <p>I thought I’d managed to hide my celebratory mini-cheer behind my laptop, but the wry smile from the train-passenger across from me suggested not…I had just coded my first weather app and I was hooked! </p>
   <br></br>
<p>After making the bold decision to transition from my role as a mathematics teacher, the School of Code Bootcamp was the obvious choice: I would be able to follow my passion for coding, rapidly expand my tech skillset and be part of teams creating software to solve real-world problems.

With my background in mathematics, I have a creative, analytical mind and robust problem-solving skills. Drawing from my teaching career, I have a passion for continuous learning, alongside strong teamworking, planning and presentation skills.  Thanks to the School of Code, I've been able to successfully integrate these skills into my new life as a full-stack developer who is raring to get started on the next project!
</p>

  </div>
  <div className='cheering__woman'>
<Image
      src={cheer}
      width={100}
      height={100}
      alt="Picture of a cake"
      />
</div>
    </main>
  )
}
