const express = require("express");
const {
  addCustomer,
  getCustomers,
  sendCampaign,
} = require("../controllers/customerController");

const router = express.Router();

router.post("/add-customer", addCustomer);
router.get("/customers", getCustomers);
router.post("/send-campaign", sendCampaign);

module.exports = router;
