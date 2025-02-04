import React, { useEffect, useState } from "react";
import { Pencil1Icon, TrashIcon } from "@radix-ui/react-icons";
import useFetchQuery from "../hooks/shared/useFetch";

function AllQuestionPaperForExamineer() {
  const { data, isLoading, isSuccess, refetch } = useFetchQuery(
    "/api/v1/questionPaper/allQuestionPapersOfExaminee"
  );

  console.log("printed by munna", data);

  if (isLoading) {
    return <p>Loading...</p>;
  }
  return (
    <div className="overflow-x-auto shadow-xl rounded-lg border border-gray-200">
      {/* <table className="min-w-full text-sm text-left text-gray-500">
        <thead className="bg-gray-50 text-xs text-gray-700 uppercase">
          <tr>
            <th className="px-6 py-3">Name</th>
            <br />
            <th className="px-6 py-3">Email</th>
            <th className="px-6 py-3 text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user._id} className="border-b">
              <td className="px-6 py-4">{user.name}</td>
              <td className="px-6 py-4">{user.age}</td>
              <td className="px-6 py-4">{user.email}</td>
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
      </table> */}
      <h1>Data fetched successfully</h1>
    </div>
  );
}

export default AllQuestionPaperForExamineer;
