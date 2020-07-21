import React from "react";
import useFetchJobs from "./useFetchJobs";
import { Container } from "react-bootstrap";

function App() {
  const { jobs, loading, error } = useFetchJobs();

  return <Container></Container>;
}

export default App;
