import React from "react";
import TestResultItem from "./TestResultItem";
import useBearsStore from "../../zustand/bearsStore";

const TestResultList = ({ results, onUpdate, onDelete }) => {
  const { user } = useBearsStore();

  // user가 null인 경우를 대비하여 적절한 기본값을 설정합니다.
  const isUserAvailable = user && user.id;

  // results를 필터링하여 사용자 ID와 일치하는 결과만 보여줍니다.
  const filteredResults = isUserAvailable
    ? results.filter((result) => result.userId === user.id)
    : results;

  return (
    <div>
      {filteredResults.map((result) => (
        <TestResultItem
          key={result.id}
          result={result}
          onUpdate={onUpdate}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};

export default TestResultList;
