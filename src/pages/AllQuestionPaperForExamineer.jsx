import React, { useEffect, useState } from "react";
import useFetchQuery from "../hooks/shared/useFetch";
import { Pencil1Icon, TrashIcon } from "@radix-ui/react-icons";
import AllQuestionPapersOfExaminee from "./AllQuestionPapersOfExaminee";

function AllQuestionPaperForExamineer() {
  const { data, isLoading, isSuccess, refetch } = useFetchQuery(
    "/api/v1/questionPaper/getAllQuestionPapersForExaminer"
  );
   const exams = data?.data || [];

  if (isLoading) {
    return <p>Loading...</p>;
  }
  return (
    <div className="overflow-x-auto shadow-xl rounded-lg border border-gray-200">
       <table className="min-w-full text-sm text-left text-gray-500">
        <thead className="bg-gray-50 text-xs text-gray-700 uppercase">
          <tr>
            <th className="px-6 py-3">Subject</th>
            <th className="px-6 py-3">Duration</th>
            <th className="px-6 py-3 ">ExaminneeId</th>
            <th className="px-6 py-3">Id</th>
            <th className="px-6 py-3 ">TotalMarks</th>
            <th className="px-6 py-3 ">Action</th>
          </tr>
        </thead>
        <tbody>
          {exams.map((exam) => (
            <tr key={exam.id} className="border-b">
              <td className="px-6 py-4">{exam.subject}</td>
              <td className="px-6 py-4">{exam.duration}</td>
              <td className="px-6 py-4">{exam.examineeId}</td>
              <td className="px-6 py-4">{exam.id}</td>
              <td className="px-6 py-4">{exam.totalMarks}</td>
              <td className="px-6 py-4 text-center">
                <button className="text-blue-500 hover:text-blue-700 mx-2">
                  <Pencil1Icon className="h-5 w-5" />
                </button>
                <button className="text-red-500 hover:text-red-700 mx-2">
                  <TrashIcon className="h-5 w-5" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table> 
      
    </div>
  );
}

export default AllQuestionPaperForExamineer;
