package com.example.backend;

import com.example.backend.Email.EmailService;
import com.example.backend.Email.FriendRequestEmailService;
import com.example.backend.User.User;
import com.example.backend.User.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.event.ApplicationReadyEvent;
import org.springframework.context.annotation.Bean;
import org.springframework.context.event.EventListener;


import java.util.Date;

@SpringBootApplication
public class BackendApplication {

    @Autowired
    private EmailService emailService;
    @Autowired
    private FriendRequestEmailService friendRequestEmailService;
    @EventListener(ApplicationReadyEvent.class)
    public void sendMail(){
        emailService.sendEmail("gruppe.e1234@gmail.com", "Verifiziere dein Profil", "Klicke hier um dein Profil zu verifizieren!");
    friendRequestEmailService.sendFriendshipRequestEmail("gruppe.e1234@gmail.com", "Du hast eine Freundschaftsanfrage erhalten");
    }

    public static void main(String[] args) {
        SpringApplication.run(BackendApplication.class, args);
    }

    @Bean
    CommandLineRunner init(UserRepository userRepository)
    {
        return args ->
        {
           userRepository.deleteAll();
//            userRepository.save(new User("Jon", "Snow", new Date(), "jon.snow@example.com", "123"));
//            userRepository.save(new User("Daenerys", "Targaryen", new Date(), "daenerys.targaryen@example.com", "1234"));
//            userRepository.save(new User("Tyrion", "Lannister", new Date(), "tyrion.lannister@example.com", "3124"));
//            userRepository.save(new User("Arya", "Stark", new Date(), "arya.stark@example.com", "123124"));
//            userRepository.save(new User("Cersei", "Lannister", new Date(), "cersei.lannister@example.com", "123134"));
          };
    }


}
