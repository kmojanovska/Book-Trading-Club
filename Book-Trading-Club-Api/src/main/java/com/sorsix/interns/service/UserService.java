package com.sorsix.interns.service;

import com.sorsix.interns.model.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;

import java.util.Optional;

/**
 * Created by Kristina on 30.04.2018.
 */

public interface UserService extends UserDetailsService {

    Optional<User> getUser(String username);

    User createUser(String username, String password, String fullName, String city, String state, String email);

    User createUser(User user);

    Optional<User> updateUserDetails(String username, String city, String state);

    void deleteUser(String username);

    Optional<User> updatePassword(String username, String password);

    @Override
    UserDetails loadUserByUsername(String s) throws UsernameNotFoundException;
}
