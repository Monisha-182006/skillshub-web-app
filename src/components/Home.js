import "./Home.css";
import { useEffect, useState } from "react";
import axios from "axios";

function Home() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/users/")
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="hero">
      <h1>Welcome to SkillsHub 🚀</h1>

      <p>
        Learn Skills, Build Resume, Create Portfolio
        and Get Your Dream Job.
      </p>

      <button>Get Started</button>

      <div style={{ marginTop: "30px" }}>
        <h2>Registered Users</h2>

        {users.map((user) => (
          <div key={user.id}>
            <h3>{user.name}</h3>
            <p>{user.email}</p>
            <p>{user.skill}</p>
            <hr />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;