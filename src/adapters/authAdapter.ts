import axios from 'axios';
import dotenv from "dotenv";

dotenv.config();

const API_URL = process.env.REACT_APP_API_URL

export const loginUser = async () => {
  console.log("API_URL: ", API_URL);
}

export const checkAuth = async () => {
  console.log("API_URL: ", API_URL);
}