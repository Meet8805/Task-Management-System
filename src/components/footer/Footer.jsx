import "./Footer.css";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <footer className=" footer container-fluid p-3 d-flex justify-content-center align-items-center text-white flex-column ">
      <h2>Task Management System </h2>
      <h4>Organize your work and life efficiently.</h4>
      <div className="navlink-container">
        <NavLink to="/" onClick={() => window.scrollTo(0, 0)}>
          Home
        </NavLink>
        <NavLink to="/about" onClick={() => window.scrollTo(0, 0)}>
          About Us
        </NavLink>
        <NavLink to="/taskmanager" onClick={() => window.scrollTo(0, 0)}>
          Task Manager
        </NavLink>
      </div>
      <p className="m-0">
        &copy; {new Date().getFullYear()} Meet Parmar. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
