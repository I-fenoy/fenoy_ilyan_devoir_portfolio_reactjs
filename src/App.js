import React from 'react';
import './App.css';
import {Routes, Route} from "react-router-dom";
import Header from "./pages/header";
import Footer from "./pages/footer";
import Home from "./pages/home.jsx";
import Services from "./pages/services.jsx";
import Portfolio from "./pages/portfolio.jsx"
import Contact from "./pages/contact.jsx"
import Legalnotices from "./pages/legal.jsx"

function App() {
  return (
    <div className="App">
      <Header/>

      <Routes>
        <Route path='/' element={<Home />} ></Route>
        <Route path='/services' element={<Services />}></Route>
        <Route path='/portfolio' element={<Portfolio />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/legalsnotices' element={<Legalnotices />}></Route>
      </Routes>

      <Footer/>
    </div>
  );
}

export default App;
