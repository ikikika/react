import React from "react";
import useFetchJobs from "./useFetchJobs";
import { Container } from "react-bootstrap";

function App() {
  const { jobs, loading, error } = useFetchJobs();
  console.log(jobs);
  return (
    <Container>
      {loading ? <h1>loading...</h1> : ""}
      <br />

      <br />
      <h1>{jobs.length}</h1>
    </Container>
  );
}

export default App;
