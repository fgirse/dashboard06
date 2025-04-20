
import QuickExample from"@/components/introWebside";
import  HeroSkizze  from "@/components/Hero_Skizze";
import HeroImage from "@/components/CldImage/HeroImage";
import HeroImage02 from "@/components/CldImage/HeroImage02";
import HeroImage03 from "@/components/CldImage/HeroImage03";

import Gsap from "@/components/Gsap"
import CollapseCardFeatures from "@/components/CollapsCardFeatures"
import CloudinaryImage from "@/components/CldImage";

export default function Home() {
  return (
    <>
      <main className="min-h-screen ">
        
      <div className="  w-full max-w-[100vw] mx-auto flex flex-col mb-8 ">
         <HeroImage/>
          <div className="mb-8 py-12 flex flex-col items-center bg-gradient-to-b  from-[#938d7d] via-transparent  to-stone-700 lg:py-0">                                                                                                          "&gt;
         <Gsap/>
         </div>   
         </div>
        
        <div className=" mt-[8vw] w-full max-w-[100vw] mx-auto flex flex-col lg:mt-0">
        <HeroImage02/> 
         </div>

        <div className="mt-[1vh] h-[100vh] w-full max-w-[99em] mx-auto flex flex-col items-center lg:mt-[12vh]">
        <HeroImage03/> 
        
          </div>
          <div className="mt-[24vh] w-full max-w-[100vw] mx-auto flex flex-col lg:mt-0">
         <CollapseCardFeatures/>
         </div>
         <div className=" w-full max-w-[100vw] flex flex-col items-center lg:mt-0">
          <CloudinaryImage src={"interiore21_gbvcg4"} alt={"test"} width={400} height={250}/>
          </div>
      </main>
      
    
    </>
  )
}
