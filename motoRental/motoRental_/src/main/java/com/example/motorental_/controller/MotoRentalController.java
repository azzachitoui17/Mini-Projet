package com.example.motorental_.controller;

import com.example.motorental_.service.KafkaProducerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

@RestController
public class MotoRentalController {

    @Autowired
    private KafkaProducerService kafkaProducerService;

    @GetMapping("/motoRental/{id}")
    public Map<String, Boolean> rentMoto(@PathVariable("id") String id) {
        kafkaProducerService.sendMessage("Moto rental request for ID: " + id);

        Map<String, Boolean> response = new HashMap<>();
        response.put("success", true);
        return response;
    }
}