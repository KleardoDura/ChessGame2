package com.example.backend.registration;

import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.Arrays;

@RestController
@RequestMapping(path = "registration")
@CrossOrigin(origins = "http://localhost:4200")
@AllArgsConstructor
public class RegistrationController {

    private RegistrationService registrationService;

    @PostMapping("/user/register")
   public ResponseEntity<String> register(@RequestPart(name = "Image", required = false) MultipartFile file, @RequestBody RegistrationRequest request) throws IOException {

          return registrationService.register(file, request);
    }



}
