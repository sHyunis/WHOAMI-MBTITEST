import axios from "axios";

const API_URL = "http://localhost:4000/testResults";

// 테스트 결과 가져오기
export const getTestResults = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error("결과 실패", error);
    throw new Error("결과 실패");
  }
};

// 테스트 결과 생성
export const createTestResult = async (resultData) => {
  try {
    const response = await axios.post(API_URL, resultData);
    return response.data;
  } catch (error) {
    console.error("결과 실패", error);
    throw new Error("결과 실패");
  }
};

// 테스트 결과 삭제
export const deleteTestResult = async (id) => {
  try {
    const response = await axios.delete(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error("결과 실패", error);
    throw new Error("결과 실패");
  }
};

// 테스트 결과 공개 업데이트
export const updateTestResultVisibility = async (id, visibility) => {
  try {
    const response = await axios.patch(`${API_URL}/${id}`, { visibility });
    return response.data;
  } catch (error) {
    console.error("결과 실패", error);
    throw new Error("결과 실패");
  }
};
