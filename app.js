import express from "express";
import cors from "cors";

class Server {
  // Use the constructor to create an instance of express and use the class methods.
  constructor() {
    this.app = express();
    this.server();
    this.middlewares();
    this.routes();
  }

  // Create a middlewares method.
  middlewares() {
    this.app.use(express.json());
    // CORS added
    this.app.use(cors());
    this.app.use((req, res, next) => {
      console.log("hello middleware");
      return next();
    });
  }

  // Create a method to use the different routes of the app.
  routes() {
    this.app.get("/", (req, res) => {
      res.json({
        users: [
          { name: "Nicolás", lastname: "Biondini" },
          { name: "Jonh", lastname: "Doe" },
        ],
      });
    });
  }

  // Create a method to start the server.
  server() {
    this.app.listen(3001, () => {
      console.log("Dev tutorial API listening on port 3001");
    });
  }
}

export default new Server();
