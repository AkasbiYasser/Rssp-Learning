package com.PfaGroupBY.RSSPLearning.repository;

import com.PfaGroupBY.RSSPLearning.model.User;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepo extends MongoRepository<User, String> {

    public User findByEmail(String email);
}
