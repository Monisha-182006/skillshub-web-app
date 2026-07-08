import "./Courses.css";

function Courses() {
  const courses = [
    {
      title: "Python Programming",
      image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=600",
      description: "Learn Python from beginner to advanced with projects.",
      level: "Beginner",
      price: "Free",
      video: "https://www.youtube.com/watch?v=_uQrJ0TkZlc",
    },
    {
      title: "React JS",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=600",
      description: "Build modern websites using React.",
      level: "Intermediate",
      price: "Free",
      video: "https://www.youtube.com/watch?v=bMknfKXIFA8",
    },
    {
      title: "Java Programming",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600",
      description: "Master Java Programming.",
      level: "Intermediate",
      price: "Free",
      video: "https://www.youtube.com/watch?v=eIrMbAQSU34",
    },
    {
      title: "Django Framework",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600",
      description: "Learn Full Stack Development using Django.",
      level: "Advanced",
      price: "Free",
      video: "https://www.youtube.com/watch?v=F5mRW0jo-U4",
    },
    {
      title: "MySQL Database",
      image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=600",
      description: "Learn SQL and MySQL Database.",
      level: "Beginner",
      price: "Free",
      video: "https://www.youtube.com/watch?v=7S_tz1z_5bA",
    },
    {
      title: "HTML, CSS & JavaScript",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600",
      description: "Become a Front-End Developer.",
      level: "Beginner",
      price: "Free",
      video: "https://www.youtube.com/watch?v=G3e-cpL7ofc",
    },
  ];

  return (
    <div className="courses-container">
      <h1 className="courses-title">📚 Explore Our Courses</h1>

      <div className="course-list">
        {courses.map((course, index) => (
          <div className="course-card" key={index}>
            <img src={course.image} alt={course.title} />

            <div className="course-content">
              <h2>{course.title}</h2>

              <p>{course.description}</p>

              <span className="level">{course.level}</span>

              <div className="course-footer">
                <span className="price">{course.price}</span>

                <button
                  className="enroll-btn"
                  onClick={() =>
                    alert(`Successfully Enrolled in ${course.title} 🎉`)
                  }
                >
                  Enroll
                </button>
              </div>

              <button
                className="video-btn"
                onClick={() => window.open(course.video, "_blank")}
              >
                ▶ Watch Free Course
              </button>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Courses;