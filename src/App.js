import React,{ useState } from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
import Textform from './Components/Textform';
import Alert from './Components/Alert';



function App() {

const [mode, setmode]=useState('light');
const [alert, setalert]=useState(null);

const showalert=(message,type)=>{
  setalert(
    {
      msg:message,
      type:type

    }
  )
  setTimeout(()=>{
setalert(null);
  },2000);
}

 const togglemode=()=>{
  if(mode==='light'){
    setmode('dark');
    document.body.style.backgroundColor='black';
    showalert("dark mode has been enabled","success")
   // setInterval(()=>{
     // document.title='install Textutils now';
    //},2000);
  }
  else{
    setmode('light');
    document.body.style.backgroundColor='white';
    showalert("light mode has been enabled","success")
  }

}

  return (
  <>
  <BrowserRouter>
  <Navbar title="Textutils" mode={mode} togglemode={togglemode}/>
  <Alert alert={alert}/>
  
  <div className='container'>
   <Routes>
        <Route path="/about" element={<About mode={mode} />}/>
        <Route path="/" element={<Textform showalert={showalert} heading="Enter your text here" mode={mode}/>} />
        <Route path="/Textutils" element={<Textform showalert={showalert} heading="Enter your text here" mode={mode}/>} />
          
   </Routes>
   </div>
  </BrowserRouter>
  
    
  </>
  );
}

export default App;

