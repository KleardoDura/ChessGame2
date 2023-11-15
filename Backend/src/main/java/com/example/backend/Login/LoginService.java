package com.example.backend.Login;

import com.example.backend.User.User;
import com.example.backend.User.UserRepository;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

import java.util.Random;

@Service
@AllArgsConstructor
public class LoginService {

    @Autowired
    private JavaMailSender javaMailSender;
    @Autowired
    private UserRepository userRepository;

    public void generateAndSendVerificationCode(String email) {
        User user = userRepository.findByEmail(email);
        if (user == null) {
            throw new IllegalArgumentException("Benutzer nicht gefunden");
        }
        String verificationCode = generateRandomCode(6);
        user.setVerificationCode(verificationCode);
        userRepository.save(user);

        String userEmail = user.getEmail();
        String subject = "Ihr Verifizierungscode";
        String message = "Ihr Verifizierungscode lautet: " + verificationCode;

        SimpleMailMessage emailMessage = new SimpleMailMessage();
        emailMessage.setTo(userEmail);
        emailMessage.setSubject(subject);
        emailMessage.setText(message);

        javaMailSender.send(emailMessage);
    }

    public String generateRandomCode(int length) {
        String characters = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
        StringBuilder code = new StringBuilder();
        Random random = new Random();
        for (int i = 0; i < length; i++) {
            int index = random.nextInt(characters.length());
            code.append(characters.charAt(index));
        }
        return code.toString();
    }

    public boolean verifyCode(String email, String verificationCode) {
        User user = userRepository.findByEmail(email);
        if (user == null) {
            throw new IllegalArgumentException("Benutzer nicht gefunden");
        }

        String userVerificationCode = user.getVerificationCode();
        if (userVerificationCode != null && verificationCode.equals(userVerificationCode)) {
            user.setVerified(true);
            userRepository.save(user);
            return true;
        }

        return false;
    }

    public void logout(String email) {
        User user = userRepository.findByEmail(email);
        if (user == null) {
            throw new IllegalArgumentException("Benutzer nicht gefunden");
        }
        user.setVerified(false);
        userRepository.save(user);
    }

}



