const express = require("express");
const bodyParser = require("body-parser");

const businessRoutes = require("./routes/businesses-routes");

const app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE");

  next();
});

app.use("/api/businesses", businessRoutes);

app.listen(process.env.PORT || 5555, () => {
  console.log("Serving on port 5555");
});
