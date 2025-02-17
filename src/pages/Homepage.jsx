import homepage from "./../assets/img/homepage.svg";
import { Link } from "react-router-dom";

function Homepage() {
  return (
    <div className="bg-gradient-to-b from-blue-600 to-orange-400 w-full h-screen flex flex-col items-center relative">
      
      <div className="absolute top-[10%] left-1/2 -translate-x-1/2 z-10 block text-center min-w-80 max-w-full">
        <h1 className="text-[#E5E7EB] font-bold text-2xl mb-2 tracking-widest">
          ATTENE DAVIDE
        </h1>
        <h3 className="text-[#E5E7EB] font-semibold text-md mb-2 tracking-wider">
          I.T.T. Deffenu Informatica
        </h3>
        <h2 className="text-[#E5E7EB] font-semibold text-md mb-2 tracking-wider">
          Progetto PCTO 2025
        </h2>

      </div>
      
      <div className="absolute bottom-[10%] left-1/2 -translate-x-1/2 z-10">

        <Link
          to="/athletes">
            <button
          className="bg-blue-600 text-[#E5E7EB] font-bold shadow-xl outline-2 outline-gray-600
          px-6 py-3 rounded-md text-xl transition duration-300 hover:bg-orange-400 hover:text-white
          max-w-full min-w-60 tracking-widest" 
        >
          GET STARTED
          </button>
        </Link>
      </div>
      <img
        src={homepage}
        className="w-full h-screen sepia-80 xl:object-cover portrait:block max-xl:landscape:opacity-10 opacity-100
        "
        alt="Federer"
      />
    </div>
  );
}

export default Homepage;
