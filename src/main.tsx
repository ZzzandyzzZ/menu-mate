import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import { CssBaseline } from "@mui/material";

import App from "./App.tsx";
import { DishesProvider } from "./contexts/dishesContext.tsx";
import { SessionProvider } from "./contexts/sessionContext.tsx";

import "@fontsource/roboto/700.css";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <CssBaseline />
    <HashRouter>
      <SessionProvider>
        <DishesProvider>
          <App />
        </DishesProvider>
      </SessionProvider>
    </HashRouter>
  </React.StrictMode>
);
