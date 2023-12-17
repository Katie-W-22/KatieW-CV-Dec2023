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
        <h2>Full-stack Developer – The School of Code [09/2023 – 02/2024]</h2>
        <p>
2023 School of Code Bootcamp - One of only 90 people chosen from 3000 applications to take part in the sixteen-week, remote, intensive web development course. 

o	Designing & implementing methods to perform & analyse user/product research.
o	Collaborating in agile teams to ideate & design UIs, create wireframes & prototypes.
o	Pair programming to build full-stack JavaScript applications to solve real-world problems.
o	Demoing applications to industry experts through the lens of user-personas.
o	Team retrospectives to discuss successes, challenges & learn from any mistakes.

Tech Stack: JS| HTML| CSS| REACT| REST APIs|TDD| SQL| Git| AWS| Figma|& more!
</p>
<br></br>
<h2>SOCS – ‘School of Code Stash’ app (1-week project)</h2>

<a href="https://socs-ui.onrender.com/ ">Link - SOCS app on Render</a>


<p>One week to ideate, design & build an application to solve a problem facing SoC bootcampers.

Problem: Bootcampers need an organised, searchable repository for tech resources.

Solution: SOCS – an app where bootcampers can view resources by topic or week studied.

o	Lead front-end team in building an accessible, appealing & interactive UI & UX.
o	Responsible for tracking discussions, outcomes & sprint planning, using FigJam. 
o	Collaborated with back-end team to debug & test application (TDD).
o	Designed presentation slides & format for demo to industry experts.
</p>
<h2 className="font-bold">Coming soon - SoC month-long final project!</h2>
      </div>
        </>
        
        
    )
    }
