import { createContext, useState } from "react";
import type { Note } from "../models/Note";

interface NotesContextprops {
  notes: Note[];
  setNotes: React.Dispatch<React.SetStateAction<Note[]>>;
}
export const NotesContext = createContext<NotesContextprops | null>(null);

export const NotesProvider = ({ children }: { children: React.ReactNode }) => {
  const [notes, setNotes] = useState<Note[]>([]);
  return (
    <NotesContext.Provider value={{ notes, setNotes }}>
      {children}
    </NotesContext.Provider>
  );
};
