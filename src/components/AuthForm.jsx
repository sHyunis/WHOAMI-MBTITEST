import React, { useEffect, useState } from "react";
import Button from "./Button";
import useBearsStore from "../zustand/bearsStore";
import { Link, useNavigate, useLocation } from "react-router-dom";
import Input from "./Input";

const AuthForm = () => {
  const [nickname, setNickname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const location = useLocation();

  const { setMode, mode, login, register, error, loading } = useBearsStore(
    (state) => ({
      setMode: state.setMode,
      mode: state.mode,
      login: state.login,
      register: state.register,
      error: state.error,
      loading: state.loading,
    })
  );

  useEffect(() => {
    setMode(location.pathname === "/sign-up" ? "signUp" : "login");
  }, [location.pathname, setMode]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "email") setEmail(value);
    else if (name === "password") setPassword(value);
    else if (name === "nickname") setNickname(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (mode === "signUp") {
        await register(email, password, nickname);
      } else {
        await login(email, password);
      }
      setNickname("");
      setEmail("");
      setPassword("");
      navigate("/");
    } catch (err) {
      console.error("Submission Error:", err);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex-col text-1rem border border-navy w-[250px] h-[300px] mx-auto p-4 gap-3 rounded"
    >
      <h2 className="mb-8">{mode === "signUp" ? "SIGN UP" : "LOGIN"}</h2>

      <div className="mb-4">
        <Input
          name="email"
          placeholder="EMAIL"
          type="text"
          onChange={handleChange}
          value={email}
          required
          disabled={loading}
          borderBottom="1px solid rgb(32, 32, 36)"
        />
        <Input
          name="password"
          placeholder="PASSWORD"
          type="password"
          onChange={handleChange}
          value={password}
          required
          disabled={loading}
          borderBottom="1px solid rgb(32, 32, 36)"
        />
        {mode === "signUp" && (
          <Input
            name="nickname"
            placeholder="NICKNAME"
            type="text"
            onChange={handleChange}
            value={nickname}
            disabled={loading}
            borderBottom="1px solid rgb(32, 32, 36)"
          />
        )}
      </div>

      <div className="flex-col">
        <Button
          type="submit"
          disabled={loading}
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

      {loading && <p className="text-0.5rem mt-4">Loading...</p>}
      {error && <p className="text-0.5rem mt-4 font-serif">ERROR: {error}</p>}
    </form>
  );
};

export default AuthForm;
