'use client';
import Image from 'next/image';
import train from '../images/train3.png';
import cheer from '../images/cheer.webp';
import Footer from './comps/Footer';
import Navbar from './comps/Navbar';

export default function Homescreen() {
  return (
    <>
      <main>
        <div className='bg-white w-full'>
          <p className='name__title'>Katie Williams</p>
          <Navbar />
          <div className='floating__pics fixed top-0'>
          <Image
            src={train}
            width={100}
            height={100}
            alt='Picture of a train'
          />
        </div>
        </div>
        
          <div className='scrollable-text overflow-y-scroll px-4 pt-10 md:text-xl'>
            <p>
              I thought I’d managed to hide my celebratory mini-cheer behind my
              laptop, but the wry smile from the train-passenger across from me
              suggested not…I had just coded my first weather app and I was
              hooked!
            </p>
            <br />
            <p>
              With my background in mathematics & previous career in teaching, I have a creative, analytical
              mind and robust problem-solving skills. I have a passion for continuous learning, alongside strong
              teamworking, planning and presentation skills. </p>
              <br/>
              <p>Thanks to the School
              of Code, I've been able to successfully integrate these skills into
              my new life as a full-stack developer who is raring to get started
              on the next project!
            </p>
          </div>
    
        <div className='hidden md:block'>
          <Image
            src={cheer}
            width={100}
            height={100}
            alt='Picture of a cake'
            className='fixed bottom-10 left-10'
          />
        </div>
      </main>
      <Footer />
    </>
  );
}
