import { AppBar, Toolbar, Typography, makeStyles } from "@material-ui/core";
import { NAVBAR, TEXT } from "@statics";
import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

interface NavbarProps {}

const useStyles = makeStyles(theme => {
  return {
    toolbar: theme.mixins.toolbar
  }
})

const Navbar: React.FC<NavbarProps> = () => {
  const classes = useStyles();
  const location = useLocation();

  const renderedLinks = NAVBAR.map(({ TITLE, REF }) => {
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
    <div>
      <AppBar>
        <Toolbar>
          <Typography>
            UBC Visual Cognition Lab
          </Typography>
          <nav>
            <ul className="nav-links">
              {renderedLinks}
            </ul>
          </nav>
        </Toolbar>
      </AppBar>
      <div className={classes.toolbar} />
    </div>
  )
  // return (
  //   <div className="navbar-container">
  //     <p id="nav-title">{text.COMMON.TITLE}</p>
  //     <nav>
  //       <ul className="nav-links">
  //         {renderedLinks}
  //       </ul>
  //     </nav>
  //   </div>
  // );
};

export default Navbar;
