'use client'
import Image from 'next/image'
import Footer from '../comps/Footer'
import Navbar from '../comps/Navbar'
import { Card, CardContent } from "@/components/ui/card"
import DrawerDemo from '../comps/Drawer'
import github from './github.jpeg'
import css1 from './css1.png'
import interior from './interior.png'
import restApi from './restApi.png'
import nesst from './nesst1.png'

export default function Screen4 (){
    return(
    <>
    <div className='bg-orange-50 w-full fixed top-0'>
      <div className="flex justify-between" >
      <p className='name__title '>Projects</p>
      <DrawerDemo/>
      
      </div>
      
   
    <Navbar/>
    </div>
    
    
    <div className="p-1 sm:hidden block  min-h-screen w-screen flex-col items-center  pb-40 md:pb-0 ">
              <Card className="mt-20 bg-zinc-500 text-white font-mono">
                <CardContent className="flex aspect-square items-center justify-center p-2 m-10">
                  <span className="text-sm p-2 ">         
                    <p>Click below to vist my GitHub Profile</p>
                    <br/>
                    <p>GitHub: <a href="https://github.com/Katie-W-22">Katie-W-22</a></p>
                    <div className='floating__pics'>
     <Image
      src={github}
      width={100}
      height={100}
      alt="Picture of GitHub logo"
      className='cake__pic pt-4'
      />
      </div>
                 </span>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-2 m-10">
                  <span className="text-sm p-2 ">         
                    <p>Nesst (Final 4-week SoC project)</p>
                    <br/>
                    <p>Facilitating connections and shared accommodation for solo travellers!</p>
                    <a href="https://www.youtube.com/watch?v=SyPIFCDmNHA">Nesst Promo Video</a>
                    <br/>
                    <a href="https://github.com/Katie-W-22/SoC-Final-Project">REPO: Nesst app info</a>
                    <div className='floating__pics'>
     <Image
      src={nesst}
      width={100}
      height={100}
      alt="Picture of home interior logo"
      className='cake__pic pt-4'
      />
      </div>
                 </span>
                </CardContent>
              </Card>
              <Card className=" bg-zinc-500 text-white font-mono">
                <CardContent className="flex aspect-square items-center justify-center p-2 m-10">
                  <span className="text-sm p-2 ">         
                    <p>Interior Design</p>
                    <br/>
                    <p>BBC Sports app clone meets interior design!</p>
                    <a href="https://github.com/Katie-W-22/Interior-Design">REPO: Interior Design</a>
                    <div className='floating__pics'>
     <Image
      src={interior}
      width={100}
      height={100}
      alt="Picture of home interior logo"
      className='cake__pic pt-4'
      />
      </div>
                 </span>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-2 m-10">
                  <span className="text-sm p-2 ">         
                    <p>Elfy Christmas Helper</p>
                    <br/>
                    <p>Get your fix of Christmas jokes & adverts!</p>
                    <a href="https://github.com/Katie-W-22/Elfy-Christmas-helper">REPO: Elfy</a>
                    <div className='floating__pics'>
     <Image
      src={interior}
      width={100}
      height={100}
      alt="Picture of home interior logo"
      className='cake__pic pt-4'
      />
      </div>
                 </span>
                </CardContent>
              </Card>
              <Card className=" bg-zinc-500 text-white font-mono">
                <CardContent className="flex aspect-square items-center justify-center p-2 m-10">
                  <span className="text-sm p-2 ">         
                    <p>Weather App</p>
                    <br/>
                    <p>Restful APIs</p>
                    <a href="https://github.com/Katie-W-22/Katie-Weather-App">REPO: Weather App</a>
                    <div className='floating__pics'>
     <Image
      src={restApi}
      width={100}
      height={100}
      alt="Picture of restful api logo"
      className='cake__pic pt-4'
      />
      </div>
                 </span>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-2 m-10">
                  <span className="text-sm p-2 ">         
                    <p>Rotating Shapes</p>
                    <br/>
                    <p>Learning about CSS animations</p>
                    <a href="https://github.com/Katie-W-22/Rotating-shapes">REPO: Rotating Shapes</a>
                    <div className='floating__pics'>
     <Image
      src={css1}
      width={100}
      height={100}
      alt="Picture of css logo"
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

    /*<div className="hobbies">
<p>GitHub Links</p>
<ul >

<li className="pb-2"><a href="https://github.com/Katie-W-22/KW-portfolio-page">First Attempt Portfolio</a>
</li>
<li className="pb-2"><a href="https://github.com/Katie-W-22/Rotating-shapes">Rotating Shapes</a>
</li>
<li className="pb-2"><a href="https://github.com/Katie-W-22/Katie-Weather-App">Weather App</a>
</li>
<li className="pb-2"><a href="https://github.com/Katie-W-22/KatieW-CV-styled">Styled Cards CV</a>
</li>
<li className="pb-2"><a href="https://github.com/Katie-W-22/Elfy-Christmas-helper">Elf - Christmas Helper</a>
</li>
<li className="pb-2"><a href="https://github.com/Katie-W-22/Interior-Design">Interior Design</a>
</li>
</ul>
</div> */