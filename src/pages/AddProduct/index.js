import { Category } from "@mui/icons-material";
import { Card, CardContent } from "@mui/material";
import React, { useState } from "react";
import { Form, Button } from "semantic-ui-react";
import axios from "axios";

function AddProduct() {
  const Add_Product_URL = "http://localhost:4000/addProduct/11";

  const [category, setCategory] = useState();
  const [description, setDescription] = useState();
  const [price, setPrice] = useState();
  const [live, setLive] = useState();
  const [quantity, setQuantity] = useState();
  const [stock, setStock] = useState();
  const [image, setImage] = useState();

  const handleSubmit = (e) => {
    // addChoreLog([choreDesc, name, date]);
    e.preventDefault();
    console.log("regreg-->", e);
    console.log("category---->", category);

    // we create payload for add product
    const payload = {
      productcategory: category,
      productprice: price,
      stock: stock ? true : false,
      productqty: quantity,
      live: live ? true : false,
      productimage: image,
      productdesc: description,
    };

    axios
      .post(Add_Product_URL, payload)
      .then(
        (response) => {
          console.log("response from api -->", response);
          //response.data
        },
        (error) => {
          console.log(error);
        }
      )
      .then((data) => {
        console.log("data-->", data);
        // setEventDetails(data);
        // setIsLoading(false);
      });
  };

  return (
    <div className="dashboard-content">
      <Card sx={{ minWidth: 275 }} className="profile-card">
        <CardContent>
          <div>
            <Form
              onSubmit={(e) => {
                handleSubmit(e);
              }}
            >
              <Form.Field>
                <label>Product Category</label>
                <input
                  placeholder="Category"
                  type="text"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                />
              </Form.Field>
              <Form.Field>
                <label> Product Description</label>
                <input
                  placeholder="Description"
                  type="text"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </Form.Field>
              <Form.Field>
                <label> Product Price</label>
                <input
                  placeholder="Price"
                  type="number"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                />
              </Form.Field>

              <Form.Field>
                <label> Is product live? </label>
                <input
                  placeholder="live or not?"
                  type="text"
                  value={live}
                  onChange={(e) => setLive(e.target.value)}
                />
              </Form.Field>
              <Form.Field>
                <label> Product Quantity</label>
                <input
                  placeholder="Quantity"
                  type="number"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                />
              </Form.Field>
              <Form.Field>
                <label> Stock</label>
                <input
                  placeholder="stock"
                  type="number"
                  value={stock}
                  onChange={(e) => setStock(e.target.value)}
                />
              </Form.Field>
              <Form.Field>
                <label> Product Image</label>
                <input
                  placeholder="image name"
                  type="file"
                  value={image}
                  onChange={(e) => setImage(e.target.value)}
                />
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
