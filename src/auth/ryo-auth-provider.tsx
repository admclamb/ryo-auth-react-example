import { createContext, ReactNode, useState } from "react";
import api from "./ryo-auth-api";
import { Account } from "./account-model";
import { ErrorModel } from "./error-model";

type RyoAuthProviderProps = {
  children?: ReactNode;
};

export type RyoAuthProviderState = {
  login: (email: string, password: string) => void;
  signup: (email: string, password: string) => void;
  getProfile: () => any;
  account: Account | null;
  error: ErrorModel | null;
};

const initialState: RyoAuthProviderState = {
  login: () => null,
  signup: () => null,
  getProfile: () => null,
  account: null,
  error: null,
};

export const RyoAuthProviderContext =
  createContext<RyoAuthProviderState>(initialState);

export function RyoAuthProvider({ children, ...props }: RyoAuthProviderProps) {
  const [account, setAccount] = useState<Account | null>(null);
  const [error, setError] = useState<ErrorModel | null>(null);

  const login = async (email: string, password: string) => {
    const [data, error] = await api.login(email, password);

    if (data) {
      setAccount(data);
    }

    if (error) {
      setError(error);
    }

    return [data, error];
  };

  const signup = async (email: string, password: string) => {
    const [data, error] = await api.signup(email, password);

    if (data) {
      setAccount(data);
    }

    if (error) {
      setError(error);
    }

    return [data, error];
  };

  const getProfile = async () => {
    const [data, error] = await api.getProfile();

    return [data, error];
  };

  const value = {
    login,
    signup,
    getProfile,
    account,
    error,
  };

  return (
    <RyoAuthProviderContext.Provider {...props} value={value}>
      {children}
    </RyoAuthProviderContext.Provider>
  );
}
