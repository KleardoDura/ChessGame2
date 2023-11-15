package com.example.backend.Email;

import lombok.AllArgsConstructor;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class FriendRequestEmailService {

    private final JavaMailSender mailSender;

    public void sendFriendshipRequestEmail(String toEmail, String senderName) {
        SimpleMailMessage message = new SimpleMailMessage();
        message.setFrom("gruppe.e1234@gmail.com");
        message.setTo(toEmail);
        message.setSubject("Freundschaftsanfrage erhalten");
        message.setText("Hallo " + senderName + ",\n\nDu hast eine Freundschaftsanfrage erhalten.");

        mailSender.send(message);
        System.out.println("Freundschaftsanfrage per E-Mail versendet an: " + toEmail);
    }
}