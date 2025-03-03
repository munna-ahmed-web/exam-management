import React from "react";
import { useParams } from "react-router-dom";
import useFetchQuery from "../hooks/shared/useFetch";
import LoadingSpinner from "../components/shared/LoadingSpinner";
import { Badge, Card, CardBody, CardHeader } from "@heroui/react";

const QuestionDetailsForExamineer = () => {
  const { id } = useParams();

  const { data, isLoading, isSuccess, refetch } = useFetchQuery(
    `/api/v1/questionPaper/getSingleQuestionPaper/${id}`
  );
  //console.log(data)
  const user = data?.data?.MCQSet || {};
  console.log("ramjan2222", data?.data?.MCQSet);
  console.log("ramjan", data);
  console.log(user);
  if (isLoading) return <LoadingSpinner />;

  if (!user) {
    return <p className="text-red-500 font-semibold">User not found!</p>;
  }
  return (
    <div className="flex justify-center">
      <Card className="w-96 shadow-lg" radius="none">
        <CardHeader className="text-xl font-semibold text-center bg-gray-200">
          Question Details Page
        </CardHeader>
        <CardBody className="p-6 space-y-4">
          {/* Question Text */}
          {data?.data?.MCQSet.map((item, index) => (
            <div key={index} className="text-gray-700">
              <strong>{index + 1}.Question:</strong> {item.question}
              <ul>
                {item?.options.map((option, index) => (
                  <li>
                    {index + 1}.{option}
                  </li>
                ))}
              </ul>
              <div className="mt-4">
                <p className="text-green-600 font-semibold">
                  <strong>Correct Answer:</strong> {item.correctAns}
                </p>
              </div>
              <div className="mt-4">
                <p className="text-gray-700">
                  <strong>Marks:</strong> {item.mark}
                </p>
              </div>
            </div>
          ))}
        </CardBody>
      </Card>
    </div>
  );
};

export default QuestionDetailsForExamineer;
