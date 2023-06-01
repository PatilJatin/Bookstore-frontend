import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { UserProvider } from "./context/userContext.jsx";
import { Toaster } from "react-hot-toast";
import { BrowserRouter as Router } from "react-router-dom";
import { BookProvider } from "./context/bookContext.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UserProvider>
      <BookProvider>
        <Toaster />
        <Router>
          <App />
        </Router>
      </BookProvider>
    </UserProvider>
  </React.StrictMode>
);
