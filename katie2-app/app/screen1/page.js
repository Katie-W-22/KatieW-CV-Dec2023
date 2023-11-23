'use client'

import Link from "next/link"
import Image from 'next/image'
import software from './software2.png'

export default function Screen1 (){
    return(
        <>
    <div>
        <p className='name__title'>Tech Experience</p>
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
      src={software}
      width={100}
      height={100}
      alt="Picture of a cake"
      className='cake__pic'
      />
      </div>
      <div className="hobbies">
        <p>•	Full-stack Developer – The School of Code [09/2023 – 02/2024]
2023 School of Code Bootcamp - One of only 3% of people chosen from 3000 applications to take part in the sixteen-week, remote, intensive web development course. 

o	Designing & implementing methods to perform & analyse user/product research.
o	Collaborating in agile teams to ideate & design UIs, create wireframes & prototypes.
o	Pair programming to build full-stack JavaScript applications to solve real-world problems.
o	Demoing applications to industry experts through the lens of user-personas.
o	Team retrospectives to discuss successes, challenges & learn from any mistakes.

Tech Stack: JS| HTML| CSS| REACT| REST APIs|TDD| SQL| Git| AWS| Figma|& more!
</p>
      </div>
        </>
        
        
    )
    }
