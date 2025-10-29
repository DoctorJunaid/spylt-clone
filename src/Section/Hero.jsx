import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import SplitText from "gsap/SplitText";

function Hero() {
  gsap.registerPlugin(SplitText);

  const opentextRef = useRef(null);
  const staggerTextRef = useRef(null);
  const heroRef = useRef(null);

  useGSAP(() => {
    // Wait until fonts are fully loaded
    document.fonts.ready.then(() => {
      const titleSplit = new SplitText(staggerTextRef.current, {
        type: "chars",
      });

      const tl1 = gsap.timeline();
      tl1
        .to(heroRef.current, {
          delay: 0.5,
          opacity: 1,
          duration: 0.5,
          ease: "ease.inOut",
        })
        .to(opentextRef.current, {
          duration: 1,
          ease: "circ.out",
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        })
        .from(
          titleSplit.chars,
          {
            y: 50,
            opacity: 0,
            stagger: 0.04,
          },
          "-=0.5",
        );

      // Cleanup
      return () => titleSplit.revert();
    });
  }, []);

  return (
    <section className="">
      <video
        className="w-screen h-screen object-cover object-center  absolute top-0 left-0 -z-20"
        src="https://cdn.prod.website-files.com/669a8d6498ba88c08dfd2cd2%2F66ceef357d683ae03c80a20d_!!!hero_animation-transcode.mp4"
        autoPlay
        muted
      />
      <div ref={heroRef} className="opacity-0">
        <div className="uppercase text-[#523122] text-[8vw] font-black tracking-tighter text-center pt-[12vh] leading-tight ">
          <h1 className="opacity-100" ref={staggerTextRef}>
            Freaking Delicious
          </h1>
        </div>
        <div className="uppercase text-[8vw]  flex justify-center items-center   ">
          <h1
            ref={opentextRef}
            style={{
              clipPath: "polygon(50% 1%, 50% 0%, 50% 100%, 50% 100%)",
            }}
            className=" bg-[#A26833] text-[#FCE1CD] tracking-tighter   -py-[0.1em] px-4 font-bold -rotate-3 border-8    border-[#FAEADE] border-solid leading-tight"
          >
            Protein + Caffeine
          </h1>
        </div>
        <div>
          <div className="flex justify-center item-center">
            <p
              id="text-two"
              className="text-center text-[#664029] pt-[7vh] font-serif  leading-tight tracking-tight  w-[25vw]"
            >
              Live life to the fullest with SPYLT: Shatter boredom and embrace
              your inner kid with every deliciously smooth chug.
            </p>
          </div>
          <div className="flex justify-center item-center mt-[8vh]">
            <button className="uppercase text-[#523122] bg-[#E3A458] font-bold cursor-pointer py-4 px-15 rounded-full">
              chug a spylt
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Hero;
