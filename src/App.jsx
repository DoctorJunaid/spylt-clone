import Navbar from "./Components/Navbar";
import Hero from "./Section/Hero";
import MessageSection from "./Section/MessageSection.jsx";
import ScrollFlavour from "./Section/SliderSection/ScrollFlavour.jsx";
import {useGSAP} from "@gsap/react";
import gsap from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother";

const App = () => {
    gsap.registerPlugin(ScrollSmoother)

    useGSAP(()=>{
        ScrollSmoother.create({
            smooth: 1,
            effects: true,
        });

    })
    return (
    <>
      <div className="relative">
          <div id="smooth-wrapper">
              <div id="smooth-content">
                  <Navbar />
                  <Hero />
                  <MessageSection />
                  <ScrollFlavour />
                  <div className="h-screen w-screen"></div>
              </div>
          </div>

      </div>
    </>
  );
};
export default App;
