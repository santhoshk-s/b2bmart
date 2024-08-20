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
} from "react-icons/fa";
import { AiFillEdit } from "react-icons/ai";
import { IoPerson } from "react-icons/io5";
import { View } from "./alt/View";
import { Text } from "./alt/Text";
import { TextInput } from "./alt/TextInput";
import { Link } from "react-router-dom";


const NavBar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const toggleNav = () => {
    setNavOpen(!navOpen);
  };

  const handleFocus = () => {
    setIsFocused(true); // Set state to true when TextInput is focused
  };

  const handleBlur = () => {
    setIsFocused(false); // Set state to false when TextInput loses focus
  };

  return (
    <View className="relative">
      {/* Always Visible Header */}
      <View className="flex items-center justify-between p-1 bg-green-400 text-white fixed top-0 left-0 right-0 z-10">
        <View className="flex items-center">
          <button
            onClick={toggleNav}
            className={`text-xl relative bottom-4 left-2`}
          >
            {navOpen ? <FaTimes /> : <FaBars />}
          </button>
          <View className="ml-4">
            <Text className="text-lg font-bold">Hello Sai</Text>
            {!isFocused && (
              <FaSearch className="absolute text-gray-500 bottom-3 left-12 transition-all duration-1000" />
            )}
            <TextInput
              type="text"
              placeholder="Search..."
              className=" p-1 pl-7 w-56 text-black rounded-md focus:outline-none focus:ring-0"
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </View>
        </View>
        <View className="text-xl relative bottom-4 right-2">
          <FaBell />
        </View>
      </View>

      {/* Navigation Menu */}
      <View
        className={`fixed top-0 left-0 h-full bg-green-400 text-white p-5 transform ${
          navOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300`}
        style={{ width: "75%" }} // Adjust width to cover 3/4 of the screen
      >
        <ul className="space-y-4 mt-14">
          <li className="flex items-center">
            <IoPerson className="mr-3" />
            <Link to="/profile" className="hover:underline">
              +91 -xxxxxxxxxx
            </Link>
            <Link to='/edit'>
            <AiFillEdit className="mr-3 ml-5 text-xl" />
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
            <Link to="/orders" className="hover:underline">
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
            <Link to='/shopping' className="hover:underline">
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
      </View>
    </View>
  );
};

export default NavBar;
