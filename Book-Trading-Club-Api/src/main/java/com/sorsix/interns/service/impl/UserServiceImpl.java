package com.sorsix.interns.service.impl;

import com.sorsix.interns.model.User;
import com.sorsix.interns.repository.UserRepository;
import com.sorsix.interns.service.UserService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

/**
 * Created by Kristina on 30.04.2018.
 */

@Service
public class UserServiceImpl implements UserService{

    private static final Logger logger = LoggerFactory.getLogger(UserServiceImpl.class);

    private final UserRepository userRepository;

    public UserServiceImpl(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public List<User> getUsers() {
        return userRepository.findAll();
    }

    @Override
    public Optional<User> getUser(String username) {
        return userRepository.findById(username);
    }


    @Transactional
    public User createUser(String username, String password, String fullName, String city, String state, String email) {
        User user = new User(username, password, fullName, city, state, email);
        logger.info("Creating User [{}]", user);
        return userRepository.save(user);
    }

    @Override
    @Transactional
    public User createUser(User user){
        logger.info("Creating User [{}]", user);
        return userRepository.save(user);
    }

    @Override
    @Transactional
    public Optional<User> updateUserDetails(String username, String city, String state) {
        logger.info("username {}", username);
        logger.info("city {}", city);
        logger.info("state {}", state);
        Optional<User> user = userRepository.findById(username);
        logger.info("user is present {}", user.isPresent());
        return user.map(it ->{
            logger.info("Updating User Details [{}]", username);
            it.setCity(city);
            it.setState(state);
            return it;
        });
    }

    @Override
    public void deleteUser(String username) {
        logger.info("Deleting User [{}]", username);
        userRepository.deleteById(username);
    }

    @Override
    public Optional<User> updatePassword(String username, String password) {
        Optional<User> user = userRepository.findById(username);
        return user.map(it -> {
            logger.info("Updating User's password [{}]", username);
            it.setPassword(password);
            userRepository.save(it);
            return it;
        });

    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {

        logger.info("Searching for user [{}]", username);
        Optional<User> userOptional = userRepository.findById(username);

        if(userOptional.isPresent()){
            logger.info("Found the user [{}]", userOptional.get());
            return (User) userOptional.get();
        }else{
            throw new UsernameNotFoundException("Username not found");
        }
    }


}
