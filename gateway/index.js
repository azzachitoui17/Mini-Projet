const express = require('express');
const path=require('path');
const { createProxyMiddleware } = require('http-proxy-middleware');
const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');
const bodyParser = require('body-parser');
const PROTO_PATH = path.join(__dirname, '..', 'carRental', 'my-service.proto');
const packageDefinition = protoLoader.loadSync(PROTO_PATH);
const serviceProto = grpc.loadPackageDefinition(packageDefinition).myservice;
const myServiceClient = new serviceProto.MyService('localhost:50051', grpc.credentials.createInsecure());


const app = express();

const routes = {
  '/flights': 'http://localhost:3000/flights',
  '/createFlight': 'http://localhost:3000/createFlight',
  '/updateFlight':  'http://localhost:3000/updateFlight/',
  '/graphql' :'http://localhost:4000/graphql',
  '/motoRental': 'http://localhost:8082/motoRental/1',
 
};


for (const route in routes) {
  const target = routes[route];
  app.use(
    route,
    createProxyMiddleware({
      target,
      changeOrigin: true,
      pathRewrite: {
        [`^${route}`]: '', 
      },
    })
  );
}


app.get('/flights', (req, res) => {
  const targetURL = 'http://localhost:3000/flights'; 


  createProxyMiddleware({
    target: targetURL,
    changeOrigin: true,
  })(req, res);
});

app.post('/createFlight', (req, res) => {
  const targetURL = 'http://localhost:3000/createFlight';

  createProxyMiddleware({
    target: targetURL,
    changeOrigin: true,
  })(req, res);
});

app.put('/updateFlight/:flightId', (req, res) => {
  const flightId = req.params.flightId;
  const targetURL = `http://localhost:3000/updateFlight/${flightId}`;
  createProxyMiddleware({
    target: targetURL,
    changeOrigin: true,
  })(req, res);
});


app.get('/carRental/:id', (req, res) => {
  const id = req.params.id;
  myServiceClient.getCarStatus({ id }, (err, response) => {
  if (err) {
  res.status(500).send(err);
  } else { res.json(response);
  }
  });
  });



app.post('/graphql', (req, res) => {
  const targetURL = 'http://localhost:4000/graphql';

  createProxyMiddleware({
    target: targetURL,
    changeOrigin: true,
  })(req, res);
});








const PORT = 5015;
app.listen(PORT, () => {
  console.log(`API gateway server listening on port ${PORT}`);
});
