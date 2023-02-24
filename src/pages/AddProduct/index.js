import { Card, CardContent } from '@mui/material';
import React from 'react'
import { Form, Button } from "semantic-ui-react";
import DashboardHeader from '../../components/DashboardHeader';


function AddProduct() {
  return (
    <div className="dashboard-content">
      {/* <DashboardHeader btnText="Add Product" /> */}

      <Card sx={{ minWidth: 275 }} className='profile-card'>
        <CardContent>
          <div>
            <Form>
              <Form.Field>
                <label>Product Catergoty</label>
                <input placeholder="Catergoty" type="text" />
              </Form.Field>
              <Form.Field>
                <label>Product Name</label>
                <input placeholder="Name" type="text"/>
              </Form.Field>
              <Form.Field>
                <label> Product Brand</label>
                <input placeholder="Brand" type="email" />
              </Form.Field>
              <Form.Field>
                <label> Product Price</label>
                <input placeholder="Price" type="email" />
              </Form.Field>
              <Form.Field>
                <label> Product Quntity</label>
                <input placeholder="Quntity" type="number" />
              </Form.Field>
              <Button type="submit">Add</Button>
            </Form>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default AddProduct