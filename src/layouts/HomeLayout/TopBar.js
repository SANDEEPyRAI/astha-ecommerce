/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useMemo, useState } from "react";
import {
  AppBar,
  Box,
  Button,
  TextField,
  Divider,
  Drawer,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Toolbar,
  Typography,
  InputBase,
  Paper,
  useMediaQuery,
} from "@material-ui/core";
import Slide from "@mui/material/Slide";
import { useTheme } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import SearchIcon from "@material-ui/icons/Search";
import { Link, useLocation } from "react-router-dom";
import CloseIcon from "@material-ui/icons/Close";
import RemoveIcon from "@material-ui/icons/Remove";
import AddIcon from "@material-ui/icons/Add";
import { makeStyles } from "@material-ui/styles";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../../context/Auth";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import CustomizedDialogs from "./ProfileDialog";
import { apiConfig } from "src/apiconfig/ApiConfig";
import axios from "axios";
import { toast } from "react-hot-toast";
import { Transition } from "react-transition-group";
import ScrollingTitle from "./ScrollTitle";

const useStyles = makeStyles((theme) => ({
  searchForm: {
    position: "relative",
  },
  searchField: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    width: 0,
    transition: "width 400ms ease",
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  home: {
    color: "#7E563D",
    fontFamily: "Nunito Sans",
    fontWeight: "400",
    fontSize: "16px",
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    // margin: "0 80px",
    padding: "0 20px",
    // "@media (max-width: 1100px)": {
    //   margin: "0 20px",
    // },
    // "@media (max-width: 400px)": {
    //   margin: "0px -10px",
    // },
    // Align items to the right
  },
  logoImage: {
    height: "72px",
    width: "auto",
    "@media (max-width: 600px)": {
      height: "48px",
    },
  },
  appBar: {
    // position: "sticky",
    backgroundColor: "#ECDACE",
    boxShadow: "2px",
    // width:"100%"
  },
  logo: {
    border: "none",
    alignItems: "center",
  },
  smallDevice: {
    margin: "0 1%",
  },
  ul: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    listStyleType: "none",
  },
  link: {
    marginLeft: "20px",
    // color: activeTab === "link" ? "#7E563D" : "#7E563D", // Orange if active, else default color
    fontFamily: "Nunito Sans",
    fontWeight: "600px",
    fontSize: "16px",
    "@media (max-width: 800px)": {
      fontSize: "10px",
    },
  },

  button: {
    // textDecoration: "none",
    color: "#7E563D",
    fontFamily: "Nunito Sans",
    fontWeight: "600px",
    fontSize: "16px",
    textTransform: "none",
    "@media (max-width: 800px)": {
      fontSize: "10px",
    },
    "&:hover": {
      backgroundColor: "white !important",
      color: "#7E563D",
    },
    "&:active": {
      backgroundColor: "white !important",
      color: "#7E563D",
    },
  },
  divider: {
    width: "1px",
    height: "30px",
    color: "#E7E7E7",
    backgroundColor: "#E7E7E7",
    orientation: "vertical",
    marginLeft: "20px",
  },
  cart: {
    marginLeft: "20px",
    cursor: "pointer",
  },
  loginButton: {
    marginLeft: "20px",

    backgroundColor: "#7E563D",
    // padding:"10px",
    height: "40px",
    width: "120px",
    borderRadius: "30px",
    textTransform: "none",
    color: "white",
    fontWeight: "600px",
    fontSize: "16px",
    textDecoration: "none",
    "&:hover": {
      backgroundColor: "#7E563D !important",
    },
    "&:active": {
      backgroundColor: "#7E563D !important",
    },
    "@media (max-width: 900px)": {
      height: "30px",
      marginLeft: "10px",
      width: "90px",
    },
    "@media (max-width: 400px)": {
      height: "25px",
      marginLeft: "5px",
      width: "60px",
      fontSize: "12px",
    },
  },
  shopingCartBox: {
    margin: "5%",
    display: "flex",
    justifyContent: "space-between",
  },
  shopingCartBox2: {
    margin: "5%",
    display: "flex",
    justifyContent: "center",
  },
  yourCart: {
    color: "#2D2C2C",
    fontSize: "20px",
    fontWeight: "700",
    fontFamily: "Playfair Display",
  },
  emptyCart: {
    color: "rgba(38, 38, 40, 0.6)",
    fontSize: "16px",
    fontWeight: "400",
    fontFamily: "Nunito Sans",
  },
  divider2: {
    height: "1px",
    width: "100%",
    color: "#E7E7E7",
    backgroundColor: "#E7E7E7",
  },
  cancel: {
    cursor: "pointer",
    height: "27px",
    width: "27px",
    backgroundColor: "#7E563D",
    borderRadius: "50px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  cart: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "5%",
  },
  cartLogin: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "5%",
  },
  moreAboutButton: {
    marginTop: "20px",
    backgroundColor: "#7E563D",
    padding: "10px 20px",
    height: "50px",
    width: "256px",
    borderRadius: "30px",
    textTransform: "none",
    color: "white",
    fontWeight: "600px",
    fontSize: "16px",
    "&:hover": {
      backgroundColor: "#7E563D !important",
    },
    "&:active": {
      backgroundColor: "#7E563D !important",
    },
  },
  divider3: {
    height: "1px",
    margin: "20px 0px",
    color: "#E7E7E7",
    backgroundColor: "#E7E7E7",
  },
  viewCart: {
    marginTop: "20px",
    backgroundColor: "#7E563D",
    padding: "10px 20px",
    height: "50px",
    width: "256px",
    border: "1px solid #7E563D",
    borderRadius: "30px",
    textTransform: "none",
    color: "#262626",
    fontWeight: "600px",
    fontSize: "16px",
    "&:hover": {
      backgroundColor: "#7E563D !important",
    },
    "&:active": {
      backgroundColor: "#7E563D !important",
    },
  },
  afterLoginCart: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "5%",
  },
  profileBox: {
    height: "40px",
    width: "40px",
    borderRadius: "50px",
  },
  drawer: {
    width: "370px",
    [theme.breakpoints.down("sm")]: {
      width: "300px",
    },
    [theme.breakpoints.down("xs")]: {
      width: "250px",
    },
  },
  active: {
    color: "#7E563D",
    fontFamily: "Nunito Sans",
    fontWeight: "400",
    fontSize: "16px",
  },
}));

function Header() {
  const [quantity, setQuantity] = useState({});

  const handleIncrement = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
    setprice((prevPrice) => (prevPrice / (quantity || 1)) * (quantity + 1));
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
      setprice((prevPrice) => (prevPrice / (quantity || 1)) * (quantity - 1));
    }
  };
  const theme = useTheme();
  const history = useHistory();
  const islogin = useContext(AuthContext);
  const location = useLocation();
  // console.log(islogin.userLoggedIn);
  const { userDetails, profileAPi } = useContext(AuthContext);

  useEffect(() => {
    profileAPi();
  }, []);

  //profile modal
  const [openProfileModal, setOpenProfileModal] = useState(false);

  //   const handleClickOpen = () => {
  //     setOpenProfileModal(true);
  // };
  const handleClose = () => {
    console.log("HandlerClosed Call at Parent");
    setOpenProfileModal((prev) => !prev);
  };

  const [openSearch, setOpenSearch] = useState(false);

  const handleSearchIconClick = () => {
    setOpenSearch(!openSearch);
  };
  console.log("openProfileModalopenProfileModal", openProfileModal);
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [buttonClicked, setButtonClicked] = useState(false);
  // const [activeTab, setActiveTab] = useState("");
  const [cartValue, setCartValue] = useState(1);
  const [cart, setCart] = useState([]);
  const [price, setprice] = useState("");
  const [activeButton, setActiveButton] = useState("");

  const classes = useStyles();
  // Update handleTabClick to set the active button
  const handleTabClick = (tabName) => {
    setActiveButton(tabName);
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
        setCart(res?.data?.cart);
        setQuantity(cart[0]?.quantity);
        setprice(cart[0]?.productId?.inventory[0].price);
        console.log("Cart Response...", res?.data?.cart);
      } else {
        console.log(
          res.data?.responseMessage || "Something went wrong. Please try again."
        );
        return null;
      }
    } catch (error) {
      setCart([]);
      console.log(
        error?.response?.data?.responseMessage ||
          "Something went wrong. Please try again."
      );
    }
  };

  useEffect(() => {
    getCart();
  }, []);

  const addAndRemoveCart = async (id, quantity) => {
    try {
      const res = await axios({
        method: "POST",
        url: apiConfig.addAndRemoveCart,
        headers: {
          token: window.sessionStorage.getItem("ELEGLAMToken"),
        },
        data: {
          productId: id,
          quantity: quantity,
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

  const toggleDrawer2 = () => {
    setDrawerOpen(!drawerOpen);
    setButtonClicked(!buttonClicked);
  };

  const handleButtonClick = () => {
    setButtonClicked(!buttonClicked);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  //----------Shoping Drawer
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setState({ ...state, [anchor]: open });
    getCart();
  };

  const list = (
    <Box>
      <Box className={classes.shopingCartBox}>
        <Typography className={classes.yourCart}>Your Cart</Typography>
        <Box className={classes.cancel} onClick={toggleDrawer("right", false)}>
          <CloseIcon style={{ color: "#7E563D" }} />
        </Box>
      </Box>
      <Divider className={classes.divider2} />
      <Box className={classes.cart}>
        <img
          src="Image/cartimage.png"
          alt="shopping"
          height={100}
          width={100}
        />
      </Box>
      <Box className={classes.shopingCartBox2}>
        <Typography className={classes.emptyCart}>
          Your cart is currently empty.
        </Typography>
      </Box>
      {!islogin.userLoggedIn && (
        <Box className={classes.cartLogin}>
          <Button
            className={classes.moreAboutButton}
            onClick={() => {
              history.push("/sign-in");
            }}
          >
            Sign In & Continue Shopping
          </Button>
        </Box>
      )}
    </Box>
  );

  const list2 = (
    <Box>
      <Box className={classes.shopingCartBox}>
        <Typography className={classes.yourCart}>Your Cart</Typography>
        <Box className={classes.cancel} onClick={toggleDrawer("right", false)}>
          <CloseIcon style={{ color: "#7E563D" }} />
        </Box>
      </Box>
      <Divider className={classes.divider2} />

      <Grid container>
        <Grid item xs={12} sm={4} md={4} lg={4}>
          <Box style={{ padding: "10%" }}>
            <img
              src={cart[0]?.productId?.productImage[0]}
              alt="Img"
              style={{ height: "100%", width: "100%" }}
            />
          </Box>
        </Grid>
        <Grid item xs={12} sm={8} md={8} lg={8}>
          <Box style={{ padding: "0 25% 0 10%" }}>
            <Typography
              style={{
                fontFamily: "Playfair Display",
                fontWeight: "700",
                fontSize: "18px",
              }}
            >
              {cart[0]?.productId?.name}
            </Typography>
            <Typography
              style={{
                fontFamily: "Nunito Sans",
                fontWeight: "400",
                fontSize: "16px",
                marginTop: "10px",
                color: "rgba(38, 38, 40, 0.6)",
              }}
            >
              {cart[0]?.productId?.inventory[0].size}&nbsp;
              {cart[0]?.productId?.inventory[0].unit}
            </Typography>
            <Typography
              style={{
                fontFamily: "Nunito Sans",
                fontWeight: "700",
                fontSize: "18px",
                marginTop: "10px",
                color: "rgba(77, 140, 64, 1)",
              }}
            >
              Rs. {cart[0]?.productId?.inventory[0].price}.00
            </Typography>

            <Box
              style={{
                display: "flex",
                flexDirection: "row",
                marginTop: "10px",
              }}
            >
              <Box
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "30px",
                  width: "30px",
                  border: "1px solid #E9E9E9",
                  borderRadius: "10px 0px 0px 10px",
                  cursor: "pointer",
                }}
              >
                <RemoveIcon
                  onClick={handleDecrement}
                  style={{ color: "#7E563D" }}
                />
              </Box>

              <Box
                style={{
                  height: "30px",
                  width: "30px",
                  border: "1px solid #E9E9E9",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Typography
                  style={{
                    fontFamily: "Playfair Display",
                    fontSize: "18px",
                    fontWeight: "400",
                  }}
                >
                  {quantity}
                </Typography>
              </Box>

              <Box
                style={{
                  height: "30px",
                  width: "30px",
                  border: "1px solid #E9E9E9",
                  borderRadius: "0px 10px 10px 0px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  cursor: "pointer",
                }}
              >
                <AddIcon
                  onClick={handleIncrement}
                  style={{ color: "#7E563D" }}
                />
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
      <Divider className={classes.divider3} />

      <Box
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          padding: "0  25px",
        }}
      >
        <Typography
          style={{
            fontFamily: "Nunito Sans",
            fontSize: "18px",
            fontWeight: "700",
          }}
        >
          Total{" "}
        </Typography>
        <Typography
          style={{
            fontFamily: "Nunito Sans",
            fontSize: "18px",
            fontWeight: "700",
          }}
        >
          Rs. {cart[0]?.quantity * price}.00
        </Typography>
      </Box>
      <Divider className={classes.divider3} />

      <Typography
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "rgba(38, 38, 40, 0.6)",
          fontFamily: "Nunito Sans",
          fontSize: "16px",
          fontWeight: "400",
          padding: "0 25px",
          textWrap: "wrap",
        }}
      >
        Shipping, taxes, and discount will be calculated at checkout
      </Typography>

      <Box className={classes.afterLoginCart}>
        <Button className={classes.moreAboutButton}>
          {" "}
          Proceed to Checkout
        </Button>
        <Button
          className={classes.viewCart}
          onClick={() => {
            addAndRemoveCart(cart[0]?.productId?._id, quantity);
            history.push({ pathname: "/my-cart" });
          }}
        >
          {" "}
          View Cart
        </Button>
      </Box>
    </Box>
  );

  const Modal = useMemo(() => {
    return (
      <CustomizedDialogs
        openProfileModal={openProfileModal}
        handleClose={handleClose}
      />
    );
  }, [openProfileModal]);
  return (
    <>
      <AppBar className={classes.appBar}>
        <ScrollingTitle />
        <Box className={classes.toolbar}>
          <Box
            onClick={scrollToTop}
            className={classes.logoImage}
            component={Link}
            to="/"
          >
            <img
              src="/Image/eg-logo.jpg"
              style={{ height: "100%", width: "auto" }}
              alt="Logo"
              className={classes.logo}
            />
          </Box>
          <Box className={classes.ul}>
            <Button
              component={Link}
              to="/about-us"
              onClick={() => handleTabClick("aboutus")}
              className={
                location.pathname === "/about-us"
                  ? classes.active
                  : classes.home
              }
            >
              About Us
            </Button>

            <Divider className={classes.divider} />
            {islogin.userLoggedIn && (
              <Link to="/product-wishlist">
                <IconButton>
                  <FavoriteIcon
                    style={
                      location.pathname !== "/product-wishlist"
                        ? { color: "#7E563DCC" }
                        : { color: "#7E563D" }
                    }
                  />
                </IconButton>
              </Link>
            )}

            <IconButton
              // onClick={toggleDrawer("right", true)}
              onClick={() => {
                history.push("/my-cart");
              }}
            >
              <ShoppingCartIcon style={{ color: "#7E563D" }} />
            </IconButton>
            {/* <IconButton >
        <SearchIcon />
      </IconButton> */}
            <Box className={classes.searchForm}>
              <Transition
                in={openSearch}
                timeout={500}
                mountOnEnter
                unmountOnExit
              >
                {(state) => (
                  <Slide
                    direction="bottom"
                    in={state === "entered"}
                    mountOnEnter
                    unmountOnExit
                  >
                    <TextField
                      placeholder="Search"
                      inputProps={{
                        style: {
                          border: "2px solid orange",
                          borderRadius: "15px",
                          height: "5px",
                        },
                      }}
                      color="warning"
                    />
                  </Slide>
                )}
              </Transition>
              {/* <IconButton onClick={handleSearchIconClick}>
        <SearchIcon />
      </IconButton> */}
            </Box>

            {!islogin.userLoggedIn ? (
              <Button
                className={classes.loginButton}
                onClick={() => {
                  history.push("/sign-in");
                }}
              >
                <Link
                  to="/sign-in"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  Sign In
                </Link>
              </Button>
            ) : (
              <Box style={{ display: "flex", gap: "10px" }}>
                <Box
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "0px",
                  }}
                >
                  <Typography
                    style={{
                      color: "#7E563D",
                      fontWeight: "400",
                      fontSize: "12px",
                      fontFamily: "Nunito Sans",
                    }}
                  >
                    Hello {userDetails?.firstName}
                  </Typography>
                  <Box
                    style={{
                      display: "flex",
                      alignItems: "center",
                      cursor: "pointer",
                    }}
                    onClick={() => setOpenProfileModal(true)}
                  >
                    <Typography
                      style={{
                        color: "#7E563D",
                        fontWeight: "600",
                        fontSize: "14px",
                        fontFamily: "Nunito Sans",
                      }}
                    >
                      Your Account
                    </Typography>
                    <ArrowDropDownIcon style={{ color: "#636880" }} />
                  </Box>
                </Box>
                <Box
                  className={classes.profileBox}
                  onClick={() => {
                    history.push();
                  }}
                >
                  <img
                    src={userDetails?.profilePic}
                    alt="profileLogo "
                    height="100%"
                    width="100%"
                    style={{ borderRadius: "50%" }}
                  />
                </Box>
              </Box>
            )}
            {Modal}
          </Box>
        </Box>
      </AppBar>
      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer2}>
        <List>
          <ListItem
            button
            onClick={() => {
              toggleDrawer2();
              handleButtonClick();
            }}
          >
            <ListItemText>
              <Link to="/" className={classes.link}>
                Home
              </Link>
            </ListItemText>
          </ListItem>

          <ListItem
            button
            onClick={() => {
              toggleDrawer2();
              handleButtonClick();
            }}
          >
            <ListItemText>
              <Link to="/about-us" className={classes.link}>
                About Us
              </Link>
            </ListItemText>
          </ListItem>
          <ListItem
            button
            onClick={() => {
              toggleDrawer2();
              handleButtonClick();
            }}
          >
            <ListItemText>
              <Link to="/contact-us" className={classes.link}>
                Contact Us
              </Link>
            </ListItemText>
          </ListItem>
        </List>
      </Drawer>

      <Drawer
        anchor="right"
        open={state["right"]}
        onClose={toggleDrawer("right", false)}
        classes={{ paper: classes.drawer }}
      >
        {islogin.userLoggedIn
          ? cart && cart.length === 0
            ? list
            : list2
          : list}
      </Drawer>
    </>
  );
}

export default Header;
