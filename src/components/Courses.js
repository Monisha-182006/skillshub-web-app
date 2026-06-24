import "./Courses.css";

function Courses() {

  const openCourse = (url) => {
    window.open(url, "_blank");
  };

  return (
    <div className="courses-container">
      <h1> SkillsHub Courses</h1>

      <button
        className="course-btn"
        onClick={() =>
          openCourse("https://www.youtube.com/watch?v=_uQrJ0TkZlc")
        }
      >
        Python Course
      </button>

      <button
        className="course-btn"
        onClick={() =>
          openCourse("https://www.youtube.com/watch?v=eIrMbAQSU34")
        }
      >
        Java Course
      </button>

      <button
        className="course-btn"
        onClick={() =>
          openCourse("https://www.youtube.com/watch?v=SqcY0GlETPk")
        }
      >
        React Course
      </button>

      <button
        className="course-btn"
        onClick={() =>
          openCourse("https://www.youtube.com/watch?v=F5mRW0jo-U4")
        }
      >
        Django Course
      </button>
    </div>
  );
}

export default Courses;