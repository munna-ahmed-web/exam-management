import useFetchQuery from "../hooks/shared/useFetch";

function SingleQuestionPaperForExamineer(){
  const{data,isLoading,isSuccess,refetch} = useFetchQuery("/api/v1/questionPaper/getSingleQuestionPaper/QUE00")
  console.log("this is the data",data)
  if(isLoading){
    return <p>loading.......</p>
  }
  
    return(
        <div>working succesfully</div>
    )
}

export default SingleQuestionPaperForExamineer;