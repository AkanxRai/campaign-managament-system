import React from "react";
import {
  Button,
  Typography,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  TableContainer,
  Paper,
} from "@mui/material";

function CustomerTable({ customers, onSendCampaign }) {
  return (
    <>
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
                        onClick={() => onSendCampaign(index)}
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
    </>
  );
}

export default CustomerTable;
