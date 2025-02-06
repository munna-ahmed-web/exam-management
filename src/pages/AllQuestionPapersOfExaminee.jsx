import useFetchQuery from "../hooks/shared/useFetch"

function AllQuestionPapersOfExaminee(){

   const{data,isLoading,isSuccess,refetch} =useFetchQuery("/api/v1/questionPaper/allQuestionPapersOfExaminee")
   console.log("data is fetched",data)
   console.log(data)
   if(isLoading){
    return("data fetching please wait")
   }
    return(
        <div><h1>Hello world</h1></div>
    )
}

export default AllQuestionPapersOfExaminee