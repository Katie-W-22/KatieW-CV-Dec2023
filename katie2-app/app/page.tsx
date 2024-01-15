'use client';
import Image from 'next/image';
import train from '../images/train3.png';
import cheer from '../images/cheer.webp';
import Footer from './comps/Footer';
import Navbar from './comps/Navbar';
import DrawerDemo from './comps/Drawer';
import { Card, CardContent } from "@/components/ui/card"

export default function Homescreen() {
  return (
    <>
      <main>
      <div className='bg-white w-full fixed top-0'>
      <div className="flex justify-between" >
      <DrawerDemo/>
      <p className='name__title '>Katie Williams</p>
      </div>
    <Navbar/>
    </div>
        <div className='floating__pics'>
     <Image
      src={train}
      width={50}
      height={50}
      alt="Picture of a train"
      className='cake__pic pt-4'
      />
      </div>
      <div className="p-1 sm:hidden block">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-2 m-10">
                  <span className="text-sm p-2 ">
                  
                  <p>
              I thought I’d managed to hide my celebratory mini-cheer behind my
              laptop, but the wry smile from the train-passenger across from me
              suggested not…I had just coded my first weather app and I was
              hooked!
            </p>
                     </span>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-2 m-10">
                  <span className="text-sm p-2 ">
                  <p>
              With my background in mathematics & previous career in teaching, I have a creative, analytical
              mind and robust problem-solving skills. I have a passion for continuous learning, alongside strong
              teamworking, planning and presentation skills. </p>
                 </span>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-2 m-10">
                  <span className="text-sm p-2 ">
                  <p>Thanks to the School
              of Code, I've been able to successfully integrate these skills into
              my new life as a full-stack developer who is raring to get started
              on the next project!
            </p>
                 </span>
                </CardContent>
              </Card>
             
        </div>
      </main>
      <Footer />
    </>
  );
}
