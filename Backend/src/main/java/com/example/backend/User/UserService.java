package com.example.backend.User;

import org.springframework.data.crossstore.ChangeSetPersister;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {

    private final UserRepository userRepository;


    private final static String USER_NOT_FOUND_MSG = "user with email %s not found";

    public UserService(UserRepository userRepository) {this.userRepository = userRepository;}

    public List<User> findAll() { return userRepository.findAll();}

    public List<User> getByEmail(String mail) {
        return userRepository.findUserByEmail(mail);
    }

    public List<User> getByFirstName(String firstName) {
        return userRepository.findUserByFirstName(firstName);
    }

    public List<User> getByLastName(String lastName) {
        return userRepository.findUserByLastName(lastName);
    }

    public void removeUser(long id) {
        userRepository.deleteById(id);
    }

    public void sendFriendRequest(User user) {

    }


}
