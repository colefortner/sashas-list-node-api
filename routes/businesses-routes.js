const express = require("express");

const router = express.Router();

const business_data = [
  {
    id: "1",
    name: "Pinellas Ale House",
    description: "bar"
  },
  {
    id: "2",
    name: "Three Daughters Brewing",
    description: "bar"
  }
];

router.get("/:id", (req, res, next) => {
  const businessId = req.params.id;
  const business = business_data.find((b) => {
    return b.id === businessId;
  });
  res.json({ business: business });
});

module.exports = router;
