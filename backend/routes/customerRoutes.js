const express = require("express");
const {
  addCustomer,
  getCustomers,
  sendCampaign,
  getAnalytics,
} = require("../controllers/customerController");

const router = express.Router();

router.post("/add-customer", addCustomer);
router.get("/customers", getCustomers);
router.post("/send-campaign", sendCampaign);
router.get("/analytics", getAnalytics);

module.exports = router;
