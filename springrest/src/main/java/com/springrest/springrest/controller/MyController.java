package com.springrest.springrest.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.springrest.springrest.entities.course;
import com.springrest.springrest.services.CourseService;

@RestController
@CrossOrigin
public class MyController {
    
	@Autowired
	public CourseService courseService;
	
	
	
	
	//get all courses
	
	@GetMapping("/courses")
	public List<course> getCourses(){
		return this.courseService.getCourses();
	}
	
	@GetMapping("/courses/{courseId}")
	public course getCourse(@PathVariable String courseId) {
		return this.courseService.getCourse(Long.parseLong(courseId));
	}
	
	//addCourse method will return the course which is added
	
	@PostMapping(path="/courses", consumes="application/json")
	public course addCourse(@RequestBody course course) {
		
		
		return this.courseService.addCourse(course);
	}
	
	//updating method 
	@PutMapping("/courses")
	public course updateCourse(@RequestBody course course) {
		return this.courseService.updateCourse(course);
		
	}
	
	
	//Deleting method. 
	//manually sending HttpStatus.If instead of Long, string is passed through delete
	//then, Enternal server error will be showed
	
	@DeleteMapping("/courses/{courseId}")
	public ResponseEntity<HttpStatus> deleteCourse(@PathVariable String courseId) {
		try{
			this.courseService.deleteCourse(Long.parseLong(courseId));
			return new ResponseEntity<>(HttpStatus.OK);
		}
		
		catch(Exception e){
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
}
