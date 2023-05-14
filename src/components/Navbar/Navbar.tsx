import NavbarStyled from "./NavbarStyled";
import { NavLink, Link } from "react-router-dom";
import { ReactComponent as LogoIcon } from "../../assets/site-logo.svg";

const Navbar = (): JSX.Element => {
  return (
    <NavbarStyled>
      <Link to="/" className="navbar-info">
        <LogoIcon className="navbar-info__logo" />
        <span className="navbar-info__title">Robotown</span>
      </Link>
      <ul className="navbar__links">
        <li className="navbar__link">
          <NavLink to="/robots">Home</NavLink>
        </li>
        <li className="navbar__link">
          <NavLink to="/create">Create</NavLink>
        </li>
        <li className="navbar__link">
          <NavLink to="/edit">Edit</NavLink>
        </li>
      </ul>
    </NavbarStyled>
  );
};

export default Navbar;
