import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../index.scss";

const Landing = () => {
  const [userName, setUserName] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    localStorage.setItem("username", userName);
    navigate("/dashboard");
  };

  useEffect(() => {
    const listener = (event) => {
      if (event.code === "Enter" || event.code === "NumpadEnter") {
        handleSubmit(); // run the funtion to submit when enter key is pressed
        event.preventDefault();
      }
    };
    document.addEventListener("keydown", listener);
    return () => {
      document.removeEventListener("keydown", listener);
    };
  }, []);

  return (
    <main className="container m-5 d-flex align-items-center justify-content-center">
      <h2 className="col">LANDING PAGE:</h2>
      <h3 className="col">Type your username to continue</h3>
      <form className="col" onSubmit={handleSubmit}>
        <div className="mb-3 row">
          <label className="col-sm-2 col-form-label me-3">Username</label>
          <div className="col-sm-10">
            <input
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              className="form-control"
            />
          </div>
        </div>
      </form>
    </main>
  );
};
export default Landing;
