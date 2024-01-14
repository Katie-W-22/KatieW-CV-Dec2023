'use client'

import Image from 'next/image'
import hobbies from './hobbies2.webp'
import Footer from '../comps/Footer'
import Navbar from '../comps/Navbar'


export default function Screen3 (){
    return(
    <>
    <div className='bg-white w-full'>
        <p className='name__title '>Hobbies</p>
        <Navbar/>
    </div>
        <div className='floating__pics'>
     <Image
      src={hobbies}
      width={100}
      height={100}
      alt="Picture of a cake"
      className='cake__pic'
      />
      </div>
        <div className="hobbies">
            <p>Learning to speak Japanese – Douzo yoroshiku onegai shimasu!</p>
            <p>Archery - I have an indoor class of level D & have earned 20m, 30, 40m and 50m badges.</p>
            <p>Baking - I have designed and created birthday and wedding cakes.</p>
        </div>
       <Footer />   
    </>
        
    )
    }