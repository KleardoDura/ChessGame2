package com.example.backend.User;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;
import java.util.Optional;
import java.util.List;


@Repository
@Transactional(readOnly = true)
public interface UserRepository extends JpaRepository<User, Long> {

     List<User> findUserByLastName(String lastName);
     List<User> findUserByFirstName(String firstName);
     List<User> findUserByEmail(String email);
    User findByEmailAndPassword(String email, String password);

    User findByEmail(String email);

}
