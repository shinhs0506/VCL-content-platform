import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const baseURL = process.env.REACT_APP_API_URL;

export const loginUser = async (username: string, password: string) => {
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

    console.log(res);
  } catch (err) {
    console.log(err);
  }
};

export const checkAuth = async () => {};
