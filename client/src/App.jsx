import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Routes, Navigate } from "react-router-dom";
import { Login } from "./components/Login";
import "./css/global.css";
import { About } from "./components/About";
import { PageNotFound } from "./components/PageNotFound";
import { TouchTyping } from "./components/TouchTyping";

const App = () => {
  const [localAuthenticated, setLocalAuthenticated] = useState(false);

  const CheckLocalAuthentication = () => {
    setLocalAuthenticated(true);
  };
  const LogOutLocalAuthentication = () => {
    setLocalAuthenticated(false);
  };

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <Login CheckLocalAuthentication={CheckLocalAuthentication} />
          }
        />
        <Route
          path="/typing"
          element={
            localAuthenticated ? (
              <TouchTyping
                LogOutLocalAuthentication={LogOutLocalAuthentication}
              />
            ) : (
              <Navigate to="/" />
            )
          }
        />
        <Route
          path="/about"
          element={localAuthenticated ? <About /> : <Navigate to="/" />}
        />
        <Route
          path="*"
          element={<PageNotFound />}
        />
      </Routes>
    </>
  );
};

const MainApp = () => {
  return (
    <Router>
      <App />
    </Router>
  );
};

export { MainApp };
