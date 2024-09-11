import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getTestResults } from "../../api/testResults"; // API 함수 임포트

const AllTestResultsPage = () => {
  // 모든 테스트 결과를 가져오기 위한 쿼리
  const {
    data: testResults,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["allTestResults"],
    queryFn: getTestResults, // 모든 테스트 결과를 가져오는 함수 호출
  });

  if (isLoading) return <p>로딩 중...</p>;
  if (error) return <p>오류: {error.message}</p>;
  if (!testResults || testResults.length === 0)
    return <p>테스트 결과가 없습니다.</p>;

  return (
    <div className="h-[85vh]">
      <h2 className="mb-4 mt-4 w-[330px] bg-navy text-white mx-auto rounded">
        All Test Results
      </h2>
      <div className="p-4 w-[330px] mx-auto">
        {testResults.map((result) => (
          <div key={result.id} className="mb-4 border border-navy p-4 rounded">
            <p>닉네임: {result.nickname}</p>
            <p>MBTI 결과: {result.result}</p>
            <p>응답일: {new Date(result.date).toLocaleDateString()}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllTestResultsPage;
