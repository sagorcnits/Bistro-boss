import { useRef, useState } from "react";
import { FaBars } from "react-icons/fa";
import { GrCart } from "react-icons/gr";
import { IoClose } from "react-icons/io5";
import { NavLink, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import useCart from "../../hooks/useCart";
const Navbar = () => {
  const { user, logOut } = useAuth();
  const [isActive, setActive] = useState(true);
  const navRef = useRef();
  const [cart] = useCart();
  const navigate = useNavigate();
  const handleSideBar = () => {
    setActive(!isActive);
    if (isActive) {
      navRef.current.style.left = 0;
    } else {
      navRef.current.style.left = "-300px";
    }
  };

  return (
    <>
      <div className="flex justify-between items-center py-4 px-2 md:px-14 bg-[rgba(21,21,21,0.50)] fixed left-0 right-0 opacity-[0.9] z-50 text-white">
        <div className="flex items-center gap-4">
          <FaBars
            onClick={handleSideBar}
            className="text-[24px] lg:hidden cursor-pointer"
          ></FaBars>

          <div className="cinzel-font">
            <h1 className="font-bold md:text-[30px] ">BISTRO BOSS</h1>
            <h3 className="md:text-[24px] tracking-[9.12px]">Restaurant</h3>
          </div>
        </div>
        <div className="flex items-center gap-2 font-inter">
          <ul className="hidden items-center gap-4 lg:flex ">
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              <li className="hover:text-[#EEFF25] duration-500">HOME</li>
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              <li className="hover:text-[#EEFF25] duration-500">CONTACT US</li>
            </NavLink>
            {user && (
              <NavLink
                to="/dashboard"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active" : ""
                }
              >
                <li className="hover:text-[#EEFF25] duration-500">DASHBOARD</li>
              </NavLink>
            )}
            <NavLink
              to="/menu"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              <li className="hover:text-[#EEFF25] duration-500">OUR MENU</li>
            </NavLink>
            <NavLink
              to={`/shop/Salad`}
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              <li className="hover:text-[#EEFF25] duration-500">OUR SHOP</li>
            </NavLink>
          </ul>
          <div className="flex items-center gap-2">
            <div
              onClick={() => navigate("/dashboard")}
              className="size-[50px] rounded-full  flex justify-center items-center cursor-pointer relative"
            >
              <GrCart className="text-[30px]"></GrCart>
              <div className="absolute top-0 right-2 text-green-500 text-[20px] font-inter font-bold">
                {cart.length}
              </div>
            </div>

            {user ? (
              <NavLink to="/login">
                <span onClick={logOut}>SIGN OUT</span>
              </NavLink>
            ) : (
              <NavLink to="/login">
                <span>SIGN IN</span>
              </NavLink>
            )}
            {user && (
              <div className="avatar online hidden md:flex cursor-pointer">
                <div className="w-[50px] rounded-full">
                  <img src={user?.photoURL} />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <div
        ref={navRef}
        className="fixed -left-[300px] top-0 bottom-0 w-[250px] bg-paragraphColor p-4  z-50 duration-500"
      >
        <div className="flex justify-end">
          <IoClose
            onClick={handleSideBar}
            className="text-[34px]  cursor-pointer "
          ></IoClose>
        </div>
        <ul className="items-center gap-4 font-inter text-white">
          <NavLink>
            <li className="py-4 text-center mt-2 hover:bg-white rounded-lg hover:text-black duration-500">
              HOME
            </li>
          </NavLink>
          <NavLink>
            <li className="py-4 text-center mt-2 hover:bg-white rounded-lg hover:text-black duration-500">
              CONTACT US
            </li>
          </NavLink>
          <NavLink>
            <li className="py-4 text-center mt-2 hover:bg-white rounded-lg hover:text-black duration-500">
              DASHBOARD
            </li>
          </NavLink>
          <NavLink>
            <li className="py-4 text-center mt-2 hover:bg-white rounded-lg hover:text-black duration-500">
              OUR MENU
            </li>
          </NavLink>
          <NavLink>
            <li className="py-4 text-center mt-2 hover:bg-white rounded-lg hover:text-black duration-500">
              OUR SHOP
            </li>
          </NavLink>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
