import { Link } from "react-router-dom";
import "./Navbar.css";
function Navbar() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/courses">Courses</Link></li>
        <li><Link to="/resume">Resume Builder</Link></li>
        <li><Link to="/portfolio">Portfolio</Link></li>
        <li><Link to="/jobs">Jobs</Link></li>
        <li><Link to="/certificates">Certificates</Link></li>
        <li><Link to="/careerguide">CareerGuide</Link></li>
        <li><Link to="/dashboard">Dashboard</Link></li>
      </ul>
    </nav>
  );
}
export default Navbar; 