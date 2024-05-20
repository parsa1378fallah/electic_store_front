import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
const MainPageCarousel = () => {
  return (
    <Carousel
      className="w-full mx-auto"
      opts={{
        direction: "rtl",
      }}
    >
      <CarouselContent className="-ml-1">
        <CarouselItem className="pl-1 h-60 lg:h-96 overflow-hidden">
          <div className="p-1">
            <Card>
              <CardContent className="flex  items-center justify-center p-6 h-60 lg:h-96">
                <Image
                  width={1000}
                  height={100}
                  src={"/images/img2.webp"}
                  alt="carousel image"
                  className="w-full h-full"
                />
              </CardContent>
            </Card>
          </div>
        </CarouselItem>
        <CarouselItem className="pl-1 h-60 lg:h-96 overflow-hidden">
          <div className="p-1">
            <Card>
              <CardContent className="flex  items-center justify-center p-6 h-60 lg:h-96">
                <Image
                  width={1000}
                  height={100}
                  src={"/images/img3.jpg"}
                  alt="carousel image"
                  className="w-full h-full"
                />
              </CardContent>
            </Card>
          </div>
        </CarouselItem>
        <CarouselItem className="pl-1 h-60 lg:h-96 overflow-hidden">
          <div className="p-1">
            <Card>
              <CardContent className="flex  items-center justify-center p-6 h-60 lg:h-96">
                <Image
                  width={1000}
                  height={100}
                  src={"/images/img2.webp"}
                  alt="carousel image"
                  className="w-full h-full"
                />
              </CardContent>
            </Card>
          </div>
        </CarouselItem>
        <CarouselItem className="pl-1 h-60 lg:h-96 overflow-hidden">
          <div className="p-1">
            <Card>
              <CardContent className="flex  items-center justify-center p-6 h-60 lg:h-96">
                <Image
                  width={1000}
                  height={100}
                  src={"/images/img4.jpg"}
                  alt="carousel image"
                  className="w-full h-full"
                />
              </CardContent>
            </Card>
          </div>
        </CarouselItem>
        <CarouselItem className="pl-1 h-60 lg:h-96 overflow-hidden">
          <div className="p-1">
            <Card>
              <CardContent className="flex  items-center justify-center p-6 h-60 lg:h-96">
                <Image
                  width={1000}
                  height={100}
                  src={"/images/img5.webp"}
                  alt="carousel image"
                  className="w-full h-full"
                />
              </CardContent>
            </Card>
          </div>
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};
export default MainPageCarousel;
