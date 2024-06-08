import React from 'react';

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
import Card from './Card';

  

const Slider:React.FC = () => {
  return (
    <>
    <section className='flex justify-center'>
      <section className=' max-w-[1440px] w-full'>
        <h1 className='text-4xl font-ModerEraBlack py-10 px-3'>Recent Properties</h1>
      </section>
    </section>
    <div className='w-full flex justify-center items-center flex-col pb-10'>
          <section className='w-full max-w-[1440px] px-3'>
          <Carousel>
                            <CarouselContent>                            
                            {Array(10)
                            .fill(0)
                            .map(() => (
                                <CarouselItem className="basis-1/1 lg:basis-1/3 xl:basis-1/4 ">
                            <Card />
                            </CarouselItem>
                            ))}
                                
                            
                            </CarouselContent>
                            <CarouselPrevious className="hidden xl:flex" />
                            <CarouselNext className="hidden xl:flex"/>
                        </Carousel>
          </section>
    </div>
    </>
  );
};

export default Slider;