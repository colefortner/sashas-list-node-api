const express = require("express");
const bodyParser = require("body-parser");

const businessRoutes = require("./routes/businesses-routes");

const app = express();

app.use("/api/businesses", businessRoutes);

app.listen(process.env.PORT || 5555, () => {
  console.log("Serving on port 5555");
});
