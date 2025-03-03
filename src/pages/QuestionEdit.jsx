import React, { useState } from "react";
import { useParams } from "react-router-dom";
import useUpdateMutateWithID from "../hooks/shared/useUpdateMutateWithID";
import useFetchQuery from "../hooks/shared/useFetch";
import { Pencil1Icon } from "@radix-ui/react-icons";
import usePostMutate from "../hooks/shared/usePostMutate";
import LoadingSpinner from "../components/shared/LoadingSpinner";
import useUpdateMutate from "../hooks/shared/useUpdateMutate";

const QuestionEdit = () => {
  const { id } = useParams();
  const { data, isSuccess, isLoading, refetch } = useFetchQuery(
    `/api/v1/questionPaper/getSingleQuestionPaper/${id}`
  );
  console.log(data);

  // State to store the currently editing question
  const [editData, setEditData] = useState(null);
  const [editedQuestion, setEditedQuestion] = useState("");
  const [editedOptions, setEditedOptions] = useState(["", "", "", ""]);
  const [editedCorrectAns, setEditedCorrectAns] = useState(1);
  const [editedMarks, setEditedMarks] = useState(10);

  const [mcqId, setMcqId] = useState(null);
  console.log("mcqId", mcqId);
  // usePostMutate hook to update the question in the database
  const { mutate, isPending } = useUpdateMutate(
    `/api/v1/questionPaper/addNewMCQ?qid=${mcqId}`, // Replace with your API endpoint for updating

    (response) => {
      console.log("Updated question:", response);
      alert("Question updated successfully");
      setEditData(null); // Close the editing form
    },
    (error) => {
      console.error("Error updating question:", error);
      alert("Failed to update question");
    }
  );

  // Handle the "Edit" button click
  const handleEdit = (question) => {
    setEditData(question.mcqId);
    setEditedQuestion(question.question);
    setEditedOptions([...question.options]);
    setEditedCorrectAns(question.correctAns);
    setEditedMarks(question.mark);
  };

  // Handle the form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedQuestionData = {
      mcqId: editData,
      question: editedQuestion,
      options: editedOptions,
      correctAns: editedCorrectAns,
      mark: editedMarks,
    };
    mutate(updatedQuestionData); // Call mutate to update the question
  };
  return (
    <div>
      <h2 className="text-xl font-semibold text-center mb-4">Question Table</h2>
      <table className="min-w-full table-auto border-collapse border border-gray-200">
        <thead>
          <tr>
            <th className="border border-gray-300 px-4 py-2 text-left">
              MCQ ID
            </th>
            <th className="border border-gray-300 px-4 py-2 text-left">
              Question
            </th>
            <th className="border border-gray-300 px-4 py-2 text-left">
              Options
            </th>
            <th className="border border-gray-300 px-4 py-2 text-left">
              Correct Answer
            </th>
            <th className="border border-gray-300 px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {data?.data?.MCQSet.map((item) => (
            <tr key={item.mcqId}>
              <td className="border border-gray-300 px-4 py-2">{item.mcqId}</td>
              <td className="border border-gray-300 px-4 py-2">
                {item.question}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {item.options.map((opt, idx) => (
                  <p key={idx}>
                    {idx + 1}. {opt}
                  </p>
                ))}
              </td>

              <td className="border border-gray-300 px-4 py-2">
                {item.options[item.correctAns - 1]}
              </td>

              <td className="border border-gray-300 px-4 py-2">
                <button
                  onClick={() => {
                    handleEdit(item);
                    setMcqId(item.mcqId);
                    console.log("item._id sadfkjsdhkjfhksajd", item.mcqId);
                  }}
                  className="bg-blue-500 text-white px-4 py-1 rounded mr-2"
                >
                  Edit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Edit form */}
      {editData && (
        <div className="mt-8 p-6 border border-gray-300 rounded shadow-lg">
          <h3 className="text-lg font-semibold">Edit Question</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block font-medium">Question</label>
              <input
                type="text"
                value={editedQuestion}
                onChange={(e) => setEditedQuestion(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded"
                required
              />
            </div>

            <div>
              <label className="block font-medium">Options</label>
              {editedOptions.map((opt, idx) => (
                <input
                  key={idx}
                  type="text"
                  value={opt}
                  onChange={(e) => {
                    const updatedOptions = [...editedOptions];
                    updatedOptions[idx] = e.target.value;
                    setEditedOptions(updatedOptions);
                  }}
                  className="w-full px-4 py-2 border border-gray-300 rounded mb-2"
                  placeholder={`Option ${idx + 1}`}
                  required
                />
              ))}
            </div>

            <div>
              <label className="block font-medium">Correct Answer</label>
              <select
                value={editedCorrectAns}
                onChange={(e) => setEditedCorrectAns(Number(e.target.value))}
                className="w-full px-4 py-2 border border-gray-300 rounded"
              >
                {editedOptions.map((opt, idx) => (
                  <option key={idx} value={idx + 1}>
                    {opt}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block font-medium">Marks</label>
              <input
                type="number"
                value={editedMarks}
                onChange={(e) => setEditedMarks(Number(e.target.value))}
                className="w-full px-4 py-2 border border-gray-300 rounded"
                required
              />
            </div>

            <button
              type="submit"
              className="bg-green-500 text-white px-6 py-2 rounded"
              disabled={isPending}
            >
              {isPending ? <LoadingSpinner /> : "Save Changes"}
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default QuestionEdit;
