import React from 'react';
import './App.css';
import {Routes, Route} from "react-router-dom";
import Header from "./pages/header";
import Footer from "./pages/footer";
import Home from "./pages/home.jsx";
import Services from "./pages/services.jsx";

function App() {
  return (
    <div className="App">
      <Header/>

      <Routes>
        <Route path='/' element={<Home />} ></Route>
        <Route path='/services' element={<Services />}></Route>
      </Routes>

      <Footer/>
    </div>
  );
}

export default App;
