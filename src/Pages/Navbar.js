import { NavLink } from "react-router-dom";
export const Navbar = () => {
  const navLinkStyle = ({ isActive }) => {
    return {
      fontWeight: isActive ? "bold" : "normal",
      textDecoration: isActive ? "none" : "underline",
    };
  };
  return (
    <nav className="pry-nav">
      <NavLink style={navLinkStyle} to="/">
        Home
      </NavLink>
      <NavLink style={navLinkStyle} to="/about">
        About
      </NavLink>
      <NavLink style={navLinkStyle} to="/product">
        Products
      </NavLink>
      <NavLink style={navLinkStyle} to="/nopage">
        Bonus
      </NavLink>
      <NavLink style={navLinkStyle} to="/errorboundary">
        Promo
      </NavLink>
      <NavLink style={navLinkStyle} to="/users">
        Users
      </NavLink>
    </nav>
  );
};
