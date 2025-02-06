import CommonWrapper from "../components/CommonWrapper";
import { Link, Button } from "@heroui/react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardTitle,
} from "../components/ui/card";
import { Pagination } from "@heroui/react";
import useFetchQuery from "../hooks/shared/useFetch";
import DataNotFound from "../components/shared/DataNotFound";
import LoadingSpinner from "../components/shared/LoadingSpinner";
import { useState } from "react";

const Home = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemPerpage, setItemPerpage] = useState(5);
  const [totalCount, setTotalCount] = useState(63);

  const { data, isLoading, isSuccess, refetch } = useFetchQuery(
    "/api/v1/questionPaper/getAllQuestionPapersForCandidate",
    { page: currentPage, limit: itemPerpage }
  );
  console.log("this is from eitty", data);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  const getPage = (data) => {
    console.log(data);
    setCurrentPage(data);
  };
  return (
    <>
      {isSuccess && data?.data?.length > 0 ? (
        <CommonWrapper className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
          {data.data.map((item) => (
            <Card
              key={item.id}
              className="hover:shadow-lg md:hover:scale-105 hover:shadow-primary/50 transition-all duration-300 flex flex-col"
            >
              <CardTitle>
                <h2 className="p-6">{item.subject}</h2>
              </CardTitle>

              <CardDescription>
                <p className="px-6 text-lg flex-grow">
                  Study the subject with essential question papers to excel in
                  exams.
                </p>
              </CardDescription>

              <CardContent className="flex gap-2 pt-6 flex-shrink-0">
                <p>Marks: {item.totalMarks} |</p>
                <p> Time: {item.duration} min</p>
              </CardContent>

              <CardFooter className="flex justify-center">
                <Button
                  showAnchorIcon
                  as={Link}
                  color="success"
                  href={`/question/${item.id}`}
                  variant="solid"
                >
                  See More
                </Button>
              </CardFooter>
            </Card>
          ))}
        </CommonWrapper>
      ) : (
        <DataNotFound />
      )}
      {data?.data?.length > 0 && (
        <CommonWrapper className="flex justify-center mt-6">
          <Pagination
            page={currentPage}
            total={Math.ceil(totalCount / itemPerpage)}
            renderItem={itemPerpage}
            onChange={getPage}
            color="primary"
          />
        </CommonWrapper>
      )}
    </>
  );
};

export default Home;
