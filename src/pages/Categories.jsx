import { Link } from "react-router-dom";
import ind from "../assets/indus.png";
import c2 from "../assets/c2.png";
import c3 from "../assets/c3.jpg";
import c4 from "../assets/c4.jpg";
import c5 from "../assets/c5.jpg";
import c6 from "../assets/c6.jpg";
import c7 from "../assets/c7.jpg";
import c8 from "../assets/c8.jpg";
import NavBar from "../components/Navbar";
export const Categories = () => {
  return (
    <>
    <NavBar name={"Categories"} back={"home"}/>
      <div className="grid gap-x-8 gap-y-4 grid-cols-2 mt-16">
        <Link to="/c1">
          <div className="text-center p-5">
            <img src={ind} alt="" />
            <p className="font-semibold">
              Industrial Plants, Machinery & Equipments
            </p>
          </div>
        </Link>
        <Link to="/c2">
          <div className="text-center p-5">
            {" "}
            <img src={c2} alt="" />
            <p className="font-semibold">
              Customer Electronics and household applications
            </p>
          </div>
        </Link>
        <Link to="/c3">
          <div className="text-center p-5">
            <img src={c3} alt="" />
            <p className="font-semibold">building and Construction Materials</p>
          </div>
        </Link>
        <Link to="/c4">
          <div className="text-center p-5">
            {" "}
            <img src={c4} alt="" />
            <p className="font-semibold">Clothing And Garments</p>
          </div>
        </Link>
        <Link to="/c5">
          <div className="text-center p-5">
            {" "}
            <img src={c5} alt="" />
            <p className="font-semibold">Medical And Consultancy Services</p>
          </div>
        </Link>
        <Link to="/c6">
          <div className="text-center p-5">
            {" "}
            <img src={c6} alt="" />
            <p className="font-semibold">Medicines And Aayurvedha</p>
          </div>
        </Link>
        <Link to="/c7">
          <div className="text-center p-5">
            {" "}
            <img src={c7} alt="" />
            <p className="font-semibold">Bicycles and Many More</p>
          </div>
        </Link>
        <Link to="/c8">
          <div className="text-center p-5">
            {" "}
            <img src={c8} alt="" />
            <p className="font-semibold">Sports Material And Equipments</p>
          </div>
        </Link>
      </div>
    </>
  );
};
