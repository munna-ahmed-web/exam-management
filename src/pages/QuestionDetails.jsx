import { useState, useEffect } from "react";
import useFetchQuery from "../hooks/shared/useFetch";

const QuestionDetails = () => {
  const [quizStarted, setQuizStarted] = useState(false);
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(60); 

  const { data, isLoading, isSuccess, isError, error } = useFetchQuery(
    "/api/v1/questionPaper/getSingleQuestionPaper/QUE00"
  );
console.log("fatch data by eitty",data);

  useEffect(() => {
    if (data?.data?.duration) {
      setTimeLeft(data.data.duration); 
    }
  }, [data]); 

  useEffect(() => {
    if (quizStarted && timeLeft > 0 && !submitted) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    }
    if (timeLeft === 0) {
      setSubmitted(true);
    }
  }, [quizStarted, timeLeft, submitted]);

  const handleStartQuiz = () => {
    setQuizStarted(true);
  };

  const handleOptionChange = (questionId, option) => {
    setAnswers({ ...answers, [questionId]: option });
  };

  const handleSubmit = () => {
    setSubmitted(true);
  };

  const calculateScore = () => {
    let score = 0;

    const questions = data?.data?.MCQSet || [];

    questions.forEach((q) => {
      if (answers[q.mcqId] === q.options[q.correctAns - 1]) {
        score++;
      }
    });
    return score;
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Error: {error.message}</p>;
  }

  const questions = data?.data?.MCQSet || [];

  return (
    <div>
      <div className="flex items-center justify-center p-4">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
          <h1 className="text-2xl font-bold text-center mb-6">{data.data.subject}</h1>
          <div className="mb-6 text-center">
            <p className="font-semibold">Total Marks: {data.data.totalMarks}</p>
            <p className="font-semibold">Total Time: {data.data.duration}s</p>
          </div>
          {!quizStarted ? (
            <div className="text-center">
              <button
                onClick={handleStartQuiz}
                className="bg-green-600 text-white px-6 py-2 rounded-lg transition duration-300"
              >
                Start Quiz
              </button>
            </div>
          ) : (
            <>
            
              {!submitted ? (
                <>
                  <div className="text-center text-red-600 font-bold mb-4">
                    Time Left: {timeLeft} seconds
                  </div>
                  {questions.map((q) => (
                    <div key={q.mcqId} className="mb-6">
                      <p className="font-semibold mb-2">{q.question}</p>
                      <div className="space-y-2">
                        {q.options.map((option, index) => (
                          <label key={index} className="flex items-center space-x-2">
                            <input
                              type="radio"
                              name={`question-${q.mcqId}`}
                              value={option}
                              onChange={() => handleOptionChange(q.mcqId, option)}
                              className="h-4 w-4 rounded-full border-2 border-gray-500 checked:bg-green-600 checked:border-green-600 focus:ring-green-600"
                            />
                            <span>{option}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                  ))}
                  <button
                    onClick={handleSubmit}
                    className="w-full bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition duration-300"
                  >
                    Submit
                  </button>
                </>
              ) : (
                <div className="text-center">
                  <h2 className="text-xl font-bold mb-4 ">Quiz Results</h2>
                  <p className="text-lg mb-6">
                    You scored {calculateScore()} out of {questions.length}
                  </p>
                  <div className="text-left">
                    {questions.map((q) => (
                      <div key={q.mcqId} className="mb-4">
                        <p className="font-semibold">{q.question}</p>
                        <p className="text-sm">
                          Your answer:{" "}
                          <span
                            className={
                              answers[q.mcqId] === q.correctAns
                                ? "text-green-600"
                                : "text-red-600"
                            }
                          >
                            {answers[q.mcqId] || "Not answered"}
                          </span>
                        </p>
                        <p className="text-sm">
                          Correct answer:{" "}
                          <span className="text-green-600">{q.options[q.correctAns - 1]}</span>
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default QuestionDetails;
