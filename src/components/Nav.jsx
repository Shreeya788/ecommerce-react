import { useState } from "react";
import logo from "../assets/logo.png";
import { FaSearch } from "react-icons/fa";

function Nav() {
  const [isSearchVisible, setIsSearchVisible] = useState(false);

  const toggleSearchVisibility = () => {
    setIsSearchVisible(!isSearchVisible);
  };

  const handleSearchBlur = () => {
    setIsSearchVisible(false);
  };

  return (
    <nav className="bg-white p-4 sticky top-0 z-10">
      <div className="max-w-8xl mx-auto flex justify-between items-center">
        {/* Logo on the left */}
        <div className="flex items-center pl-16">
          <div className="mr-2">
            <img className="h-15 w-28" src={logo} alt="Logo" />
          </div>
        </div>
        {/* Search bar and other content on the right */}
        <div className="flex items-center space-x-4 ml-auto pr-16 relative">
          {/* Search bar */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search Here..."
              className={`border-2 border-gray-400 h-12 w-96 rounded-md pl-10 pr-4 text-gray-800 focus:outline-none ${
                isSearchVisible ? "block" : "hidden"
              }`}
              onBlur={handleSearchBlur}
            />
            <FaSearch
              className="absolute top-1/2 right-1 text-xl transform -translate-y-1/2 text-gray-600 cursor-pointer"
              onClick={toggleSearchVisibility}
            />
          </div>
          {/* Always visible search icon */}
          {/* {!isSearchVisible && (
            <FaSearch
              className="text-gray-400 cursor-pointer"
              onClick={toggleSearchVisibility}
            />
          )} */}
          {/* Other content */}
          <ul className="flex text-gray-800 space-x-6 text-lg items-center">
            <li>Categories</li>
            <li>Brands</li>
            <li>
              <button className="border-black border-2 px-6 py-2 bg-black text-white rounded-md">
                Login
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
