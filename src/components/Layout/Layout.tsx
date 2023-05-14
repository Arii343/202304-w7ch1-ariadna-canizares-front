import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

const Layout = (): JSX.Element => {
  return (
    <>
      <Navbar />
      <p>A cool robots app!</p>
      <Outlet />
    </>
  );
};

export default Layout;
