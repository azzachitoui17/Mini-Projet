
const { ApolloServer, gql } = require('apollo-server-express');
const express = require('express');
const mongoose = require('mongoose');
const typeDefs=require('./typeDefs');
const resolvers=require('./hotelResolvers');

async function startServer() {
    const app = express();
  
    const server = new ApolloServer({ typeDefs, resolvers });
  
    await server.start();
  
    server.applyMiddleware({ app });
  
    const PORT = process.env.PORT || 4000;
  
    
    mongoose.connection.on('error', (err) => {
      console.error('MongoDB connection error:', err);
    });
  
    
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}${server.graphqlPath}`);
    });
  }
  

  mongoose
    .connect('mongodb+srv://azzachtioui17:azza123@cluster0.pegzw4q.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log('Connected to the database');
      startServer();
    })
    .catch((err) => {
      console.error('Error connecting to the database:', err);
    });
  