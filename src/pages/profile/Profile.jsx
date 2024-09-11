import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useQueryClient } from "@tanstack/react-query";

import Button from "../../components/Button";
import img from "../../assets/imgs/default-profile.png";
import TestResultPage from "../test/TestResultPage";
import useBearsStore from "../../zustand/bearsStore";
import { deleteTestResult } from "../../api/testResults";

const Profile = () => {
  const { id } = useParams();
  const queryClient = useQueryClient();
  const { user, profile, getUserProfile, updateNickname, loading, error } =
    useBearsStore((state) => ({
      user: state.user,
      profile: state.profile,
      getUserProfile: state.getUserProfile,
      updateNickname: state.updateNickname,
      loading: state.loading,
      error: state.error,
    }));

  const [nickname, setNickname] = useState("");

  useEffect(() => {
    if (user) {
      getUserProfile(id);
    }
  }, [id, user, getUserProfile]);

  useEffect(() => {
    if (profile) {
      setNickname(profile.nickname);
    }
  }, [profile]);

  const handleNicknameChange = (e) => {
    setNickname(e.target.value);
  };

  const handleNicknameUpdate = () => {
    if (!user) {
      alert("로그인 정보가 없습니다.");
      return;
    }
    updateNickname(nickname)
      .then(() => {
        queryClient.invalidateQueries(["profiles", id]);
        alert("닉네임이 업데이트되었습니다.");
      })
      .catch((error) => {
        console.error("닉네임 업데이트 오류:", error.message);
      });
  };

  const handleDeleteTestResult = async (resultId) => {
    try {
      if (user) {
        await deleteTestResult(resultId); // API 호출로 테스트 결과 삭제
        queryClient.invalidateQueries(["testResults", id]);
        alert("테스트 결과가 삭제되었습니다.");
      } else {
        alert("로그인 정보가 없습니다.");
      }
    } catch (error) {
      console.error("테스트 결과 삭제 오류:", error.message);
    }
  };

  if (loading) return <p>로딩 중...</p>;
  if (error) return <p>오류: {error}</p>;

  return (
    <div className="h-[85vh] w-[330px] mx-auto flex-col justify-center align-middle">
      <p className="mb-4 mt-4 w-[100%] bg-navy text-white mx-auto rounded">
        Profile
      </p>

      {profile ? (
        <div className="flex-col justify-center align-middle w-[100%] mx-auto">
          <img src={img} className="w-[80px] mx-auto mb-4 mt-4" alt="Profile" />
          <p className="font-serif text-left text-sm">
            EMAIL : {profile.email}
          </p>
          <div className="flex flex-col gap-2">
            <div className="flex justify-between items-center">
              <p className="font-serif text-sm">NICKNAME : {nickname}</p>
              <Button
                width="40px"
                backgroundColor="rgb(32, 32, 36)"
                color="white"
                height="18px"
                onClick={handleNicknameUpdate}
              >
                EDIT
              </Button>
            </div>
            <input
              type="text"
              value={nickname}
              onChange={handleNicknameChange}
              placeholder="새 닉네임을 입력하세요"
              className="border border-navy indent-2 rounded p-1 text-sm "
            />
          </div>
        </div>
      ) : (
        <div>
          <p>NO USER</p>
        </div>
      )}

      <TestResultPage onDelete={handleDeleteTestResult} />
    </div>
  );
};

export default Profile;
