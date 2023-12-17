'use client'

import Link from "next/link"


export default function Screen4 (){
    return(
    <>
    <div>
        <p className='name__title'>Projects</p>
        <div className='page__nav'>
        <Link href="/">Home </Link>
        <Link href="/screen1">Tech Experience</Link>
        <Link href="/screen2">Education</Link>
        <Link href="/screen3">Hobbies</Link>
        <Link href="/screen4">Projects</Link>
        </div>
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
    </>    
    )
    }