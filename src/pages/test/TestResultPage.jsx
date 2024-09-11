import React, { useEffect, useState } from "react";
import { getTestResults } from "../../api/testResults";
import TestResultList from "./TestResultList";
import useBearsStore from "../../zustand/bearsStore";

const TestResult = () => {
  const [results, setResults] = useState([]);
  const user = useBearsStore((state) => state.user);

  const fetchResults = async () => {
    try {
      const data = await getTestResults();
      if (Array.isArray(data)) {
        setResults(data);
      } else {
        setResults([]);
      }
    } catch (error) {
      console.error("Failed to fetch results:", error);
      setResults([]);
    }
  };

  useEffect(() => {
    fetchResults();
  }, []);

  const handleUpdate = () => {
    fetchResults();
  };

  const handleDelete = () => {
    fetchResults();
  };

  return (
    <div className="w-full flex flex-col items-center justify-center  shadow-lg rounded-lg p-8">
      <div className=" max-w-2xl w-full">
        <h1 className="text-3xl font-bold text-primary-color mb-6 text-center">
          TEST RESULT
        </h1>
        <TestResultList
          results={results}
          onUpdate={handleUpdate}
          onDelete={handleDelete}
        />
      </div>
    </div>
  );
};

export default TestResult;
