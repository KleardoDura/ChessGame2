package com.example.backend.User;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import java.util.Date;

@Entity
@Getter
@Setter
@Table(name = "users")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private String firstName;
    private String lastName;
    private Date birthday;
    private String email;
    private String password;
    private byte[] profileImage;
    private int elo = 500;

    private String verificationCode;
    private Boolean isVerified = false;

    public User(){}

    public User(String firstName, String lastName, Date birthday, String email, String password) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthday = birthday;
        this.email = email;
        this.password = password;
    }

    public User(String email, String password, Boolean isVerified){
        this.email = email;
        this.password = password;
        this.isVerified = isVerified;
    }

    public User(String firstName, String lastName, Date birthday, String email,String password, byte[] profileImage) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthday = birthday;
        this.email = email;
        this.password = password;
        this.profileImage = profileImage;
    }

    public User(String firstName, String lastName, String email, String password) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
    }

    public void setVerified(boolean isVerified) {
        this.isVerified = isVerified;
    }

    public Boolean getVerified() {
        return isVerified;
    }

}
