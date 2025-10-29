import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import SplitText from "gsap/SplitText";
import buttonHoverAnimation from "/src/assets/splt_bttn_hover .json";
import Lottie from "lottie-react";

function Hero() {
  gsap.registerPlugin(SplitText);
  const opentextRef = useRef(null);
  const staggerTextRef = useRef(null);
  const heroRef = useRef(null);
  const lottieRef = useRef(null);

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

  const handleMouseEnter = () => {
    lottieRef.current?.goToAndPlay(0, true);
  };

  return (
    <section className="overflow-hidden h-screen">
      <video
        className="w-screen h-screen object-cover object-center absolute top-0 left-0 -z-20"
        src="https://cdn.prod.website-files.com/669a8d6498ba88c08dfd2cd2%2F66ceef357d683ae03c80a20d_!!!hero_animation-transcode.mp4"
        autoPlay
        muted
        playsInline
      />
      <div
        ref={heroRef}
        className="opacity-0 pt-[12vh] md:pt-[10vh] lg:pt-[8vh]"
      >
        <div className="uppercase text-[#523122] text-[12vw] sm:text-[10vw] lg:text-[8vw] font-black tracking-tighter text-center  pt-[8vh]  lg:pt-[12vh] leading-tight px-4">
          <h1 className="opacity-100" ref={staggerTextRef}>
            Freaking Delicious
          </h1>
        </div>
        <div className="uppercase text-[12vw] sm:text-[10vw] lg:text-[8vw] flex justify-center items-center px-4">
          <h1
            ref={opentextRef}
            style={{
              clipPath: "polygon(50% 1%, 50% 0%, 50% 100%, 50% 100%)",
            }}
            className="bg-[#A26833] text-[#FCE1CD] tracking-tighter -py-[0.1em] px-3 sm:px-4 font-bold -rotate-3 border-4 sm:border-6 lg:border-8 border-[#FAEADE] border-solid leading-tight"
          >
            Protein + Caffeine
          </h1>
        </div>
        <div>
          <div className="flex justify-center item-center px-6">
            <p
              id="text-two"
              className="text-center text-[#664029] pt-[12vh] sm:pt-[12vh] lg:pt-[7vh] font-serif leading-tight tracking-tight w-full sm:w-[60vw] md:w-[45vw] lg:w-[25vw] text-[3vw] md:text-[2vw] lg:text-[1vw] "
            >
              Live life to the fullest with SPYLT: Shatter boredom and embrace
              your inner kid with every deliciously smooth chug.
            </p>
          </div>
          <div className="flex justify-center item-center mt-[4vh] sm:mt-[6vh] lg:mt-[8vh] ">
            <div className="relative ">
              <button
                onMouseEnter={handleMouseEnter}
                className="uppercase text-[#523122] bg-[#E3A458] font-bold cursor-pointer py-3 px-8 sm:py-4 sm:px-12 lg:px-15 rounded-full text-sm sm:text-base"
              >
                chug a spylt
              </button>
              <Lottie
                lottieRef={lottieRef}
                animationData={buttonHoverAnimation}
                loop={false}
                autoplay={false}
                className="absolute -bottom-12 sm:-bottom-15  lg:-bottom-19 pointer-events-none"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
