import * as express from "express";

let app: express.Application = express();

app.listen(5000, () => {
  console.log("Server is running at port 5000");
});

app.get("/api/user/login", (req, res) => {
  const data = [{ name: "testUserName" }];
  res.status(200).send(data);
});

app.get("/api/user/test", (req, res) => {
  const data = [{ name: "testUserName" }];
  res.status(200).send(data);
});
