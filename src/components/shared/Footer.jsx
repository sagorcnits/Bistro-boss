import { AiFillTwitterCircle } from "react-icons/ai";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="flex w-full *:py-16 text-white font-inter *:flex *:justify-center *:items-center mt-20 ">
      <div className="bg-[#1F2937] flex-1 *:space-y-3">
        <div>
          <h1>CONTACT US</h1>
          <p>123 ABS Street, Uni 21, Banglades</p>
          <p>+88 123456789</p>
          <p>Mon - Fri: 08:00 - 22:00</p>
          <p>Sat - Sun: 10:00 - 23:00</p>
        </div>
      </div>
      <div className="bg-[#111827] flex-1 *:space-y-3">
        <div>
          <h1>Follow US</h1>
          <p>Join us on social media</p>
          <div className="flex *:cursor-pointer gap-2 items-center *:text-[20px] pt-3">
            <FaFacebook></FaFacebook>
            <AiFillTwitterCircle></AiFillTwitterCircle>
            <FaLinkedinIn></FaLinkedinIn>
            <FaInstagram></FaInstagram>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
