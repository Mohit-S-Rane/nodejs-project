import * as express from "express";
import * as mongoose from "mongoose";
import { getEnvironmentVariables } from './enviroments/env';

let app: express.Application = express();

app.listen(5000, () => {
  console.log("Server is running at port 5000");
});

mongoose.connect(getEnvironmentVariables().db_url)
.then(()=> {
  console.log('MongoDB is now connected');
});

app.use(function (req, res, next) {
  console.log("called");
  next();
});

app.get("/api/user/login", (req: any, res, next) => {
    const data = [{ name: "testUserName" }];
    res.status(200).send(data)
  });

app.get("/api/user/signup", (req, res) => {
  const data = [{ name: "testUserName" }];
  res.status(200).send(data);
});
