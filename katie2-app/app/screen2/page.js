'use client'

import Image from 'next/image'
import education from './education3.png'
import durham from './durham.jpeg'
import Footer from '../comps/Footer'
import Navbar from "../comps/Navbar"
import { Card, CardContent } from "@/components/ui/card"

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
      width={100}
      height={100}
      alt="Picture of Durham city centre"
      className='cake__pic pt-4'
      />
      </div>
      <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-2 m-10">
                  <span className="text-sm p-2 ">
                  <p>Durham University, Master of Mathematics (MMath)</p> 
                    <br/>
                    <p>Masters Project: The Statistical Analysis of DNA micro-arrays (R, MatLab & Maple).</p>

                     </span>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-2 m-10">
                  <span className="text-sm p-2 ">
                  <p>A-levels: Mathematics, Further Mathematics, Physics & French.</p>
                 </span>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-2 m-10">
                  <span className="text-sm p-2 ">
                  <p>School of Code</p>
                 </span>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-2 m-10">
                  <span className="text-sm p-2 ">         
                    <p>Continuous Learning!</p>
                 </span>
                </CardContent>
              </Card>
            </div>
<Footer />
</>
        
    )
    }
