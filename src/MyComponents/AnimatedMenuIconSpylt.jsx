import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef, useState } from "react";

const AnimatedMenuIconSpylt = () => {
    const containerRef = useRef(null);
    const topBarRef = useRef(null);
    const bottomBarRef = useRef(null);
    const [isOpen, setIsOpen] = useState(false);
    const maxMove = 25;

    const handleClick = () => setIsOpen(!isOpen);

    // --- Floating mouse move animation ---
    useGSAP(() => {
        const container = containerRef.current;
        if (!container) return;

        const handleMove = (e) => {
            const rect = container.getBoundingClientRect();
            const mouseX = e.clientX - rect.left;
            const mouseY = e.clientY - rect.top;
            const x = gsap.utils.mapRange(0, rect.width, -maxMove, maxMove, mouseX);
            const y = gsap.utils.mapRange(0, rect.height, -maxMove, maxMove, mouseY);
            gsap.to(container, {
                duration: 0.3,
                x,
                y,
                ease: "power1.out",
            });
        };

        const handleLeave = () => {
            gsap.to(container, {
                x: 0,
                y: 0,
                duration: 0.7,
                ease: "elastic.out(1, 0.75)",
            });
        };

        container.addEventListener("mousemove", handleMove);
        container.addEventListener("mouseleave", handleLeave);

        return () => {
            container.removeEventListener("mousemove", handleMove);
            container.removeEventListener("mouseleave", handleLeave);
        };
    }, [maxMove]);

    // --- Main animation (BG first, then bars) ---
    useGSAP(() => {
        const container = containerRef.current;
        const top = topBarRef.current;
        const bottom = bottomBarRef.current;
        if (!container || !top || !bottom) return;

        const tl = gsap.timeline({ defaults: { ease: "power2.inOut" } });

        if (isOpen) {
            tl.to(container, {
                backgroundColor: "#FEF3F0",
                borderRadius: "50%",
                duration: 0.4,
                transformOrigin: "center center",
            })
                .to(
                    [top, bottom],
                    {
                        width: "1.5vw",
                        scale: 1.2,
                        duration: 0.5,
                        transformOrigin: "center center",

                        onComplete : ()=>{
                            gsap.to(top, {
                               top: '50%',
                                y : '-50%',
                                height : '1px',
                                onComplete : ()=>{
                                    gsap.to(top, {
                                        height: '2px',
                                        rotate: 45,
                                        duration: 0.3,
                                        transformOrigin: "center center",
                                        ease: "power1.out",
                                    })
                                }
                            });
                            gsap.to(bottom, {
                              bottom: '50%',
                                y : '50%',
                                height : '1px',
                                onComplete : ()=>{
                                    gsap.to(bottom, {
                                        height: '2px',
                                        rotate: -45,
                                        duration: 0.3,
                                        transformOrigin: "center center",
                                        ease: "power1.out",
                                    })
                                }
                            });

                        }



                    },
                    "-=0.1"
                );
        } else {
            tl.to([top, bottom], {
                rotate : 0,
                duration: 0.3,
                transformOrigin: "center center",

            }).to([top, bottom], {

                width: "3vw",

                scale: 1,

                duration: 0.5,
                transformOrigin: "center center",
               onComplete : ()=>{
                    gsap.to(top, {
                        top : '20%',
                        y : 0,
                        height : '2px',
                        rotate: 0,
                    });
                    gsap.to(bottom, {
                        y : 0,
                        bottom : '20%',
                        height : '2px',

                    });
               }


            }).to(
                container,
                {
                    backgroundColor: "transparent",
                    borderRadius: "0%",
                    duration: 0.4,
                    transformOrigin: "center center",
                },
                "-=0.4"
            );
        }
    }, [isOpen]);

    return (
        <div
            onClick={handleClick}
            ref={containerRef}
            className="cursor-pointer relative p-4 transition-all"
        >
            <div className="flex flex-col justify-center   items-center relative z-10 rounded-full bg-none w-5 h-5">
                <div
                    ref={topBarRef}
                    className="w-[3vw] h-[2px] bg-[#523122] absolute top-[20%]"
                ></div>
                <div
                    ref={bottomBarRef}
                    className="w-[3vw] h-[2px] bg-[#523122] absolute bottom-[20%]"
                ></div>
            </div>
        </div>
    );
};

export default AnimatedMenuIconSpylt;
