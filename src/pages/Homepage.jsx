import federer from "./../assets/img/homepage.svg";
import { Link } from "react-router-dom";

function Homepage() {
  return (
    <div className="bg-gradient-to-b from-blue-600 to-orange-400 w-full h-screen flex flex-col items-center relative">
      <div className="absolute top-1/6 left-1/2 -translate-x-1/2 z-10">
        <Link
          to="/athletes"
          className="bg-blue-600 shadow-xl outline-3 outline-gray-700
          px-6 py-3 rounded-md text-2xl font-bold transition duration-300 hover:bg-orange-400 hover:text-white hover:scale-110"
        >
          GET STARTED
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
