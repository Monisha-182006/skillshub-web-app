import { useState } from "react";
import "./Portfolio.css";

function Portfolio() {
const [name, setName] = useState("");
const [skill, setSkill] = useState("");
const [github, setGithub] = useState("");
const [linkedin, setLinkedin] = useState("");
const [portfolio, setPortfolio] = useState("");

const generatePortfolio = () => {
setPortfolio(`
Name: ${name}

Skill: ${skill}

About Me:
I am a passionate ${skill} developer interested in building modern web applications.

Projects:
• SkillsHub Platform
• Resume Builder
• Portfolio Generator

GitHub:
${github}

LinkedIn:
${linkedin}
`);
};

return (
<div className="portfolio-container">
<h1>Portfolio Generator</h1>

  <input
    type="text"
    placeholder="Enter Name"
    value={name}
    onChange={(e) => setName(e.target.value)}
  />

  <input
    type="text"
    placeholder="Enter Skill"
    value={skill}
    onChange={(e) => setSkill(e.target.value)}
  />

  <input
    type="text"
    placeholder="GitHub Link"
    value={github}
    onChange={(e) => setGithub(e.target.value)}
  />

  <input
    type="text"
    placeholder="LinkedIn Link"
    value={linkedin}
    onChange={(e) => setLinkedin(e.target.value)}
  />

  <button onClick={generatePortfolio}>
    Generate Portfolio
  </button>

  <div className="portfolio-preview">
    <h2>Portfolio Preview</h2>

    <textarea
      rows="15"
      value={portfolio}
      readOnly
    />
  </div>
</div>

);
}

export default Portfolio;