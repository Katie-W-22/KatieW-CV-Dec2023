'use client'

import Link from "next/link"


export default function Screen2 (){
    return(
        <>
        <p>This is Screen 2 (Education)</p>
        <div className='page__nav'>
           <Link href="/">Home </Link>
           <Link href="/screen1"> Screen 1 </Link>
           <Link href="/screen3"> Screen 3 </Link>
        </div>
        
        </>
        
    )
    }
