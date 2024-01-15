'use client'

import Footer from '../comps/Footer'
import Navbar from '../comps/Navbar'
import { Card, CardContent } from "@/components/ui/card"

export default function Screen4 (){
    return(
    <>
    <div className='bg-white w-full'>
        <p className='name__title '>Projects</p>
        <Navbar/>
    </div>
    <div className="p-1">
    <Card>
                <CardContent className="flex aspect-square items-center justify-center p-2 m-10">
                  <span className="text-sm p-2 ">         
                    <p>GitHub Profile</p>
                    <br/>
                    <p>Katie-W-22</p>
                 </span>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-2 m-10">
                  <span className="text-sm p-2 ">         
                    <p>Rotating Shapes</p>
                    <br/>
                    <p>Learning about CSS animations</p>
                 </span>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-2 m-10">
                  <span className="text-sm p-2 ">         
                    <p>Weather App</p>
                    <br/>
                    <p>Restful APIs</p>
                 </span>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-2 m-10">
                  <span className="text-sm p-2 ">         
                    <p>Interior Design</p>
                    <br/>
                    <p>BBC Sports app clone meets interior design!</p>
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
<li className="pb-2"><a href="https://github.com/Katie-W-22">MY GITHUB PROFILE</a>
</li>
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