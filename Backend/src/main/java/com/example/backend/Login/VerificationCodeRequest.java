package com.example.backend.Login;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class VerificationCodeRequest {
    private String username;
    private String verificationCode;

}
