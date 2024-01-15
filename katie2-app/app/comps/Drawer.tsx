import * as React from "react"
import {UserSearch} from "lucide-react"


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
                <p>Email: katiecoder22@gmail.com</p>
                <br/>
                <p>LinkedIn profile:</p>
            </DrawerDescription>
          </DrawerHeader>
          
          <DrawerFooter>
            
            <DrawerClose asChild>
              <Button variant="outline">Close</Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  )
}
