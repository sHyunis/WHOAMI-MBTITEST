import React, { useEffect, useState } from "react";
import Button from "./Button";
import useBearsStore from "../zustand/bearsStore";
import { Link, useNavigate, useLocation } from "react-router-dom";
import Input from "./Input";
import { getUserProfile, login, register } from "../api/auth";

const AuthForm = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [formData, setFormData] = useState({
    id: "",
    password: "",
    nickname: "",
  });

  const { setUser, mode, setMode } = useBearsStore((state) => ({
    setUser: state.setUser,
    mode: state.mode,
    setMode: state.setMode,
  }));

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = async () => {
    try {
      const loginData = await login(formData);
      localStorage.setItem("accessToken", loginData.accessToken);

      const userProfile = await getUserProfile(loginData.accessToken);
      setUser(userProfile);
      navigate("/");
    } catch (error) {
      alert("로그인에 실패했습니다.");
    }
  };

  const handleSignup = async () => {
    try {
      await register(formData);
      alert("회원가입에 성공했습니다.");
      navigate("/login");
    } catch (error) {
      alert("회원가입에 실패했습니다.");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (mode === "login") {
      handleLogin();
    } else {
      handleSignup();
    }
  };

  useEffect(() => {
    setMode(location.pathname === "/sign-up" ? "signUp" : "login");
  }, [location.pathname, setMode]);

  return (
    <form
      onSubmit={handleSubmit}
      className="flex-col text-1rem border border-navy w-[250px] h-[300px] mx-auto p-4 gap-3 rounded"
    >
      <h2 className="mb-8">{mode === "signUp" ? "SIGN UP" : "LOGIN"}</h2>

      <div className="mb-4">
        <Input
          name="id"
          placeholder="EMAIL"
          type="text"
          onChange={handleChange}
          value={formData.id}
          required
          borderBottom="1px solid rgb(32, 32, 36)"
        />
        <Input
          name="password"
          placeholder="PASSWORD"
          type="password"
          onChange={handleChange}
          value={formData.password}
          required
          borderBottom="1px solid rgb(32, 32, 36)"
        />
        {mode === "signUp" && (
          <Input
            name="nickname"
            placeholder="NICKNAME"
            type="text"
            onChange={handleChange}
            value={formData.nickname}
            borderBottom="1px solid rgb(32, 32, 36)"
          />
        )}
      </div>

      <div className="flex-col">
        <Button
          type="submit"
          border="1px solid rgb(32, 32, 36)"
          backgroundColor="rgb(32, 32, 36)"
          color="white"
        >
          {mode === "login" ? "LOGIN" : "SIGN UP"}
        </Button>
        <Button
          type="button"
          border="1px solid rgb(32, 32, 36)"
          backgroundColor="transparent"
        >
          <Link to={mode === "login" ? "/sign-up" : "/login"}>
            {mode === "login" ? "SIGN UP" : "LOGIN"}
          </Link>
        </Button>
      </div>
    </form>
  );
};

export default AuthForm;
