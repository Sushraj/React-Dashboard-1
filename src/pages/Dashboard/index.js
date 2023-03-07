import React from "react";
import DashboardHeader from "../../components/DashboardHeader";
import "../styles.css";

// import * as React from 'react';
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";
import productPng from "../../assets/images/product-list.png";
import sellerProfilePng from "../../assets/images/seller-profile.png";

function Dashboard() {
  let navigate = useNavigate();
  const allProductRouteChange = () => {
    let path = `orders`;
    navigate(path);
  };

  const sellerProfileRouteChange = () => {
    let path = `profile`;
    navigate(path);
  };

  const editProductRouteChange = () => {
    let path = `add-product`;
    navigate(path);
  };

  return (
    <>
      <div className="dashboard-content">
        <DashboardHeader btnText="Add Product" />
        <Grid container>
          <Grid item xs={6}>
            <Card className="dashboard-card-width">
              <CardContent className="dashboard-card-title">
                <Typography variant="h5" component="div">
                  All Products
                </Typography>

                <Typography variant="body2">
                  You will get Product List here
                  <br />
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  onClick={allProductRouteChange}
                  className="click-here-button"
                >
                  <span> Click Here</span>
                </Button>
              </CardActions>
              <span className="element-center-align">
                <img src={productPng} alt="productPng" />
              </span>
            </Card>
          </Grid>
          <Grid item xs={6}>
            <Card className="dashboard-card-width">
              <CardContent className="dashboard-card-title">
                <Typography variant="h5" component="div">
                  Seller Profile
                </Typography>
                <Typography variant="body2">
                  Welcome <strong>Amruta</strong>
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  onClick={sellerProfileRouteChange}
                  className="click-here-button"
                >
                  <span> Click Here</span>
                </Button>
              </CardActions>
              <span className="element-center-align">
                <img src={sellerProfilePng} alt="sellerProfilePng" />
              </span>
            </Card>
          </Grid>
        </Grid>
      </div>
    </>
  );
}

export default Dashboard;
