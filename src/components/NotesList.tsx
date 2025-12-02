import React from "react";

import NotesCard from "./NotesCard";
import { NotesContext } from "../context/NotesContex";
import WlecomeMessage from "./WlecomeMessage";

const NotesList = () => {
  const context = React.useContext(NotesContext);
  if (!context) return null;
  const { notes, setNotes } = context;
  const handleDelete = (id: string) => {
    setNotes(notes.filter((note) => note.id != id));
  };
  return (
    <>
      <h1 style={{ marginLeft: "60px", padding: "10px" }}>Notes</h1>
      <WlecomeMessage notes={notes} />
      {notes.map((item) => {
        return (
          <NotesCard key={item.id} handleDelete={handleDelete} note={item} />
        );
      })}
    </>
  );
};

export default NotesList;
