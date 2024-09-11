import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/home/Home";
import Profile from "../pages/profile/Profile";
import Login from "../pages/sign/Login";
import TestPage from "../pages/test/TestPage";
import TestResultPage from "../pages/test/TestResultPage";
import ProtectedRoute from "./ProtectedRoute";
import Layout from "../components/Layout";
import SignUp from "../pages/sign/SignUp";
import useBearsStore from "../zustand/bearsStore";

const Router = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route
            path="/profile/:id"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          />
          <Route
            path="/test"
            element={
              <ProtectedRoute>
                <TestPage />
              </ProtectedRoute>
            }
          />
          <Route path="/results" element={<TestResultPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default Router;
