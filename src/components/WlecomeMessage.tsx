import type { Note } from "../models/Note";

interface WelcomeProps {
  notes: Note[];
}

const WelcomeMessage = ({ notes }: WelcomeProps) => {
  return (
    <>
      {notes.length === 0 && (
        <p
          style={{
            marginLeft: "50px",
            fontSize: "1.5rem",
            color: "gray",
            padding: "20px",
          }}
        >
          No notes are available yet!
        </p>
      )}
    </>
  );
};

export default WelcomeMessage;
