package com.example.backend.User;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class UserController {

    @Autowired
    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping("/users")
    public ResponseEntity<List<User>> getUsers(){
        return new ResponseEntity<>(this.userService.findAll(),HttpStatus.OK);
    }
    @DeleteMapping(path = "users/{userID}")
    public void removeUser(@PathVariable("userID")long id) {userService.removeUser(id);}
    @GetMapping(path = "users/lastname/{userLastName}")
    public ResponseEntity<List<User>> getUserByLastName(@PathVariable("userLastName")String lastName) {return new ResponseEntity<>(userService.getByLastName(lastName),HttpStatus.OK);}

    @GetMapping(path = "users/firstname/{userFirstName}")
    public ResponseEntity<List<User>> getUserByFirstName(@PathVariable("userFirstName")String firstName){return new ResponseEntity<>(userService.getByFirstName(firstName),HttpStatus.OK);}

    @GetMapping(path = "users/email/{userEmail}")
    public ResponseEntity<List<User>> getUserByEmail(@PathVariable("userEmail")String UserEmail){return new ResponseEntity<>(userService.getByEmail(UserEmail),HttpStatus.OK);}

    @PostMapping("/users")
    public ResponseEntity<?> sendFriendRequest(@RequestBody User user) {
        userService.sendFriendRequest(user);
        return ResponseEntity.ok().build();
    }




}
