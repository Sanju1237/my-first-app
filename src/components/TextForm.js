import React, { useState } from "react";

export default function Textarea(props) {
  const [text, setText] = useState("");
  //<-- Uppercase---->
  const hendelupchange = () => {
    // console.log("Changed to uppercase" + text);

    let newtext = text.toUpperCase();
    setText(newtext);
    props.showAlert("Changed to uppercase", "success");
  };
  //<-----Lowercase------>
  const hendeldownchange = () => {
    // console.log("Changed to lowercase" + text);

    let newtext = text.toLowerCase();
    setText(newtext);
    props.showAlert("Changed to lowercase", "success");
  };
  const hendelclearchange = () => {
    // console.log("Changed to lowercase" + text);

    let newtext = " ";

    setText(newtext);
    props.showAlert("Text cleared", "success");
  };

  //<-----Capitalize Text ------>
  const handleCapitalize = () => {
    let newText = text
      .split(" ")
      .map((el) => el.charAt(0).toUpperCase() + el.slice(1))
      .join(" ");
    setText(newText);
    props.showAlert("Text capitalized", "success");
  };

  //<----------------------TextArea onChange Function-------------------------------->
  const hendelonchange = (event) => {
    //console.log("On change");
    setText(event.target.value);
    
  };

  //  <-- Dark Mode -->

  
  // <-- Coppy Taxt -->
  const hendelcoppytext = () => {
    let newText = text;
    navigator.clipboard.writeText(text);
    setText(newText);
    props.showAlert("Text copied", "success");

    

  }
  // <-- Remove extra spece-->
  const hendelrenoveextraspec = () => {
    let newText = text.replace(/\s\s+/g, " ");
    setText(newText);
    props.showAlert("Extra space removed", "success");
  }

  return (
    <>
      <div className="container"style={{color:props.mode==='dark'?'white':'#040227'}} >
        <h1>{props.heading} </h1>
        <div className="mb-3">
          <textarea
            style={{backgroundColor:props.mode==='dark'?'black':'white',
                    color:props.mode==='dark'?'white':'#040227'}}
            type="text"
            value={text}
            onChange={hendelonchange}
            className="form-control"
            id="myBox"
            rows={8}
          />
        </div>
        <button className="btn btn-primary mx-1" onClick={hendelupchange}>
          Convert to Uppercase
        </button>
        <button className="btn btn-success mx-1" onClick={hendeldownchange}>
          Convert to Lowercase
        </button>
        <button className="btn btn-secondary mx-1" onClick={handleCapitalize}>
          Capitalise
        </button>
        <button className="btn btn-warning  mx-1" onClick={hendelcoppytext}>
          Coppy Taxt
        </button>
        <button className="btn btn-info  mx-1" onClick={hendelrenoveextraspec}>
          Remove extra spece
        </button>
        <button className="btn btn-danger mx-1" onClick={hendelclearchange}>
          Clear Taxt
        </button>
        
      </div>
      <div className="container my-3" style={{color:props.mode==='dark'?'white':'#040227'}}>
        <h2>Your text summary </h2>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter somthing into textarea to preview hear..."}</p>
      </div>
    </>
  );
}
