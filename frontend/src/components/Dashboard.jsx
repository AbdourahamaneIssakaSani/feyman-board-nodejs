import React, { useEffect, useState } from "react";
import { Outlet, Link } from "react-router-dom";

const Dashboard = () => {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    (async () => {
      const res = await fetch(`/api/v1/topics`);
      console.log("RESPOMSEEEEEEEEEEEEEEEEEEEE");
      console.log(res);
      const data = await res.json();
      //   console.log(data);
      setTopics(res);
    })();
  }, []);
  return (
    <main className="container m-5 d-column align-items-center justify-content-center">
      <h2 className="col">DASHBOARD</h2>

      <ul className="list-group list-group-flush">
        <Link
          to="/add-topic"
          className="list-group-item list-group-item-action active"
          aria-current="true"
        >
          ADD TOPIC
        </Link>
        <p className="m-2 p-2">TOPIC LIST:</p>
        {topics && topics.length > 0 ? (
          topics.map((topic) => (
            <li className="list-group-item">{topic.title} : 10% </li>
          ))
        ) : (
          <p>no topics, click add button</p>
        )}
      </ul>
    </main>
  );
};
export default Dashboard;
