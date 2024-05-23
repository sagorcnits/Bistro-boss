import { Outlet } from "react-router-dom";
import Footer from "../components/shared/Footer";
import Navbar from "../components/shared/Navbar";

const Root = () => {
  return (
    <>
      <Navbar></Navbar>
      <main>
        <Outlet></Outlet>
      </main>
      <Footer></Footer>
    </>
  );
};

export default Root;
