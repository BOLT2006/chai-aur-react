import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Nav = () => {
  const [isLoggedIn, setisLoggedIn] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  // Handle Login
  const handleLogin = () => {
    setisLoggedIn(true);
    navigate("/user");
  };

  // Handle Logout
  const handleLogout = () => {
    setisLoggedIn(false);
    navigate("/home");
  };

  return (
    <div>
      <ul>
        <li>
          <Link to={"/"}>Home</Link>
        </li>

        {isLoggedIn && (
          <>
            <li>
              <Link to={"/user"}>User</Link>
            </li>
            <li>
                <button onClick={handleLogout}>logout</button>
            </li>
          </>
        )}
        {!isLoggedIn && (
          <>
            <li>
              <Link to={"/about"}>About</Link>
            </li>
            <li>
              <Link to={"/contact"}>Contact</Link>
            </li>

            <li>
                <button onClick={handleLogin}>login</button>
            </li>
          </>
        )}
      </ul>
    </div>
  );
};

export default Nav;
