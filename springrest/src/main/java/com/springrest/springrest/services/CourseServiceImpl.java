package com.springrest.springrest.services;


import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.springrest.springrest.dao.CourseDao;
import com.springrest.springrest.entities.course;


@Service
public class CourseServiceImpl implements CourseService{

	
	
	//temporary list before creating database
	//List<course> list;
	
	@Autowired
	private CourseDao courseDao;
	
	public CourseServiceImpl() {
		
		/*list = new ArrayList<>();
		list.add(new course(145, "Java core course", "This course contains basics of Java"));
		list.add(new course(146, "SpringBoot", "basic of Spring"));*/
	}
	
	
	
	@Override
	public List<course> getCourses() {
		
		return courseDao.findAll();
	}



	@Override
	public course getCourse(long courseId) {
		
		//course c = null;
		
	/*	for (course cor: list) {
			 if (cor.getId() == courseId) {
				 c = cor;
				 break;
			 }
			
		}
		*/
		return courseDao.getOne(courseId);
		
		
		
	}



	@Override
	public course addCourse(course course) {
		
		
		  //list.add(course);
		
		courseDao.save(course);
		
		return course;
	}



	@Override
	public course updateCourse(course course) {
		/*
		list.forEach(e -> {
			if(e.getId() == course.getId()) {
				e.setTitle(course.getTitle());
				e.setDescription(course.getDescription());
			}
		});
		
		*/
		
		//save method is gonna update also if there is a same course
		courseDao.save(course);
		return course;
	}



	@Override
	public void deleteCourse(long parseLong) {
		
		//list = this.list.stream().filter(e -> e.getId() != parseLong).collect(Collectors.toList());
		
		course entity = courseDao.getOne(parseLong);
		courseDao.delete(entity);
		
	}

}
