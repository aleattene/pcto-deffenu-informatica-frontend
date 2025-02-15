import { useNavigate } from "react-router-dom";
import logo from "./../../assets/img/logo.svg";

function LogoWithText() {
  // Redirect to Homepage
  const navigate = useNavigate();
  const goToHomepage = () => navigate("/");

  return (
    <div
      className="flex items-center justify-center mt-8 cursor-pointer"
      onClick={goToHomepage}
    >
      <div className="flex items-center mx-4">
        <img
          id="logo-img"
          className="w-12 h-12 rounded-full"
          src={logo}
          alt="Logo SM"
        />
        <span className="mx-4 text-lg font-bold text-gray-[#E5E7EB] text-center uppercase tracking-wider">
          Sport Management
        </span>
      </div>
    </div>
  );
}

export default LogoWithText;
