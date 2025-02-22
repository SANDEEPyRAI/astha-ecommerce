/* eslint-disable no-dupe-keys */
import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  Divider,
  Grid,
  Paper,
  MenuItem,
  FormControl,
  Link,
  Select,
  Typography,
  TextField,
  InputAdornment,
} from "@material-ui/core";
import { KeyboardDatePicker } from "@material-ui/pickers";
import Arrow from "../Images/arrow.png";
import Calender from "../Images/calender.png";
import Search from "../Images/search.png";
import Product from "../Images/product.jpeg";
import { makeStyles } from "@material-ui/core/styles";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import KeyboardArrowDownSharpIcon from "@material-ui/icons/KeyboardArrowDownSharp";

import ArrowBackIcon from "@material-ui/icons/ArrowBack";
const menuProps = {
  getContentAnchorEl: null,
  anchorOrigin: {
    vertical: "bottom",
    horizontal: "left",
  },
  transformOrigin: {
    vertical: "top",
    horizontal: "left",
  },
  elevation: 0,
  PaperProps: {
    style: {
      maxHeight: 200,
    },
  },
};

const products = [
  {
    id: 1,
    name: "Good Best Tea",
    image: "product1.jpg",
    status: "Delivery in Progress",
    amount: "Rs. 270.00",
    quantity: "Qty:1",
    description: "Value/Size: 1kg",
  },
  {
    id: 2,
    name: "Good Best Tea",
    image: "product2.jpg",
    status: "Delivery in Progress",
    amount: "Rs. 270.00",
    quantity: "Qty:1",
    description: "Value/Size: 1kg",
  },
  {
    id: 3,
    name: "Good Best Tea",
    image: "product3.jpg",
    status: "Delivery in Progress",
    amount: "Rs. 270.00",
    quantity: "Qty:1",
    description: "Value/Size: 1kg",
  },
  {
    id: 4,
    name: "Good Best Tea",
    image: "product4.jpg",
    status: "Delivery in Progress",
    amount: "Rs. 270.00",
    quantity: "Qty:1",
    description: "Value/Size: 1kg",
  },
  {
    id: 4,
    name: "Good Best Tea",
    image: "product4.jpg",
    status: "Delivery in Progress",
    amount: "Rs. 270.00",
    quantity: "Qty:1",
    description: "Value/Size: 1kg",
  },
  {
    id: 4,
    name: "Good Best Tea",
    image: "product4.jpg",
    status: "Delivery in Progress",
    amount: "Rs. 270.00",
    quantity: "Qty:1",
    description: "Value/Size: 1kg",
  },
];

const useStyles = makeStyles((theme) => ({
  container: {
    width: "87%",
    margin: "0 auto", // Center the container
  },
  mainBox: {
    display: "flex",
  },
  mainBoxImg: {
    justifyContent: "center",
    alignSelf: "center",
    paddingRight: "25px",
    height: "100%",
  },
  divider: {
    marginTop: "25px",
    marginBottom: "20px",
    border: "1px  #D8D7D7",
  },
  searchBox: {
    display: "flex",
    marginBottom: theme.spacing(2),
  },
  valueText:{
    fontFamily: "Nunito Sans",
    fontSize: "14px",
    fontWeight: "400",
    lineHeight: "19.1px",
    
  },
  productBox: {
    marginBottom: theme.spacing(2),
    padding: theme.spacing(2.5),
    display: "flex",
    justifyContent: "space-between", // Align children to the ends
    border: "1px solid #33333333",
    marginTop: "35px",
  },
  image: {
    width: "7rem",
    height: "8rem",
    // marginRight: theme.spacing(2),
  },
  statusBox: {
    display:"flex", 
    flexDirection:"column",
    gap:"0.4rem",
  },
  selectDate: {
    marginLeft: "2rem",
    borderRadius: "10rem",
    border: "1px solid #ccc",
    padding: theme.spacing(2),
    display: "flex", // Make it a flex container
    alignItems: "center", // Center align the content vertically
    background: "#f0f0f0", // Add a background color
  },
  formkeyboardPicker: {
    width: "35%",
    height: "80%",
  },

  keyboardPicker: {
    marginLeft: "1.5rem",
    borderRadius: "10rem",
    // border: "1px solid #ccc",
    borderRadius: "100px",
    height: "100%",
    justifyContent: "center",
    // padding: theme.spacing(2),
    display: "flex", // Make it a flex container
    alignItems: "center", // Center align the content vertically
    background: "#f0f0f08f", // Add a background color
  },
  dropBox: {
    width: "20%",
    height: "80%",
    // border: "1px solid #ccc",

    borderRadius: "100px",
    marginLeft: "3%",

    "& .MuiSelect-select": {
      background: "none",
    },
  },
  select: {
    height: "100%",
    background: "#f0f0f08f",

    borderRadius: "100px",
  },
  all: {
    marginLeft: "1rem",
    borderRadius: "10rem",
    padding: theme.spacing(1),
    width: "7rem",
    border: "1px solid #D8D7D7",
    display: "flex", // Make it a flex container
    alignItems: "center", // Center align the content vertically
    background: "#f0f0f0", // Add a background color
  },
  calendarImage: {
    width: 30, // Increase the width of the calendar image
    marginRight: theme.spacing(1), // Add some space between the calendar image and the text field border
  },
  searchField: {
    borderRadius: "9rem", // Add border radius to the search field
    marginRight: theme.spacing(1), // Add spacing between the two input fields
    padding: theme.spacing(2), // Add padding to match TextField styling
    border: "none",
    background: "#f0f0f08f",
    width: "20rem", // Add border to match TextField styling
  },
  searchimg: {
    //  marginRight:"15px",
  },
  descriptionBox: {
    border: "0.5px solid #7E563D",
    borderRadius: "5px",
    padding: "2px 7px 2px 7px",
    height: "23px",
    marginLeft: "6px",
  },
}));

const MyOrderPage = () => {
  const classes = useStyles();

  return (
    <div style={{ marginTop: "2rem" }} className={classes.container}>
      <Box className={classes.mainBox}>
        <img src={Arrow} className={classes.mainBoxImg} alt="arrow" />
        <Typography
          variant="h5"
          component="h2"
          gutterBottom
          style={{
            // marginTop: "15px",
            fontFamily: "Playfair Display",
            fontSize: "30px",
            fontWeight: 700,
            lineHeight: "39.99px",
            textAlign: "left",
          }}
        >
          My Orders
        </Typography>
      </Box>
      <Divider className={classes.divider} />

      <div className={classes.searchBox}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <input
            type="text"
            placeholder="Search by product name..."
            className={classes.searchField}
          />
          <img src={Search} className={classes.searchimg} alt="search" />
          <FormControl fullWidth className={classes.formkeyboardPicker}>
            <KeyboardDatePicker
              className={classes.keyboardPicker}
              // value={toDateUserList}
              id="date-picker-dialog"
              format="DD/MM/YYYY"
              placeholder="-Select Date-"
              // disabled={!fromDateUserList}
              // onChange={handleToDateChangeUser}
              // minDate={fromDateUserList}
              keyboardIcon={
                <img
                  src="images/calender.png"
                  alt="calendar-icon"
                  className="keyboard"
                />
              }
              keyboardButtonProps={{
                "aria-label": "change date",
              }}
            />
          </FormControl>

          <FormControl fullWidth className={classes.dropBox}>
            <Select
              fullWidth
              displayEmpty
              className={classes.select}

              // MenuProps={menuProps}
              // value={selectUserListType}
              // onChange={handleSelectChangeUser}
            >
              <MenuItem value="">All</MenuItem>
              <MenuItem value="PENDING">Pending</MenuItem>
              <MenuItem value="CONFIRMED">Confirmed</MenuItem>
              <MenuItem value="IN_PROGRESS">In Progress</MenuItem>
              <MenuItem value="COMPLETED">Completed</MenuItem>
            </Select>
          </FormControl>
        </div>
      </div>

      {products.map((product) => (
        <div className={classes.productBox} key={product.id}>
          <div style={{display:"flex"}}>
            <img src={Product} alt={product.name} className={classes.image} />
            <div style={{ display:"flex", flexDirection:"column",gap:"0.4rem",marginLeft: "2rem" }}>
              <Typography variant="h5" style={{ fontWeight: "bold" }}>
                {product.name}
              </Typography>
              <Typography variant="h6" style={{ color: "green" }}>
                {product.amount}
              </Typography>
              <Typography variant="h7">{product.quantity}</Typography>
              <Typography variant="body2" className="classes.valueText">
                Value/Size:{" "}
                <span
                  className={classes.descriptionBox}
                  style={{
                    fontSize: "12px",
                    color: "#7E563D",
                    fontFamily: "Poppins",
                  }}
                >
                  1kg
                </span>
              </Typography>
            </div>
          </div>
         
            
    
          <div className={classes.statusBox}>
            <Typography
              variant="body1"
              style={{ textAlign: "right",
              fontFamily: "Nunito Sans",
              fontSize: "14px",
              fontWeight: "400",
              lineHeight: "16.37px",
               }}
            >
              {product.status}
            </Typography>
            <Link
              href="#"
              style={{ textAlign: "right", display: "block", color: "#317EC6",  fontFamily: "Nunito Sans",
              fontSize: "14px",
              fontWeight: "400",
              lineHeight: "16.37px" }}
            >
              View Details
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MyOrderPage;
