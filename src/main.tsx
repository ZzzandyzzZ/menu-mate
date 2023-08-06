import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import { CssBaseline } from "@mui/material";
import "@fontsource/roboto/700.css";

import App from "./App.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <CssBaseline />
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>
);
