import React from 'react'

const ScrollingSection = () => {
  return (
    <div className='w-full h-screen bg-[#FCE1CD]'>
        <section>
        <div className="uppercase text-[#523122] text-[12vw] sm:text-[10vw] lg:text-[8vw] font-black tracking-tighter text-center  pt-[8vh]  lg:pt-[12vh] leading-tight px-4 
       -mb-2 md:-mb-4">
            <h1 className="opacity-100" >
            We have 6
            </h1>
          </div>
          <div className="uppercase text-[12vw] sm:text-[10vw] lg:text-[8vw] flex justify-center items-center px-4">
            <h1
              
            //   style={{
            //     clipPath: "polygon(50% 1%, 50% 0%, 50% 100%, 50% 100%)",
            //   }}
              className="bg-[#A26833] text-[#FCE1CD] tracking-tighter -py-[0.1em] px-3 sm:px-4 font-bold -rotate-3 border-4 sm:border-6 lg:border-8 border-[#FAEADE] border-solid leading-tight"
            >
             FREAKING
            </h1>
          </div>
          <div className="uppercase text-[#523122] text-[12vw] sm:text-[10vw] lg:text-[8vw] font-black tracking-tighter text-center -mt-4 md:-mt-7 lg:-mt-10 leading-tight px-4  ">
            <h1 className="opacity-100" >
            delicious flavors
            </h1>
          </div>

           
        </section>
    </div>
  )
}

export default ScrollingSection