import React, { PropsWithChildren } from "react";
import { AuthProvider } from "./auth/AuthContext";

export const GlobalContext: React.FC<PropsWithChildren> = ({ children }) => (
  <AuthProvider>
    {children}
  </AuthProvider>
)