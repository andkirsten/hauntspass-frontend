import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/App/App";
import { BrowserRouter } from "react-router-dom";
import { CurrentUserProvider } from "./contexts/CurrentUserContext";
import { CurrentPassProvider } from "./contexts/CurrentPassContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <CurrentUserProvider>
      <CurrentPassProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </CurrentPassProvider>
    </CurrentUserProvider>
  </React.StrictMode>
);
