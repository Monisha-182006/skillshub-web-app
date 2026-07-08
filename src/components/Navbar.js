import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const navigate = useNavigate();

  const username = localStorage.getItem("user") || "User";
  const firstLetter = username.charAt(0).toUpperCase();

  const logout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <nav className="navbar">
      <h2 className="logo">SkillsHub</h2>

      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/courses">Courses</Link></li>
        <li><Link to="/certificates">Certificates</Link></li>
        <li><Link to="/resume">Resume</Link></li>
        <li><Link to="/portfolio">Portfolio</Link></li>
        <li><Link to="/careerguide">CareerGuide</Link></li>
        <li><Link to="/jobs">Jobs</Link></li>
      </ul>

      <div className="profile-section">

  <Link
    to="/profile"
    style={{textDecoration:"none",color:"white"}}
  >

    <div className="profile-circle">
      {firstLetter}
    </div>

  </Link>

  <span>{username}</span>

  <button onClick={logout}>Logout</button>

</div>
    </nav>
  );
}

export default Navbar;