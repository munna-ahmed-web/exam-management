import React, { useState } from "react";
import axios from "axios";
import { useMutation } from "@tanstack/react-query";

function CreateQuestionPaper() {
  const [subject, setSubject] = useState("");
  const [duration, setDuration] = useState("");
  const [examineeId, setExamineeId] = useState("");
  const [totalMarks, setTotalMarks] = useState("");
  const [questions, setQuestions] = useState([
    {
      question: "",
      options: ["", "", "", ""],
      correctAns: 1,
      mark: 10,
    },
  ]);

  // Handle input changes
  const handleChange = (e, index, field) => {
    const updatedQuestions = [...questions];
    if (field === "options") {
      updatedQuestions[index][field][e.target.name] = e.target.value;
    } else {
      updatedQuestions[index][field] = e.target.value;
    }
    setQuestions(updatedQuestions);
  };

  // Add more questions to the set
  const addQuestion = () => {
    setQuestions([
      ...questions,
      {
        question: "",
        options: ["", "", "", ""],
        correctAns: 1,
        mark: 10,
      },
    ]);
  };

  // Remove a question
  const removeQuestion = (index) => {
    const updatedQuestions = questions.filter((_, i) => i !== index);
    setQuestions(updatedQuestions);
  };

  // Submit the form to create the question paper
  const handleSubmit = async (e) => {
    console.log(subject,"subject")
    e.preventDefault();
    
    const data = {
      subject,
      duration: parseInt(duration),
      examineeId,
      totalMarks: parseInt(totalMarks),
      MCQSet: questions,
    };

    const mutation = useMutation(
        (newQuestionData) => axios.post('/api/v1/quiz/createQuestion', newQuestionData), // API endpoint to save the question
        {
          onSuccess: (data) => {
            // Handle success (e.g., show a success message, clear the form)
            console.log('Quiz Question Created:', data);
          },
          onError: (error) => {
            // Handle error (e.g., show error message)
            console.error('Error creating quiz question:', error);
          },
        }
      );
    }

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4 text-center">Create Question Paper</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
            Subject
          </label>
          <input
            type="text"
            id="subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="duration" className="block text-sm font-medium text-gray-700">
            Duration (in minutes)
          </label>
          <input
            type="number"
            id="duration"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="examineeId" className="block text-sm font-medium text-gray-700">
            Examinee ID
          </label>
          <input
            type="text"
            id="examineeId"
            value={`EXA${examineeId}`}
            onChange={(e) => setExamineeId(e.target.value)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="totalMarks" className="block text-sm font-medium text-gray-700">
            Total Marks
          </label>
          <input
            type="number"
            id="totalMarks"
            value={totalMarks}
            onChange={(e) => setTotalMarks(e.target.value)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>

        <div className="mb-4">
          <h3 className="text-xl font-medium">MCQ Questions</h3>
          {questions.map((question, index) => (
            <div key={index} className="mb-4 p-4 border border-gray-200 rounded-lg">
              <div className="mb-2">
                <label htmlFor={`question-${index}`} className="block text-sm font-medium text-gray-700">
                  Question {index + 1}
                </label>
                <input
                  type="text"
                  id={`question-${index}`}
                  value={question.question}
                  onChange={(e) => handleChange(e, index, "question")}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                  required
                />
              </div>

              <div className="mb-2">
                <label className="block text-sm font-medium text-gray-700">Options</label>
                {question.options.map((option, optionIndex) => (
                  <div key={optionIndex} className="flex items-center space-x-2 mb-2">
                    <input
                      type="text"
                      name={optionIndex}
                      value={option}
                      onChange={(e) => handleChange(e, index, "options")}
                      className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                      placeholder={`Option ${optionIndex + 1}`}
                    />
                  </div>
                ))}
              </div>

              <div className="mb-2">
                <label htmlFor={`correctAns-${index}`} className="block text-sm font-medium text-gray-700">
                  Correct Answer (Option Number)
                </label>
                <input
                  type="number"
                  id={`correctAns-${index}`}
                  value={question.correctAns}
                  onChange={(e) => handleChange(e, index, "correctAns")}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                  min="1"
                  max="4"
                  required
                />
              </div>

              <div className="mb-2">
                <label htmlFor={`marks-${index}`} className="block text-sm font-medium text-gray-700">
                  Marks for this Question
                </label>
                <input
                  type="number"
                  id={`marks-${index}`}
                  value={question.mark}
                  onChange={(e) => handleChange(e, index, "mark")}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                  required
                />
              </div>

              <button
                type="button"
                onClick={() => removeQuestion(index)}
                className="text-red-500 hover:text-red-700"
              >
                Remove Question
              </button>
            </div>
          ))}
        </div>

        <button
          type="button"
          onClick={addQuestion}
          className="bg-green-500 text-white p-2 rounded-md"
        >
          Add Question
        </button>

        <div className="mt-4">
          <button
            type="submit"
            className="bg-blue-500 text-white p-2 rounded-md"
          >
            Create Question Paper
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreateQuestionPaper;
