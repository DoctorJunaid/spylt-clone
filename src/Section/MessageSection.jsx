import React from 'react'
import {useGSAP} from "@gsap/react";
import gsap from "gsap";
import SplitText from "gsap/SplitText";
import ScrollTrigger from "gsap/ScrollTrigger";
import {useRef} from "react";


const MessageSection = () => {
    gsap.registerPlugin(SplitText , ScrollTrigger);
    const TopmsgSectionpRef = useRef(null);
    const BottommsgSectionpRef = useRef(null);
    const midRef = useRef(null);




    useGSAP(() => {

        const TopmessageSplit = new SplitText(TopmsgSectionpRef.current, {
            type: "words",
        })

        const BottommessageSplit = new SplitText(BottommsgSectionpRef.current, {
            type: "words",
        })

        gsap.to(TopmessageSplit.words, {
            color : "#fff",
            stagger: 0.5,
            duration: 2,
            ease: "power2.inOut",
            scrollTrigger: {
                trigger: TopmsgSectionpRef.current,
                start: "top 80%",
                end: "top 20%",
                scrub: 3,


            },

        })
        gsap.to(midRef.current, {
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            duration: 1.5,
            ease: "power2.out",
            opacity: 1,
            scrollTrigger: {
                trigger: midRef.current,
                start: "top 80%",
                end: "top 20%",
                scrub: 3,
            },
        });
        gsap.to(BottommessageSplit.words, {
            color : "#fff",
            stagger: 0.5,
            duration: 2,
            ease: "power2.inOut",
            scrollTrigger: {
                trigger: BottommsgSectionpRef.current,
                start: "top 60%",
                end: "top 20%",
                scrub: 3,


            },

        })
        const BottomLinesSplit = new SplitText("#msgsectionp", {
            type: "lines",
        });

        gsap.from(BottomLinesSplit.lines, {
            yPercent: 40,
            opacity: 0,
            ease: "power2.out",
            stagger: 0.4,
            scrollTrigger: {
                trigger: "#msgsectionp",
                start: "top 90%",
                end: "bottom 60%",
                scrub: 3,
            },
        });


    })




    return (
        <section className={"min-h-dvh  bg-[#7F3B2D]  overflow-x-hidden"}>

            <div className={"mx-auto pt-36 md:pt-16 text-center flex flex-col items-center justify-center min-h-[80vh] "}>
                <div className={"text-[rgba(250,234,222,0.11)] text-[7vw] text-center uppercase font-black tracking-tight leading-none"}>
                    <h1 ref={TopmsgSectionpRef} >Stir up your
                        <br/> fearless past and</h1>

                </div>
                <div className="uppercase text-[12vw] sm:text-[10vw] lg:text-[8vw] flex justify-center items-center px-4  md:-mt-2 lg:-mt-5">
                    <h1
                        ref={midRef}
                        style={{
                            clipPath: "polygon(100% 0, 100% 0%, 100% 100%, 100% 100%)"
                        }}
                        className=" z-30 opacity-0 bg-[#E3A458] text-[#7F3B2D] tracking-tighter py-2 lg:pb-3 lg:py-0 px-3 sm:px-4 font-bold rotate-3 border-4 sm:border-6 lg:border-8 border-[#7F3B2D] border-solid leading-none lg:leading-tight flex items-center justify-center lg:block"
                    >
                        FUEL UP
                    </h1>
                </div>
                <div  className={"text-[rgba(250,234,222,0.11)] text-[7vw] text-center uppercase font-black tracking-tight leading-none -mt-1 md:-mt-2 lg:-mt-5"}>
                    <h1 ref={BottommsgSectionpRef} >our future with every <br />gulp of Perfect Protein</h1>
                </div>
                <div  id={"msgsectionp"} className={"text-[#fff] text-[2vw] sm:text-[1.5vw] lg:text-[1vw] pt-16 font-thin pb-20 tracking-wide"}>
                    <p>Rev up your rebel spirit and feed the adventure of life </p>
                    <p>with SPYLT, where you're one chug away from</p>
                    <p>epic nostalgia and fearless fun.</p>
                </div>
            </div>
        </section>
    )
}
export default MessageSection