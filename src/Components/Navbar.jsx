import CursorFollowImage from "../MyComponents/CursorFollowImage";
import AnimatedMenuIconSpylt from "../MyComponents/AnimatedMenuIconSpylt.jsx";

const Navbar = () => {
  return (
    <nav className="py-4 px-6 flex justify-between items-center fixed top-0 left-0 right-0 z-50">
      <div>
        <CursorFollowImage
          maxMove={15}
          imageUrl={
            "https://cdn.prod.website-files.com/669a8d6498ba88c08dfd2cd2/66bf546a161d4e2f1e4e06d1_SPYLT_Primary-logo_Black.svg"
          }
        />
      </div>
      <div className="hidden md:block">
        <AnimatedMenuIconSpylt />
      </div>
      <button
        style={{ wordSpacing: "3px" }}
        id={"navbar-button"}
        className="bg-[#FEF3F0] hover:bg-[#E3A458] font-bold rounded-full tracking-tighter text-[#523122] transition-all duration-300 cursor-pointer
                   px-6 py-3 text-sm
                   md:px-10 md:py-4 md:text-base"
      >
        FIND IN STORES
      </button>
    </nav>
  );
};
export default Navbar;
