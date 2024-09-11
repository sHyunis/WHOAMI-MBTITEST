import { useQuery, useMutation } from "@tanstack/react-query";
import api from "./api";
import useBearsStore from "../zustand/bearsStore";

// 사용자 프로필 가져오기
export const useUserProfile = (id) => {
  const { user } = useBearsStore((state) => ({
    user: state.user,
  }));

  return useQuery({
    queryKey: ["profiles", id],
    queryFn: async () => {
      if (!user) throw new Error("User is not logged in");
      const response = await api.get(`/profiles`, { params: { userId: id } });
      return response.data[0];
    },
    onError: (error) => {
      console.error("프로필 가져오기 오류:", error.message);
    },
  });
};

// 프로필 업데이트
export const useUpdateProfile = () => {
  const { user } = useBearsStore((state) => ({
    user: state.user,
  }));

  return useMutation({
    mutationFn: async (formData) => {
      if (!user) throw new Error("User is not logged in");
      const response = await api.patch(`/profiles/${user.id}`, formData);
      return response.data;
    },
    onError: (error) => {
      console.error("프로필 업데이트 오류:", error.message);
    },
  });
};

// 로그아웃
export const useLogout = () => {
  const { logout } = useBearsStore((state) => ({
    logout: state.logout,
  }));

  return useMutation({
    mutationFn: async () => {
      logout();
    },
    onError: (error) => {
      console.error("로그아웃 오류:", error.message);
    },
  });
};
