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
    </div>
  );
}

export default Home;