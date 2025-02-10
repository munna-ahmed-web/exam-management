import React from 'react'
import { useParams } from 'react-router-dom'
import useFetchQuery from '../hooks/shared/useFetch'
import LoadingSpinner from '../components/shared/LoadingSpinner'
import { Badge, Card, CardBody, CardHeader } from '@heroui/react'

const QuestionDetailsForExamineer = () => {
    const {id} = useParams()

    const {data,isLoading,isSuccess,refetch} = useFetchQuery(`/api/v1/questionPaper/getSingleQuestionPaper/${id}`);
    //console.log(data)
    const user = data?.data?.MCQSet || {};
    console.log("ramjan2222",data?.data?.MCQSet)
    console.log("ramjan",data)
    if (isLoading) return <LoadingSpinner />


    
    if (!user) {
        return <p className="text-red-500 font-semibold">User not found!</p>
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
                            <strong>Question:</strong> {item.question}
                            <span>{item?.options.map(option=><p>{option}</p>)}</span>
                        </div>
                    ))}





                    {/* Options */}
                    <div>
                        <p className="text-gray-700 font-semibold">Options:</p>
                        <ul className="space-y-2">
                            {user.options?.map((option, index) => (
                                <li key={index} className="p-2 border rounded-md bg-gray-100">
                                    {index + 1}. {option}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Correct Answer */}
                    <div className="mt-4">
                        <p className="text-green-600 font-semibold">
                            <strong>Correct Answer:</strong> {user.correctAns}
                        </p>
                    </div>

                    {/* Marks */}
                    <div className="mt-4">
                        <p className="text-gray-700">
                            <strong>Marks:</strong> {user.mark}
                        </p>
                    </div>

                    {/* Identifiers */}
                    
                </CardBody>
            </Card>
        </div>
    )
}

export default QuestionDetailsForExamineer