import React from "react";
import { Link, useNavigate } from "react-router-dom";
import useBearsStore from "../zustand/bearsStore";
import Button from "./Button";

const Layout = ({ children }) => {
  const { user, logout, error } = useBearsStore((state) => ({
    user: state.user,
    logout: state.logout,
    error: state.error,
  }));

  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate("/");
  };

  return (
    <div className=" w-[100%] mx-auto text-center ">
      <header className="flex-col border-t border-b border-navy">
        <Link to="/">
          <h1 className="text-1rem">WHOAMI</h1>
        </Link>

        <nav>
          {user ? (
            <>
              <Button type="button" onClick={handleLogout}>
                LOGOUT
              </Button>
              <Link to={`/profile/${user.id}`}>
                <Button>MY PAGE</Button>
              </Link>
              <Link to="/test">
                <Button>NEW TEST</Button>
              </Link>
              <Link to="/results">
                <Button>ALL RESULT</Button>
              </Link>
            </>
          ) : (
            <>
              <Link to="/sign-up">
                <Button>SIGNUP</Button>
              </Link>
              <Link to="/login">
                <Button>LOGIN</Button>
              </Link>
              <Link to="/test">
                <Button>NEW TEST</Button>
              </Link>
              <Link to="/results">
                <Button>ALL RESULT</Button>
              </Link>
            </>
          )}
        </nav>
      </header>
      <section>{children}</section>
      <footer className=" border-t border-b border-navy">
        <p>START AND SHOW US</p>
        <p className="text-0.5rem">ⓒ 2024. WHOAMI/JSH. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Layout;
