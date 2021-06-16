import React from "react";
import { Link } from "react-router-dom";

//TODO: Refactor navbar to generic
interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/timeline">Timeline</Link>
        </li>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
