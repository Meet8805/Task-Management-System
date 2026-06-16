import "./About.css";

function About() {
  return (
    <div className="about">
      <div className="container about-container">
        <div className="d-flex">
          <h1>About Us</h1>
        </div>

        <p className="about-text">
          Welcome to our Task Management System — a simple and efficient web
          application designed to help users organize and manage daily tasks
          effectively.
        </p>

        <p className="about-text">
          Our platform allows users to create, update and  delete tasks
          in an easy-to-use interface.
        </p>

        <p className="about-text">
          The main goal of this project is to improve productivity and help
          users manage their work in a structured manner.
        </p>


        <div className="about-section">
          <h3>Our Mission</h3>

          <p className="about-text">
            Our mission is to provide a simple and reliable task management
            solution that helps users stay organized and productive in their
            daily activities.
          </p>
        </div>

        <div className="about-section">
          <h3>Future Enhancements</h3>

          <ul>
            <li>Task reminders and notifications</li>
            <li>Dark mode support</li>
            <li>Task priority and scheduling options</li>
          </ul>
        </div>

        <p className="about-footer">
          Thank you for using our Task Management System!
        </p>
      </div>
    </div>
  );
}

export default About;
