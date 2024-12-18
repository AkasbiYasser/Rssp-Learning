package com.PfaGroupBY.RSSPLearning.repository;

import com.PfaGroupBY.RSSPLearning.model.Instructor;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface InstructorRepo extends MongoRepository<Instructor, String> {


}
