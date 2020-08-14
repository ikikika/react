import React from "react";
import { NewNoteInput } from "./NewNopteInput";

import { useSelector, useDispatch } from "react-redux";
import { NotesState } from "./notesReducer";

function App() {
  const notes = useSelector<NotesState, NotesState["notes"]>(
    (state) => state.notes
  );

  const dispatch = useDispatch();

  const addNote = (note: string) => {
    console.log("app.tsx " + note);
    dispatch({ type: "ADD_NOTE", payload: note });
  };

  return (
    <>
      <NewNoteInput addNote={addNote} />
      <hr />
      <ul>
        {notes.map((note) => {
          return <li key={note}>{note}</li>;
        })}
      </ul>
    </>
  );
}

export default App;
