import api from "./api.js";

// 테스트 결과 가져오기
export const getTestResults = async () => {
  const response = await api.get("/testResults");
  return response.data;
};

// 테스트 결과 생성
export const createTestResult = async (resultData) => {
  const response = await api.post("/testResults", resultData);
  return response.data;
};

// 테스트 삭제
export const deleteTestResult = async (id) => {
  const response = await api.delete(`/testResults/${id}`);
  return response.data;
};

// 테스트 수정
export const updateTestResultVisibility = async (id, visibility) => {
  const response = await api.patch(`/testResults/${id}`, { visibility });
  return response.data;
};
