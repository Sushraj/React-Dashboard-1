import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import SideBar from "./components/Sidebar";
import sidebar_menu from "./constants/sidebar-menu";

import "./App.css";
import Orders from "./pages/Orders";
import Dashboard from "./pages/Dashboard";
import Products from "./pages/Products";
import Queries from "./pages/Queries";
import MyProfile from "./pages/My-profile";
import AddProduct from "./pages/AddProduct";
import EditProduct from "./pages/EditProduct";
import Logout from "./pages/Logout";

function App() {
  return (
    <Router>
      <div className="dashboard-container">
        <SideBar menu={sidebar_menu} />
        <div className="dashboard-body">
          <Routes>
            <Route path="*" element={<div></div>} />
            <Route exact path="/" element={<Dashboard />} />
            <Route exact path="/orders" element={<Orders />} />
            <Route exact path="/product" element={<Products />} />
            <Route exact path="/queries" element={<Queries />} />
            <Route exact path="/profile" element={<MyProfile />} />
            <Route exact path="/add-product" element={<AddProduct />} />
            <Route exact path="/edit-product" element={<EditProduct />} />
            <Route exact path="/logout" element={<Logout />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
