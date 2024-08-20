import { useState } from "react";
 import { FaBars, FaTimes, FaBell, FaHome, FaList, FaEdit, FaEnvelope, FaBox, FaHeart, FaShoppingCart, FaShieldAlt, FaFileAlt } from 'react-icons/fa'; 
import {View} from './alt/View'
import {Text} from './alt/Text'

const NavBar = () => {
  const [navOpen, setNavOpen] = useState(false);

  const toggleNav = () => {
    setNavOpen(!navOpen);
  };

  return (
    <View className="relative">
      {/* Always Visible Header */}
      <View className="flex items-center justify-between p-4 bg-green-400 text-white fixed top-0 left-0 right-0 z-10">
        <View className="flex items-center">
          <button onClick={toggleNav} className="text-2xl">
            {navOpen ? <FaTimes /> : <FaBars />}
          </button>
          <Text className="text-xl font-bold ml-4">Hello Sai</Text>
        </View>
        <View className="text-2xl">
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
        <ul className="space-y-4 mt-12">
        <li className="flex items-center">
            <FaHome className="mr-3" />
            <a href="#home" className="hover:underline">Home</a>
          </li>
          <li className="flex items-center">
            <FaList className="mr-3" />
            <a href="#categories" className="hover:underline">View All Categories</a>
          </li>
          <li className="flex items-center">
            <FaEdit className="mr-3" />
            <a href="#post-requirements" className="hover:underline">Post Your Requirements</a>
          </li>
          <li className="flex items-center">
            <FaEnvelope className="mr-3" />
            <a href="#messages" className="hover:underline">Messages</a>
          </li>
          <li className="flex items-center">
            <FaBox className="mr-3" />
            <a href="#orders" className="hover:underline">My Orders</a>
          </li>
          <li className="flex items-center">
            <FaHeart className="mr-3" />
            <a href="#favourites" className="hover:underline">Your Favourites</a>
          </li>
          <li className="flex items-center">
            <FaShoppingCart className="mr-3" />
            <a href="#shopping" className="hover:underline">Shopping</a>
          </li>
          <li className="flex items-center">
            <FaShieldAlt className="mr-3" />
            <a href="#privacy-policy" className="hover:underline">Privacy Policy</a>
          </li>
          <li className="flex items-center">
            <FaFileAlt className="mr-3" />
            <a href="#terms-conditions" className="hover:underline">Terms and Conditions</a>
          </li>
        </ul>
      </View>
    </View>
  );
};

export default NavBar;
