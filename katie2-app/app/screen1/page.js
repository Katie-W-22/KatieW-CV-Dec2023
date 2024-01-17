'use client'

import Image from 'next/image'
import software from './software2.png'
import react from './react.png'
import nextlogo from './nextlogo.png'
import htmlogo from './htmlogo.png'
import tdd from './tdd.webp'
import agile1 from './agile1.png'
import testing from './testing.png'
import Footer from '../comps/Footer'
import Navbar from "../comps/Navbar"
import { Card, CardContent } from "@/components/ui/card"
import DrawerDemo from '../comps/Drawer'

export default function Screen1 (){
    return(
        <>
    <div className='bg-orange-50 w-full fixed top-0'>
      <div className="flex justify-between" >
      <p className='name__title'>Tech</p>
      <DrawerDemo/>
      
      </div>
    <Navbar/>
    </div>
        
      <div className="p-1 sm:hidden block min-h-screen w-screen flex-col items-center  pb-40 md:pb-0 ">
              <Card className="text-zinc-500 bg-white font-mono mt-20">
                <CardContent className="flex aspect-square items-center justify-center p-2 m-10">
                  <span className="text-sm p-2 ">
                    <h2>Full-stack Developer – The School of Code [09/2023 – 02/2024]</h2>
                    <br/>
                    <p>School of Code Bootcamp - One of only 90 people chosen from 3000 applications to take part in the sixteen-week, remote, intensive web development course.</p> 
                    <div className='floating__pics'>
     <Image
      src={software}
      width={50}
      height={50}
      alt="Picture of a computer"
      className='cake__pic pt-4'
      />
      </div></span>
                </CardContent>
              </Card>
              <Card className="bg-zinc-500 text-white font-mono">
                <CardContent className="flex aspect-square items-center justify-center p-2 m-10">
                  <span className="text-sm p-2 ">
                  <p>Designing & implementing methods to perform & analyse user/product research.</p>
                  <br/>
                  <p>Collaborating in agile teams to ideate & design UIs, create wireframes & prototypes.</p>
                  <div className='floating__pics'>
     <Image
      src={react}
      width={100}
      height={100}
      alt="Picture of react logo"
      className='cake__pic pt-4'
      />
      </div>
                 </span>
                </CardContent>
              </Card>
              <Card className="text-zinc-500 bg-white font-mono">
                <CardContent className="flex aspect-square items-center justify-center p-2 m-10">
                  <span className="text-sm p-2 ">
                  <p>Pair programming to build full-stack JavaScript applications to solve real-world problems.</p>
<br/>
<p>Working in an agile environment, using TDD, Git & GitHub to build applications.</p>
<div className='floating__pics'>
     <Image
      src={nextlogo}
      width={100}
      height={100}
      alt="Picture of next.js logo"
      className='cake__pic pt-4'
      />
      </div>
                 </span>
                </CardContent>
              </Card>
              <Card className="bg-zinc-500 text-white font-mono">
                <CardContent className="flex aspect-square items-center justify-center p-2 m-10">
                  <span className="text-sm p-2 ">
                  
<p>Demoing applications to industry experts through the lens of user-personas.</p>
<br/>
<p>Team retrospectives to discuss successes, challenges & learn from any mistakes.</p>
<div className='floating__pics'>
     <Image
      src={htmlogo}
      width={100}
      height={100}
      alt="Picture of a computer"
      className='cake__pic pt-4'
      />
      </div>
                 </span>
                </CardContent>
              </Card>
              <Card className="text-zinc-500 bg-white font-mono">
                <CardContent className="flex aspect-square items-center justify-center p-2 m-10">
                  <span className="text-sm p-2 ">
                  <p>Tech Stack: JS| HTML| CSS| REACT| NEXT| REST APIs| JEST| PLAYWRIGHT| SQL| GIT| AWS| TAILWIND| TYPESCRIPT|</p>
                  <div className='floating__pics'>
     <Image
      src={tdd}
      width={50}
      height={50}
      alt="Picture of a tdd logo"
      className='cake__pic pt-4'
      />
      </div>
                 </span>
                </CardContent>
              </Card>
              
              <Card className="text-white bg-zinc-500 font-mono">
                <CardContent className="flex aspect-square items-center justify-center p-2 m-10">
                  <span className="text-sm p-2 ">
                    <p>Friday Hackathons.</p>
                      <br/>
                      <p>Mid-term team project: One week to ideate, design & build an application to solve a problem facing SoC bootcampers.</p>
                      <br/>
                      <p>Final team project: Four weeks to plan & build an application for an external stakeholder.</p>
                      <br/>
<div className='floating__pics'>
     <Image
      src={agile1}
      width={100}
      height={100}
      alt="Picture of agile logo"
      className='cake__pic pt-4'
      />
      </div>
                 </span>
                </CardContent>
              </Card>
              <Card className="text-zinc-500 bg-white font-mono">
                <CardContent className="flex aspect-square items-center justify-center p-2 m-10">
                  <span className="text-sm p-2 ">
                      <p>Building accessible, appealing & interactive UI & UX.</p>
                      <br/>
                      <p>Tracking discussions, outcomes & sprint planning, using FigJam, Trello & GitHub Issues. </p>
                      <p>Team workk & Mindset sessions.</p>
                      <br/> 
<div className='floating__pics'>
     <Image
      src={testing}
      width={100}
      height={100}
      alt="Picture of agile logo"
      className='cake__pic pt-4'
      />
      </div>
                 </span>
                </CardContent>
              </Card>
            </div>
     
      <Footer/>
        </>
        
        
    )
    }
