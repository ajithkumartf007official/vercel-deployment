import React from "react";
import { Link, useHistory } from "react-router-dom";
import AuthService from "../services/auth.service";

const NavComponent = (props) => {
  let { currentUser, setCurrentUser } = props;
  const history = useHistory();
  const handleLogout = () => {
    AuthService.logout();
    window.alert("Logout Successfully, now you are redirect to the homepage.");
    setCurrentUser(null);
    history.push("/");
  };
  return (
    <div>
      <nav>
        <nav className="navbar navbar-expand-lg navbar-light bg-light mb-0">
          <div className="container-fluid">
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav w-100">
                <li className="nav-item">
                  <Link className="navbar-brand p-0" to="/">
                    <img src={process.env.PUBLIC_URL + "/images/homepageImg/millio_logo.png"} alt="Logo" width="70" height="auto" />
                  </Link>
                </li>
                <li className="nav-item ms-auto">
                  <Link className="nav-link active" to="/">
                    Home
                  </Link>
                </li>
                {!currentUser && (
                  <li className="nav-item">
                    <Link className="nav-link" to="/register">
                      Register
                    </Link>
                  </li>
                )}
                {!currentUser && (
                  <li className="nav-item">
                    <Link className="nav-link" to="/login">
                      Login
                    </Link>
                  </li>
                )}
                {currentUser && (
                  <li className="nav-item">
                    <Link onClick={handleLogout} className="nav-link" to="#">
                      Logout
                    </Link>
                  </li>
                )}
                {currentUser && (
                  <li className="nav-item">
                    <Link className="nav-link" to="/profile">
                      Profile
                    </Link>
                  </li>
                )}
                {currentUser && (
                  <li className="nav-item">
                    <Link className="nav-link" to="/course">
                      Course
                    </Link>
                  </li>
                )}
                {currentUser && currentUser.user.role == "instructor" && (
                  <li className="nav-item">
                    <Link className="nav-link" to="/postCourse">
                      Post Course
                    </Link>
                  </li>
                )}
                {currentUser && currentUser.user.role == "student" && (
                  <li className="nav-item">
                    <Link className="nav-link" to="/enroll">
                      Enroll
                    </Link>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </nav>
      </nav>
    </div>
  );
};

export default NavComponent;
