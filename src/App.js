import { useState } from "react";
import "./App.css";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from './components/About';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  const [mode, setmode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const togglemode = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "#040227";
      showAlert("Dark Mode Enabled", "success");
    } else {
      setmode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode Enabled", "success");
    }
  };


  return (
    <>
      <BrowserRouter>
      <Navbar
        title="Textutils"
        mode={mode}
        togglemode={togglemode}
      />
      <Alert alert={alert} />
      <div className="container my-3">
      <Routes>
        <Route exact path="/" element={<TextForm heading="Enter the text to analyze below" showAlert={showAlert} />} />
        <Route exact path="/about" element={<About />} />
      </Routes>
      </div>
      </BrowserRouter>
    </>
  );
}

export default App;
