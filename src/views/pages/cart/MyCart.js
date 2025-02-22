import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Grid,
  Typography,
  Button,
  TextField,
  Divider,
  Box,
  Radio,
  Link,
  FormControl,
  RadioGroup,
  FormControlLabel,
} from "@material-ui/core";
import { IoIosArrowRoundBack } from "react-icons/io";
import { RiDeleteBin5Fill } from "react-icons/ri";
import RemoveIcon from "@material-ui/icons/Remove";
import AddIcon from "@material-ui/icons/Add";
import axios from "axios";
import { apiConfig } from "src/apiconfig/ApiConfig";
import toast from "react-hot-toast";
import NoDataFound from "src/component/NoDataFound";
import { useHistory } from "react-router-dom";
import AddAddress from "./AddAddress";

const useStyles = makeStyles((theme) => ({
  cartContainer: {
    padding: "4rem 10%",
    background:"white",
    [theme.breakpoints.down("md")]: {
      padding: "0.8rem 6%",
    },
    [theme.breakpoints.down("xs")]: {
      padding: "0.8rem 2%",
    },
    "& .headingContainer": {
      display: "flex",
      alignItems: "center",

      "& .heading": {
        fontSize: "30px",
        fontWeight: 600,
        fontFamily: "Poppins",
        marginLeft: "10px",
      },
    },
    "& .productBox": {
      marginTop: "2rem",
      // width: "100%",
      border: "1px solid rgba(51, 51, 51, 0.2)",
      "& .text": {
        fontSize: "15px",
        fontWeight: 400,
        fontFamily: "Open Sans",
        padding: "5px 10px",
      },
      "& .productInfo": {
        // width: "100%",
        padding: "15px 10px",
        display: "flex",
        [theme.breakpoints.down("xs")]: {
          flexDirection: "column",
          justifyContent: "center",
        },

        "& .imgContainer": {
          height: "200px",
          width: "218px",
        },
        "& .details": {
          padding: "0 15px",
          width: "100%",
          "& .namebox": {
            // width: "100%",
            display: "flex",
            justifyContent: "space-between",
            paddingTop: "5px",
            "& .nameText": {
              fontSize: "18px",
              fontWeight: 600,
              fontFamily: "Poppins",
              paddingTop: "5px",
            },
          },
          "& .price": {
            fontSize: "16px",
            fontWeight: 600,
            fontFamily: "Poppins",
            color: "rgba(91, 140, 86, 1)",
          },
          " .quantity": {
            fontSize: "15px",
            fontWeight: 400,
            fontFamily: "Poppins",
            color: "rgba(51, 51, 51, 1)",
            padding: "3px 0",
          },
          "& .size": {
            fontSize: "14px",
            fontWeight: 400,
            fontFamily: "Poppins",
            color: "rgba(51, 51, 51, 1)",
            "& .sizeStyle": {
              border: "0.5px solid rgba(247, 147, 30, 1)",
              borderRadius: "5px",
              padding: "2px 8px",
              fontSize: "12px",
              fontWeight: 400,
              fontFamily: "Poppins",
            },
          },
          "& .date": {
            fontSize: "12px",
            fontWeight: 400,
            fontFamily: "Poppins",
            color: "rgba(51, 51, 51, 1)",
            margin: "3px 0",
            "& .dateStyle": {
              fontSize: "14px",
              fontWeight: 400,
              fontFamily: "Poppins",
              color: "rgba(38, 38, 38, 1)",
            },
          },
          "& .addRemoveCont": {
            width: "100%",
            marginTop: "10px",
            display: "flex",
            justifyContent: "space-between",
            "& .addRemove": {
              display: "flex",
              "& .add": {
                border: "0.5px solid rgba(247, 147, 30, 1)",
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
              },
              "& .remove": {
                border: "0.5px solid rgba(247, 147, 30, 1)",
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
              },
            },
            "& .view": {
              fontSize: "14px",
              fontWeight: 400,
              fontFamily: "Poppins",
              color: "rgba(22, 147, 200, 1)",
              cursor: "pointer",
              textDecoration: "underline",
            },
          },
        },
      },
    },
    "& .proceedBox": {
      margin: "2rem 25px",
      "& .couponsCont": {
        backgroundColor: "rgba(245, 245, 245, 1)",
        padding: "15px 20px",
        "& .cuponText": {
          fontSize: "14px",
          fontWeight: 600,
          LineHeight: "21px",
          fontFamily: "Poppins",
          color: "rgba(0, 0, 0, 1)",
          marginBottom: "10px",
        },
        "& .cuponhead": {
          display: "flex",
          justifyContent: "space-between",
          marginTop: "15px",
          "& .imgText": {
            display: "flex",
            "& .apply": {
              paddingLeft: "12px",
              fontSize: "12px",
              fontWeight: "400",
              fontFamily: "Poppins",
              color: "rgba(34, 34, 34, 1)",
            },
          },
          "& .price": {
            fontSize: "14px",
            fontWeight: "400",
            fontFamily: "Poppins",
            color: "rgba(0, 0, 0, 1)",
          },
        },
        "& .fieldButton": {
          marginTop: "10px",
          paddingBottom: "10px",
        },
      },
      "& .summeryContainer": {
        marginTop: "15px",
        backgroundColor: "rgba(245, 245, 245, 1)",
        padding: "15px 20px",
        "& .order": {
          fontSize: "14px",
          fontWeight: "600",
          fontFamily: "Poppins",
          color: "#000",
          marginBottom: "8px",
        },
        "& .summery": {
          display: "flex",
          marginTop: "8px",
          justifyContent: "space-between",
          "& .summeryDetail": {
            fontSize: "12px",
            fontWeight: "400",
            fontFamily: "Poppins",
            lineHeight: "18px",
            color: "#222222",
          },
          "& .summeryInfo": { 
            fontSize: "14px",
            fontWeight: "400",
            fontFamily: "Poppins",
            lineHeight: "16px",
            color: "#000000",
          },
        },
      },
    },
    "& .delivery": {
      margin: "4rem 0 0 0",
      "& .adddress": {
        padding: "0 10px",
        fontSize: "20px",
        fontWeight: "700",
        fontFamily: "Playfair Display",
        color: "#2D2C2C",
      },
    },
    "& .addressBox": {
      border: "1px solid #D9D9D9",
      padding: "15px 15px",
      "& .nameBox": {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        "& .name": {
          fontSize: "16px",
          fontWeight: "700",
          fontFamily: "Playfair Display",
          color: "#2D2C2C",
          lineHeight: "21px",
        },
      },
      "& .information": {
        fontSize: "14px",
        fontWeight: "600",
        fontFamily: "Nunito Sans",
        color: "#4F4F4F",
        lineHeight: "19px",
      },
    },
    "& .paymentMode": {
      fontSize: "15px",
      fontWeight: "400",
      fontFamily: "Poppins",
      color: "rgba(2, 2, 2, 1)",
      padding: "8px 10px",
    },
    "& .options": {
      fontSize: "16px",
      fontWeight: "600",
      fontFamily: "Poppins",
      color: "rgba(2, 2, 2, 1)",
    },
    "& .continue": {
      minWidth: "250px",
      height: "50px",
      backgroundColor: "rgba(247, 147, 30, 1)",
      fontSize: "16px",
      fontWeight: "600",
      fontFamily: "Nunito Sans",
      color: "rgba(255, 255, 255, 1)",
      borderRadius: "30px",
    },
  },
}));



const MyCart = () => {
  const classes = useStyles();
  const history = useHistory();
  // const [cart, setCart] = useState([]);
  const cart = [
    {
      image: "/Image/eg-product-1.jpg",
      trader: "Jwellery Traders",
      product: "Free Delivery",
      price: " 180.00",
      originalPrice: " 200.00",
    },
    {
      image: "/Image/eg-product-2.jpg",
      trader: "Jwellery Traders",
      product: "Free Delivery",
      price: " 180.00",
      originalPrice: " 200.00",
    },
    {
      image: "/Image/eg-product-3.jpg",
      trader: "Jwellery Traders",
      product: "Free Delivery",
      price: " 180.00",
      originalPrice: " 200.00",
    },
    {
      image: "/Image/eg-product-4.jpg",
      trader: "Jwellery Traders",
      product: "Free Delivery",
      price: " 180.00",
      originalPrice: " 200.00",
    },
    {
      image: "/Image/eg-product-5.jpg",
      trader: "Jwellery Traders",
      product: "Free Delivery",
      price: " 180.00",
      originalPrice: " 200.00",
    },
    {
      image: "/Image/eg-product-6.jpg",
      trader: "Jwellery Traders",
      product: "Free Delivery",
      price: " 180.00",
      originalPrice: " 200.00",
    },
    {
      image: "/Image/eg-product-7.jpg",
      trader: "Jwellery Traders",
      product: "Free Delivery",
      price: " 180.00",
      originalPrice: " 200.00",
    },
    {
      image: "/Image/eg-product-8.jpg",
      trader: "Jwellery Traders",
      product: "Free Delivery",
      price: " 180.00",
      originalPrice: " 200.00",
    },
    {
      image: "/Image/eg-product-9.jpg",
      trader: "Jwellery Traders",
      product: "Free Delivery",
      price: " 180.00",
      originalPrice: " 200.00",
    },
    {
      image: "/Image/eg-product-10.jpg",
      trader: "Jwellery Traders",
      product: "Free Delivery",
      price: " 180.00",
      originalPrice: " 200.00",
    },
  ];
  const [address, setAddress] = useState([]);
  const [value, setValue] = useState(null);
  const [isEdit, setIsEdit] = useState(false);
  const [editAddress, setEditAddress] = useState({});
  const [showAddress, setShowAddress] = useState(false);

  const handleShowAddress = () => {
    setShowAddress(!showAddress);
  };

  const addOrUpdateAddress = async (values) => {
    console.log("Form values", values);
    try {
      const res = await axios({
        method: "POST",
        url: apiConfig.addOrUpdateAddress,
        headers: {
          token: window.sessionStorage.getItem("ELEGLAMToken"),
        },
        data: {
          firstName: values.firstName,
          lastName: values.lastName,
          addressLine1: values.addressLine1,
          city: values.city,
          state: values.state,
          postalCode: values.postalCode,
          country: values.country,
          phone: values.phone,
          email: values.email,
          isDefault: 'true',
          addressId: values._id
        },
      });
      if (res.data?.responseCode === 200) {
        toast.success(res.data?.responseMessage);
      } else {
        toast.error(
          res.data?.responseMessage || "Something went wrong. Please try again."
        );
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  const handleChange = (event,values) => {
    setValue(event.target.value);
    console.log("form values...",values)
    addOrUpdateAddress(values);
  };

  const getCart = async () => {
    try {
      const res = await axios({
        method: "GET",
        url: apiConfig.getCart,
        headers: {
          token: window.sessionStorage.getItem("ELEGLAMToken"),
        },
      });
      if (res.data?.responseCode === 200) {
        // setCart(res?.data?.cart);
        console.log("Cart Response...", res?.data?.cart);
      } else {
        console.log(
        res.data?.responseMessage || "Something went wrong. Please try again."
        );
        return null;
      }
    } catch (error) {
      // setCart([]);
      console.log(
        error?.response?.data?.responseMessage ||
          "Something went wrong. Please try again."
      );
    }
  };
  const fetchAddresses = async () => {
    try {
      const res = await axios({
        method: "GET",
        url: apiConfig.fetchAddresses,
        headers: {
          token: window.sessionStorage.getItem("ELEGLAMToken"),
        },
      });
      if (res.data?.responseCode === 200) {
        setAddress(res?.data?.result);
        console.log("address Response...", res?.data?.result);
      } else {
        console.log(
          res.data?.responseMessage || "Something went wrong. Please try again."
        );
        return null;
      }
    } catch (error) {
      console.log(
        error?.response?.data?.responseMessage ||
          "Something went wrong. Please try again."
      );
    }
  };

  useEffect(() => {
    getCart();
    fetchAddresses();
  }, []);

  const addAndRemoveCart = async (id, key) => {
    try {
      const res = await axios({
        method: "POST",
        url: apiConfig.addAndRemoveCart,
        headers: {
          token: window.sessionStorage.getItem("ELEGLAMToken"),
        },
        data: {
          productId: id,
          addAndRemoveCartKey: key,
        },
      });
      if (res.data?.responseCode === 200) {
        // console.log("Cart...",res.data?.result)
        toast.success(res.data?.responseMessage);
        getCart();
      } else {
        toast.error(
          res.data?.responseMessage || "Something went wrong. Please try again."
        );
      }
    } catch (error) {
      toast.error(
        error?.response?.data?.responseMessage ||
          "Something went wrong. Please try again."
      );
    }
  };
  const deleteCartProduct = async (id) => {
    try {
      const res = await axios({
        method: "DELETE",
        url: apiConfig.deleteCartProduct,
        headers: {
          token: window.sessionStorage.getItem("ELEGLAMToken"),
        },
        data: {
          productId: id,
        },
      });
      if (res.data?.responseCode === 200) {
        // console.log("Cart...",res.data?.result)
        toast.success(res.data?.responseMessage);
        getCart();
      } else {
        toast.error(
          res.data?.responseMessage || "Something went wrong. Please try again."
        );
      }
    } catch (error) {
      toast.error(
        error?.response?.data?.responseMessage ||
          "Something went wrong. Please try again."
      );
    }
  };

  const deleteAddress = async (id) => {
    try {
      const res = await axios({
        method: "DELETE",
        url: apiConfig.deleteAddress,
        headers: {
          token: window.sessionStorage.getItem("ELEGLAMToken"),
        },
        data: {
          addressId: id,
        },
      });
      if (res.data?.responseCode === 200) {
        // console.log("Cart...",res.data?.result)
        toast.success(res.data?.responseMessage);
        fetchAddresses();
      } else {
        toast.error(
          res.data?.responseMessage || "Something went wrong. Please try again."
        );
      }
    } catch (error) {
      toast.error(
        error?.response?.data?.responseMessage ||
          "Something went wrong. Please try again."
      );
    }
  };

  return (
    <>
      {cart && cart?.length === 0 ? (
        <NoDataFound
          content={"Explore more and shortlist some items."}
          headingText={"Wishlist"}
        />
      ) : (
        <Box className={classes.cartContainer}>
          <Box className="headingContainer">
            <IoIosArrowRoundBack
              style={{ fontSize: "25px", cursor: "pointer" }}
              onClick={() => history.goBack()}
            />
            <Typography className="heading">My Cart</Typography>
          </Box>
          <Grid container>
            <Grid item xs={12} sm={12} md={8} lg={8}>
              <Box className="productBox">
                <Typography className="text">Products</Typography>
                <Divider />
                <Grid container>
                  {cart.map((value, i) => (
                    <Grid item xs={12} sm={12} key={i}>
                      <Box className="productInfo">
                        <Box className="imgContainer">
                          <img
                            src={value?.image}
                            alt="Img"
                            height="100%"
                            width="100%"
                          />
                        </Box>
                        <Box className="details">
                          <Box className="namebox">
                            <Typography className="nameText">
                              {value?.trader}
                            </Typography>
                            <RiDeleteBin5Fill
                              onClick={() => {
                                deleteCartProduct(value?.productId?._id);
                              }}
                              style={{
                                color: "rgba(247, 147, 30, 1)",
                                cursor: "pointer",
                              }}
                            />
                          </Box>
                          <Typography className="price">
                            Rs. {value?.price}
                          </Typography>
                          <Typography className="date">
                           Expected Delivery in 3-5 Days.
                          </Typography>
                          <Typography className="quantity">
                            Qty: 1
                          </Typography>
                          <Box className="addRemoveCont">
                            <Box className="addRemove">
                              <Box className="add">
                                <RemoveIcon
                                  style={{ color: "#7E563D" }}
                                />
                              </Box>
                              <Typography style={{ padding: "0 15px" }}>
                                1
                              </Typography>
                              <Box className="remove">
                                <AddIcon
                                  style={{ color: "#7E563D" }}
                                />
                              </Box>
                            </Box>
                            <Link
                              className="view"
                              onClick={() =>
                                history.push({
                                  pathname: "/productDetail-page",
                                  query: { value },
                                })
                              }
                            >
                              View Details
                            </Link>
                          </Box>
                          
                          
                        </Box>
                      </Box>
                      <Divider />
                    </Grid>
                  ))}
                </Grid>
              </Box>
            </Grid>
            <Grid xs={12} sm={12} md={4} lg={4}>
              <Box className="proceedBox">
               
                <Box className="summeryContainer">
                  <Typography className="order">
                    Order Summary{" "}
                    <span style={{ fontWeight: "400" }}>(2 Items)</span>
                  </Typography>
                  <Divider />
                  <Box className="summery">
                    <Typography className="summeryDetail">Subtotal</Typography>
                    <Typography className="summeryInfo">Rs. 270.00</Typography>
                  </Box>
                  <Box className="summery">
                    <Typography className="summeryDetail">Discount</Typography>
                    <Typography className="summeryInfo">- Rs. 15.00</Typography>
                  </Box>
                  <Box className="summery">
                    <Typography className="summeryDetail">Total</Typography>
                    <Typography className="summeryInfo">Rs. 255.00</Typography>
                  </Box>
                  <Box className="summery">
                    <Typography className="summeryDetail">
                      Shipping & Handling
                    </Typography>
                    <Typography className="summeryInfo">
                      Rs. <del style={{ color: "#A1A1A1" }}> 75 </del>
                      <span style={{ color: "#7E563D" }}>FREE</span>
                    </Typography>
                  </Box>
                  <Typography
                    style={{
                      fontSize: "12px",
                      fontWeight: "400",
                      fontFamily: "Poppins",
                      lineHeight: "18px",
                      color: "#222222",
                    }}
                  >
                    (Standard)
                  </Typography>
                  <Divider style={{ marginTop: "5px", marginBottom: "10px" }} />
                  <Box className="summery">
                    <Typography
                      className="summeryInfo"
                      style={{ fontWeight: "500" }}
                    >
                      Grand Total
                    </Typography>
                    <Typography
                      className="summeryInfo"
                      style={{ fontWeight: "600" }}
                    >
                      Rs. 255.00
                    </Typography>
                  </Box>
                  <Button
                    variant="contained"
                    fullWidth
                    style={{
                      // color: "#7E563D",
                      // backgroundColor: "#7E563D",
                      fontSize: "16px",
                      fontWeight: "600",
                      marginTop: "20px",
                    }}
                  >
                    Proceed To Checkout
                  </Button>
                </Box>
              </Box>
            </Grid>
          </Grid>
          <Box className="delivery">
            <Typography className="adddress" variant="H3">Delivery Address</Typography>
          </Box>
          <Grid container>
            {address &&
              address.map((values, i) => (
                <Grid
                  item
                  xs={12}
                  sm={12}
                  md={8}
                  key={i}
                  style={{ paddingLeft: "10px" }}
                >
                  <Box className="addressBox">
                    <Box className="nameBox">
                      <Typography className="name">
                        {values.firstName}&nbsp;{values.lastName}
                      </Typography>
                      <FormControl component="fieldset">
                        <RadioGroup
                          name="address1"
                          value={value}
                          onChange={(event) => handleChange(event, values)}
                        >
                          <FormControlLabel
                            key={i}
                            value={values._id}
                            control={<Radio />}
                          />
                        </RadioGroup>
                      </FormControl>
                    </Box>
                    <Typography className="information">
                      {values.addressLine1}&nbsp;{values.addressLine2}&nbsp;
                      {values.city}&nbsp;{values.state}&nbsp;{values.postalCode}
                      &nbsp;{values.country}
                    </Typography>
                    <Typography className="information">
                      {values.phone}
                    </Typography>
                    <Typography className="information">
                      {values.email}
                    </Typography>
                    <Box style={{ marginTop: "20px", marginBottom: "10px" }}>
                      <Link
                        style={{
                          fontSize: "14px",
                          fontWeight: 400,
                          fontFamily: "Poppins",
                          color: "rgba(22, 147, 200, 1)",
                          cursor: "pointer",
                          textDecoration: "underline",
                        }}
                        onClick={() => {
                          setIsEdit(true);
                          setEditAddress(values);
                          handleShowAddress();
                        }}
                      >
                        Edit Address
                      </Link>
                      <Link
                        style={{
                          fontSize: "14px",
                          fontWeight: 400,
                          fontFamily: "Poppins",
                          color: "#F95656",
                          cursor: "pointer",
                          textDecoration: "underline",
                          marginLeft: "30px",
                        }}
                        onClick={() => deleteAddress(values._id)}
                      >
                        Remove
                      </Link>
                    </Box>
                  </Box>
                </Grid>
              ))}
          </Grid>
          <Box style={{ margin: "18px 0", padding: "0 10px" }}>
            <Typography
              style={{
                fontSize: "16px",
                fontWeight: 600,
                fontFamily: "Nunito Sans",
                color: "#1693C8",
                cursor: "pointer",
                textDecoration: "underline",
              }}
              onClick={() => {
                setIsEdit(false);
                handleShowAddress();
              }}
            >
              + Add Address
            </Typography>
          </Box>

          {showAddress && (
            <Grid container>
              <Grid item xs={12} sm={12} md={8} style={{ marginTop: "1.5rem" }}>
                <Box>
                  <AddAddress editAddress={editAddress} isEdit={isEdit} />
                </Box>
              </Grid>
            </Grid>
          )}

          <Box style={{ margin: "2rem 0 0 0", padding: "0 10px" }}>
            <Typography
              style={{
                fontSize: "20px",
                fontWeight: "600",
                fontFamily: "Playfair Display",
                lineHeight: "26px",
                color: "#262626",
              }}
            >
              Choose Payment Method{" "}
            </Typography>
          </Box>
          <Grid container>
            <Grid item xs={12} sm={12} md={8} style={{ marginTop: "1.5rem" }}>
              <Box style={{ border: "1px solid rgba(51, 51, 51, 0.2)" }}>
                <Typography className="paymentMode">
                  Choose Payment Mode
                </Typography>
                <Divider />
                <FormControl component="fieldset" style={{ width: "100%" }}>
                  <RadioGroup name="">
                    <Box
                      style={{
                        display: "flex",
                        alignItems: "center",
                        padding: "15px 10px",
                      }}
                    >
                      <FormControlLabel value="Cash" control={<Radio />} />
                      <Typography className="options">
                        Cash On Delivery
                      </Typography>
                    </Box>
                    <Divider style={{ width: "100%" }} />
                    <Box
                      style={{
                        display: "flex",
                        alignItems: "center",
                        padding: "15px 10px",
                      }}
                    >
                      <FormControlLabel value="Payment" control={<Radio />} />
                      <Typography className="options">
                        Payment Gateway
                      </Typography>
                    </Box>
                  </RadioGroup>
                </FormControl>
              </Box>
            </Grid>
          </Grid>
          <Box
            style={{
              display: "flex",
              justifyContent: "center",
              margin: "2rem 0",
            }}
          >
            <Button variant="contained" className="continue">
              Continue
            </Button>
          </Box>
        </Box>
      )}
    </>
  );
};

export default MyCart;
