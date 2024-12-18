package com.PfaGroupBY.RSSPLearning.repository;

import com.PfaGroupBY.RSSPLearning.model.Category;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CategoryRepo extends MongoRepository<Category,String> {
    Category findByName(String name);
}
