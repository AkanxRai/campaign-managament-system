import React from "react";
import { Typography, Paper, Grid } from "@mui/material";

function AnalyticsPanel({ analytics }) {
  const statsCards = [
    { label: "Total Customers", value: analytics.total, color: "#1976d2" },
    { label: "Sent", value: analytics.sent, color: "#2e7d32" },
    { label: "Failed", value: analytics.failed, color: "#c62828" },
    { label: "Pending", value: analytics.pending, color: "#ef6c00" },
  ];

  return (
    <>
      <Typography variant="h5" sx={{ mt: 4, mb: 2 }}>
        Campaign Analytics
      </Typography>
      <Paper sx={{ p: 3 }}>
        <Grid container spacing={3}>
          {statsCards.map((stat, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Paper
                sx={{
                  p: 2,
                  textAlign: "center",
                  backgroundColor: "#f8f9fa",
                  borderLeft: `4px solid ${stat.color}`,
                }}
              >
                <Typography
                  variant="h4"
                  sx={{ color: stat.color, fontWeight: "bold" }}
                >
                  {stat.value}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {stat.label}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>

        {/* Success Rate Card */}
        <Paper
          sx={{
            mt: 3,
            p: 2,
            textAlign: "center",
            backgroundColor: "#f0f7ff",
            border: "1px solid #e3f2fd",
          }}
        >
          <Typography
            variant="h5"
            sx={{ color: "#1976d2", fontWeight: "bold" }}
          >
            {analytics.successRate}%
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Success Rate
          </Typography>
        </Paper>
      </Paper>
    </>
  );
}

export default AnalyticsPanel;
