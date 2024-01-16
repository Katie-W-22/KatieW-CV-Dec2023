import * as React from "react"
import {UserSearch} from "lucide-react"
import Image from "next/image"
import katiephoto from "@/images/KWphoto.jpg"


import { Button } from "@/components/ui/button"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"



export default function DrawerDemo() {
  
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="outline"><UserSearch/></Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader>
            <DrawerTitle>Get in contact!</DrawerTitle>
            <DrawerDescription>
                <p>Via Email or LinkedIn</p>
                <br/>
                <Image
      src={katiephoto}
      width={50}
      height={50}
      alt="Picture of a computer"
      className='rounded-md mx-auto'
      />
      <br/>
                <p>Email: katiecoder22@gmail.com</p>
                <br/>
                <p>LinkedIn profile: <a href="https://www.linkedin.com/in/katie-williams-b9652946/">Katie-Williams</a></p>
                <br/>
                <p>GitHub profile: <a href="https://github.com/Katie-W-22">Katie-W-22</a></p>
            </DrawerDescription>
          </DrawerHeader>
          
          <DrawerFooter>
            
            <DrawerClose asChild>
              <Button variant="outline" className="font-mono">Close</Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  )
}
