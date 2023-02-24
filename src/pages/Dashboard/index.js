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

function Dashboard() {
  

  let navigate = useNavigate(); 
  const allProductRouteChange = () =>{ 
    let path = `orders`; 
    navigate(path);
  }

  const sellerProfileRouteChange = () =>{ 
    let path = `profile`; 
    navigate(path);
  }

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
            <Card sx={{ minWidth: 275 }} className="dashboard-card-width">
              <CardContent>
              
                <Typography variant="h5" component="div">
                  All Products
                </Typography>
               
                <Typography variant="body2">
                 You will get Product List here
                  <br />
                 
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" onClick={allProductRouteChange}>Click Here</Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={6}>
            <Card sx={{ minWidth: 275 }} className="dashboard-card-width">
              <CardContent>
              <Typography variant="h5" component="div">
                  Seller Profile
                </Typography>
                <Typography variant="body2">
                  Welcome <strong>Amruta</strong>
                 </Typography> 
              </CardContent>
              <CardActions>
                <Button size="small" onClick={sellerProfileRouteChange}>Click Here</Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </div>
    </>
  );
}

export default Dashboard;
