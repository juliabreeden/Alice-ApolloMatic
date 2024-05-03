const { ApolloServer } = require('apollo-server');
const mongoose = require('mongoose');

//Importing the created typeDefs and resolvers
const typeDefs = require('./src/schema');
const resolvers = require('./resolvers/index.js');

//Add your own MongoDB URI
const uri = '';

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB...'))
  .catch((err) => console.error('Could not connect to MongoDB:', err));

const server = new ApolloServer({
  typeDefs,
  resolvers,
  cors: true, 
  debug: true
});

server.listen({ port: 4000 }).then(({ url }) => {
  console.log(`Server ready at ${url}`);
});
