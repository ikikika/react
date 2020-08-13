import React from "react";
import { NewNoteInput } from "./NewNopteInput";

function App() {
  return (
    <>
      <NewNoteInput addNote={alert} />
      <hr />
      <ul></ul>
    </>
  );
}

export default App;
