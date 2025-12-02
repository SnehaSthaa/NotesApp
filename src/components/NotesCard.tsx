import type { Note } from "../models/Note";

interface NotesCardProps {
  note: Note;
  handleDelete: (id: string) => void;
}

const NotesCard = ({ note, handleDelete }: NotesCardProps) => {
  return (
    <div
      className="card"
      style={{
        backgroundColor: note.color,
        width: "70%",
        marginLeft: "60px",
        marginBottom: "20px",
      }}
    >
      <div className="card-body">
        <h5 className="card-title">{note.title}</h5>
        <p className="card-text">{note.text}</p>
        <p className="card-text">{note.date}</p>
        <button
          onClick={() => handleDelete(note.id)}
          className="btn btn-danger"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default NotesCard;
