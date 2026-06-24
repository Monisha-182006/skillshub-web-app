import { useState } from "react";
import"./CareerGuide.css";

function CareerGuide() {
  const [skill, setSkill] = useState("");
  const [result, setResult] = useState("");

  const recommendCareer = () => {
    const userSkill = skill.toLowerCase();

    if (userSkill.includes("python")) {
      setResult("🐍 Recommended Career: Python Developer");
    } else if (userSkill.includes("react")) {
      setResult("⚛️ Recommended Career: Front-End Developer");
    } else if (userSkill.includes("java")) {
      setResult("☕ Recommended Career: Java Developer");
    } else if (userSkill.includes("django")) {
      setResult("🌐 Recommended Career: Full Stack Developer");
    } else {
      setResult("💼 Recommended Career: Software Developer");
    }
  };

  return (
    <div style={{ padding: "30px", textAlign: "center" }}>
      <div className="career-container"></div>
      <h1>AI Career Guide 🚀</h1>

      <input
        classname="career-input"
        type="text"
        placeholder="Enter Your Skill"
        value={skill}
        onChange={(e) => setSkill(e.target.value)}
        style={{
          padding: "10px",
          width: "300px",
          marginBottom: "20px"
        }}
      />

      <br />

      <button
        className="career-btn"
        onClick={recommendCareer}
        style={{
          padding: "10px 20px",
          cursor: "pointer"
        }}
      >
        Get Recommendation
      </button>
      <h2 className="career-result">{result}</h2>
      <h2 style={{ marginTop: "20px" }}>
        {result}
      </h2>
    </div>
  );
}

export default CareerGuide;