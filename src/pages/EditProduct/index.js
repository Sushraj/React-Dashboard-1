import { Card, CardContent } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Form, Button } from "semantic-ui-react";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";

function EditProduct() {
  let navigate = useNavigate();
  const Edit_Product_URL = "http://localhost:4000/update/";

  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [live, setLive] = useState(false);
  const [quantity, setQuantity] = useState("");
  const [stock, setStock] = useState(false);
  const [image, setImage] = useState("");
  const [productId, setProductId] = useState("");
  const [productCategory, setProductCategory] = useState("");

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("CATEGORY"));
    if (items) {
      setCategory(items);
    }

    setLive(JSON.parse(localStorage.getItem("LIVE")));
    setDescription(localStorage.getItem("PDESCRIPTION"));
    setPrice(JSON.parse(localStorage.getItem("PPRICE")));
    setQuantity(JSON.parse(localStorage.getItem("PQTY")));
    setStock(JSON.parse(localStorage.getItem("PSTOCK")));
    //setImage(JSON.parse(localStorage.getItem("PIMAGE")));
    setProductCategory(JSON.parse(localStorage.getItem("PCATEGORY")));
    setProductId(JSON.parse(localStorage.getItem("PID")));
  }, []);

  const handleUpdate = (e) => {
    // addChoreLog([choreDesc, name, date]);
    e.preventDefault();

    // we create payload for add product
    const payload = {
      productcategory: productCategory,
      productprice: price,
      stock: stock ? true : false,
      productqty: quantity,
      live: live ? true : false,
      productimage: image,
      productdesc: description,
    };

    axios
      .put(`${Edit_Product_URL}${productId}`, payload)
      .then(
        (response) => {
          //response.data
          alert("Updated Successfully!!");
          navigate("/orders");
        },
        (error) => {
          console.log(error);
        }
      )
      .then((data) => {
        console.log("data-->", data);

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
                handleUpdate(e);
              }}
            >
              <Form.Field>
                <label>Product Category</label>
                <input
                  placeholder="Category"
                  type="text"
                  value={productCategory}
                  onChange={(e) => setCategory(e.target.value)}
                />
              </Form.Field>
              {/* <Form.Field>
                <label>Product Name</label>
                <input placeholder="Name" type="text" />
              </Form.Field> */}
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
                  type="text"
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
