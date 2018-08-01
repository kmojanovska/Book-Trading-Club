package com.sorsix.interns.repository;

import com.sorsix.interns.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * Created by Kristina on 30.04.2018.
 */
@Repository
public interface UserRepository extends JpaRepository<User, String> {

}
