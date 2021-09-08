package com.backend.backend;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface StudentRepositary extends JpaRepository<StudentModel, Long>{
    
}
