const nodemailer = require("nodemailer");

// Customer data storage
let customers = [];

// Replace with your Gmail credentials
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "kundacharai@gmail.com",
    pass: "vlzm ylsl nlqi idub",
  },
});

const addCustomer = (req, res) => {
  const { name, email, phone, channel } = req.body;

  if (!name || !email || !phone || !channel) {
    return res.status(400).json({ error: "All fields are required" });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^[6-9]\d{9}$/;

  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: "Invalid email" });
  }
  if (!phoneRegex.test(phone)) {
    return res.status(400).json({ error: "Invalid phone number" });
  }

  customers.push({ name, email, phone, channel, status: "Not Sent" });
  res.json({ message: "Customer added successfully" });
};

const getCustomers = (req, res) => {
  res.json(customers);
};

const sendCampaign = (req, res) => {
  const { index } = req.body;

  if (index === undefined || index < 0 || index >= customers.length) {
    return res.status(400).json({ error: "Invalid customer index" });
  }

  const customer = customers[index];

  // For Email channel, send actual email
  if (customer.channel === "Email") {
    const mailOptions = {
      from: "kundacharai@gmail.com", // Use your actual email
      to: customer.email,
      subject: "Campaign Message",
      text: `Hello ${customer.name},\n\nThis is a campaign message sent via our platform.\n\nRegards,\nCampaign System`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error("Email error:", error);
        customers[index].status = "Failed";
        return res.json({ message: "Failed to send email", customers });
      } else {
        console.log("Email sent: " + info.response);
        customers[index].status = "Sent";
        return res.json({ message: "Email sent successfully", customers });
      }
    });
  } else {
    // For SMS/WhatsApp, simulate the sending
    const success = Math.random() > 0.2; // 80% success rate
    customers[index].status = success ? "Sent" : "Failed";
    const channelName = customer.channel;
    res.json({
      message: `${channelName} ${
        success ? "sent successfully" : "failed to send"
      }`,
      customers,
    });
  }
};

module.exports = { addCustomer, getCustomers, sendCampaign, customers };
