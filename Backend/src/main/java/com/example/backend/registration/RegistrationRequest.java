package com.example.backend.registration;

import lombok.*;

import java.util.Date;

@Getter
@Setter
@AllArgsConstructor
@EqualsAndHashCode
@ToString
public class RegistrationRequest {

    private String firstName;
    private String lastName;
    private Date birthday;
    private  String email;
    private String password;
    private byte[] profileImage;

    public RegistrationRequest(){
    }

}
