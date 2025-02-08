import { useParams } from "react-router-dom";
import useFetchQuery from "../hooks/shared/useFetch";
import { Card, CardBody, CardHeader, Spinner, Badge } from "@heroui/react";
import LoadingSpinner from "../components/shared/LoadingSpinner";

const UserDetails = () => {
  const { id } = useParams();
  const { data, isLoading, isSuccess, refetch } = useFetchQuery(
    `/api/v1/user/userProfile/${id}`
  );

  const user = data?.body || {};
  return (
    <div className="flex justify-center">
      {isLoading ? (
        // <Spinner size="lg" className="mt-5" />
        <LoadingSpinner />
      ) : user ? (
        <Card className="w-96 shadow-lg" radius="none">
          <CardHeader className="text-xl font-semibold text-center bg-gray-200">
            User Details
          </CardHeader>
          <CardBody className="p-6 space-y-4">
            <p className="text-gray-700">
              <strong>First Name:</strong> {user.firstName}
            </p>
            <p className="text-gray-700">
              <strong>Last Name:</strong> {user.lastName}
            </p>
            <p className="text-gray-700">
              <strong>Email:</strong> {user.email}
            </p>
            <p className="text-gray-700 flex items-center">
              <strong className="mr-1">Role:</strong>
              <Badge className="ml-2 bg-green-500 text-white px-2 py-1 rounded capitalize">
                {user.userType}
              </Badge>
            </p>
          </CardBody>
        </Card>
      ) : (
        <p className="text-red-500 font-semibold">User not found!</p>
      )}
    </div>
  );
};

export default UserDetails;
