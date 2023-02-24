import React from "react";
import DashboardHeader from "../../components/DashboardHeader";
import "../styles.css";
import { Form, Button } from "semantic-ui-react";
import { Card, CardContent } from '@mui/material';



function Queries() {
  return (
    <div className="dashboard-content">
      <DashboardHeader btnText="Add Product" />

      <Card sx={{ minWidth: 275 }} className='profile-card'>
        <CardContent>
          <div>
            <Form>
              <Form.Field>
                <label>Query Title</label>
                <input placeholder="First Name" type="text" />
              </Form.Field>
              <Form.Field>
                <label>Query Description</label>
                <input placeholder="Last Name" type="text" />
              </Form.Field>
              
              <Button type="submit">Add</Button>
            </Form>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default Queries;