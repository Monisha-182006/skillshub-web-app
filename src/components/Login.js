import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./Login.css";

function Login() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = async () => {
    const response = await fetch("https://skillshub-backend-4yzz.onrender.com/api/login/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    const data = await response.json();

    if (response.ok) {

  localStorage.setItem("isLoggedIn", "true");

  localStorage.setItem("user", data.user);
  localStorage.setItem("email", data.email);
  localStorage.setItem("mobile", data.mobile);

  alert("Login Successful");

  navigate("/home");

} else {
  alert(data.message);
}
  };

  return (
    <div className="login-container">
      <h1>SkillsHub Login</h1>

      <input
        type="email"
        name="email"
        placeholder="Email"
        onChange={handleChange}
      />

      <input
        type="password"
        name="password"
        placeholder="Password"
        onChange={handleChange}
      />

      <button onClick={handleLogin}>Login</button>

      <p>
        Don't have an account?{" "}
        <Link to="/register">Register</Link>
      </p>
    </div>
  );
}

export default Login;