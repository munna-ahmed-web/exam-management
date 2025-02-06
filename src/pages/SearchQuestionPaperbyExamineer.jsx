import useFetchQuery from "../hooks/shared/useFetch";

function SearchQuestionPaperbyExamineer(){
  const{data,isLoading,isSuccess,refetch} = useFetchQuery("/api/v1/search/searchForExaminee?searchTerm=Math 2&limit=10&page=0")
  console.log('hello',data)
  if(isLoading){
    return <h3>Data loading !!! Please wait</h3>
  }
  return(
    <div><p>please give any subject name</p></div>
  )
}

export default SearchQuestionPaperbyExamineer