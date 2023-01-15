import React from "react";
import { Link } from "react-router-dom";
import { ListGroup, ListGroupItem } from "reactstrap";


const Menus=()=>{
    return(
        <ListGroup>
            <ListGroupItem className="text-center" tag="a" href="/" action>Home</ListGroupItem>
            <ListGroupItem className="text-center" tag="a" href="/add-course" action>Add Course</ListGroupItem>
            <ListGroupItem className="text-center" tag="a" href="/view-courses" action>View Courses</ListGroupItem>
            <ListGroupItem className="text-center" tag="a" href="/contact" action>Contact</ListGroupItem>
              

        </ListGroup>


    );
}

export default Menus