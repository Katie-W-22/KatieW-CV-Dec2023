'use client'

import Footer from '../comps/Footer'
import Navbar from '../comps/Navbar'
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
  } from "@/components/ui/hover-card"

export default function Screen4 (){
    return(
    <>
    <div className='bg-white w-full'>
        <p className='name__title '>Projects</p>
        <Navbar/>
    </div>
        
    <div className="hobbies">
<p>GitHub Links</p>
<ul >
<li className="pb-2"><a href="https://github.com/Katie-W-22">MY GITHUB PROFILE</a>
</li>
<li className="pb-2"><a href="https://github.com/Katie-W-22/KW-portfolio-page">First Attempt Portfolio</a>
</li>
<li className="pb-2"><a href="https://github.com/Katie-W-22/Rotating-shapes">Rotating Shapes</a>
</li>
<li className="pb-2"><a href="https://github.com/Katie-W-22/Katie-Weather-App">Weather App</a>
</li>
<li className="pb-2"><a href="https://github.com/Katie-W-22/KatieW-CV-styled">Styled Cards CV</a>
</li>
<li className="pb-2"><a href="https://github.com/Katie-W-22/Elfy-Christmas-helper">Elf - Christmas Helper</a>
</li>
<li className="pb-2"><a href="https://github.com/Katie-W-22/Interior-Design">Interior Design</a>
</li>
</ul>
</div>
<HoverCard>
  <HoverCardTrigger >What's this stack?</HoverCardTrigger>
  <HoverCardContent>
    Next.js with Tailwind & shadcn components
  </HoverCardContent>
</HoverCard>
<Footer />
    </>    
    )
    }