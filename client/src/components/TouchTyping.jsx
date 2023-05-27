import React, { useEffect } from "react";
import Home from "../pages/home/Home";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const TouchTyping = ({ LogOutLocalAuthentication }) => {
  useEffect(() => {
    const isLoggedIn = sessionStorage.getItem("isLoggedIn");
    if (isLoggedIn === "true") {
      toast.success("Successfully logged in!");
      sessionStorage.removeItem("isLoggedIn");
    }
  }, []);
  return (
    <>
      <Home LogOutLocalAuthentication={LogOutLocalAuthentication} />
      <ToastContainer />
    </>
  );
};

export { TouchTyping };
