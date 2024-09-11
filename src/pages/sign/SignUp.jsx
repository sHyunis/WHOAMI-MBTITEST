import React from "react";
import useBearsStore from "../../zustand/bearsStore";
import AuthForm from "../../components/AuthForm";
import { useEffect } from "react";

const SignUp = () => {
  const { setMode } = useBearsStore((state) => ({
    setMode: state.setMode,
  }));
  useEffect(() => {
    setMode("signUp");
  }, [setMode]);
  return (
    <div className="h-85vh flex justify-center items-center">
      <AuthForm />
    </div>
  );
};

export default SignUp;
