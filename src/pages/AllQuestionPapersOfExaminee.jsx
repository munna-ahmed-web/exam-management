import React, { useEffect, useState } from "react";
import useFetchQuery from "../hooks/shared/useFetch";
import { Button, Tooltip } from "@heroui/react";
import { EyeIcon, TrashIcon } from "lucide-react";
import { Pencil1Icon } from "@radix-ui/react-icons";
import { useNavigate } from "react-router-dom";
import useDeleteMutate from "../hooks/shared/useDeleteMutate";
import Cookies from "js-cookie";

function AllQuestionPaperForExamineer() {
  const [exams,setExams] = useState([])
  const { data, isLoading, isSuccess, isError, error, refetch } = useFetchQuery(
    "/api/v1/questionPaper/getAllQuestionPapersForExaminer"
  );
  const navigate = useNavigate();

  const examinerId = Cookies.get('userId')
  // Check for loading or error states
  
  if (isError) {
    return <p>Error: {error.message}</p>;
  }

 useEffect(() => {
     if (data?.data) {
       setExams(data?.data);
     }
   }, [data]);
   
  console.log(exams)
  if (isLoading) {
    return <p>Loading...</p>;
  }

  const onSuccess = () =>{
    console.log("succesfully deleted the question")
  }

  // const {mutate,isPending} = useDeleteMutate(`/api/v1/questionPaper/removeMCQ?qid=QUE00&mcqId=QUE00MCQ4`,onSuccess)
  //const {mutate,isPending} = useDeleteMutate(`/api/v1/questionPaper/deleteQuestionPaper?qid=QUE03&examineeId=${examinerId}`,onSuccess)

  

  const handleClick = (action,id) =>{
    console.log("button clicked",action,id)
    switch(action){
      case 'DELETE':
        // const updateExams = exams.filter((exam)=>exam.id !== id);
        // setExams(updateExams);
        //mutate()



        break; 
        case "EDIT":
          // const examToEdit = exams.find((exam) => exam.id === id);
          // if (examToEdit) {
          //   setExams((prevExams) =>
          //     prevExams.map((exam) =>
          //       exam.id === id
          //         ? { ...exam, isEditing: true }
          //         : exam
          //     )
          //   );
          // }
          navigate(`/question/${id}/edit`)
          break;

         case "SAVE":
            const updatedData = exams.map((exam) =>
            exam.isEditing
            ? {
                ...exam,
                subject: exam.updatedSubject,
                duration: exam.updatedDuration,
                examineeId:exam.updatedExamineeId,
                id:exam.updatedId,
                totalMarks: exam.updatedTotalMarks,

                isEditing: false,
            }
            : exam
            );
            setExams(updatedData);
            break;
                    

        default:
          console.log("Invalid Action")
          break;
    }
  }
  const handleInputChange = (e, id) => {
    const { name, value } = e.target;
    setExams((prevExams) =>
      prevExams.map((exam) =>
        exam.id === id ? { ...exam, [name]: value } : exam
      )
    );
  };

  return (
    <div className="overflow-x-auto shadow-xl rounded-lg border border-gray-200">
      <table className="min-w-full text-sm text-left text-gray-500">
        <thead className="bg-gray-50 text-xs text-gray-700 uppercase">
          <tr>
            <th className="px-6 py-3">Subject</th>
            <th className="px-6 py-3">Duration</th>
            <th className="px-6 py-3">ExamineeId</th>
            <th className="px-6 py-3">Id</th>
            <th className="px-6 py-3">Total Marks</th>
            <th className="px-6 py-3">Action</th>
          </tr>
        </thead>
        <tbody>
          {exams.map((exam,index) => (
            <tr key={index} className="border-b">
              <td className="px-6 py-4">
                {exam.isEditing ? (
                  <input
                    type="text"
                    value={exam.updatedSubject || exam.subject}
                    name="updatedSubject"
                    onChange={(e) => handleInputChange(e, exam.id)}
                    className="p-2 border rounded-md"
                  />
                ) : (
                  exam.subject
                )}
              </td>
              <td className="px-6 py-4">
                {exam.isEditing ? (
                  <input
                    type="number"
                    value={exam.updatedDuration || exam.duration}
                    name="updatedDuration"
                    onChange={(e) => handleInputChange(e, exam.id)}
                    className="p-2 border rounded-md"
                  />
                ) : (
                  exam.duration
                )}
              </td>
              
              <td className="px-6 py-4">
                {exam.isEditing ? (
                  <input
                    type="text"
                    value={exam.updatedExamineeId || exam.examineeId}
                    name="updatedExamineeId"
                    onChange={(e) => handleInputChange(e, exam.id)}
                    className="p-2 border rounded-md"
                  />
                ) : (
                  exam.examineeId
                )}
              </td>
              <td className="px-6 py-4">
                {exam.isEditing ? (
                  <input
                    type="text"
                    value={exam.updatedId || exam.id}
                    name="updatedId"
                    onChange={(e) => handleInputChange(e, exam.id)}
                    className="p-2 border rounded-md"
                  />
                ) : (
                  exam.id
                )}
              </td>
              <td className="px-6 py-4">
                {exam.isEditing ? (
                  <input
                    type="number"
                    value={exam.updatedtotalMarks || exam.totalMarks}
                    name="updatedTotalMarks"
                    onChange={(e) => handleInputChange(e, exam.id)}
                    className="p-2 border rounded-md"
                  />
                ) : (
                  exam.totalMarks
                )}
              </td>
              <td className="px-6 py-4 text-center">
                {exam.isEditing ? (
                  <button
                    onClick={() => handleClick("SAVE", exam.id)}
                    className="text-green-500 hover:text-green-700 mx-2"
                  >
                    Save
                  </button>
                ) : (
                  <button
                    onClick={() => handleClick("EDIT", exam.id)}
                    className="text-blue-500 hover:text-blue-700 mx-2"
                  >
                    <Pencil1Icon className="h-5 w-5" />
                  </button>
                )}
                <button
                  onClick={() => handleClick("DELETE", exam.id)}
                  className="text-red-500 hover:text-red-700 mx-2"
                >
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
