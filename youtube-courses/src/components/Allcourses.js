import React, { useState, useEffect } from 'react';
import Course from "./Course";


import base_url from './../api/bootapi';

import axios from "axios";
import { toast } from 'react-toastify';


const Allcourse=() =>{

   useEffect(() => {
    document.title = "All Courses || Course Manager ";
   }, []);

   //function to call server
   const getAllCoursesFromServer=()=>{
    axios.get(`${base_url}/courses`).then(
        (response)=>{
            //success
            console.log(response.data);
            toast.success("courses has been loaded!!");
            setCourses(response.data);

        },
        (error)=>{
            //for error
            console.log(error);
            toast.error("Something went wrong!!");

        }
    );
   };
    //calling loading from server
    useEffect(() => {
        getAllCoursesFromServer();

    }, []);


    const [courses, setCourses]=useState (
        [
            

        ]
    );


    const updateCourses=(id)=>{
          setCourses(courses.filter((c) => c.id != id));
    }


    return(
        <div>
            <h1>All Courses</h1>
            <p>List of courses are as follows:</p>
            {courses.length > 0
            ? courses.map((item)=> <Course key={item.id} course={item} update={updateCourses} />)
                : "No courses"
                    
            }



        </div>

    );
};

export default Allcourse;