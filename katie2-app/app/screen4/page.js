'use client'

import Link from "next/link"


export default function Screen4 (){
    return(
    <>
    <div>
        <p className='name__title'>Screen 4</p>
        <div className='page__nav'>
        <Link href="/">Home </Link>
        <Link href="/screen1">Tech Experience</Link>
        <Link href="/screen2">Education</Link>
        <Link href="/screen3">Hobbies</Link>
        <Link href="/screen4">Screen 4</Link>
        </div>
    </div>  
    </>
        
    )
    }