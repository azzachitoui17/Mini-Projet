const Hotel = require('./models/hotelSchema');

const hotelResolvers = {
  Query: {
    hotels: async () => {
      try {
        const hotels = await Hotel.find();
        return hotels;
      } catch (error) {
        console.error('Error fetching hotels:', error);
        throw new Error('Failed to fetch hotels');
      }
    },
  },
  Mutation: {
    createHotel: async (_, { hotelInput }) => {
      try {
        const newHotel = new Hotel(hotelInput);
        const savedHotel = await newHotel.save();
        return savedHotel;
      } catch (error) {
        console.error('Error creating a hotel:', error);
        throw new Error('Failed to create a hotel');
      }
    },
  },
};

module.exports = hotelResolvers;
