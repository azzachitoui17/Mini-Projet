# miniprojet-api-
# Microservices Project

This project consists of three microservices: Flight Booking, Hotel Rental, Car Rental and Moto Rental. Each microservice handles a specific aspect of the travel booking process.There is a file gateway that integrate all services.
the first Micro service is about carRental which use grpc proto and Postgresql database.
the second mico service is about Flight Booking which use express js and mongodb.
the third micro service is about Hotel Rental which use Graphql and mongodb.
the fourth micro service is about Moto Rental which use springboot Kafka.

## Prerequisites

- Node.js (version 20.11.0)
  Jdka 17
  kafka
  postgresql

## Installation
you can install the mini project with those steps :

1. Clone the repository:

   ```bash
   git clone https://github.com/azzachitoui17/Mini-Projet.git
2.Install dependencies for each microservice:
- Flight Booking:
    ```bash
    cd flightBooking
    npm install
- Hotel rental:
    ```bash
    cd hotelsBooking
    npm install
- Car Rental:
  ```bash
    cd carRentalBooking
    npm install
  
  Moto Rental:
     bash
    use intellij to run the spring boot api and required jdk and kafka installed in computer.

## Usage:

1. Start each microservice:
  - Flight Booking:
    ```bash
    cd flightBooking
    npm start
  - Hotel rental:
    ```bash
    cd hotelsBooking
    npm start
    
  - Car Rental:
    ```bash
    cd carRentalBooking
    npm start
    
   - Gateway api:
     ```bash
     cd gateway
     npm start
   
   -moto rental :
   launch with spring boot.
    
    
2. Access the microservices via their respective endpoints:

- Flight Booking: http://localhost:3000
- Hotel Rental: http://localhost:4000
- Car Rental: http://localhost:50051
 -MotoRental': 'http://localhost:8082/motoRental/1

3. You can access to the microservices via  gateway : 
  '/flights': 'http://localhost:3000/flights',
  '/createFlight': 'http://localhost:3000/createFlight',
  '/updateFlight':  'http://localhost:3000/updateFlight/',
  '/graphql' :'http://localhost:4000/graphql',
  '/motoRental': 'http://localhost:8082/motoRental/1'
  












