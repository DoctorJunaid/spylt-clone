import Navbar from "./Components/Navbar";
import Hero from "./Section/Hero";
import MessageSection from "./Section/MessageSection.jsx";
import ScrollingSection from "./Section/ScrollingSection.jsx";

const App = () => {
  return (
    <>
      <div className="relative">
        <Navbar />
        <Hero />
          <MessageSection /> 
          <ScrollingSection />
        <div className="h-screen w-screen"></div>
      </div>
    </>
  );
};
export default App;
