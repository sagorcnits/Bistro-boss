import { useRef, useState } from "react";
import { FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import cartIcon from "../../assets/icon/cart.png";
const Navbar = () => {
  const [isActive, setActive] = useState(true);
  const navRef = useRef();
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
          {isActive ? (
            <FaBars
              onClick={handleSideBar}
              className="text-[24px] lg:hidden cursor-pointer"
            ></FaBars>
          ) : (
            <IoClose
              onClick={handleSideBar}
              className="text-[34px] lg:hidden cursor-pointer"
            ></IoClose>
          )}
          <div className="cinzel-font">
            <h1 className="font-bold md:text-[30px]">BISTRO BOSS</h1>
            <h3 className="md:text-[24px] tracking-[9.12px]">Restaurant</h3>
          </div>
        </div>
        <div className="flex items-center gap-2 font-inter">
          <ul className="hidden items-center gap-4 lg:flex ">
            <NavLink to="/">
              <li className="hover:text-[#EEFF25] duration-500">HOME</li>
            </NavLink>
            <NavLink >
              <li className="hover:text-[#EEFF25] duration-500">CONTACT US</li>
            </NavLink>
            <NavLink>
              <li className="hover:text-[#EEFF25] duration-500">DASHBOARD</li>
            </NavLink>
            <NavLink to="/menu">
              <li className="hover:text-[#EEFF25] duration-500">OUR MENU</li>
            </NavLink>
            <NavLink to="/shop">
              <li className="hover:text-[#EEFF25] duration-500">OUR SHOP</li>
            </NavLink>
          </ul>
          <div className="flex items-center gap-2">
            <img className="w-[50px]" src={cartIcon} alt="Cart Icon" />
            <NavLink>
              <span>SIGN IN</span>
            </NavLink>
            <div className="avatar online hidden md:flex">
              <div className="w-[50px] rounded-full">
                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        ref={navRef}
        className="fixed -left-[300px] top-[80px] bottom-0 w-[250px] bg-paragraphColor p-4  z-50 duration-500"
      >
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
