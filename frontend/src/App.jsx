import React, { useState, useEffect } from "react";
import {
  TextField,
  Button,
  MenuItem,
  Typography,
  Container,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  TableContainer,
  Paper,
} from "@mui/material";
import axios from "axios";

function App() {
  const [customer, setCustomer] = useState({
    name: "",
    email: "",
    phone: "",
    channel: "Email",
  });

  const [customers, setCustomers] = useState([]);

  const handleChange = (e) => {
    setCustomer({ ...customer, [e.target.name]: e.target.value });
  };

  const fetchCustomers = async () => {
    try {
      const res = await axios.get(
        "https://campaign-managament-system.onrender.com/api/customers"
      );
      setCustomers(res.data);
    } catch (err) {
      console.error("Failed to fetch customers", err);
    }
  };

  const handleSubmit = async () => {
    try {
      await axios.post(
        "https://campaign-managament-system.onrender.com/api/add-customer",
        customer
      );
      alert("Customer added successfully");
      setCustomer({ name: "", email: "", phone: "", channel: "Email" });
      fetchCustomers();
    } catch (err) {
      alert(err.response?.data?.error || "Something went wrong");
    }
  };

  const sendCampaign = async (index) => {
    try {
      const res = await axios.post(
        "https://campaign-managament-system.onrender.com/api/send-campaign",
        {
          index,
        }
      );
      alert(res.data.message);
      fetchCustomers();
    } catch (err) {
      console.error("Send campaign error:", err);
      alert(err.response?.data?.error || "Failed to send campaign");
    }
  };

  useEffect(() => {
    fetchCustomers();
  }, []);

  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom align="center">
        Campaign Management System
      </Typography>

      {/* Add Customer Form */}
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

      {/* Customer List */}
      <Typography variant="h5" sx={{ mb: 2 }}>
        Customer List ({customers.length} customers)
      </Typography>
      <Paper sx={{ width: "100%", overflow: "hidden" }}>
        <TableContainer sx={{ maxHeight: 600 }}>
          <Table stickyHeader sx={{ minWidth: 800 }}>
            <TableHead>
              <TableRow>
                <TableCell
                  sx={{
                    fontWeight: "bold",
                    minWidth: 120,
                    backgroundColor: "#f5f5f5",
                  }}
                >
                  Name
                </TableCell>
                <TableCell
                  sx={{
                    fontWeight: "bold",
                    minWidth: 200,
                    backgroundColor: "#f5f5f5",
                  }}
                >
                  Email
                </TableCell>
                <TableCell
                  sx={{
                    fontWeight: "bold",
                    minWidth: 120,
                    backgroundColor: "#f5f5f5",
                  }}
                >
                  Phone
                </TableCell>
                <TableCell
                  sx={{
                    fontWeight: "bold",
                    minWidth: 100,
                    backgroundColor: "#f5f5f5",
                  }}
                >
                  Channel
                </TableCell>
                <TableCell
                  sx={{
                    fontWeight: "bold",
                    minWidth: 100,
                    backgroundColor: "#f5f5f5",
                  }}
                >
                  Status
                </TableCell>
                <TableCell
                  sx={{
                    fontWeight: "bold",
                    minWidth: 120,
                    textAlign: "center",
                    backgroundColor: "#f5f5f5",
                  }}
                >
                  Action
                </TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {customers.length === 0 ? (
                <TableRow>
                  <TableCell
                    colSpan={6}
                    sx={{ textAlign: "center", py: 4, color: "text.secondary" }}
                  >
                    No customers added yet. Add your first customer above!
                  </TableCell>
                </TableRow>
              ) : (
                customers.map((cust, index) => (
                  <TableRow key={index} hover>
                    <TableCell
                      sx={{
                        maxWidth: 120,
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                      }}
                    >
                      {cust.name}
                    </TableCell>
                    <TableCell
                      sx={{
                        maxWidth: 200,
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                      }}
                    >
                      <span title={cust.email}>{cust.email}</span>
                    </TableCell>
                    <TableCell sx={{ maxWidth: 120 }}>{cust.phone}</TableCell>
                    <TableCell>
                      <span
                        style={{
                          padding: "4px 8px",
                          borderRadius: "4px",
                          backgroundColor:
                            cust.channel === "Email"
                              ? "#e3f2fd"
                              : cust.channel === "SMS"
                              ? "#f3e5f5"
                              : "#e8f5e8",
                          color:
                            cust.channel === "Email"
                              ? "#1976d2"
                              : cust.channel === "SMS"
                              ? "#7b1fa2"
                              : "#388e3c",
                          fontSize: "0.875rem",
                        }}
                      >
                        {cust.channel}
                      </span>
                    </TableCell>
                    <TableCell>
                      <span
                        style={{
                          padding: "4px 8px",
                          borderRadius: "4px",
                          backgroundColor:
                            cust.status === "Sent"
                              ? "#e8f5e8"
                              : cust.status === "Failed"
                              ? "#ffebee"
                              : "#fff3e0",
                          color:
                            cust.status === "Sent"
                              ? "#2e7d32"
                              : cust.status === "Failed"
                              ? "#c62828"
                              : "#ef6c00",
                          fontSize: "0.875rem",
                          fontWeight: "medium",
                        }}
                      >
                        {cust.status}
                      </span>
                    </TableCell>
                    <TableCell sx={{ textAlign: "center" }}>
                      <Button
                        variant="contained"
                        color="success"
                        size="small"
                        onClick={() => sendCampaign(index)}
                        disabled={cust.status === "Sent"}
                        sx={{ minWidth: 80 }}
                      >
                        {cust.status === "Sent" ? "Sent" : "Send"}
                      </Button>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Container>
  );
}

export default App;
