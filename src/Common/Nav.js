import React from "react";
import { NavLink } from "react-router-dom";
import { css } from "@emotion/css";

const NavStyles = css`
  margin-bottom: 15px;
  a {
    color: #fff;
    padding: 6px 12px;
    text-decoration: none;
    border-radius: 4px;
    &.active {
      color: #50fa7b;
      border: 2px solid #50fa7b;
    }
  }
`;

const Nav = () => (
  <nav className={NavStyles}>
    {/*`end`: Strictly matching `/` only instead of both `/` and `/admin` */}
    <NavLink to="/" end>
      Products
    </NavLink>
    <NavLink to="/admin" activeStyle={{ fontStyle: "italic" }}>
      Admin
    </NavLink>
  </nav>
);

export default Nav;