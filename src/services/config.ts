import axios from "axios";
import * as SecureStore from "expo-secure-store";

export const BASE_URL = "http://localhost:3000/";
const TIME_OUT = 30000;
const BLOSSOM_TOKEN_NAME = "blossom_user_token";

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
});

export const saveToken = async (key: string, value: string) => {
  try {
    await SecureStore.setItemAsync(key, value);
  } catch (error) {
    console.log("error token: " + error);
    throw error;
  }
};

// axiosInstance.interceptors.request.use(async (req) => {
//   try {
//     const access_token = await SecureStore.getItemAsync(BLOSSOM_TOKEN_NAME);
//     req.headers.Authorization = access_token;
//     return req;
//   } catch (error) {
//     return req;
//   }
// });

export const fetcher = (url: string) =>
  axiosInstance.get(url).then((res) => res.data);
