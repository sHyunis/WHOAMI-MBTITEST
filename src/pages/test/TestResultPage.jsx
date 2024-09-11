import React, { useEffect } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getTestResults } from "../../api/testResults";
import Button from "../../components/Button";

const TestResultPage = ({ onDelete }) => {
  const queryClient = useQueryClient();
  const { id } = useParams(); // URL 파라미터에서 사용자 ID 가져오기

  // 테스트 결과를 가져오기 위한 쿼리
  const {
    data: testResults,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["testResults", id],
    queryFn: () => getTestResults(id), // 사용자 ID에 따라 테스트 결과를 가져오는 함수 호출
    enabled: !!id, // ID가 존재할 때만 쿼리 실행
  });

  useEffect(() => {
    if (id) {
      queryClient.invalidateQueries(["testResults", id]); // ID가 변경되면 쿼리 무효화
    }
  }, [id, queryClient]);

  if (isLoading) return <p>로딩 중...</p>;
  if (error) return <p>오류: {error.message}</p>;
  if (!testResults || testResults.length === 0)
    return <p>테스트 결과가 없습니다.</p>;

  return (
    <>
      <h2 className="mb-4 mt-4 w-[330px] bg-navy text-white mx-auto rounded">
        YOUR RESULTS
      </h2>
      <div className="p-4 w-[330px]">
        {testResults.map((result) => (
          <div key={result.id} className="mb-4 border border-navy p-4 rounded">
            <p>닉네임: {result.nickname}</p>
            <p>MBTI 결과: {result.result}</p>
            <p>{new Date(result.date).toLocaleDateString()}</p>
            <Button
              width="60px"
              backgroundColor="rgb(239, 123, 123)"
              color="white"
              height="18px"
              onClick={() => onDelete(result.id)}
            >
              DELETE
            </Button>
          </div>
        ))}
      </div>
    </>
  );
};

export default TestResultPage;
