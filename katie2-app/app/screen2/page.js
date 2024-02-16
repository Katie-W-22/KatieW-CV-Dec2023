'use client'

import Image from 'next/image'
import education from './education3.png'
import soc from './soclogo.jpeg'
import codewars1 from './codewars1.png'
import durham from './durham.jpeg'
import Footer from '../comps/Footer'
import Navbar from "../comps/Navbar"
import { Card, CardContent } from "@/components/ui/card"
import DrawerDemo from '../comps/Drawer'

export default function Screen2 (){
    return(
        <>
    <div className='bg-orange-50 w-full fixed top-0'>
      <div className="flex justify-between" >
      <p className='name__title '>Education</p>
      <DrawerDemo/>
      </div>
    <Navbar/>
    </div>

        
      <div className="p-1 min-h-screen w-screen flex-col items-center  pb-40 md:pb-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:mt-40">
              <Card className="bg-zinc-500 text-white font-mono mt-20">
                <CardContent className="flex aspect-square items-center justify-center p-2 m-10">
                  <span className="text-sm p-2 ">
                  <p>Durham University, Master of Mathematics (MMath)</p> 
                    <br/>
                    <p>Masters Project: The Statistical Analysis of DNA micro-arrays (R, MatLab & Maple).</p>
                    <div className='floating__pics'>
     <Image
      src={durham}
      width={100}
      height={100}
      alt="Picture of Durham city centre"
      className='cake__pic pt-4'
      />
      </div>
                     </span>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-2 m-10">
                  <span className="text-sm p-2 ">
                  <p>A-levels: Mathematics, Further Mathematics, Physics & French.</p>
                  <div className='floating__pics'>
     <Image
      src={education}
      width={100}
      height={100}
      alt="Picture of Durham city centre"
      className='cake__pic pt-4'
      />
      </div>
                 </span>
                </CardContent>
              </Card>
              <Card className="bg-zinc-500 text-white font-mono">
                <CardContent className="flex aspect-square items-center justify-center p-2 m-10">
                  <span className="text-sm p-2 ">
                  <p>School of Code</p>
                  <br/>
                  <p>16-week Full Stack Developer Bootcamp</p>
                  <div className='floating__pics'>
     <Image
      src={soc}
      width={100}
      height={100}
      alt="Picture of Durham city centre"
      className='cake__pic pt-4'
      />
      </div>
                 </span>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-2 m-10">
                  <span className="text-sm p-2 ">         
                    <p>Continuous Learning!</p>
                    <br/>
                    <ul>
                      <li>CodeWars</li>
                      <li>MongoDB University</li>
                      <li>CFG & Turing Innovation Catalyst: Introduction to Python</li>
                      <li>FreeCodeCamp</li>
                    </ul>
                    <div className='floating__pics'>
     <Image
      src={codewars1}
      width={100}
      height={100}
      alt="Picture of Durham city centre"
      className='cake__pic pt-4'
      />
      </div>
                 </span>
                </CardContent>
              </Card>
            </div>
<Footer />
</>
        
    )
    }
