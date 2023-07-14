import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from "./components/Alert";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import React, {useState} from 'react';

function App() {
  const[mode, setMode]=useState('light');
  const[alert, setAlert]=useState(null);
  const showAlert=(message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 500);
  }
  const toggleMode=()=>{
    if(mode==='light') {
      setMode('dark');
      document.body.style.backgroundColor='#3c3c3c';
      showAlert("Dark mode has been enabled", "success");
    }
    else {
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light mode has been enabled", "success");
    }
  }
  return (
    <>
    <Router>
      <Navbar title="TextUtils |" aboutText="About" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container my-3">
        <Switch>
            <Route exact path="/about">
                <About mode={mode} toggleMode={toggleMode}/>
            </Route>
            <Route exact path="/">
                <TextForm heading="Enter the text to analyse below:" mode={mode} toggleMode={toggleMode}/>
            </Route>
        </Switch>
      </div>
    </Router>  
    </>
  );
}

export default App;