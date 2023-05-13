import NavbarStyled from "./NavbarStyled";
import { NavLink, Link } from "react-router-dom";
import { ReactComponent as LogoIcon } from "../../assets/site-logo.svg";

const Navbar = (): JSX.Element => {
  return (
    <NavbarStyled>
      <Link to="/" className="navbar__info">
        <LogoIcon className="navbar__logo" />
        <span className="navbar__title">Robotown</span>
      </Link>
      <ul className="navbar__links">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/create">Create</NavLink>
        </li>
        <li>
          <NavLink to="/edit">Edit</NavLink>
        </li>
      </ul>
    </NavbarStyled>
  );
};

export default Navbar;
