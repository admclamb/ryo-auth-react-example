import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { RyoAuthProvider } from "./auth/ryo-auth-provider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RyoAuthProvider>
      <App />
    </RyoAuthProvider>
  </React.StrictMode>
);
