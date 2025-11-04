import React from 'react'
import {useGSAP} from "@gsap/react";
import gsap from "gsap";
import SplitText from "gsap/SplitText";
import ScrollTrigger from "gsap/ScrollTrigger";
import {useRef} from "react";

const SliderTitle = () => {
gsap.registerPlugin(SplitText , ScrollTrigger);
    useGSAP(()=>{
        const splittext1 = new SplitText("#text1", {
            type: "chars",
        })
        const splittext2 = new SplitText("#text2", {
            type: "chars",
        })
        gsap.from(splittext1.chars, {
            yPercent: 50,
            opacity: 0,
            stagger: 0.04,
            duration: 0.5,
            ease: "power2.inOut",
            scrollTrigger: {
                trigger: "#text1",
                start: "top 90%",
                end: "bottom 70%",
                scrub: 3,
            }
        })
        gsap.to("#clippath", {
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            duration: 1.5,
            ease: "power2.out",
            opacity: 1,
            scrollTrigger: {
                trigger: "#clippath",
                start: "top 90%",
                end: "bottom 70%",
                scrub: 3,
            }
        })
        gsap.from(splittext2.chars, {
            yPercent: 50,
            opacity: 0,
            stagger: 0.04,
            duration: 0.5,
            ease: "power2.inOut",
            scrollTrigger: {
                trigger: "#text2",
                start: "top 90%",
                end: "bottom 100%",
                scrub: 3,
            }
        })

    })
  return (
    <div className='w-full lg:min-w-3/4 h-fit py-30 bg-[#FCE1CD]'>
        <section>
        <div className="uppercase text-[#523122] text-[12vw] sm:text-[10vw] lg:text-[8vw] font-black tracking-tighter text-center  pt-[8vh]  lg:pt-[12vh] leading-tight px-4 
       -mb-2 md:-mb-4">
            <h1 id={"text1"} className="opacity-100" >
            We have 6
            </h1>
          </div>
          <div className="uppercase text-[12vw] sm:text-[10vw] lg:text-[8vw] flex justify-center items-center px-4">
            <h1
                id={"clippath"}
                style={{
                clipPath: "polygon(50% 1%, 50% 0%, 50% 100%, 50% 100%)",
              }}
              className="bg-[#A26833] z-20 text-[#FCE1CD] tracking-tighter -py-[0.1em] px-3 sm:px-4 font-bold -rotate-3 border-4 sm:border-6 lg:border-8 border-[#FAEADE] border-solid leading-tight"
            >
             FREAKING
            </h1>
          </div>
          <div className="uppercase text-[#523122] text-[12vw] sm:text-[10vw] lg:text-[8vw] font-black tracking-tighter text-center -mt-4 md:-mt-7 lg:-mt-10 leading-tight px-4  ">
            <h1 id={"text2"} className="opacity-100" >
            delicious flavors
            </h1>
          </div>

           
        </section>
    </div>
  )
}

export default SliderTitle