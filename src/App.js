import './App.css';
import './components/Navbar';
import Navbar from './components/Navbar';
import TextFrom from './components/TextFrom';
import Alert from './components/Alert.js';
import About from './components/About.js';
import React, {useState} from 'react';


import {
BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

export default function App() {

  const [mode,setMode] = useState('light');

  const [alert, setalert] = useState(null);

  const showAlert = (message, type) =>{
      setalert( {
        msg: message,
        txt: type
      });
      // setTimeout(() => {
      //   setalert(null);
      // }, 2000);
  }
    // setting bg-colors to choose //

    const changeBackground1 = () => {
      const value1 = document.querySelector('.color1');
      const back1 = window.getComputedStyle(value1).getPropertyValue('background-color');
      console.log(back1);
      document.body.style.backgroundColor = back1;
            document.body.style.color = 'white';
    }
  
    const changeBackground2 = () => {
      const value2 = document.querySelector('.color2');
      const back2 = window.getComputedStyle(value2).getPropertyValue('background-color');
      console.log(back2);
      document.body.style.backgroundColor = back2;
            document.body.style.color = 'white';
    }
  
    const changeBackground3 = () => {
      const value3 = document.querySelector('.color3');
      const back3 = window.getComputedStyle(value3).getPropertyValue('background-color');
      console.log(back3);
      document.body.style.backgroundColor = back3;
            document.body.style.color = 'white';
    }
  
  const toggle = () =>  {    

    if(mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'rgb(23, 12, 53)';
      document.querySelector(".container").style.color = 'white';
      // document.getElementById("mybox").style.backgroundColor = 'grey';
      // document.getElementById("mybox").style.color = 'white';
      showAlert("success", "Entered Dark Mode!");
      document.title = 'TextCounter - Dark Mode';
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.querySelector(".container").style.color = 'black';
      // document.getElementById("mybox").style.backgroundColor = 'white';
      // document.getElementById("mybox").style.color = 'black';
      showAlert("success", "Entered Light Mode!");
      document.title = 'TextCounter - Light Mode';

    }
  }



  return(
    
    <>
<Router>

<Navbar title="TextUtils" textHome="Home" forAbout="About" mode={mode} touch="Change Mode" toggle={toggle} background1={changeBackground1} background2={changeBackground2} background3={changeBackground3}/>
<Alert alert={alert}/>
<div className="container my-3">
<Routes>
          <Route exact path="/about" element={<About />} />
          <Route exact path="/" element={<TextFrom heading="Enter The Text To Analyze Below" alert={showAlert}/>}>
          </Route>
        </Routes>
        </div>
    </Router>


    </>
    
  );
}

