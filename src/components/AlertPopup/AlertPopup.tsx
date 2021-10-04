import React from 'react';
import { Snackbar, IconButton } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import { useAppDispatch, useAppSelector } from '@redux/hooks';
import { selectApp, appActions } from '@redux/slices/AppRedux';
import './AlertPopup.scss';

const AlertPopup = () => {
  const dispatch = useAppDispatch();
  const { alert } = useAppSelector(selectApp);

  const getIsOpen = () => alert !== null;

  const handleClose = () => {
    dispatch(appActions.setAlert(null));
  };

  return (
    <Snackbar
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left',
      }}
      open={getIsOpen()}
      autoHideDuration={6000}
      onClose={handleClose}
      message={alert}
      action={
        <IconButton aria-label="close" color="inherit" onClick={handleClose}>
          <CloseIcon />
        </IconButton>
      }
    />
  );
};

export default AlertPopup;
