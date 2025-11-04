    import React from 'react'
    import SliderTitle from "./SliderTitle.jsx";
    import {flavorlists} from "/src/Constants/index.js"

    const ScrollFlavour = () => {
        return (
            <div className={"min-h-dvh w-full lg:h-dvh md:h-fit   bg-[#FCE1CD] mt-0  md:mt-20 lg:mt-10 xl:mt-0 py-10    "}>
                <div className={"flavours h-full w-full flex flex-col  md:flex-row items-center 2xl:gap-72 lg:gap-50 md:gap-16 gap-7 flex-nowrap  "}>

                {
                    flavorlists.map((item, index) => {
                        return (
                        <div key={index} className={`relative z-30 lg:w-[50vw] w-80 lg:h-[70vh] md:w-[90vw] md:h-[50vh] h-80 flex-none ${item.rotation}`}>
                               <img src={`/src/assets/images/${item.color}-bg.svg`} alt="" className={"absolute bottom-0 left-0 right-0  lg:w-full "} />
                                <img src={`/src/assets/images/${item.color}-drink.webp`} alt=""  className={"absolute z-50 left-1/2 md:left-[33%] -translate-x-1/2 bottom-0 md:h-full h-80 w-fit "} />
                                <img src={`/src/assets/images/${item.color}-elements.webp`} alt=""  className={"absolute left-0 z-40 md:top-0 md:bottom-auto bottom-10 w-full md:h-full  "}/>
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
