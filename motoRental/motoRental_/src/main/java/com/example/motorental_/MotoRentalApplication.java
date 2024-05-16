package com.example.motorental_;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;

@SpringBootApplication(exclude = {DataSourceAutoConfiguration.class})
public class MotoRentalApplication {

	public static void main(String[] args) {
		SpringApplication.run(MotoRentalApplication.class, args);
	}

}
