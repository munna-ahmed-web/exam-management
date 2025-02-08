import { useParams } from "react-router-dom";

const UpdateUser = () => {
  const { id } = useParams();
  return (
    <div>
      <h1>UpdateUser</h1>
      <h1>id ---- {id}</h1>
    </div>
  );
};

export default UpdateUser;
