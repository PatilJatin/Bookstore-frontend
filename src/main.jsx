import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { UserProvider } from "./context/userContext.jsx";
import { Toaster } from "react-hot-toast";
import { BrowserRouter as Router } from "react-router-dom";
import { BookProvider } from "./context/bookContext.jsx";
import { FilterProvider } from "./context/filterContext.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <UserProvider>
    <BookProvider>
      <FilterProvider>
        <Toaster />
        <Router>
          <App />
        </Router>
      </FilterProvider>
    </BookProvider>
  </UserProvider>
);
