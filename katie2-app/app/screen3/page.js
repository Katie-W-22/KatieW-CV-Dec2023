'use client'

import Link from "next/link"


export default function Screen3 (){
    return(
    <>
        <p>This is Screen 3 (Hobbies)</p>
        <div className='page__nav'>
        <Link href="/">Home </Link>
        <Link href="/screen1">Tech Experience</Link>
        <Link href="/screen2">Education</Link>
        </div>
        <div className="hobbies">
            <p>Learning to speak Japanese – Douzo yoroshiku onegai shimasu!</p>
            <p>Archery - I have an indoor class of level D & have earned 20m, 30, 40m and 50m badges.</p>
            <p>Baking - I have designed and created birthday and wedding cakes.</p>
        </div>
    </>
        
    )
    }