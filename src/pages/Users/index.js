import React , { useState, useEffect } from 'react'
import DashboardHeader from "../../components/DashboardHeader";
import { Button } from "semantic-ui-react";

import { calculateRange, sliceData } from "../../utils/table-pagination";

import "../styles.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Users() {

    const All_User_URL = "http://localhost:4000/customers";
    const DELETE_Product_URL = "http://localhost:4000/delProduct/5";
  
    const [eventDetails, setEventDetails] = useState([]);
    //const [isLoading, setIsLoading] = useState(false);
    function getEvents() {
      // setIsLoading(true);
      axios
        .get(All_User_URL)
        .then((response) => response.data)
        .then((data) => {
          console.log("data-->", data);
          setEventDetails(data);
          // setIsLoading(false);
        });
    }
  
    function deleteProduct() {
      // setIsLoading(true);
      axios
        .delete(DELETE_Product_URL)
        .then((response) => {
          console.log("dfghj---->", response);
          getEvents();
          alert("Deleted Successfully!!");
          navigate("/orders");
          //
        })
        .then((data) => {
          console.log("data-->", data);
          // setEventDetails(data);
          // setIsLoading(false);
        });
    }
  
    let navigate = useNavigate();
    function handleEdit(event) {
      console.log(event);
      localStorage.setItem("CATEGORY", JSON.stringify(event.category));
      localStorage.setItem("LIVE", JSON.stringify(event.live));
      localStorage.setItem("PCATEGORY", JSON.stringify(event.productcategory));
      localStorage.setItem("PDESCRIPTION", JSON.stringify(event.productdesc));
      localStorage.setItem("PID", JSON.stringify(event.productid));
      localStorage.setItem("PIMAGE", JSON.stringify(event.productimage));
      localStorage.setItem("PPRICE", JSON.stringify(event.productprice));
      localStorage.setItem("PQTY", JSON.stringify(event.productqty));
      localStorage.setItem("PSTOCK", JSON.stringify(event.stock));
      navigate("/edit-product");
    }
  
    const [search, setSearch] = useState("");
    const [orders, setOrders] = useState(eventDetails);
    const [page, setPage] = useState(1);
    const [pagination, setPagination] = useState([]);
  
    useEffect(() => {
      getEvents();
      setPagination(calculateRange(eventDetails, 5));
      setOrders(sliceData(eventDetails, page, 5));
    }, []);
  
    // Search
    const __handleSearch = (event) => {
      console.log(event.target.value);
      setSearch(event.target.value);
      if (event.target.value !== "") {
        console.log("eventDetails-->", eventDetails);
        let search_results = eventDetails.filter((item) => {
          console.log("item-->", item);
          console.log("search-->", search);
          item.productcategory.includes(search);
          // ||
          // item.productcategory.toLowerCase().includes(search.toLowerCase()) ||
          // item.productdesc.toLowerCase().includes(search.toLowerCase())
        });
        setOrders(search_results);
      } else {
        __handleChangePage(1);
      }
    };
  
    // Change Page
    const __handleChangePage = (new_page) => {
      setPage(new_page);
      setOrders(sliceData(eventDetails, new_page, 5));
    };

    return (
        <div className="dashboard-content">
          {/* <DashboardHeader btnText="Add Product" /> */}
    
          <div className="dashboard-content-container">
            <div className="dashboard-content-header">
              <h2>User List</h2>
              <div className="dashboard-content-search">
                <input
                  type="text"
                  value={search}
                  placeholder="Search.."
                  className="dashboard-content-input"
                  onChange={(e) => __handleSearch(e)}
                />
              </div>
            </div>
    
            <table>
              <thead>
                <th>User ID</th>
                <th>User Name</th>
                <th>User Email</th>
                <th>User Password</th>
                <th>User Contact Number</th>
                <th>User City</th>
                <th>User Role</th>
                <th>Action</th>
              </thead>
    
              {eventDetails.length !== 0 ? (
                <tbody>
                  {eventDetails.map((order, index) => (
                    <tr key={index}>
                      <td>
                        <span>{order.productid}</span>
                      </td>
                      <td>
                        <span>{order.productcategory}</span>
                      </td>
                      <td>
                        <span>{order.productimage}</span>
                      </td>
                      <td>₹{order.productprice}</td>
                      <td>
                        <span>{order.productdesc}</span>
                      </td>
                      <td>
                        <span>{order.productqty}</span>
                      </td>
                      <td>
                        <span>{order.live ? "Active" : "Deactive"}</span>
                      </td>
                      <td>
                        <Button primary onClick={deleteProduct}>
                          Delete
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              ) : null}
            </table>
    
            {eventDetails.length !== 0 ? (
              <div className="dashboard-content-footer">
                {pagination.map((item, index) => (
                  <span
                    key={index}
                    className={item === page ? "active-pagination" : "pagination"}
                    onClick={() => __handleChangePage(item)}
                  >
                    {item}
                  </span>
                ))}
              </div>
            ) : (
              <div className="dashboard-content-footer">
                <span className="empty-table">No data</span>
              </div>
            )}
          </div>
        </div>
      );
}

export default Users