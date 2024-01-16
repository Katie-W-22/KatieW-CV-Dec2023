'use client'

import Image from 'next/image'
import hobbies from './hobbies2.webp'
import Footer from '../comps/Footer'
import Navbar from '../comps/Navbar'
import { Card, CardContent } from "@/components/ui/card"
import japan from './japan.jpeg'
import archers from './archers.jpeg'
import baking from './baking.jpeg'
import DrawerDemo from '../comps/Drawer'

export default function Screen3 (){
    return(
    <>
    <div className='bg-orange-50 w-full fixed top-0'>
      <div className="flex justify-between" >
      <p className='name__title '>Hobbies</p>
      <DrawerDemo/>
      </div>
    <Navbar/>
    </div>
      
      <div className="p-1 sm:hidden block flex min-h-screen w-screen flex-col items-center  pb-40 md:pb-0 ">
              <Card className="mt-20">
                <CardContent className="flex aspect-square items-center justify-center p-2 m-10">
                <span className="text-sm p-2 ">
                    <p>Learning to speak Japanese</p> 
                    <br/>
                    <p>Douzo yoroshiku onegai shimasu!</p>
                    <br/>
                    <Image
      src={japan}
      width={200}
      height={200}
      alt="Picture of a cake"
      className='cake__pic rounded-lg border'
      />
        <div className='floating__pics'>
     <Image
      src={hobbies}
      width={50}
      height={50}
      alt="Picture of a cake"
      className='cake__pic pt-100'
      />
      </div>
                </span>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-2 m-10">
                  <span className="text-sm p-2 ">
                  <p>Archery</p>
                  <br/>
                  <p>I have an indoor classification level D & have earned outdoor 20m, 30, 40m and 50m badges.</p>
                  <br/>
                  <Image
      src={archers}
      width={200}
      height={200}
      alt="Picture of a cake"
      className='cake__pic rounded-lg border'
      />
                 </span>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-2 m-10">
                  <span className="text-sm p-2 ">
                  <p>Baking</p>
                  <br/>
                  <p>I have designed and created birthday and wedding cakes.</p>
                  <br/>
                  <Image
      src={baking}
      width={200}
      height={200}
      alt="Picture of a cake"
      className='cake__pic rounded-lg border'
      />
                 </span>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-2 m-10">
                  <span className="text-sm p-2 ">         
                    <p>Code Wars</p>
                 </span>
                </CardContent>
              </Card>
            </div>
       <Footer />   
    </>
        
    )
    }