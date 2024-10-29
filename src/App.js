import { useState } from "react";
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
  // Lets make a mode state variable
  const [mode, setMode] = useState("light");

  // lets make a State variable for alert messages
  const [alert, setAlert] = useState(null);

  //making a function for ShowingAlert
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };

  const removeBodyClasses=()=>{
      document.body.classList.remove("bg-primary");
      document.body.classList.remove("bg-success");
      document.body.classList.remove("bg-danger");
      document.body.classList.remove("bg-warning");
      document.body.classList.remove("bg-secondary");
  }

  // making a function for toggle mode
  const toggleMode = (cls) => {
    // console.log(cls);
    removeBodyClasses();
    document.body.classList.add("bg-"+cls);
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode Enabled", "success");
      document.title = "Text-utils Dark Mode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode Enabled", "success");
      document.title = "Text-utils Light Mode";
    }
  };
  return (
    <>
      <Router>
        <Navbar
          title="TextUtils"
          aboutText="aboutTextUtils"
          mode={mode}
          toggleMode={toggleMode}
        />
        <Alert alert={alert} />
        <div className="container my-5 mt-5">
          <Routes>
            <Route exact path="/about" element={<About mode={mode} />} />
            <Route
              exact
              path="/"
              element={
                <TextForm
                  heading="Enter the text to analyse"
                  mode={mode}
                  showAlert={showAlert}
                />
              }
            />
          </Routes>
        </div>
      </Router>
    </>
  );
}
