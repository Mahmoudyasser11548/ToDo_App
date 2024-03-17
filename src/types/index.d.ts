import { IPerformanceLogger } from "react-native/Libraries/Utilities/IPerformanceLogger";

export interface IUser {
  email: string;
  name: string;
  password: string;
}

export interface IAuthenticatedUser {
  email: string;
  name: string;
}

export interface IColor {
  id: string;
  name: string;
  code: string;
}
export interface IIcon {
  id: string;
  name: string;
  symbol: string;
}
export interface ICategory {
  _id: string;
  name: string;
  user: IUser | string;
  isEditable: boolean;
  color: IColor;
  icon: IIcon;
}

export interface ITaskRequest {
  name: string;
  isCompleted: boolean;
  categoryId: string;
  date: string;
}
