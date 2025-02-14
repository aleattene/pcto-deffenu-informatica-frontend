import { useNavigate } from "react-router-dom";
import Logo from "./../Logo/Logo.jsx";
import { Link } from "react-router-dom";

function Sidebar({ closeSidebar }) {
  const navigate = useNavigate();

  // Logo Action
  const handleClickLogo = () => navigate("/");

  // TO FIX ${sidebarOpen ? 'translate-x-0 ease-out' : '-translate-x-full ease-in'}

  return (
    <div
      className="fixed inset-y-0 left-0 z-30 w-64 overflow-y-auto transition duration-300 transform
                        lg:translate-x-0 lg:static lg:inset-0"
    >
      <Logo onClick={handleClickLogo} />
      <nav id="sidebar" className="mt-10">
        <Link
          to="/athletes"
          className="flex items-center px-6 py-2 mt-4 text-white hover:bg-gray-700 hover:text-[#FF9500] hover:bg-opacity-25"
          onClick={closeSidebar}
        >
          <span className="mx-3">Atleti</span>
        </Link>
        <Link
          to="/trainers"
          className="flex items-center px-6 py-2 mt-4 text-white hover:bg-gray-700  hover:text-[#FF9500] hover:bg-opacity-25"
          onClick={closeSidebar}
        >
          <span className="mx-3">Allenatori</span>
        </Link>
        <Link
          to="/sport-doctors"
          className="flex items-center px-6 py-2 mt-4 text-white hover:bg-gray-700  hover:text-[#FF9500] hover:bg-opacity-25"
          onClick={closeSidebar}
        >
          <span className="mx-3">Medici Sportivi</span>
        </Link>
        <Link
          to="/payments"
          className="flex items-center px-6 py-2 mt-4 text-white hover:bg-gray-700  hover:text-[#FF9500] hover:bg-opacity-25"
          onClick={closeSidebar}
        >
          <span className="mx-3">Compensi</span>
        </Link>
        <Link
          to="/sport-certificates"
          className="flex items-center px-6 py-2 mt-4 text-white hover:bg-gray-700  hover:text-[#FF9500] hover:bg-opacity-25"
          onClick={closeSidebar}
        >
          <span className="mx-3">Certificati Medici</span>
        </Link>
      </nav>
    </div>
  );
}

export default Sidebar;
