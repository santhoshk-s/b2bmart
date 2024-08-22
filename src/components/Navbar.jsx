import { useState } from "react";
import {
  FaBars,
  FaTimes,
  FaBell,
  FaHome,
  FaList,
  FaEdit,
  FaEnvelope,
  FaBox,
  FaHeart,
  FaShoppingCart,
  FaShieldAlt,
  FaFileAlt,
  FaSearch,
  FaChevronLeft,
} from "react-icons/fa";
import { AiFillEdit } from "react-icons/ai";
import { IoPerson } from "react-icons/io5";
import { Link, NavLink } from "react-router-dom";

const NavBar = ({ name, back, isHome, isOrder }) => {
  const [navOpen, setNavOpen] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const toggleNav = () => {
    setNavOpen(!navOpen);
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const phone = localStorage.getItem("user");
  const userObject = phone ? JSON.parse(phone) : {};
  const phonno = userObject.contactNo || "N/A"; // Error handling added
  const username = userObject.username || "N/A"; // Error handling added

  return (
    <div className="relative">
      {/* Always Visible Header */}
      <div className="flex items-center justify-between p-1 bg-green-400 text-white fixed top-0 left-0 right-0 z-10">
        <div className="flex items-center">
          <button onClick={toggleNav} className="text-xl relative bottom-4 left-2">
            {navOpen ? <FaTimes /> : <FaBars />}
          </button>
          {isHome ? null : (
            <Link to={`/${back}`}>
              <FaChevronLeft className="absolute z-50 top-10 left-3" />
            </Link>
          )}
          {isOrder ? (
            <nav className="bg-green-400 w-auto text-white h-16">
              <h1 className="font-bold relative left-4 text-lg">My orders</h1>
              <div className="relative right-4 flex items-center justify-between font-bold h-full w-svw">
                <NavLink
                  to="/requirements"
                  className={({ isActive }) =>
                    `relative py-2 mb-2 pl-10 text-center ${isActive ? "underline underline-offset-2" : ""}`
                  }
                >
                  Requirements
                </NavLink>
                <NavLink
                  to="/myorders"
                  className={({ isActive }) =>
                    `relative py-2 mb-2 pr-14 text-center ${isActive ? "underline underline-offset-2" : ""}`
                  }
                >
                  My Orders
                </NavLink>
              </div>
            </nav>
          ) : (
            <div className="ml-4 flex flex-col">
              <span className="text-lg font-bold">Hello {username}</span>
              {!isFocused && (
                <FaSearch className="absolute text-gray-500 bottom-3 left-12 transition-all duration-1000" />
              )}
              <input
                type="text"
                placeholder="Search..."
                className="p-1 pl-7 w-56 text-black rounded-md focus:outline-none focus:ring-0"
                onFocus={handleFocus}
                onBlur={handleBlur}
              />
            </div>
          )}
        </div>
        <div className="text-xl relative bottom-4 right-2">
          <Link to="/notifications">
            <FaBell />
          </Link>
        </div>
      </div>

      {/* Navigation Menu */}
      <div
        className={`fixed top-0 left-0 h-full bg-green-400 text-white p-5 transform ${
          navOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300`}
        style={{ width: "75%" }}
      >
        <ul className="space-y-4 mt-14">
          <li className="flex items-center">
            <IoPerson className="mr-3" />
            <Link to="/profile" className="hover:underline">
              +91 -{phonno}
            </Link>
            <Link to="/edit">
              <AiFillEdit className="ml-5 text-xl" />
            </Link>
          </li>
          <li className="flex items-center">
            <FaHome className="mr-3" />
            <Link to="/home" className="hover:underline">
              Home
            </Link>
          </li>
          <li className="flex items-center">
            <FaList className="mr-3" />
            <Link to="/categories" className="hover:underline">
              View All Categories
            </Link>
          </li>
          <li className="flex items-center">
            <FaEdit className="mr-3" />
            <Link to="/post-requirements" className="hover:underline">
              Post Your Requirements
            </Link>
          </li>
          <li className="flex items-center">
            <FaEnvelope className="mr-3" />
            <Link to="/messages" className="hover:underline">
              Messages
            </Link>
          </li>
          <li className="flex items-center">
            <FaBox className="mr-3" />
            <Link to="/myorders" className="hover:underline">
              My Orders
            </Link>
          </li>
          <li className="flex items-center">
            <FaHeart className="mr-3" />
            <Link to="/favourites" className="hover:underline">
              Your Favourites
            </Link>
          </li>
          <li className="flex items-center">
            <FaShoppingCart className="mr-3" />
            <Link to="/shopping" className="hover:underline">
              Shopping
            </Link>
          </li>
          <li className="flex items-center">
            <FaShieldAlt className="mr-3" />
            <Link to="/privacy-policy" className="hover:underline">
              Privacy Policy
            </Link>
          </li>
          <li className="flex items-center">
            <FaFileAlt className="mr-3" />
            <Link to="/terms-conditions" className="hover:underline">
              Terms and Conditions
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
