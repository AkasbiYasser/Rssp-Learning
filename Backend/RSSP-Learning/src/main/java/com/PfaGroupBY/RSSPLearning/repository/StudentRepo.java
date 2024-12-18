package com.PfaGroupBY.RSSPLearning.repository;

import com.PfaGroupBY.RSSPLearning.model.Student;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface StudentRepo extends MongoRepository<Student, String> {

}
