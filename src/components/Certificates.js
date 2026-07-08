import jsPDF from "jspdf";
import "./Certificates.css";

function Certificates() {

  const downloadCertificate = () => {
    const doc = new jsPDF("landscape");

    // Border
    doc.setDrawColor(0, 51, 153);
    doc.setLineWidth(2);
    doc.rect(10, 10, 277, 190);

    // Title
    doc.setFont("times", "bold");
    doc.setFontSize(28);
    doc.text("CERTIFICATE OF COMPLETION", 148, 35, { align: "center" });

    // Subtitle
    doc.setFontSize(16);
    doc.setFont("times", "normal");
    doc.text("This Certificate is Proudly Presented To", 148, 55, {
      align: "center",
    });

    // Name
    const username = localStorage.getItem("user") || "Student";

    doc.setFontSize(24);
    doc.setFont("times", "bolditalic");
    doc.text(username, 148, 75, { align: "center" });

    // Description
    doc.setFontSize(16);
    doc.setFont("times", "normal");
    doc.text(
      "For successfully completing the SkillsHub Learning Program",
      148,
      95,
      { align: "center" }
    );

    doc.text(
      "and demonstrating dedication towards skill development.",
      148,
      108,
      { align: "center" }
    );

    // Date
    const today = new Date().toLocaleDateString();

    doc.setFontSize(14);
    doc.text(`Date: ${today}`, 30, 170);

    // Signature
    doc.text("Authorized Signature", 220, 170);
    doc.line(205, 165, 270, 165);

    doc.save("SkillsHub_Certificate.pdf");
  };

  return (
  <div className="certificate-container">

    <div className="certificate-card">

      <h1>🏆 SkillsHub Certificates</h1>

      <p>Download your course completion certificate.</p>

      <button
        className="download-btn"
        onClick={downloadCertificate}
      >
        Download Certificate
      </button>

    </div>

  </div>
);
}

export default Certificates;