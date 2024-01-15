
'use client'
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export default function InfoCarousel() {
  return (
    <Carousel className="w-full max-w-xs pl-6">
      <CarouselContent>
        
          <CarouselItem className="basis-1/2">
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-2">
                  <span className="text-xl font-semibold">Hello</span>
                  
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
          <CarouselItem className="basis-1/2">
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-2">
                  <span className="text-4xl font-semibold">Bob</span>
                  
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
          <CarouselItem className="basis-1/2">
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-2">
                  <span className="text-4xl font-semibold">Bob</span>
                  
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
