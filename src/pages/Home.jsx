import { json } from "react-router-dom"
import Categories from "../components/Categories"
import NavBar from "../components/Navbar"
import Products from "../components/Products"

const Home = () => {
  const user = localStorage.getItem("user");
  const userObject = JSON.parse(user);
  const username = userObject.username;
  return (
    <>
    <NavBar name={username} isHome={true}/>
    <Products />
    <Categories />
    </>
  )
}
export default Home