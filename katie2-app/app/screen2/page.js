'use client'

import Link from "next/link"
import Image from 'next/image'
import education from './education3.png'
import durham from './durham.jpeg'

export default function Screen2 (){
    return(
        <>
    <div>
    <p className='name__title'>Education</p>
        <div className='page__nav'>
        <Link href="/">Home</Link>
     <Link href="/screen1">Tech Experience</Link>
     <Link href="/screen2">Education</Link>
     <Link href="/screen3">Hobbies</Link>
     <Link href="/screen4">Projects</Link>
        </div>
    </div>
        <div className='floating__pics'>
     <Image
      src={durham}
      width={300}
      height={300}
      alt="Picture of books"
      className='cake__pic'
      />
      </div>
    <div className="hobbies">
        <p>Durham University, Master of Mathematics (MMath) [2001-2005]
Masters Project: The Statistical Analysis of DNA micro-arrays (R, MatLab & Maple).</p>
<br></br>
<p>A-levels [1999-2001]: Mathematics, Further Mathematics, Physics & French.</p>
</div>
</>
        
    )
    }
