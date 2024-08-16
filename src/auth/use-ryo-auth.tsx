import { useContext } from "react";
import { RyoAuthProviderContext } from "./ryo-auth-provider";

export const useRyoAuth = () => {
  const context = useContext(RyoAuthProviderContext);

  if (context === undefined) {
    throw new Error("useRyoAuth must be used within RyoAuthProvider");
  }

  return context;
};
