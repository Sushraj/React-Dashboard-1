import { Card, CardContent } from "@mui/material";
import React from "react";
import { Form, Button } from "semantic-ui-react";

function EditProduct() {
  return (
    <div className="dashboard-content">
      <Card sx={{ minWidth: 275 }} className="profile-card">
        <CardContent>
          <div>
            <Form>
              <Form.Field>
                <label>Product Catergoty</label>
                <input placeholder="Catergoty" type="text" />
              </Form.Field>
              <Form.Field>
                <label>Product Name</label>
                <input placeholder="Name" type="text" />
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
              <Form.Field>
                <label> Product Image</label>
                <input placeholder="Image name" type="file" />
              </Form.Field>
              <Button type="submit" primary>
                Update
              </Button>
            </Form>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default EditProduct;
