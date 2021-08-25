import axios from 'axios';
import dotenv from 'dotenv';
import type { BaseResponse } from './types';

dotenv.config();
const baseURL = process.env.REACT_APP_API_URL;

interface LoginResponse extends BaseResponse {
  data?: {
    access_token: string;
    refresh_token: string;
    username: string;
  };
}

export const loginUser = async (
  username: string,
  password: string
): Promise<LoginResponse> => {
  try {
    const res = await axios.post(
      '/api/users/login',
      {
        username,
        password,
      },
      {
        baseURL,
      }
    );

    return res.data as LoginResponse;
  } catch (err) {
    return err.response.data as BaseResponse;
  }
};

export const checkAuth = async () => {};
