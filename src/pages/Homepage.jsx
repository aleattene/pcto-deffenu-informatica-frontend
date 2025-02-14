import federer from "./../assets/img/homepage.svg";
import { Link } from "react-router-dom";

function Homepage() {
  return (
    <div className="bg-gradient-to-b from-blue-600 to-orange-400 w-full h-screen flex flex-col items-center relative">
      <div className="absolute bottom-[15%] left-1/2 lg:left-1/3 -translate-x-1/2 z-10">

        <Link
          to="/athletes">
            <button
          className="bg-blue-600 text-gray-200 font-bold shadow-xl outline-2 outline-gray-600
          px-6 py-3 rounded-md text-xl transition duration-300 hover:bg-orange-400 hover:text-white
          w-screen max-w-[200px]
          " 
        >
          GET STARTED
          </button>
        </Link>
      </div>
      <img
        src={federer}
        className="w-full h-screen opacity-80 sepia-90 xl:object-cover"
        alt="Federer"
      />
    </div>
  );
}

export default Homepage;
