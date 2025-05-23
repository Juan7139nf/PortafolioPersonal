"use client";

import { useEffect, useRef } from "react";
import { animate, onScroll } from "animejs";
import { PaisajeDayNight } from "@/components/interfaces/paisajeDayNight";
import AnimatedText from "@/scripts/animations/animatedText";
import ThemeSwitcher from "@/scripts/customs/themeSwitcher";

export default function Home() {
  const squareRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current || !squareRef.current) return;

    const animation = animate(squareRef.current, {
      x: "20rem",
      rotate: "1turn",
      easing: "linear",
      autoplay: onScroll({
        container: containerRef.current,
        enter: "bottom-=50 top",
        leave: "top+=60 bottom",
        sync: 0.5,
        debug: true,
      }),
    });

    return () => animation?.cancel?.();
  }, []);

  return (
    <>
      <div className="bg-gradient-to-bl from-[#179ee6] via-[#1ce3e6] to-[#10bf99] dark:from-[#0a0a29] dark:via-[#131359] dark:to-[#583576] overflow-hidden">
        <ThemeSwitcher />
        <div className="pb-30 pt-10">
          <div className="cat flex justify-center pb-10">
            <svg
              width="50%"
              style={{ maxWidth: "300px" }}
              viewBox="0 0 15.59 15.59"
            >
              <path
                className="fill-black dark:fill-white"
                d="M14.42,11.993c-0.104-1.334-0.709-2.336-1.57-3.153c-0.479-0.449-0.906-0.563-1.414-0.563c0,0-0.204,0.005-0.041,0.212  c0.215,0.271,1.791,2.328,1.768,4.011c-0.029,1.948-1.958,1.837-1.958,1.837c0.812-1.542,0.402-3.001,0.276-3.512  c-0.238-0.943-0.709-1.857-1.417-2.738C9.191,6.988,8.312,6.468,7.425,6.523c-0.379-0.654-0.716-1.18-1.011-1.61  C8.02,3.479,6.974,2.787,6.063,0c-0.211,0.591-0.38,1.028-0.507,1.31c-0.644-0.08-2.071-0.08-2.714,0  C2.716,1.028,2.547,0.591,2.336,0C1.423,2.794,0.374,3.467,1.999,4.909c0.173,3.278,0.849,4.149,1.942,5.732  c0.9,1.304,0.675,1.768,1.098,3.569c-3.197,2.014,2.223,1.241,3.063,1.2C10.266,15.305,14.777,16.6,14.42,11.993z"
              ></path>
            </svg>
          </div>
          <div className="w-full flex flex-wrap justify-center gap-4 text-center">
            <AnimatedText text={"Juan"} sizeClass="text-5xl" />
            <AnimatedText text={"Nicolas"} sizeClass="text-5xl" />
            <AnimatedText text={"Flores"} sizeClass="text-5xl" />
            <AnimatedText text={"Delgado"} sizeClass="text-5xl" />
          </div>
        </div>
      </div>
      <div
        ref={containerRef}
        className="scroll-container overflow-y-auto h-screen"
      >
        <div className="scroll-content min-h-[200vh] gap-64">
          <div className="text-4xl">Scroll down</div>
          <div ref={squareRef} className="square bg-amber-950 w-20 h-20" />
        </div>
      </div>
    </>
  );
}
