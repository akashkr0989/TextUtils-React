import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
// import Heart from './components/Heart'
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import Alert from './components/Alert';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";



function App() {

  const [mode, setMode] = useState('light') // Whether dark mode is enabled or not

  const [alert, setAlert] = useState(null) // to set alert on every action

  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert('Dark mode has been enabled', 'success')
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('Light mode has been enabled', 'success')
    }
  }

  return (
    <>
      <Router>
        <Navbar title="TextUtlis" aboutText="About Us" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        {/* <Heart/> */}
        <div className="container my-3">

          {/* users --> component 1
            users/home --> component 2 */}
          <Routes>

            {/* <Route path="/my-button" element={<MyButton />}></Route> */}

            <Route path="/about" element={<About mode={mode} />} />

            <Route path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} />} />

          </Routes>

        </div>
      </Router>
    </>
  );
}

export default App;
