const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Hotel {
    _id: ID!
    name: String!
    city: String!
    place: Int!
  }

  input HotelInput {
    name: String!
    city: String!
    place: Int!
  }

  type Query {
    hotels: [Hotel]
  }

  type Mutation {
    createHotel(hotelInput: HotelInput): Hotel
  }
`;

module.exports = typeDefs;
