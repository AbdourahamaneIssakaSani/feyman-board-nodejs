import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddTopic = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const handleSubmit = async (event) => {
    event.preventDefault();
    const owner = localStorage.getItem("username");
    const data = JSON.stringify({
      title: title,
      text: text,
      owner: owner,
    });
    try {
      await fetch("/api/v1/topics/create", {
        method: "POST",
        body: data,
        mode: "no-cors",
      });
    } catch (err) {
      throw new Error(err);
    }
    navigate("/dashboard");
  };
  return (
    <main className="container m-5 d-column align-items-center justify-content-center">
      <h2 className="col">ADD TOPIC</h2>
      <form className="col" onSubmit={handleSubmit}>
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">
            Title
          </label>
          <input
            type="text"
            class="form-control"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div class="mb-3">
          <label for="exampleFormControlTextarea1" class="form-label">
            Text
          </label>
          <textarea
            class="form-control"
            value={text}
            onChange={(e) => setText(e.target.value)}
            rows="3"
          ></textarea>
        </div>
        <div class="col-auto">
          <button type="submit" class="btn btn-primary mb-3">
            Submit
          </button>
        </div>
      </form>
    </main>
  );
};

export default AddTopic;
