import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

const Layout = (): JSX.Element => {
  return (
    <>
      <Navbar />

      <Outlet />
    </>
  );
};

export default Layout;
