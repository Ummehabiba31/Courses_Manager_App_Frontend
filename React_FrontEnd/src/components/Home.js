import React, { useEffect } from "react";
import {Container, Button} from 'reactstrap';
import { BrowserRouter as Router, Route} from "react-router-dom";

//jumbotron example for new bootstrap. 
//add class="container-fluid bg-light text-dark p-5" win div
//add class="display-4 fw-bold" in h1 tag

const Home = () => {

    useEffect(() => {
        document.title = "Home || Course Manager";
       }, []);

    return(
        <div class="container-fluid bg-light text-dark p-5 " >
           
            <h1>Application for school administration.</h1>
            <p>Hello everyone!! Welcome to our website. Below are the instructions for using this app:</p>
            <p>
                <li>Go to <strong>View Courses</strong> tab to find all courses in our database.</li>
                <li>Go to <strong>Add Course</strong> tab to add more courses to the database.</li>
                <li>You can also delete and update existing courses.</li>
                <li>Find our contact information from tab <strong>Contact</strong>.</li>

            </p>
            
           
            
        
            

        </div>
    );
}

export default Home;