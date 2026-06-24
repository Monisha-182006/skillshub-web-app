import { Link } from "react-router-dom";
import "./Dashboard.css";

function Dashboard() {
  return (
    <div className="dashboard-container">
      <h1 className="dashboard-title">SkillsHub Dashboard</h1>

      <div className="dashboard-cards">

        <Link to="/courses" className="dashboard-link">
          <div className="dashboard-card">
            <h2>Courses</h2>
            <p>View Courses</p>
          </div>
        </Link>

        <Link to="/jobs" className="dashboard-link">
          <div className="dashboard-card">
            <h2>Jobs</h2>
            <p>View Jobs</p>
          </div>
        </Link>

        <Link to="/certificates" className="dashboard-link">
          <div className="dashboard-card">
            <h2>Certificates</h2>
            <p>View Certificates</p>
          </div>
        </Link>

        <Link to="/resume" className="dashboard-link">
          <div className="dashboard-card">
            <h2>Resume Builder</h2>
            <p>Create Resume</p>
          </div>
        </Link>

      </div>
    </div>
  );
}

export default Dashboard;