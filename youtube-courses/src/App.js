import React from "react";
import logo from './logo.svg';
import './App.css';
import {Button, Col, Container, Row} from 'reactstrap';

import { ToastContainer, toast} from "react-toastify";
import Home from "./components/Home";
import Course from "./components/Course";
import Allcourses from "./components/Allcourses";
import AddCourse from "./components/AddCourse";
import Header from "./components/Header";
import Contact from "./components/Contact";
import Menus from "./components/Menus";
import { BrowserRouter, BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
  
  const btnHandle= () =>{
    toast.success("Done.");
  }

  const notify = () => toast("Wow so easy!");
    return (

      <div>
          <ToastContainer /> 
     
      <Container>
        <Header/>
        <Row>
          <Col md = {4}><Menus/></Col>
          <Col md ={8}>
            {/* <Home/> */}
            <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/add-course" element={<AddCourse />} />
              <Route path="/view-courses" element={<Allcourses />} />
              <Route path="/contact" element={ <Contact />}/>
              
            </Routes>
            </BrowserRouter>
            </Col>
        </Row>
      </Container>
      </div>
    
    );
    
}

export default App;
