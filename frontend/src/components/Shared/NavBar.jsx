import { useState } from "react";

function NavBar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="p-4 bg-white shadow">
      <div className="flex items-center justify-between mx-auto max-w-7xl">
        <div className="logo flex gap-1">
          <img className="h-10" src="http://localhost:3000/static/media/logo.83676f78032ba154dd52.png" alt="" />
          <h3 className="text-2xl font-bold text-gray-800 uppercase">Skill Squad</h3>
        </div>

        <div className="hidden md:flex md:items-center md:justify-center space-x-8 ">
          <ul className="flex space-x-6 text-gray-600">
            <li className="hover:text-gray-900 cursor-pointer">Home</li>
            <li className="hover:text-gray-900 cursor-pointer">About Us</li>

            <li className="relative">
              <button
                onClick={toggleDropdown}
                className="flex items-center  space-x-1 hover:text-gray-900 cursor-pointer rounded-md transition"
              >
                <span>Services</span>
                <svg
                  className={`w-4 h-4 transform transition-transform ${
                    isDropdownOpen ? "rotate-180" : "rotate-0"
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </button>

              {isDropdownOpen && (
                <ul className="absolute mt-2 w-64 bg-white border border-gray-200 shadow-lg rounded-lg transition-opacity duration-300 ease-in-out opacity-100">
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    Mobile App Development
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    Web App Development
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    Product Design
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    Digital Marketing
                  </li>
                </ul>
              )}
            </li>

            <li className="hover:text-gray-900 cursor-pointer">Career</li>
            <li className="hover:text-gray-900 cursor-pointer">Technologies</li>
          </ul>

          <button className="ml-4 px-4 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-700 transition">
            Contact Us
          </button>
        </div>

        <div className="md:hidden">
          <button onClick={toggleMobileMenu} className="text-gray-600 focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden mt-4">
          <ul className="space-y-4 text-gray-600">
            <li className="hover:text-gray-900 cursor-pointer">Home</li>
            <li className="hover:text-gray-900 cursor-pointer">About Us</li>

            {/* Mobile Dropdown Menu for Services */}
            <li className="relative">
              <button
                onClick={toggleDropdown}
                className="flex items-center rounded-md  hover:text-black transition"
              >
                <span>Services</span>
                <svg
                  className={`w-4 h-4 transform transition-transform ${
                    isDropdownOpen ? "rotate-180" : "rotate-0"
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </button>

              {isDropdownOpen && (
                <ul className="mt-2 bg-white border border-gray-200 shadow-lg rounded-lg transition-opacity duration-300 ease-in-out opacity-100">
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    Mobile App Development
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    Web App Development
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    Product Design
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    Digital Marketing
                  </li>
                </ul>
              )}
            </li>

            <li className="hover:text-gray-900 cursor-pointer">Career</li>
            <li className="hover:text-gray-900 cursor-pointer">Technologies</li>
            <li className="hover:text-gray-900 cursor-pointer">
              Contact Us
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default NavBar;
