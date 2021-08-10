import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { NAVBAR, TEXT } from "@statics";
import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = () => {
  const location = useLocation();

  const renderedLinks = NAVBAR.map(({ TITLE, REF }) => {
    const active = REF === location.pathname ? 'active' : '';

    return (
      <React.Fragment key={REF}>
          <Link className={`nav-link ${active}`} to={REF}>{TITLE}</Link>
      </React.Fragment>
    )
  });

  return (
    <div>
      <AppBar position="sticky" className="nav-appbar">
        <Toolbar className="nav-toolbar">
          <Typography className="nav-title" style={{ fontSize: '20px' }}>
            {TEXT.COMMON.TITLE}
          </Typography>
          <span>
            {renderedLinks}
          </span>
        </Toolbar>
      </AppBar>
    </div>
  )
};

export default Navbar;
