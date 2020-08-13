import React, { ChangeEvent } from "react";

interface NewNoteInputProps {
  addNote(note: string): void;
}

export const NewNoteInput: React.FC<NewNoteInputProps> = ({ addNote }) => {
  const [note, setNote] = React.useState("");

  const updatNote = (event: ChangeEvent<HTMLInputElement>) => {
    setNote(event.target.value);
  };

  const onAddNoteClick = () => {
    addNote(note);
    setNote("");
  };

  return (
    <div>
      <input onChange={updatNote} type="text" name="note" placeholder="note" />
      <button onClick={onAddNoteClick}>Add note</button>
    </div>
  );
};
