import React, { useState } from "react";
import { TextField, Button, MenuItem, Typography, Paper } from "@mui/material";

function CustomerForm({ onAddCustomer }) {
  const [customer, setCustomer] = useState({
    name: "",
    email: "",
    phone: "",
    channel: "Email",
  });

  const handleChange = (e) => {
    setCustomer({ ...customer, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      await onAddCustomer(customer);
      // Reset form after successful submission
      setCustomer({ name: "", email: "", phone: "", channel: "Email" });
    } catch (err) {
      // Error handling is done in parent component
      console.error("Error in CustomerForm:", err);
    }
  };

  return (
    <Paper sx={{ p: 3, mb: 4 }}>
      <Typography variant="h5" gutterBottom>
        Add Customer
      </Typography>
      <TextField
        fullWidth
        label="Name"
        name="name"
        value={customer.name}
        onChange={handleChange}
        sx={{ mb: 2 }}
      />
      <TextField
        fullWidth
        label="Email"
        name="email"
        value={customer.email}
        onChange={handleChange}
        sx={{ mb: 2 }}
      />
      <TextField
        fullWidth
        label="Phone"
        name="phone"
        value={customer.phone}
        onChange={handleChange}
        sx={{ mb: 2 }}
      />
      <TextField
        fullWidth
        select
        label="Channel"
        name="channel"
        value={customer.channel}
        onChange={handleChange}
        sx={{ mb: 2 }}
      >
        <MenuItem value="Email">Email</MenuItem>
        <MenuItem value="SMS">SMS</MenuItem>
        <MenuItem value="WhatsApp">WhatsApp</MenuItem>
      </TextField>
      <Button variant="contained" color="primary" onClick={handleSubmit}>
        Add Customer
      </Button>
    </Paper>
  );
}

export default CustomerForm;
