import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <div>
      <nav
        className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            {props.title}
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  {props.aboutText}
                </Link>
              </li>
            </ul>
            <div
              className={`form-check form-switch text-${
                props.mode === "light" ? "dark" : "light"
              } mx-5`}
            >
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
                onClick={()=>{props.toggleMode(null)}}
              />
              <label
                className="form-check-label"
                htmlFor="flexSwitchCheckDefault"
              >
                {/* {`${
                  props.mode === "light"
                    ? "on switch for Dark"
                    : "Off Switch for light"
                }`} */}
                Toggle mode
              </label>
            </div>

            <div className="d-flex">
              <div
                onClick={()=>{props.toggleMode('primary')}}
                className="bg-primary rounded mx-2"
                style={{ height: "25px", width: "25px", cursor:"pointer"}}
              ></div>
              <div
                onClick={()=>{props.toggleMode('secondary')}}
                className="bg-secondary rounded mx-2"
                style={{ height: "25px", width: "25px", cursor:"pointer"}}
              ></div>
              <div
                onClick={()=>{props.toggleMode('warning')}}
                className="bg-warning rounded mx-2"
                style={{ height: "25px", width: "25px", cursor:"pointer"}}
              ></div>
              <div
                onClick={()=>{props.toggleMode('success')}}
                className="bg-success rounded mx-2"
                style={{ height: "25px", width: "25px", cursor:"pointer"}}
              ></div>
              <div
                onClick={()=>{props.toggleMode('danger')}}
                className="bg-danger rounded mx-2"
                style={{ height: "25px", width: "25px", cursor:"pointer"}}
              ></div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

// setting prop type

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string,
};

//setting default props
Navbar.defaultProps = {
  title: "Your Title here",
  aboutText: "Your Text here",
};
