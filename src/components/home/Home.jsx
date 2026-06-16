import "./Home.css";
import homeImage from "../../assets/download.png";
import { Link } from "react-router-dom";

function Home() {

  return (
    <div className="home container-fluid">
      <div className="row min-vh-100 align-items-center">
        <div className="col-md-6 d-flex flex-column justify-content-center px-5">
          <h1 className="home-heading">
            Organize your <br /> work and life, finally.
          </h1>

          <p className="home-text">
            Become focused, organized and productive with Task Management
            System.
          </p>

          <div className="mt-3">
            <button className="home-btn">
              <Link
                to={"/taskmanager"}
                style={{
                  textDecoration: "none",
                  color: "white",
                  fontWeight: "bold",
                }}
              >
                Make Task List
              </Link>
            </button>
          </div>
        </div>

        <div className="col-md-6 d-flex justify-content-center">
          <img src={homeImage} alt="task" className="home-image" />
        </div>
      </div>
    </div>
  );
}


export default Home;
