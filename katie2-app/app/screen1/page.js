'use client'

import Image from 'next/image'
import software from './software2.png'
import Footer from '../comps/Footer'
import Navbar from "../comps/Navbar"
import { Card, CardContent } from "@/components/ui/card"
import DrawerDemo from '../comps/Drawer'

export default function Screen1 (){
    return(
        <>
    <div className='bg-white w-full fixed top-0'>
      <div className="flex justify-between" >
      <p className='name__title'>Tech</p>
      <DrawerDemo/>
      
      </div>
    <Navbar/>
    </div>
        <div className='floating__pics'>
     <Image
      src={software}
      width={50}
      height={50}
      alt="Picture of a computer"
      className='cake__pic pt-4'
      />
      </div>
      <div className="p-1 sm:hidden block">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-2 m-10">
                  <span className="text-sm p-2 ">
                    <h2>Full-stack Developer – The School of Code [09/2023 – 02/2024]</h2>
                    <br/>
                    <p>School of Code Bootcamp - One of only 90 people chosen from 3000 applications to take part in the sixteen-week, remote, intensive web development course.</p> </span>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-2 m-10">
                  <span className="text-sm p-2 ">
                  <p>Designing & implementing methods to perform & analyse user/product research.</p>
                  <br/>
                  <p>Collaborating in agile teams to ideate & design UIs, create wireframes & prototypes.</p>
                 </span>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-2 m-10">
                  <span className="text-sm p-2 ">
                  <p>Pair programming to build full-stack JavaScript applications to solve real-world problems.</p>
<br/>
<p>Working in an agile environment, using TDD, Git & GitHub to build applications.</p>
                 </span>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-2 m-10">
                  <span className="text-sm p-2 ">
                  
<p>Demoing applications to industry experts through the lens of user-personas.</p>
<br/>
<p>Team retrospectives to discuss successes, challenges & learn from any mistakes.</p>
                 </span>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-2 m-10">
                  <span className="text-sm p-2 ">
                  Tech Stack: JS| HTML| CSS| REACT| REST APIs|TDD| SQL| Git| AWS| Figma|& more!
                 </span>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-2 m-10">
                  <span className="text-sm p-2 ">
                  <h2>SOCS – ‘School of Code Stash’ app (1-week project)</h2>
<br/>
<a href="https://socs-ui.onrender.com/ ">Link - SOCS app on Render</a>
                 </span>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-2 m-10">
                  <span className="text-sm p-2 ">
                  One week to ideate, design & build an application to solve a problem facing SoC bootcampers.

Problem: Bootcampers need an organised, searchable repository for tech resources.

Solution: SOCS – an app where bootcampers can view resources by topic or week studied.

o	Lead front-end team in building an accessible, appealing & interactive UI & UX.
o	Responsible for tracking discussions, outcomes & sprint planning, using FigJam. 
o	Collaborated with back-end team to debug & test application (TDD).
o	Designed presentation slides & format for demo to industry experts.
                 </span>
                </CardContent>
              </Card>
            </div>
      <Footer/>
        </>
        
        
    )
    }
