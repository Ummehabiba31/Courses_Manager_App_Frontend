import axios from 'axios';
import e from 'cors';
import React, {Fragment, useEffect, useState} from 'react';
import { toast } from 'react-toastify';
import {Form, FormGroup, Input, Button, Container} from "reactstrap";
import base_url from './../api/bootapi';


const AddCourse=()=>{

    useEffect(() => {
        document.title = "Add Course || Course Manager";
       }, []); 

const [course, setCourse]= useState({});

//form handler function
const handleForm=(e) => {
    console.log(course);
    postDatatoServer(course);

    e.preventDefault();
};


//creating function to add data to the database or post data on server
const postDatatoServer = (data)=>{
    axios.post(`${base_url}/courses`,data).then(
        (response)=>{
            console.log(response);
            console.log("success");
            toast.success("Course added successfully !!");

        },
        (error) =>{
            console.log(error);
            console.log("Error!!");
            toast.error("Error! Something went wrong!!");

        }
    );
    
};



return(
    <Fragment>
        <h1 className="text-center" my-3>Fill Course Details</h1>
        <Form onSubmit={handleForm}>
            <FormGroup>
                <label for="userid">Course Id</label>
                <Input type="text" placeholder="Enter Here" name="userid" id="userid"
                   onChange={(e) =>{
                    setCourse({...course,id:e.target.value})
                   }

                   }
                />
            </FormGroup>

            <FormGroup>
                <label for="title">Course title</label>
                <Input type="text" placeholder="Enter Title Here" id="title"
                 onChange={(e)=>{
                    setCourse({...course, title: e.target.value });
                 }

                 }
                />
            </FormGroup>

            <FormGroup>
                <label for="description">Course description</label>
                <Input 
                type="textarea" 
                placeholder="Enter description here" 
                id="description"
                style={{height: 200}}
                onChange={(e) => {
                    setCourse({...course, description: e.target.value});
                }}
                />
            </FormGroup>

            <Container className="text-center">
                <Button type="submit" color="success">Add Course</Button>
                <Button type = "reset" color="dark ml-2">Clear</Button>
            </Container>


            
        </Form>

    </Fragment>


)


}

export default AddCourse;