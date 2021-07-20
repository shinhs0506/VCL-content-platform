import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

//TODO: Refactor navbar to generic
interface NavbarProps {}

// TODO: move to statics?
const links = [
  {
    ref: '/',
    text: 'Home'
  },
  {
    ref: '/timeline',
    text: 'Timeline'
  },
  {
    ref: '/projects',
    text: 'Projects'
  }
]

const Navbar: React.FC<NavbarProps> = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const renderedLinks = links.map((linkInfo, index) => {
    const active = index === activeIndex ? 'active' : '';

    return (
      <React.Fragment key={linkInfo.ref}>
        <li>
          <Link className={`nav-link ${active}`} to={linkInfo.ref} onClick={() => {setActiveIndex(index)}}>
              {linkInfo.text}
          </Link>
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
