import * as express from "express";

let app: express.Application = express();

app.listen(5000, () => {
  console.log("Server is running at port 5000");
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
