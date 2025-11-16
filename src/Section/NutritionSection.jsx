const NutritionSection = ()=>{
    return(
        <>
        <section className={"min-h-dvh xl:h-[120dvh] overflow-hidden relative bg-[#E4D7C2]"}>
                <img src={"/images/slider-dip.png"} alt="" className={"w-full object-cover"}/>
                <img src={"/images/big-img.png"} alt="" className={"absolute w-full 2xl:h-full md:h-auto h-1/2 left-0 bottom-0 object-bottom 2xl:object-contain object-cover"}/>
                <div  className={"flex md:flex-row flex-col justify-between md:px-10 px-5 mt-14 md:mt-0"}>
                    <div className={"relative inline-block md:translate-y-20"}>
                        <div className={" uppercase font-black tracking-tighter text-[10vw] md:text-[7vw] general-title relative flex flex-col justify-center items-center gap-24"}>
                            <div className={"overflow-hidden place-self-start text-[#523122]"}>
                                <h1>it Still does</h1>
                            </div>
                            <div className={"place-self-start rotate-[-3deg] border-[.5vw] border-[#e3d3bc]  text-nowrap  md:-mt-30 -mt-28 "}>
                                <div className={"bg-[#A26833]   md:pt-0  md:px-5 px-3 inline-block "}> {/*  style */}
                                    <h2 className={"text-[#E2D4BC]"}>Body Good</h2>
                                </div>
                            </div>

                        </div>

                    </div>

                </div>
        </section>
        </>
    )
}
export  default NutritionSection;