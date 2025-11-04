import Navbar from "./Components/Navbar";
import Hero from "./Section/Hero";
import MessageSection from "./Section/MessageSection.jsx";
import SliderTitle from "./Section/SliderSection/SliderTitle.jsx";
import ScrollFlavour from "./Section/SliderSection/ScrollFlavour.jsx";

const App = () => {
  return (
    <>
      <div className="relative">
        <Navbar />
        <Hero />
          <MessageSection />
          <SliderTitle />
          <ScrollFlavour />
        <div className="h-screen w-screen"></div>
      </div>
    </>
  );
};
export default App;
