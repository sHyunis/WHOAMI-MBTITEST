import axios from "axios";

const API_URL = "https://whoami-mbtitest.vercel.app/testResults";

// 테스트 결과 가져오기
export const getTestResults = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error("Failed to fetch test results:", error);
    throw new Error("Failed to fetch test results.");
  }
};

// 테스트 결과 생성
export const createTestResult = async (resultData) => {
  try {
    const response = await axios.post(API_URL, resultData);
    return response.data;
  } catch (error) {
    console.error("Failed to create test result:", error);
    throw new Error("Failed to create test result.");
  }
};

// 테스트 결과 삭제
export const deleteTestResult = async (id) => {
  try {
    const response = await axios.delete(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error("Failed to delete test result:", error);
    throw new Error("Failed to delete test result.");
  }
};

// 테스트 결과 공개 업데이트
export const updateTestResultVisibility = async (id, visibility) => {
  try {
    const response = await axios.patch(`${API_URL}/${id}`, { visibility }); // 수정된 부분
    return response.data;
  } catch (error) {
    console.error("Failed to update test result visibility:", error);
    throw new Error("Failed to update test result visibility.");
  }
};
