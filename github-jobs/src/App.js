import React from "react";
import useFetchJobs from "./useFetchJobs";

function App() {
  const { jobs, loading, error } = useFetchJobs();

  return <h1>Hello world</h1>;
}

export default App;
