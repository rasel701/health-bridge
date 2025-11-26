import React from "react";
import RegisterComponent from "../components/RegisterComponent/RegisterComponent";
import { ToastContainer } from "react-toastify";

const Register = () => {
  return (
    <div>
      <RegisterComponent />
      <ToastContainer />
    </div>
  );
};

export default Register;
