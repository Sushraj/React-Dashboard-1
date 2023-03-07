import { Card, CardContent } from "@mui/material";
import React from "react";
import { Form, Button } from "semantic-ui-react";

function AddProduct() {
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
              {/* <Form.Field>
                <label>Product Name</label>
                <input placeholder="Name" type="text" />
              </Form.Field> */}
              <Form.Field>
                <label> Product Description</label>
                <input placeholder="Description" type="text" />
              </Form.Field>
              <Form.Field>
                <label> Product Price</label>
                <input placeholder="Price" type="number" />
              </Form.Field>

              <Form.Field>
                <label> Is product live? </label>
                <input placeholder="live or not?" type="text" />
              </Form.Field>
              <Form.Field>
                <label> Product Quantity</label>
                <input placeholder="Quantity" type="number" />
              </Form.Field>
              <Form.Field>
                <label> Stock</label>
                <input placeholder="stock" type="number" />
              </Form.Field>
              <Form.Field>
                <label> Product Image</label>
                <input placeholder="image name" type="file" />
              </Form.Field>
              <Button type="submit" primary>
                Add
              </Button>
            </Form>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default AddProduct;
