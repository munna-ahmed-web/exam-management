import React, { useState } from "react";
import usePostMutate from "../hooks/shared/usePostMutate";

const CreateCandidate = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { mutate, isPending } = usePostMutate(
    "/api/v1/user/createCandidate", 
    (data) => {
      console.log("Candidate created successfully:", data);
      alert("Candidate created successfully!");
    },
    (error) => {
      console.log("Error creating canditate:", error);
      alert("Error creating Candidate.");
    }
  );

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      firstName,
      lastName,
      email,
      password,
    };

    mutate(formData);
  };

  return (
    <div className="flex justify-center items-center p-6">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-6">Create Candidate</h1>
        
        <form onSubmit={handleSubmit}>
      
          <div className="mb-4">
            <label htmlFor="firstName" className="block text-sm font-semibold mb-2">
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              value={firstName}
              onChange={(e) => {
                setFirstName(e.target.value);
                console.log("First Name:", e.target.value); 
              }}
              className="w-full px-4 py-2 border rounded-lg"
              required
            />
          </div>

        
          <div className="mb-4">
            <label htmlFor="lastName" className="block text-sm font-semibold mb-2">
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              value={lastName}
              onChange={(e) => {
                setLastName(e.target.value);
                console.log("Last Name:", e.target.value); 
              }}
              className="w-full px-4 py-2 border rounded-lg"
              required
            />
          </div>

         
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-semibold mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                console.log("Email:", e.target.value); 
              }}
              className="w-full px-4 py-2 border rounded-lg"
              required
            />
          </div>

      
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-semibold mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                console.log("Password:", e.target.value); 
              }}
              className="w-full px-4 py-2 border rounded-lg"
              required
            />
          </div>

         
          <div className="text-center">
            <button
              type="submit"
              className="w-full bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition duration-300"
              disabled={isPending}
            >
              {isPending ? "Creating..." : "Create candidate"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateCandidate;
