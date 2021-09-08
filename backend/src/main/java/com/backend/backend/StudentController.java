package com.backend.backend;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/")
public class StudentController {
    @Autowired
    private StudentRepositary stdrepo;

    // Get all studnets
    @GetMapping("/students")
    public List<StudentModel> getAllStd(){
        return stdrepo.findAll();
    }

    // create employee rest api
    @PostMapping("/students")
    public StudentModel createStudent(@RequestBody StudentModel stdmodel){
        return stdrepo.save(stdmodel);
    }

    @DeleteMapping("/students")
    public void deleteStudent(@RequestBody StudentModel stdmodel){
        stdrepo.delete(stdmodel);
    }
    
}
