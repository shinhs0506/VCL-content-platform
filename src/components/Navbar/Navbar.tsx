import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

//TODO: Refactor navbar to generic
interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = () => {
  return (
    <div className="navbar-container">
      <p className="title">UBC Visual Cognition Lab</p>
      <nav>
        <ul className="nav-links">
          <li>
            <Link className="nav-link" to="/">Home</Link>
          </li>
          <li>
            <Link className="nav-link" to="/timeline">Timeline</Link>
          </li>
          <li>
            <Link className="nav-link" to="/projects">Projects</Link>
          </li>
        </ul>
      </nav>
      <button>Search</button>
    </div>
  );
};

export default Navbar;
