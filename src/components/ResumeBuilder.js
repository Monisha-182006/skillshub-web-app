import { useState } from "react";
import jsPDF from "jspdf";
import "./ResumeBuilder.css";

function ResumeBuilder() {
const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [phone, setPhone] = useState("");
const [skill, setSkill] = useState("");
const [education, setEducation] = useState("");

const downloadPDF = () => {
const doc = new jsPDF();

doc.setFontSize(20);
doc.text("Resume", 20, 20);

doc.setFontSize(12);
doc.text(`Name: ${name}`, 20, 40);
doc.text(`Email: ${email}`, 20, 50);
doc.text(`Phone: ${phone}`, 20, 60);
doc.text(`Skill: ${skill}`, 20, 70);
doc.text(`Education: ${education}`, 20, 80);

doc.save("Resume.pdf");

};

return (
<div className="resume-container">
<h1>Resume Builder</h1>

  <input
    type="text"
    placeholder="Enter Name"
    value={name}
    onChange={(e) => setName(e.target.value)}
  />

  <input
    type="email"
    placeholder="Enter Email"
    value={email}
    onChange={(e) => setEmail(e.target.value)}
  />

  <input
    type="text"
    placeholder="Enter Phone Number"
    value={phone}
    onChange={(e) => setPhone(e.target.value)}
  />

  <input
    type="text"
    placeholder="Enter Skills"
    value={skill}
    onChange={(e) => setSkill(e.target.value)}
  />

  <textarea
    placeholder="Enter Education Details"
    value={education}
    onChange={(e) => setEducation(e.target.value)}
  />

  <button onClick={downloadPDF}>
    Download Resume PDF
  </button>

  <div className="resume-preview">
    <h2>Resume Preview</h2>

    <p><strong>Name:</strong> {name}</p>
    <p><strong>Email:</strong> {email}</p>
    <p><strong>Phone:</strong> {phone}</p>
    <p><strong>Skills:</strong> {skill}</p>
    <p><strong>Education:</strong> {education}</p>
  </div>
</div>

);
}

export default ResumeBuilder;