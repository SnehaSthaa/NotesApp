import React, { useContext, useRef, useState } from "react";

import { NotesContext } from "../context/NotesContex";
import { useNavigate } from "react-router";

const CreateNote = () => {
  const navigate = useNavigate();
  const [error, setError] = useState<string>("");
  const titleRef = useRef<HTMLInputElement | null>(null);
  const textRef = useRef<HTMLTextAreaElement | null>(null);
  const colorRef = useRef<HTMLInputElement | null>(null);
  const context = useContext(NotesContext);
  if (!context) return null;
  const { notes, setNotes } = context;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (titleRef.current?.value === "" || textRef.current?.value === "") {
      return setError("All fields are mandatory");
    }
    setError("");
    setNotes([
      ...notes,
      {
        id: new Date().toString(),
        title: titleRef.current!.value,
        text: textRef.current!.value,
        color: colorRef.current!.value,
        date: new Date().toString(),
      },
    ]);
    titleRef.current!.value = "";
    textRef.current!.value = "";
    colorRef.current!.value = "#dfdfdf";
    navigate("/");
  };
  return (
    <>
      <h3 style={{ marginLeft: "60px", padding: "20px" }}>
        Create a Notes here
      </h3>
      {error && (
        <div
          className="alert alert-danger "
          style={{ width: "70%", marginLeft: "60px" }}
          role="alert"
        >
          {error}
        </div>
      )}
      <form
        onSubmit={(e) => handleSubmit(e)}
        className="  w-50 border border-grey
         p-4 rounded-2"
        style={{ marginLeft: "60px" }}
      >
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            placeholder="Enter a title"
            type="text"
            className="form-control"
            id="title"
            ref={titleRef}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="text" className="form-label">
            Text
          </label>
          <textarea
            placeholder="Write something about it"
            className="form-control"
            id="text"
            ref={textRef}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="colorInput" className="form-label">
            Notes Color
          </label>
          <input
            type="color"
            defaultValue="#dfdfdf"
            className="form-control "
            style={{ width: "45px" }}
            id="colorInput"
            title="Choose
            Your
            color"
            ref={colorRef}
          />{" "}
        </div>

        <button type="submit" className="btn btn-success">
          Submit
        </button>
      </form>
    </>
  );
};

export default CreateNote;
