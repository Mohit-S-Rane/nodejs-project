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
    this.error404Handler();
    this.handleErrors();
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
    this.app.use("/api/user", UserRouter);
  }

  error404Handler() {
    this.app.use((req, res) => {
      res.status(404).json({
        message: "Not Found",
        status_code: 404,
      });
    });
  }

  handleErrors() {
    this.app.use((error, req, res, next) => {
        const errorStatus = req.errorStatus || 500;
        res.status(errorStatus).json({
            message: error.message || 'Something Went Wrong. Please try Again',
            status_code: errorStatus
        })
    })  
  }
}
