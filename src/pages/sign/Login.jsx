// Login.js
import React, { useEffect } from "react";

import AuthForm from "../../components/AuthForm";
import useBearsStore from "../../zustand/bearsStore";

const Login = () => {
  const { setMode } = useBearsStore((state) => ({
    setMode: state.setMode,
  }));

  useEffect(() => {
    setMode("login");
  }, [setMode]);

  return (
    <div className="h-85vh flex justify-center items-center">
      <AuthForm />
    </div>
  );
};

export default Login;
