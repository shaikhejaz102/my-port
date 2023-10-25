import './App.css';
import Navbar from './components/Navbar';
import Simple from './components/Simple';
import Card from './components/card';
import Service from './components/Service';
// import Botom from './components/Botom';
import Smal from './components/Smal';
import Website from './components/Website';
// import Home from './components/Home';
import React, { useState } from 'react';

import {
  HashRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import Home1 from './components/Home1';
import Footer from './components/Footer';


function App() {

  // const myStyle = {
  //   position: 'relative',
  //   alignItems: 'center',
  //   display: 'flex',
  //   flexDirection: 'column',
  //   alignContent: 'center',
  //   justifyContent: 'center'
  // }



  const [mode, setMode] = useState('light');

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'black';
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }

  }

    return (
      <>
        <HashRouter>
        <Navbar mode={mode} toggleMode={toggleMode} />
          <Routes> 
            {/* <Route exact path="/" element={<Home mode={mode}/>}/> */}
            <Route exact path="/" element={<Home1 />}/>
            <Route exact path="card/" element={<Card />} />
            <Route exact path="service/" element={<Service />} />
            <Route exact path="botom/" element={<Simple />} />
            <Route exact path="website/" element={<Website />} />
            <Route exact path="smal/" element={<Smal />} />
          </Routes>
          {/* <Footer/> */}
        </HashRouter>
        
      </>
    );
}

export default App;
