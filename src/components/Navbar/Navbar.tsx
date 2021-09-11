import { AppBar, Toolbar, Typography, IconButton } from '@material-ui/core';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { NAVBAR, TEXT } from '@statics';
import { useAppDispatch } from '@redux/hooks';
import { appActions } from '@redux/generics/AppRedux';
import { CONSTANTS } from '@statics';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar: React.FC<{}> = () => {
  const location = useLocation();
  const dispatch = useAppDispatch();

  const handleOpenLoginModal = () =>
    dispatch(
      appActions.openModal({
        key: CONSTANTS.MODALS.LOGIN,
      })
    );

  const renderedLinks = NAVBAR.map(({ TITLE, REF }) => {
    const active = REF === location.pathname ? 'active' : '';

    return (
      <React.Fragment key={REF}>
        <Link className={`nav-link ${active}`} to={REF}>
          {TITLE}
        </Link>
      </React.Fragment>
    );
  });

  return (
    <div>
      <AppBar position="sticky" className="nav-appbar">
        <Toolbar className="nav-toolbar">
          <Typography className="nav-title">{TEXT.COMMON.TITLE}</Typography>
          <span className="nav-rendered-links">{renderedLinks}</span>
          <IconButton onClick={handleOpenLoginModal}>
            <AccountCircleIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
