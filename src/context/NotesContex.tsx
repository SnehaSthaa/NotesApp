import { createContext } from "react";
import type { Note } from "../models/Note";

interface NotesContextprops {
  notes: Note[];
  setNotes: React.Dispatch<React.SetStateAction<Note[]>>;
}
export const NotesContext = createContext<NotesContextprops | null>(null);
