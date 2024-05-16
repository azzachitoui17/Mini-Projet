package com.example.motorental_.service;

import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.stereotype.Service;

@Service
public class KafkaConsumerService {

    @KafkaListener(topics = "moto_topic", groupId = "moto-group")
    public void consume(String message) {
        System.out.println("Consumed message: " + message);
    }
}