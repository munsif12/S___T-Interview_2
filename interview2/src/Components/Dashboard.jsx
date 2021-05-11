import React, { useEffect, useState } from "react";

function Dashboard() {
  const [allUserback, setallUserback] = useState([]);
  function fetchAllUsers() {
    fetch("http://localhost:8000/user/scores", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        res.json();
        console.log(res.status); //404
      })
      .then((data) => {
        console.log(data);
        setallUserback(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  useEffect(() => {
    fetchAllUsers();
  }, []);
  return (
    <div className="dashboard">
      <h1>THis is Dashboard</h1>
      {allUserback}
    </div>
  );
}

export default Dashboard;
