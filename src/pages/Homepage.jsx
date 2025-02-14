import federer from "./../assets/img/homepage.svg";
import { Link } from "react-router-dom";

function Homepage() {
  return (
    <div className="bg-gradient-to-b from-blue-600 to-orange-400 w-full h-screen flex flex-col items-center relative">
      <div className="absolute top-1/6 left-1/2 -translate-x-1/2 z-10">
        <Link
          to="/athletes"
          className="bg-orange-400 text-white
          px-6 py-3 rounded-md text-2xl font-bold transition duration-300 hover:bg-blue-600 hover:scale-110 shadow-lg"
        >
          GET STARTED
        </Link>
      </div>
      <img
        src={federer}
        className="w-full h-screen opacity-80 sepia-90"
        alt="Federer"
      />
    </div>
  );
}

export default Homepage;
