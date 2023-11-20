'use client'

import Link from "next/link"


export default function Screen3 (){
    return(
    <>
        <p>This is Screen 3</p>
        <Link href="/">Home </Link>
        <Link href="/screen1">Tech Experience</Link>
        <Link href="/screen2">Education</Link>
    </>
        
    )
    }