package com.example.backend.Login;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("http://localhost:4200")
public class LoginController {

    @Autowired
    private LoginService loginService;

    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestBody UserLoginRequest request) {
        loginService.generateAndSendVerificationCode(request.getEmail());
        return ResponseEntity.ok("Verifizierungscode wurde gesendet.");
    }

    @PostMapping("/verify")
    public ResponseEntity<String> verifyCode(@RequestBody VerificationCodeRequest request) {
        boolean isVerified = loginService.verifyCode(request.getUsername(), request.getVerificationCode());
        if (isVerified) {
            return ResponseEntity.ok("Verifizierung erfolgreich.");
        } else {
            return ResponseEntity.badRequest().body("Ungültiger Verifizierungscode.");
        }
    }

    @PostMapping("/logout")
    public ResponseEntity<String> logout(@RequestBody UserLogoutRequest request) {
        loginService.logout(request.getEmail());
        return ResponseEntity.ok("Logout erfolgreich.");
    }

}
