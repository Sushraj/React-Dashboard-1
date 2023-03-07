import React from "react";
import { Card, CardContent } from "@mui/material";

function Logout() {
  return (
    <div className="dashboard-content">
      <Card sx={{ minWidth: 275 }} className="profile-card">
        <CardContent>
          <div>
            <h4> You have been logged out</h4>
            <h2> Thank You!</h2>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default Logout;
