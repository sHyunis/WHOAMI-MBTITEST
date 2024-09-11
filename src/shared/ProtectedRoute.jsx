import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import useBearsStore from "../zustand/bearsStore";

const ProtectedRoute = ({ children }) => {
  const { user } = useBearsStore((state) => ({
    user: state.user,
  }));
  const [redirect, setRedirect] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    if (!user) {
      setShowAlert(true);
      const timer = setTimeout(() => {
        setRedirect(true);
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [user]);

  if (redirect) {
    return <Navigate to="/login" />;
  }

  return (
    <div>
      {showAlert && (
        <div className="  text-navy p-4 text-center">
          로그인 후 이용할 수 있는 페이지입니다. 잠시만 기다려 주세요...
        </div>
      )}
      {children}
    </div>
  );
};

export default ProtectedRoute;
