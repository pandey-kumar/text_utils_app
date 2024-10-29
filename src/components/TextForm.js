import React from "react";
import { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");
  // make two functions to hanlde click and onchange
  const handleUpClick = () => {
    //   console.log(`Uppercase clicked`);

    // you have access of text and setText everywhere
    const uptext = text.toUpperCase();
    setText(uptext);
    if (text.length === 0) {
      props.showAlert("Please Write Something", "warning");
    } else props.showAlert("Text changed to uppercase", "success");
  };

  const handleLoClick = () => {
    const uptext = text.toLowerCase();
    setText(uptext);
    if (text.length === 0) {
      props.showAlert("Please Write Something", "warning");
    } else props.showAlert("Text changed to Lowercase", "success");
  };
  const handleClrTxtClick = () => {
    setText("");
    if (text.length === 0) {
      props.showAlert("Please Write Something", "warning");
    } else props.showAlert("Cleared the text", "success");
  };

  const handleCopy = () => {
    const text = document.getElementById("mybox");
    if (text.value.length === 0) {
      props.showAlert("Please Write Something", "warning");
    } else {
      navigator.clipboard.writeText(text.value);
      props.showAlert("Text copied", "success");
    }
    // alert("Text has been Copied to ClipBoard");
  };

  const handleExtraSpace = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    if (text.length === 0) {
      props.showAlert("Please Write Something", "warning");
    } else props.showAlert("Extra Spaces removed", "success");
  };

  const handleChange = (event) => {
    // console.log(`On change`);
    setText(event.target.value);
  };

  // text=newText  // wrong way to update
  //setText("newText") // right way to do

  return (
    <>
      <div
        className="conatiner"
        style={{ color: props.mode === "light" ? "#042743" : "white" }}
      >
        <h1>{props.heading}</h1>
        <div className="form-group mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleChange}
            id="mybox"
            rows="8"
            style={{
              backgroundColor: props.mode === "dark" ? "#00398d" : "white",
              color: props.mode === "light" ? "#042743" : "white",
            }}
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2 my-2" onClick={handleUpClick} disabled={text.length===0}>
          Convert to uppercase
        </button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleLoClick}>
          Convert to Lowercase
        </button> 
        <button
          className="btn btn-primary mx-2 my-2"
          onClick={handleClrTxtClick}
        >
          Clear
        </button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleCopy}>
          Copy
        </button>
        <button
          className="btn btn-primary mx-2 my-2"
          onClick={handleExtraSpace}
        >
          RemoveExtraSpaces
        </button>
      </div>
      <div
        className="container mt-3"
        style={{ color: props.mode === "light" ? "#042743" : "white" }}
      >
        <h2>Your Text Summary</h2>
        <p>
          Letters Count:- {text.length} and Words Count:-
          {
            text.split(" ").filter((element) => {
              return element.length !== 0;
            }).length
          }
        </p>
        <p>Reading Time in minutes:- {0.008 *  text.split(/\s+/).filter((element) => {
              return element.length !== 0;
            }).length}</p>
        <h2>Preview</h2>
        <p>
          {text.length === 0 ? "Nothing to preview" : text}
        </p>
      </div>
    </>
  );
}
