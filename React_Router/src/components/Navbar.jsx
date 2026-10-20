import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <NavLink
        to={"/"}
        end
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        Home
      </NavLink>
      <NavLink
        to={"/about"}
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        About
      </NavLink>
      <NavLink
        to={"/contact"}
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        Contact Us
      </NavLink>
      <NavLink
        to={"/user"}
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        User
      </NavLink>
    </nav>
  );
};

export default Navbar;
