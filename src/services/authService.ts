import React, { useEffect, useState } from 'react';
import { loginUser, checkAuth, logoutUser } from './adapters/authAdapter';
import { useAppSelector, useAppDispatch } from '@redux/hooks';
import { selectAuth, authActions } from '@redux/generics/AuthRedux';

export const useHandleCheckAuth = () => {
  const dispatch = useAppDispatch();

  const { refresh_token, isLoggingIn } = useAppSelector(selectAuth);

  React.useEffect(() => {
    if (refresh_token && !isLoggingIn) {
      checkAuth(refresh_token)
        .then((res) => {
          if (res.data) {
            dispatch(authActions.setAccessToken(res.data.access_token));
          } else {
            dispatch(authActions.logout());
          }
        })
        .catch(() => console.error('Error: authService.ts checkAuth call'));
    }
  }, [dispatch, isLoggingIn, refresh_token]);
};

export const useHandleLogin = () => {
  const dispatch = useAppDispatch();

  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  // Cleanup state for component unmounting
  useEffect(() => {
    return () => {
      setIsFetching(false);
      setError(null);
      setSuccess(null);
    };
  }, []);

  const handleLogin = async (username: string, password: string) => {
    setIsFetching(true);
    dispatch(authActions.setIsLoggingIn(true));

    loginUser(username, password)
      .then((res) => {
        if (res.data) {
          dispatch(authActions.setAccessToken(res.data.access_token));
          dispatch(authActions.setRefreshToken(res.data.refresh_token));
          dispatch(authActions.setUsername(res.data.username));
          dispatch(authActions.setPermissions(res.data.permissions));

          setSuccess(res.message);
          setError(null);
        } else {
          setSuccess(null);
          setError(res.message);
        }
      })
      .then(() => {
        setIsFetching(false);
        dispatch(authActions.setIsLoggingIn(false));
      })
      .catch(() => console.error('Error: authService.ts loginUser call'));
  };

  return { handleLogin, isFetching, error, success };
};

export const useHandleLogout = () => {
  const dispatch = useAppDispatch();

  const { access_token, isLoggingIn } = useAppSelector(selectAuth);

  const logout = async () => {
    if (access_token && !isLoggingIn) {
      logoutUser(access_token)
        .then(() => {
          dispatch(authActions.logout());
        })
        .catch(() => console.error('Error: authService.ts logoutUser call'));
    }
  };

  return { logout };
};
