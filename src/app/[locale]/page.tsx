
import QuickExample from"@/components/introWebside";
import  HeroSkizze  from "@/components/Hero_Skizze";
import HeroImage from "@/components/CldImage/HeroImage";
import HeroImage02 from "@/components/CldImage/HeroImage02";
import HeroImage03 from "@/components/CldImage/HeroImage03";
import Gsap from "@/components/Gsap"
import CollapseCardFeatures from "@/components/CollapsCardFeatures"
import ProjectCard from "@/components/project-card";
import { Button } from "@heroui/react";


export default function Home() {
  return (
    <>
      <main className="min-h-screen ">
        
      <div className="  w-full max-w-[100vw] mx-auto flex flex-col mb-8 ">
         <HeroImage/>
          <div className=" mt-[-24vh] flex flex-col items-center bg-gradient-to-b from-[#938d7d] lg:bg-gradient-to-b via-transparent  to-transparent lg:mt-[52vh]">                                                                                                          "&gt;
         <Gsap/>
         </div>   
         </div>
        
        <div className=" mt-[8vw] w-full max-w-[100vw] mx-auto flex flex-col lg:mt-0">
        <HeroImage02/> 
         </div>

        <div className="mt-[12vh] h-[100vh] w-full max-w-[99em] mx-auto flex flex-col items-center lg:mt-[12vh]">
        <HeroImage03/> 
        
          </div>
          <div className="mt-[24vh] w-full max-w-[100vw] mx-auto flex flex-col lg:mt-0">
         <CollapseCardFeatures/>
         </div>

         <section className="flex min-h-[80vh] flex-col items-start justify-center px-4">
          <div className="container">
            <h1 className="text-6xl font-bold tracking-tighter md:text-8xl">
              PRODUCT
              <br />
              DESIGNER &
              <br />
              ART DIRECTOR
            </h1>
          </div>
        </section>

        <section id="work" className="py-20">
          <div className="container px-4">
            <div className="mb-12 flex items-center">
              <Button variant="bordered" className="border-white/20 text-white hover:bg-white/10">
                selected projects
              </Button>
            </div>
            <div className="grid gap-8 md:grid-cols-2">
              <ProjectCard title="Chunk" description="Digitizing book-keeping for thousands of SME's across Africa." image={""} link={""} tags={[]} />
              <ProjectCard
                title="Heycard"
                description="Spend and subscription management for forward-thinking startups." image={""} link={""} tags={[]}              />
              <ProjectCard title="Optimus" description="Crafting experiences to simplify investments for Africans." image={""} link={""} tags={[]} />
              <ProjectCard
                title="Topship (YC W22)"
                description="Revolutionising logistics for thousands of African businesses." image={""} link={""} tags={[]}              />
            </div>
          </div>
        </section>

        <section className="py-32">
          <div className="container px-4 text-center">
            <Button variant="bordered" className="mb-8 border-white/20 text-white hover:bg-white/10">
              reach out
            </Button>
            <h2 className="mb-6 text-6xl font-bold tracking-tighter md:text-8xl">
              GOT THAT COOL
              <br />
              IDEA?
            </h2>
            <p className="mb-8 text-lg text-gray-400">
              I'm open to new opportunities and would love to hear
              <br />
              from you.
            </p>
            <Button className="bg-white text-black hover:bg-gray-200">Contact me</Button>
          </div>
        </section>
    
      </main>
      
    
    </>
  )
}
