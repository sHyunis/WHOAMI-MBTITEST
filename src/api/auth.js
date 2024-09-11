import { useQuery, useMutation } from "@tanstack/react-query";
// import api from "./api";
import useBearsStore from "../zustand/bearsStore";
import axios from "axios";

const API_URL = "https://moneyfulpublicpolicy.co.kr";

// 회원가입
export const register = async (userData) => {
  const response = await axios.post(`${API_URL}/register`, userData);
  return response.data;
};

// 로그인
export const login = async (userData) => {
  const { setUser } = useBearsStore.getState();
  try {
    const response = await axios.post(`${API_URL}/login`, userData);
    const user = response.data;
    setUser(user); // 로그인 성공 시 user 상태 업데이트
    return user;
  } catch (error) {
    throw new Error(error.response?.data?.message || "Login failed");
  }
};

// 사용자 프로필 가져오기
export const getUserProfile = async (token) => {
  const response = await axios.get(`${API_URL}/user`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

// 프로필 업데이트
export const upDateProfile = async (formData) => {
  const token = localStorage.getItem("accessToken");
  const response = await axios.patch(`${API_URL}/profile`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};
