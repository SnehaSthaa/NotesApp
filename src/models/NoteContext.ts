import type { Note } from "./Note";

 export interface NotesContext {
  notes: Note[];
  setNotes: React.Dispatch<React.SetStateAction<Note[]>>;
}