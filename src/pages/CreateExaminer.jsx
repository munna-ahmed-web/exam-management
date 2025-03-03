import usePostMutate from "../hooks/shared/usePostMutate";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";

const CreateExaminer = () => {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();

  const onSuccess = (data) => {
    toast.success("Examiner created successfully!", {
      position: "top-right",
    });
    navigate("/users");
  };

  const onError = (error) => {
    console.log(error);
    toast.error("Error creating Examiner.", { position: "top-right" });
  };

  const { mutate, isPending } = usePostMutate(
    "/api/v1/user/createExaminee",
    onSuccess,
    onError
  );

  const onSubmit = (data) => {
    mutate(data);
  };

  return (
    <div className="flex justify-center items-center p-6">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-6">Create Examiner</h1>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label
              htmlFor="firstName"
              className="block text-sm font-semibold mb-2"
            >
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              {...register("firstName")}
              className="w-full px-4 py-2 border rounded-lg"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="lastName"
              className="block text-sm font-semibold mb-2"
            >
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              {...register("lastName")}
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
              {...register("email")}
              className="w-full px-4 py-2 border rounded-lg"
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-semibold mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              {...register("password")}
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
              {isPending ? "Creating..." : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateExaminer;
