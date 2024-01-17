'use client';
import Image from 'next/image';
import train from '../images/train3.png';
import teacher from '../images/teacher.png';
import tech from '../images/tech.webp';
import Footer from './comps/Footer';
import Navbar from './comps/Navbar';
import DrawerDemo from './comps/Drawer';
import Large from './comps/Large';
import { Card, CardContent } from "@/components/ui/card"

export default function Homescreen() {
  return (
    <>
     <div className='bg-orange-50 w-full fixed top-0'>
      <div className="flex justify-between bg-orange-50" >
      <p className='name__title bg-orange-50'>Katie Williams</p>
      <DrawerDemo/>
      
      </div>
    <Navbar/>
    </div>
        
      <div className="p-1 sm:hidden block min-h-screen w-screen flex-col items-center  pb-40 md:pb-0 ">
              <Card className="bg-zinc-500 text-white font-mono mt-20">
                <CardContent className="flex aspect-square items-center justify-center p-2 m-10">
                  <span className="text-sm p-2 ">
                  
                  <p>
              I thought I had managed to hide my celebratory mini-cheer behind my
              laptop, but the wry smile from the train-passenger across from me
              suggested not…I had just coded my first weather app and I was
              hooked!
            </p>
            <div className='floating__pics'>
     <Image
      src={train}
      width={50}
      height={50}
      alt="Picture of a train"
      className='cake__pic pt-4'
      />
      </div>
                     </span>
                </CardContent>
              </Card>
              <Card  className="text-zinc-500 bg-white font-mono">
                <CardContent className="flex aspect-square items-center justify-center p-2 m-10">
                  <span className="text-sm p-2 ">
                  <p>
              With my background in mathematics & previous career in teaching, I have a creative, analytical
              mind and robust problem-solving skills. I have a passion for continuous learning, alongside strong
              teamworking, planning and presentation skills. </p>
              <div className='floating__pics'>
     <Image
      src={teacher}
      width={50}
      height={50}
      alt="Picture of a computer"
      className='cake__pic pt-4'
      />
      </div>
                 </span>
                </CardContent>
              </Card>
              <Card className="text-zinc-500 bg-white font-mono">
                <CardContent className="bg-zinc-500 text-white font-mono">
                  <span className="text-sm p-2 ">
                  <p>Thanks to the School
              of Code, I've been able to successfully integrate these skills into
              my new life as a full-stack developer who is raring to get started
              on the next project!
            </p>
            <div className='floating__pics'>
     <Image
      src={tech}
      width={50}
      height={50}
      alt="Picture of a train"
      className='cake__pic pt-4'
      />
      </div>
                 </span>
                </CardContent>
              </Card>
             
        </div>
      <Large />
      <Footer />
    </>
  );
}
