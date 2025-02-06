import { Spinner } from "@heroui/react";

const LoadingSpinner = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <Spinner color="success" label="Loading" labelColor="success" />
    </div>
  );
};

export default LoadingSpinner;
