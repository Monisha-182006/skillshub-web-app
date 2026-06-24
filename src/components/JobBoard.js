function JobBoard() {
  const jobs = [
    {
      company: "TCS",
      role: "Python Developer",
      location: "Chennai"
    },
    {
      company: "Infosys",
      role: "React Developer",
      location: "Bangalore"
    },
    {
      company: "Wipro",
      role: "Full Stack Developer",
      location: "Hyderabad"
    }
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h1>Job Board</h1>

      {jobs.map((job, index) => (
        <div
          key={index}
          style={{
            border: "1px solid gray",
            margin: "10px",
            padding: "10px",
            borderRadius: "10px"
          }}
        >
          <h3>{job.company}</h3>
          <p>{job.role}</p>
          <p>{job.location}</p>

          <button>Apply Now</button>
        </div>
      ))}
    </div>
  );
}

export default JobBoard;