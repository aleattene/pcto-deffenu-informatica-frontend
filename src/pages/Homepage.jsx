import federer from "./../assets/img/homepage.svg";
import { Link } from "react-router-dom";

function Homepage() {
  return (
    <div className="bg-[rgb(20,30,37)] w-full justify-items-center relative">
      <img src={federer} className="w-full" />
      <div className="text-3xl text-semibold text-amber-400 hover:text-4xl w-64 h-16 -my-200 text-center">
        <Link to="/athletes" className="">
          GET STARTED
        </Link>
      </div>
    </div>
  );
}

export default Homepage;
