'use client'

import Image from 'next/image'
import education from './education3.png'
import durham from './durham.jpeg'
import Footer from '../comps/Footer'
import Navbar from "../comps/Navbar"

  

export default function Screen2 (){
    return(
        <>
    <div className='bg-white w-full'>
        <p className='name__title '>Education</p>
        <Navbar/>
    </div>
        <div className='floating__pics'>
     <Image
      src={durham}
      width={150}
      height={150}
      alt="Picture of Durham city centre"
      className='cake__pic pt-4'
      />
      </div>
    <div className="hobbies">
        <p>Durham University, Master of Mathematics (MMath) 
Masters Project: The Statistical Analysis of DNA micro-arrays (R, MatLab & Maple).</p>
<br></br>
<p>A-levels: Mathematics, Further Mathematics, Physics & French.</p>
</div>

<Footer />
</>
        
    )
    }
