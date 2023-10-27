// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React,{useState} from 'react'
import Alert from './components/Alert';
import {BrowserRouter as Router, Routes,Route } from 'react-router-dom';
// #35353a

function App() {
  const [mode,UpdatedMode] = useState('light');
  const [alert,updatedAlert] = useState(null);

  const SetAlert = (message,type) =>{
    updatedAlert({
      message:message,
      type:type
    })

    setTimeout(() => {
      updatedAlert(null);
    }, 1000);
  }

  const togglemode = () =>{
    if (mode === 'light' || mode === 'pink'){
      UpdatedMode('dark')
      document.body.style.backgroundColor = '#35353a'
      SetAlert("Dark Mode Enabled","success")
    }
    else if ((mode === 'dark' || mode === 'pink')){
      UpdatedMode('light')
      document.body.style.backgroundColor = 'white'
      SetAlert("Light Mode Enabled","success")
    }
  }
  const artisticMode = () =>{
    if (mode === 'light' || mode === 'dark'){
      UpdatedMode('pink');
      document.body.style.background = 'pink';
      SetAlert("Artistic Mode Enabled","success")
    }
    else{
      UpdatedMode('light');
      document.body.style.backgroundColor = 'white'
      SetAlert("Artistic Mode Disabled","success")
    }
  }
  return (
    <Router>
      <div>
        <Navbar mode={mode} setmode = {togglemode} artisticmode={artisticMode}></Navbar>
        <Alert alert={alert}></Alert>
        <Routes>
          <Route exact path="/" element={<TextForm mode={mode}></TextForm>}/>
          {/* <TextForm mode={mode} ></TextForm> */}
          <Route exact path="/about/" element={<About mode={mode}></About>}/>
        </Routes>
      </div>
    </Router>
    );
  }
  
  export default App;
  



















  // <div className="App">
  //   <header className="App-header">
  //     <img src={logo} className="App-logo" alt="logo" />
  //     <p>
  //       Edit <code>src/App.js</code> and save to reload.
  //     </p>
  //     <a
  //       className="App-link"
  //       href="https://reactjs.org"
  //       target="_blank"
  //       rel="noopener noreferrer"
  //     >
  //       Learn React
  //     </a>
  //   </header>
  // </div>