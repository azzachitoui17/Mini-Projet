const grpc = require("@grpc/grpc-js");
const protoLoader = require("@grpc/proto-loader");
const { Client } = require("pg");
const PROTO_PATH = __dirname + "/my-service.proto";
const packageDefinition = protoLoader.loadSync(PROTO_PATH);
const serviceProto = grpc.loadPackageDefinition(packageDefinition).myservice;
const dbConfig = {
  user: "postgres",
  password: "root",
  database: "grpc",
  host: "localhost",
  port: 5432,
};
const client = new Client(dbConfig);
client
  .connect()
  .then(() => console.log("Connected to database"))
  .catch((err) => console.error("Error connecting to database:", err));

const myService = {
  getCarStatus: (call, callback) => {
    const id = call.request.id;

    client.query(
        'SELECT status FROM car_status WHERE id = $1',
      [id],
      (error, result) => {
        if (error) {
          console.error(error);
          callback(error);
          return;
        }
        if (result.rows.length === 0) {
          callback({
            code: grpc.status.NOT_FOUND,
            message: "car status not found",
          });
        } else {
          const carStatus = result.rows[0].status;
          callback(null, { carStatus });
        }
      }
    );
  },
};

const server = new grpc.Server();
server.addService(serviceProto.MyService.service, myService);
server.bindAsync(
  "127.0.0.1:50051",
  grpc.ServerCredentials.createInsecure(),
  () => {
    console.log("listening on port 50051");
    server.start();
  }
);
