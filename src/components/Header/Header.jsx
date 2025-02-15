import { useState, useEffect } from "react";

function Header({ toggleSidebar }) {
  // User Dropdown (Profile, Logout)
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000); // Aggiorna ogni secondo

    return () => clearInterval(interval); // Pulizia dell'intervallo quando il componente si smonta
  }, []);

  return (
    <div className="flex items-center justify-between p-4 text-[#FFFFFF] h-32 border-b border-gray-700 shadow-lg mb-4">
      {/* Button to open sidebat (only small devices) */}
      <div className="flex items-center">
        <button
          onClick={toggleSidebar}
          className="text-[#E5E7EB] focus:outline-none lg:hidden"
        >
          {/* Hamburger Icons */}
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
      
      

      {/* User Dropsown Menu */}
      <div className="flex items-center">
        <div className="flex flex-col w-48 items-center">
          <span className="text-[#E5E7EB] mt-1 text-xl font-bold tracking-wider">
            Attene Davide
          </span>
          <span className="text-[#E5E7EB] font-medium">
            I.T.T. Deffenu - Olbia
          </span>
        </div>
        <div className="relative mr-8">
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="relative block w-16 h-16 overflow-hidden rounded-full shadow focus:outline-none"
          >
            <img
              className="object-cover w-full h-full"
              src="https://images.unsplash.com/photo-1528892952291-009c663ce843?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=296&q=80"
              alt="Avatar A.D."
            />
          </button>

          {dropdownOpen && (
            <>
              {/* Overlay to close dropdown menu */}
              <div
                onClick={() => setDropdownOpen(false)}
                className="fixed inset-0 z-10 w-full h-full"
              />
              {/* Menu a tendina */}
              <div className="absolute right-0 z-10 w-48 mt-2 overflow-hidden bg-gray-50 rounded-md shadow-xl">
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-900 hover:bg-blue-600 hover:text-white"
                >
                  Profilo Utente
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-900 hover:bg-blue-600 hover:text-white"
                >
                  Logout
                </a>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
