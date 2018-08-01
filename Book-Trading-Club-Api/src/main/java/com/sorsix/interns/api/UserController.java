package com.sorsix.interns.api;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.sorsix.interns.model.User;
import com.sorsix.interns.service.impl.UserServiceImpl;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.oauth2.provider.OAuth2Authentication;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.util.Map;

/**
 * Created by Kristina on 30.04.2018.
 */
@RestController
@RequestMapping("/api")
public class UserController {
    private final Logger logger = LoggerFactory.getLogger(UserController.class);
    private final UserServiceImpl userService;

    public UserController(UserServiceImpl userService) {
        this.userService = userService;
    }

    @CrossOrigin(origins = "*")
    @RequestMapping("/user")
    public Principal user(Principal principal) {
        return principal;
    }

    @CrossOrigin(origins = "*")
    @PostMapping("/create-user")
    public void createNewUser(@RequestBody User user){
        userService.createUser(user);
    }

    @PostMapping("/update-user-details")
    public void updateUserDetails(@RequestParam String username, @RequestParam String city, @RequestParam String state){
        userService.updateUserDetails(username, city, state);
    }

    @PostMapping("/update-password")
    public void updatePassword(@RequestParam String username, @RequestParam String password){
        userService.updatePassword(username, password);
    }

    @PostMapping("/delete-user")
    public void deleteUser(@RequestBody User user){
        userService.deleteUser(user.getUsername());
    }

    @GetMapping("/public/users/principal")
    public ResponseEntity<?> getPrincipal(Authentication principal) {
//        logger.info("Calling ger principal: {}", principal.getDetails());
        if (principal != null) {
            OAuth2Authentication auth = (OAuth2Authentication) principal;
            ObjectMapper mapper = new ObjectMapper();
            Map map = mapper.convertValue(auth.getUserAuthentication().getDetails(), Map.class);
            logger.info("Printing authentication map: {}", map);
            return new ResponseEntity(map, HttpStatus.OK);
        } else {
            return new ResponseEntity(principal,HttpStatus.OK);
        }
    }

}
