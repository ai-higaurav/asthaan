import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React from "react";

const Hero:React.FC = () => {
  return (
    <main className="w-full h-screen flex justify-center" style={{backgroundImage:`url('./images/background.png')` , backgroundPosition:'center', backgroundRepeat:'no-repeat', backgroundSize:'cover'}}>
    <div className="w-full max-w-[1440px] mt-44 lg:mt-0 px-3 flex justify-center lg:items-center lg:justify-between lg:gap-10">
      
      <section className="flex flex-col w-full max-w-[500px]  gap-5  text-center lg:text-left ">
        <h1 className="font-ModerEraBlack text-3xl sm:text-4xl lg:text-5xl">The Better Way To Buy , Sell in Real Estate</h1>
        <p className="">Discover a digital platform where property transactions are streamlined. Buy, sell, or rent seamlessly without distractions. Your property journey simplified.</p>
        <section className="flex w-full mt-3 lg:mt-5" >
            <Input placeholder="City , Address" className="rounded-bl-3xl rounded-tr-none focus-visible:ring-transparent focus-visible:bg-gray-300 "/>
            <Button className="rounded-none">Search</Button>
        </section>
      </section>

      <section className="hidden lg:block">
            <div className="">
                <img src="./images/property.png" alt="" className="rounded-bl-[100px] w-full max-w-[486px]  h-[608px]"/>
            </div>
        </section>
    </div>
</main>
  );
};

export default Hero;