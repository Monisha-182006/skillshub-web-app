function Certificates() {
  const certificates = [
    {
      name: "Python Programming",
      issuer: "SkillsHub"
    },
    {
      name: "Java Development",
      issuer: "SkillsHub"
    },
    {
      name: "React JS",
      issuer: "SkillsHub"
    },
    {
      name: "Django Framework",
      issuer: "SkillsHub"
    }
  ];

  const downloadCertificate = (name) => {
    alert(`${name} Certificate Downloaded Successfully`);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Certificates</h1>

      {certificates.map((cert, index) => (
        <div
          key={index}
          style={{
            border: "1px solid #ccc",
            padding: "15px",
            margin: "10px",
            borderRadius: "10px"
          }}
        >
          <h3>{cert.name}</h3>
          <p>Issued By: {cert.issuer}</p>

          <button
            onClick={() => downloadCertificate(cert.name)}
          >
            Download Certificate
          </button>
        </div>
      ))}
    </div>
  );
}

export default Certificates;