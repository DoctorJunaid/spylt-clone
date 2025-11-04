    import React, {useRef} from 'react'
    import {flavorlists} from "/src/Constants/index.js"
    import SliderTitle from "./SliderTitle.jsx";
    import {useGSAP} from "@gsap/react";
    import gsap from "gsap";
    import ScrollTrigger from "gsap/ScrollTrigger";
    import {useMediaQuery} from "react-responsive";


    const ScrollFlavour = () => {
        gsap.registerPlugin(ScrollTrigger);
        const SliderRef = useRef(null);
        const isTablet = useMediaQuery({
            query : "(max-width: 1024px)",

        });

        useGSAP(()=>{
            if (isTablet) return;


            const scrollAmount = SliderRef.current.scrollWidth - window.innerWidth;

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: ".flavour-wrapper",
                    start: "0% top",
                    end: `+=${scrollAmount + 500}px`,
                    scrub: 3,
                    pin: true,
                }

                })
                tl.to(".flavours", {
                    x : `-${scrollAmount + 500}px`,
                    duration: 1,
                    ease: "power2.inOut"

            })

            const Titletl = gsap.timeline({
                scrollTrigger: {
                    trigger: ".flavour-wrapper",
                    start: "top top",
                    end: "bottom 80%",
                    scrub: 3,
                }


            })
            Titletl.from("#text1", {
                xPercent: 15,
                ease: "power1.inOut"
                }).from("#clippath", {
                    xPercent :  12,
                ease: "power1.inOut"


            },"<").from("#text2", {
                xPercent: 8,
                ease: "power1.inOut"
            },"<")
        })




        return (
            <div className={"flavour-wrapper min-h-dvh w-full lg:h-dvh md:h-fit   bg-[#FCE1CD] mt-0  xl:mt-0 py-10    "}>
                <div ref={SliderRef} className={"flavours h-full w-full flex flex-col  lg:flex-row items-center 2xl:gap-72 lg:gap-50 md:gap-16 gap-7 flex-nowrap  "}>
                <SliderTitle />

                {
                    flavorlists.map((item, index) => {
                        return (
                        <div key={index} className={`relative z-30 lg:w-[50vw] w-80 lg:h-[70vh] md:w-[90vw] md:h-[50vh] h-80 flex-none ${item.rotation}`}>
                               <img src={`/images/${item.color}-bg.svg`} alt="" className={"absolute bottom-0 left-0 right-0  lg:w-full "} />
                                <img src={`/images/${item.color}-drink.webp`} alt=""  className={"absolute z-50 left-1/2 md:left-[33%] -translate-x-1/2 bottom-0 md:h-full h-80 w-fit "} />
                                <img src={`/images/${item.color}-elements.webp`} alt=""  className={"absolute left-0 z-40 md:top-0 md:bottom-auto bottom-10 w-full md:h-full  "}/>
                                <h1 className={" absolute z-60  bottom-6 left-6 text-xl md:text-4xl lg:text-8xl font-bold text-[#FAEADE] "}>{item.name}</h1>
                            </div>
                        )
                    })

                }
                </div>



            </div>
        )
    }
    export default ScrollFlavour
