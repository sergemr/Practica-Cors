package com.practicacors.practica;

import org.springframework.web.bind.annotation.RestController;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

@RestController
@RequestMapping("/api")
public class ResfullController {

    public String SomeData() {
        return "Hello World";
    };

    @GetMapping("/test")
    public String getMethod() {
        return SomeData();
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/testarr")
    public List<String> getMethodArray() {
        return List.of("Hello", "World");

    }

}
