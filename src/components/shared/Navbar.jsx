import { NavLink } from "react-router-dom";
import cartIcon from "../../assets/icon/cart.png";
const Navbar = () => {
  return (
    <div className="flex justify-between items-center py-4 px-2 md:px-14 bg-[rgba(21,21,21,0.50)] fixed left-0 right-0 opacity-[0.9] z-50 text-white">
      <div className="cinzel-font">
        <h1 className="font-bold md:text-[30px]">BISTRO BOSS</h1>
        <h3 className="md:text-[24px] tracking-[9.12px]">Restaurant</h3>
      </div>
      <div className="flex items-center gap-2">
        <ul className="hidden items-center gap-4 lg:flex ">
          <NavLink>
            <li>HOME</li>
          </NavLink>
          <NavLink>
            <li>CONTACT US</li>
          </NavLink>
          <NavLink>
            <li>DASHBOARD</li>
          </NavLink>
          <NavLink>
            <li>OUR MENU</li>
          </NavLink>
          <NavLink>
            <li>OUR SHOP</li>
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
  );
};

export default Navbar;
