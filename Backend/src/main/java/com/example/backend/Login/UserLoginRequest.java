package com.example.backend.Login;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class UserLoginRequest {
    private String email; // Benutzername
    private String password;
}
