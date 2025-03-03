import { useNavigate } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import { Button, Input } from "@heroui/react";
import CommonWrapper from "../components/CommonWrapper";
import toast from "react-hot-toast";
import useUpdateMutate from "../hooks/shared/useUpdateMutate";

const UpdateUser = () => {
  const navigate = useNavigate();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onUpdateSuccess = () => {
    toast.success("Updated successfully", { position: "top-center" });
    navigate("/users");
  };

  const { isPending, mutate } = useUpdateMutate(
    "/api/v1/user/updateUser",
    onUpdateSuccess
  );

  const onSubmit = async (data) => {
    // Remove empty fields
    const filteredData = Object.fromEntries(
      Object.entries(data).filter(([_, value]) => value.trim() !== "")
    );
    mutate(filteredData);
  };

  return (
    <div className="flex justify-center">
      <div className="w-1/2">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="text-center flex flex-col gap-5 mt-8 "
        >
          <Controller
            name="firstName"
            control={control}
            defaultValue=""
            // rules={{ required: "First Name is required" }}
            render={({ field }) => (
              <div>
                <Input
                  {...field}
                  type="text"
                  isInvalid={errors.name ? true : false}
                  classNames={{
                    errorMessage: "text-left",
                  }}
                  errorMessage={errors.name && errors.name.message}
                  label="First Name"
                />
              </div>
            )}
          />
          <Controller
            name="lastName"
            control={control}
            defaultValue=""
            // rules={{ required: "Last Name is required" }}
            render={({ field }) => (
              <div>
                <Input
                  {...field}
                  type="text"
                  isInvalid={errors.email ? true : false}
                  classNames={{
                    errorMessage: "text-left",
                  }}
                  errorMessage={errors.email && errors.email.message}
                  label="Last Name"
                />
              </div>
            )}
          />
          <Button
            disabled={isPending}
            isLoading={isPending}
            color="primary"
            className="w-full  rounded-lg  font-bold   "
            type="submit"
          >
            Update
          </Button>
        </form>
      </div>
    </div>
  );
};

export default UpdateUser;
