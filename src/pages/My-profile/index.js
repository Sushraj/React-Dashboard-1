import React from "react";
import DashboardHeader from "../../components/DashboardHeader";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Form, Button } from "semantic-ui-react";

function MyProfile() {
  return (
    <div className="dashboard-content">
      <DashboardHeader btnText="Add Product" />

      <Card sx={{ minWidth: 275 }} className="profile-card">
        <CardContent>
          <div>
            <Form>
              <Form.Field>
                <label>Seller Name</label>
                <input
                  placeholder="Amruta"
                  type="text"
                  value={"Amruta"}
                  disabled
                />
              </Form.Field>
              <Form.Field>
                <label>Seller Phone</label>
                <input
                  placeholder="+121044434"
                  type="text"
                  value={"9834348016"}
                  disabled
                />
              </Form.Field>
              <Form.Field>
                <label> Seller Email</label>
                <input
                  placeholder="amruta@gmail.com"
                  type="email"
                  value={"amruta@gmail.com"}
                  disabled
                />
              </Form.Field>
            </Form>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default MyProfile;
