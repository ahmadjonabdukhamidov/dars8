import React from "react";
import { useState, useRef } from "react";
import { v4 as uuidv4 } from "uuid";
// const formEl = useRef()

function Form({ addArticle }) {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [data, setData] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addArticle({ id: uuidv4(), title, author, data });

    setTitle("");
    setAuthor("");
    setData("");
  };

  return (
    <form onSubmit={handleSubmit} className="formEl">
      <div className="form-control">
        <label className="form-control_lab" htmlFor="title">
          Title:
        </label>
        <input
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          id="title"
          placeholder="Article title"
          value={title}
        />
      </div>

      <div className="form-control">
        <label className="form-control_lab" htmlFor="title">
          Author:
        </label>
        <input
          onChange={(e) => setAuthor(e.target.value)}
          type="text"
          id="title"
          placeholder="Article author"
          value={author}
        />
      </div>

      <div className="form-control">
        <label className="form-control_lab" htmlFor="date">
          Date:
        </label>
        <input
          onChange={(e) => setData(e.target.value)}
          type="date"
          id="date"
          value={data}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
