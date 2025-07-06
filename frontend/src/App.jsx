import React, { useState, useEffect, useCallback } from "react";
import { Typography, Container } from "@mui/material";
import axios from "axios";
import CustomerForm from "./components/CustomerForm";
import CustomerTable from "./components/CustomerTable";
import AnalyticsPanel from "./components/AnalyticsPanel";

function App() {
  const [customers, setCustomers] = useState([]);
  const [analytics, setAnalytics] = useState({
    total: 0,
    sent: 0,
    failed: 0,
    pending: 0,
    successRate: 0,
  });

  const fetchAnalytics = useCallback(async () => {
    try {
      const res = await axios.get(
        "https://campaign-managament-system.onrender.com/api/analytics"
      );
      setAnalytics(res.data);
    } catch (err) {
      console.error("Failed to fetch analytics", err);
    }
  }, []);

  const fetchCustomers = useCallback(async () => {
    try {
      const res = await axios.get(
        "https://campaign-managament-system.onrender.com/api/customers"
      );
      setCustomers(res.data);
      fetchAnalytics(); // Fetch analytics whenever customers are updated
    } catch (err) {
      console.error("Failed to fetch customers", err);
    }
  }, [fetchAnalytics]);

  const handleAddCustomer = async (customer) => {
    try {
      await axios.post(
        "https://campaign-managament-system.onrender.com/api/add-customer",
        customer
      );
      alert("Customer added successfully");
      fetchCustomers(); // Refresh customers and analytics
    } catch (err) {
      alert(err.response?.data?.error || "Something went wrong");
      throw err; // Re-throw so CustomerForm can handle it
    }
  };

  const handleSendCampaign = async (index) => {
    try {
      const res = await axios.post(
        "https://campaign-managament-system.onrender.com/api/send-campaign",
        { index }
      );
      alert(res.data.message);
      fetchCustomers(); // Refresh customers and analytics
    } catch (err) {
      console.error("Send campaign error:", err);
      alert(err.response?.data?.error || "Failed to send campaign");
    }
  };

  useEffect(() => {
    fetchCustomers();
  }, [fetchCustomers]);

  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom align="center">
        Campaign Management System
      </Typography>

      <CustomerForm onAddCustomer={handleAddCustomer} />

      <CustomerTable
        customers={customers}
        onSendCampaign={handleSendCampaign}
      />

      <AnalyticsPanel analytics={analytics} />
    </Container>
  );
}

export default App;
