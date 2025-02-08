import React, { useEffect, useState } from "react";
import useFetchQuery from "../hooks/shared/useFetch";

function AllQuestionPaperForExamineer() {
  const { data, isLoading, isSuccess, isError, error, refetch } = useFetchQuery(
    "/api/v1/questionPaper/getSingleQuestionPaper/QUE00"
  );
  console.log(data)

  // Check for loading or error states
  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Error: {error.message}</p>;
  }

  // Ensure data exists before mapping
  const exams = data?.data ? [data.data] : [];
  console.log(exams)

  return (
    <div className="overflow-x-auto shadow-xl rounded-lg border border-gray-200">
      <div className="text-xl font-bold p-4 text-center">Quiz Questions</div>

      {/* Iterate over exams (we are assuming there is just one exam in data.data) */}
      {exams.map((exam) => (
        <div key={exam.id} className="p-4 text">
          <div className="font-semibold text-lg text-center">{exam.subject}</div>
          <div className="text-sm mb-4">Duration: {exam.duration} minutes</div>
          
          {/* Iterate over MCQSet to display each question */}
          {exam.MCQSet.map((mcq) => (
            <div key={mcq.mcqId} className="border p-4 mb-4 rounded-lg shadow-md">
              <div className="font-semibold">{mcq.question}</div>
              
              {/* Display options */}
              <div className="mt-2">
                {mcq.options.map((option, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <input
                      type="radio"
                      name={mcq.mcqId}
                      value={option}
                      id={`${mcq.mcqId}-option-${index}`}
                    />
                    <label htmlFor={`${mcq.mcqId}-option-${index}`} className="text-sm">
                      {option}
                    </label>
                  </div>
                ))}
              </div>

              {/* Display correct answer (optional, you can remove it after development) */}
              <div className="mt-2 text-sm text-green-500">
                Correct Answer: {mcq.options[mcq.correctAns - 1]}
              </div>

              {/* Display marks for the question */}
              <div className="mt-2 text-sm text-gray-600">Marks: {mcq.mark}</div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default AllQuestionPaperForExamineer;
