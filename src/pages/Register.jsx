
import logo from "../assets/logo.jpg";
import { FaChevronLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import {View} from '../components/alt/View'
import { Image } from "../components/alt/Image";
import { TextInput } from "../components/alt/TextInput";
import  {Text}  from "../components/alt/Text";



const Register = () => {
  return (
    <View className="flex items-center justify-center h-screen bg-white p-8">
      <View className="w-full max-w-sm bg-white Text-8 rounded-lg ">
        <Link to="/">
          <FaChevronLeft className="absolute top-7 left-7" />
        </Link>

        <View className="flex flex-col text-left items-center mt-5">
          <Image src={logo} alt="logo_b" className="w-36" />
        </View>
        <form>
          <View className="mb-3">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="Name"
            >
              Name
            </label>
            <TextInput
              className="w-full px-3 py-1 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
              type="Name"
              id="Name"
              placeholder="Enter your Name"
            />
          </View>
          <View className="mb-3">
            <label
              className="block text-gray-700 text-sm font-bold mb-1"
              htmlFor="Email"
            >
              Email
            </label>
            <TextInput
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
              type="Email"
              id="Email"
              placeholder="Enter your Email"
            />
          </View>
          <View className="mb-3">
            <label
              className="block text-gray-700 text-sm font-bold mb-1"
              htmlFor="Contact"
            >
              Contact No
            </label>
            <TextInput
              className="w-full px-3 py-1 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
              type="Contact"
              id="Contact"
              placeholder="Enter your Contact No"
            />
          </View>
          <View className="mb-3">
            <label
              className="block text-gray-700 text-sm font-bold mb-1"
              htmlFor="password"
            >
              Password
            </label>
            <TextInput
              className="w-full px-3 py-1 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
              type="password"
              id="password"
              placeholder="Enter your password"
            />
          </View>
          <View className="mb-3">
            <label
              className="block text-gray-700 text-sm font-bold mb-1"
              htmlFor="cpassword"
            >
              Confirm Password
            </label>
            <TextInput
              className="w-full px-3 py-1 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
              type="cpassword"
              id="cpassword"
              placeholder="Enter your password again"
            />
          </View>
          <Text className="text-center text-gray-600 text-sm mt-3">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-500 hover:underline">
              Login
            </Link>
          </Text>
          <Link to="/login">
            <button
              className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300 mt-4"
              type="submit"
            >
              Register
            </button>
          </Link>
        </form>
      </View>
    </View>
  );
};
export default Register;
