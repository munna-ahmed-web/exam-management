import { useParams } from "react-router-dom";
import useFetchQuery from "../hooks/shared/useFetch";
const UserDetails = () => {
  const { id } = useParams();

  const { data, isLoading, isSuccess, refetch } = useFetchQuery(
    `/api/v1/user/userProfile/${id}`
  );

  return (
    <div>
      User Details Page
      <h1>id-- {id}</h1>
    </div>
  );
};

export default UserDetails;
