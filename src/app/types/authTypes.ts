import { ReactNode } from "react";

export interface AuthContextType {
  user: any;
  login: (userData: any) => void;
  logout: () => void;
}

export interface AuthProviderProps {
  children: ReactNode;
}