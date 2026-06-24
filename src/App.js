import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Login from "./components/Login";
import Courses from "./components/Courses";
import CareerGuide from "./components/CareerGuide";
import ResumeBuilder from "./components/ResumeBuilder";
import Portfolio from "./components/Portfolio";
import JobBoard from "./components/JobBoard";
import Certificates from "./components/Certificates";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/careerguide" element={<CareerGuide />} />
        <Route path="/resume" element={<ResumeBuilder />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/jobs" element={<JobBoard />} />
        <Route path="/certificates" element={<Certificates />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;