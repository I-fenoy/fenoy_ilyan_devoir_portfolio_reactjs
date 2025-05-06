import React, {useState,useEffect} from 'react';
import './App.css';
import {Routes, Route} from "react-router-dom";
import Header from "./pages/header";
import Footer from "./pages/footer";
import Home from "./pages/home.jsx";
import Services from "./pages/services.jsx";
import Portfolio from "./pages/portfolio.jsx"
import Contact from "./pages/contact.jsx"
import Legalnotices from "./pages/legal.jsx"

// ²
function App() {

  const [users, setUsers] = useState([]);
    const getUsers = async () =>{
      const res = await fetch("https://api.github.com/users/github-john-doe");
      const json = await res.json();
      setUsers(json);
    }
    useEffect(() => {
      getUsers();
    },[])

    let Modal = () => {
      return (
          <div className="modal" tabindex="-1">
              <div className="modal-dialog">
                  <div className="modal-content">
                      <div className="modal-header">
                          <h5 className="modal-title">Modal title</h5>
                          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>
                      <div className="modal-body">
                          <p>Modal body text goes here.</p>
                      </div>
                      <div className="modal-footer">
                          <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                          <button type="button" className="btn btn-primary">Save changes</button>
                      </div>
                  </div>
              </div>
          </div>
      )
  }
  

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
