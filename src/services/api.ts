import { IUser } from "types";
import { axiosInstance } from "./config";

type RegisterUserTypes = IUser;
type LoginUserTypes = Omit<IUser, "name">;

export const registerUser = async ({
  email,
  name,
  password,
}: RegisterUserTypes) => {
  try {
    const res = await axiosInstance.post("users", {
      email,
      password,
      name,
    });
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const LoginUser = async ({ email, password }: LoginUserTypes) => {
  try {
    const res = await axiosInstance.post("users", {
      email,
      password,
    });
    return res.data;
  } catch (error) {
    throw error;
  }
};
