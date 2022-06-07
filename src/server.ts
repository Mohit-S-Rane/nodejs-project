import { Router } from "express";
import express = require("express");
import mongoose from "mongoose";
import { getEnvironmentVariables } from "./enviroments/env";
import UserRouter from "./routers/UserRouter";

export class Server {
  public app: express.Application = express();
  constructor() {
    this.setConfigurations();
    this.setRoutes();
  }

  setConfigurations() {
    this.connectMongoDb();
  }

  connectMongoDb() {
    const databaseUrl = getEnvironmentVariables().db_url;
    mongoose.connect(databaseUrl).then(() => {
      console.log("MongoDB is now connected");
    });
  }

  setRoutes() {
    this.app.use('/api/user', UserRouter)
  }
}
