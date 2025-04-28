/* eslint-disable react/jsx-no-undef */

"use client";

import { gsap } from "gsap";
import LogoEZ from"/public/LogoEZ990.svg";
import Image from "next/image";
import { useEffect } from "react";

const Gsap = () => {
  useEffect(() => {
    gsap.to("#Logo", {
      backgroundColor: "rgba(0,0,0,1)",
      duration: 4.0,
      opacity: 1,
      scale: 1,
      rotate: 360,
      ease: "back",
    });
  }, []);

  return (
    <div className="mt-4 size-60 sm:size-72 md:size-80 lg:h-[16vh] lg:w-[16vw] lg:-mt-[98vh]">
      <div>
        <Image id="Logo" alt="logo" src={LogoEZ} width="333" height="333" />
      </div>
    </div>
  );
};

export default Gsap;
