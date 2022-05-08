import Navbar from './components/Navbar';
import './App.css';
import TextForm from './components/TextForm'; 
import Alert from './components/Alert';
import React, {useState} from 'react'
import About from './components/About';

import {
  BrowserRouter as Router,
  Routes,
  Route,

} from "react-router-dom";



function App() {
  const [mode, setMode] = useState('light')

  const [emode, setemode] = useState("Enable Dark Mode")

  const showAlert = (message , type) =>{
    setAlert({
      msg: message,
      type:type
    })

    setTimeout(()=>{
      setAlert(null)
    },2500)
  }




  const [alert, setAlert] = useState(null)
const toggleMode = () =>{
  if (mode === 'light'){
    setMode('dark')
    document.body.style.backgroundColor = '#301934'
    showAlert(' Dark mode has been Enabled', 'success')
    document.title = 'TextUtils - Dark Mode'
    setemode('Enable Light Mode')
    
  }
  else{
    setMode('light')
    document.body.style.backgroundColor = 'white'
    showAlert(' Light mode has been Enabled', 'success')
    document.title = 'TextUtils - Light Mode'
    setemode('Enable Dark Mode')
  }
}




  return (
    <>
    <Router>

  <Navbar title="Text Analyser" aboutText = 'About Us' mode = {mode} toggleMode ={toggleMode}  emode={emode}/>
   

  <Routes>
          <Route path="/about" element={ <About mode={mode}/>}/>

          <Route path="/" element={<div className="container">
  <TextForm showAlert={showAlert} heading = "Enter Text To Analyze Below" mode = {mode}/>  
  </div>}/>
          
        </Routes>
 
       
  </Router>
  <div className="container my-3"> <Alert alert = {alert}/></div>
   

  </>
  );
}

export default App;
