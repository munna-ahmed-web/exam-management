export default function DataNotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen  text-gray-700">
      <div className="text-center p-6 bg-gray-100 shadow-lg rounded-lg">
        <div className="text-6xl text-gray-500 mb-4">🔍</div>
        <h1 className="text-2xl font-semibold">Data Not Found</h1>
        <p className="text-gray-500 mt-2">
          We couldn't find the data you're looking for.
        </p>
        <button
          onClick={() => window.location.reload()}
          className="mt-4 px-6 py-2 bg-success text-white rounded-lg hover:bg-success-700 transition"
        >
          Refresh Page
        </button>
      </div>
    </div>
  );
}
