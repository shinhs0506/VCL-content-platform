import { navbar } from "@statics";
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = () => {
  const location = useLocation();

  const renderedLinks = navbar.map(({ TITLE, REF }) => {
    const active = REF === location.pathname ? 'active' : '';

    return (
      <React.Fragment key={REF}>
        <li>
          <Link className={`nav-link ${active}`} to={REF}>{TITLE}</Link>
        </li>
      </React.Fragment>
    )
  });

  return (
    <div className="navbar-container">
      <p className="title">UBC Visual Cognition Lab</p>
      <nav>
        <ul className="nav-links">
          {renderedLinks}
        </ul>
      </nav>
      <button>Search</button>
    </div>
  );
};

export default Navbar;
