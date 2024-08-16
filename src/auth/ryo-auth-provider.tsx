import { createContext, ReactNode } from "react";
import api from "./ryo-auth-api";

type RyoAuthProviderProps = {
  children?: ReactNode;
};

export type RyoAuthProviderState = {
  login: () => void;
};

const initialState: RyoAuthProviderState = {
  login: () => null,
};

export const RyoAuthProviderContext =
  createContext<RyoAuthProviderState>(initialState);

export function RyoAuthProvider({ children, ...props }: RyoAuthProviderProps) {
  const login = async () => {
    const response = await api.login();

    return response;
  };

  const value = {
    login,
  };

  return (
    <RyoAuthProviderContext.Provider {...props} value={value}>
      {children}
    </RyoAuthProviderContext.Provider>
  );
}
