import Navbar from "./Components/Navbar";
import Hero from "./Section/Hero";

const App = () => {
  return (
    <>
      <div className="relative">
        <Navbar />
        <Hero />
        <div className="h-screen w-screen"></div>
      </div>
    </>
  );
};
export default App;
