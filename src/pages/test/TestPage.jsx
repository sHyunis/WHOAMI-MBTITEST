import React from "react";
import { useNavigate } from "react-router-dom";
import { calculateMBTI } from "../../utils/mbtiCalculator";
import { createTestResult } from "../../api/testResults";
import TestForm from "../../components/TestForm";
import useBearsStore from "../../zustand/bearsStore";

const TestPage = () => {
  const navigate = useNavigate();
  const { user } = useBearsStore((state) => ({
    user: state.user,
  }));

  const handleTestSubmit = async (answers) => {
    if (!user) {
      alert("로그인된 사용자 정보가 없습니다.");
      return;
    }

    const result = calculateMBTI(answers);
    const resultData = {
      userId: user.id,
      nickname: user.nickname,
      result,
      answers,
      date: new Date().toISOString(),
      visibility: true,
    };

    try {
      await createTestResult(resultData);
      navigate("/results");
    } catch (error) {
      console.error("테스트 결과 제출 오류:", error.message);
      alert("테스트 결과 제출에 실패했습니다.");
    }
  };

  return (
    <div>
      <h2 className="mb-4 mt-4 w-[330px] bg-navy text-white mx-auto rounded">
        MBTI TEST
      </h2>
      <TestForm onSubmit={handleTestSubmit} />
    </div>
  );
};

export default TestPage;
