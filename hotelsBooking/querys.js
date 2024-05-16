const axios = require('axios');

async function sendGraphQLQuery() {
  try {
    const response = await axios.post('http://localhost:4000/graphql');

    return response.data;
  } catch (error) {
    console.error('error query:', error);
    throw error;
  }
}




const fetchTrajets = async () => {
  try {
    const response = await sendGraphQLQuery();
    const hotels = response.data.hotels;
    console.log(hotels);
  } catch (error) {
    console.error('An error occurred while fetching trajets:', error);
  }
};


fetchTrajets();

