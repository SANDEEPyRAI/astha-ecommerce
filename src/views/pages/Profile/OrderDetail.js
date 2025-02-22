import React from "react";
import {
  makeStyles,
  Grid,
  Box,
  Divider,
  Typography,
  Step,
  StepLabel,
  Button,
  Stepper,
  StepIcon, // Add StepIcon import
} from "@material-ui/core";

import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import CheckCircleIcon from "@material-ui/icons/CheckCircle"; // Import icons you want to use
import HourglassEmptyIcon from "@material-ui/icons/HourglassEmpty";
import PersonIcon from "@material-ui/icons/Person";
import LocalShippingIcon from "@material-ui/icons/LocalShipping";
import LocalMallIcon from "@material-ui/icons/LocalMall";
import DoneIcon from "@material-ui/icons/Done";
import { stepConnectorClasses } from "@mui/material";

const useStyles = makeStyles((theme) => ({

  startBox:{
    display: "flex",
    marginLeft: "8%",
    marginTop: "3%",
    gap: "20px",
  },
  headBox:{
    display: "flex", 
    alignItems: "center"
  },
  headText:{
    fontFamily: "Playfair Display",
    fontSize: "30px",
    fontWeight: 700,
    lineHeight: "39.99px",
  },
  firstDivider:{
    marginTop: "3em", 
    width: "84%"
  },
  secondHeadBox:{
    display: "flex",
    marginLeft: "8%",
    marginTop: "2%",
    gap: "20px",
  },
  container: {
    width: "87%",
    margin: "0 auto", // Center the container
  },
  imgBox:{
    display: "flex",
    flexDirection: "column",
    gap: "0.4rem",
   
  },
  flex: {
    display: "flex",
  },
  firstProductBox:{
    display: "flex",
    flexDirection: "column",
    gap: "0.1rem",
    marginLeft: "2rem",
    marginTop:"2rem"
  },
  mainBoxImg: {
    justifyContent: "center",
    alignSelf: "center",
    paddingRight: "25px",
    height: "100%",
  },
  vertcalDivider:{
    height: "20px"
  },
  divider: {
    marginTop: "25px",
    marginBottom: "20px",
    border: "1px  #D8D7D7",
  },
  typo:{
    fontFamily: "Nunito Sans",
fontSize: "14px",
fontWeight: 600,
lineHeight: "20px",
  },
  headTypo:{
    fontFamily: "Playfair Display",
fontSize: "18px",
fontWeight: 600,
lineHeight: "20px",

  },
  ProductText:{
    fontFamily: "Playfair Display",
    fontSize: "20px",
    fontWeight: 700,
 marginTop:"5%",
    lineHeight: "26.66px",
  },
  ProductsecondText:{
    fontFamily: "Nunito Sans",
    fontSize: "16px",
    fontWeight: 600,
    lineHeight: "24.55px",
    color:"#4D8C40",
 
  },
  ProductCommonText:{
    fontFamily: "Nunito Sans",
    fontSize: "14px",
    fontWeight: 400,
    lineHeight: "24.55px",
     
    
  },
  lineThrough: {
    textDecoration: "line-through",
    color:"grey"
  },
  searchBox: {
    display: "flex",
    marginBottom: theme.spacing(2),
  },
  valueText: {
    fontFamily: "Nunito Sans",
    fontSize: "14px",
    fontWeight: "400",
    lineHeight: "19.1px",
  },
  payText:{
    fontFamily: "Nunito Sans",
    fontSize: "12px",
    fontWeight: "400",
    lineHeight: "16.37px",
 

  },
  ProductQuantityText:{
    fontFamily: "Nunito Sans",
    fontSize: "14px",
    fontWeight: "400",
    lineHeight: "19.1px",

  },
  productBox: {
    margin: "8%",
    width: "100%",
    marginBottom: theme.spacing(2),
    padding: theme.spacing(2.5),
    display: "flex",
    justifyContent: "space-between", // Align children to the ends
    border: "1px solid #33333333",
    marginTop: "15px",
  },
  image: {
    width: "7rem",
    height: "8rem",
    marginTop:"10%",
    // marginRight: theme.spacing(2),
  },
  statusBox: {
    display: "flex",
    flexDirection: "column",
    gap: "0.4rem",
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
  mainBox:{
display:"flex",

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
    fontSize: "12px",
    color: "#7E563D",
    fontFamily: "Poppins",
  },
  root: {
    width: "100%",
    marginTop: "3%",
    marginBottom: "15%",
    "& .MuiStepConnector-completed": {
      "& .MuiStepConnector-lineHorizontal": {
        border: "3.1px solid #4DB044",
      },
    },

    "& .MuiStep-completed + .MuiStep-horizontal .Mui-disabled .MuiStepConnector-line":{
      
        border: "3.1px solid #4DB044",
      
    },
    "& .MuiStepIcon-root": {
      fontSize: "30px",
    },

    "& .MuiStepIcon-root.MuiStepIcon-completed": {
      color: "#4DB044",
    },
    "& .MuiStepConnector-line": {
      display: "block",
      border: "3.1px solid #D9D9D9",
      marginTop: "5px",
    },
  },
  freeText:{
   color:"#7E563D"
  },

  rupeeText:{
    fontFamily: "Nunito Sans",
    fontSize: "14px",
    fontWeight: "bold",
    lineHeight: "16px",
    letterSpacing: "0.005em",
    
  },
  label:{
    fontFamily: "Nunito Sans",
fontSize: "16px",
fontWeight: 400,
color:"black",
lineHeight: "24.42px",
  },
  totalText:{
    fontFamily: "Nunito Sans",
    fontSize: "14px",
    fontWeight: "bold",
    lineHeight: "19.1px",

  },
  backButton: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  circleIcon: {
    width: 40,
    height: 40,
    borderRadius: "50%",
    border: "2px solid #D9D9D9",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "#7E563D",
  },
  imageIcon: {
  
    borderRadius: "50%",
  },
  completedCircle: {
    background: "#4DB044",
    border: "none",
  },
  incompletedCircle:{
  
    background: "#D9D9D9",
    border: "none",
  }
}));

function getSteps() {
  return [
    { label: "Order Placed", image: "image/blackRight.png", completedImage: "image/right.png" },
    { label: "Processing", image: "image/profile.png", completedImage: "image/right.png" },
    { label: "Packaging in Progress", image: "image/profile.png", completedImage: "image/right.png" },
    { label: "Delivery on the way", image: "image/delivery.png", completedImage: "image/right.png" },
    { label: "Delivered", image: "image/blackRight.png", completedImage: "image/right.png" },
  ];
}

function getStepContent(stepIndex) {
  switch (stepIndex) {
    case 0:
      return "Select campaign settings...";
    case 1:
      return "What is an ad group anyways?";
    case 2:
      return "This is the bit I really care about!";
    default:
      return "Unknown stepIndex";
  }
}

const Page3 = () => {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();
  // const [activeStep, setActiveStep] = React.useState(4);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };
  const product = {
    image: "/Image/eg-product-6.jpg",
    name: "Jwellery Traders",
      product: "Free Delivery",
      amount: " 180.00",
    quantity: "Qty: 1",
    description: "Best jwellery",
    text: "3 to 5 days expected delivery",
  };

  const personInfo = {
    name: "AAstha Eleglam",
    address: "New rajouri garden, Delhi-110022",
    phone: "+91-8978695865",
    email: "eleglam@gmail.com",
  };

  const paymentInfo = {
    subtotal: "Rs. 270.00",
    discount: "- Rs. 15.00",
    total: "Rs. 255.00",
    shipping: "Rs. 15 FREE",
  };
  const standard = "(Standard)";

  const grandTotal = "Rs. 255.00";

  return (
    <>
      <Grid container style={{background:"white"}}>
        <Box
        className={classes.startBox}
        >
          <Box  className={classes.headBox} >
            <ArrowBackIcon  className={classes.arrow} style={{ fontSize: 30 }} />
          </Box>
          <Box  className={classes.headBox}  >
            <Typography
            className={classes.headText} 
              variant="h2"
            >
              Order Detail
            </Typography>
          </Box>
        </Box>
        {/* divider */}
        <Grid container justifyContent="center">
          <Divider className={classes.firstDivider} />
        </Grid>

        <Box
        className={classes.secondHeadBox} 
        >
          <Box>
            <Typography className={classes.typo}>Ordered on 27 April 2023</Typography>
          </Box>
          <Box mx={1}>
            <Divider
              orientation="vertical"
              flexItem
              className={classes.vertcalDivider}
            />
          </Box>
          <Box>
            <Typography className={classes.typo}>Order# 407-9341958-9839552</Typography>
          </Box>
        </Box>

        {/* box */}

        <Box className={classes.productBox}>
        
          <Box className={classes.mainBox}  >
            <Box className={classes.imgBox}>
            <Typography variant="body1" className={classes.headTypo}>Product</Typography>
            <img src="image/greenTea.png" className={classes.image} />
            </Box>
            <Box
            className={classes.firstProductBox} 
            >
              <Typography variant="body2" className={classes.ProductText}  >
                {product.name}
              </Typography>
              <Typography variant="body2"  className={classes.ProductsecondText} >
                {product.amount}
              </Typography>
              <Typography variant="body2" className={classes.ProductQuantityText}>{product.quantity}</Typography>
              <Typography variant="body2" className={classes.valueText}>
                Value/Size:{" "}
                <span
                  className={classes.descriptionBox}
                >
                  1kg
                </span>
              </Typography>
            </Box>
          </Box>
          <Box className={classes.flex}>
            <Box
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.4rem",
                
              }}
            >
                <Typography variant="body1" className={classes.headTypo} >
                Deliver To
              </Typography>
              <Typography variant="body1" className={classes.ProductText} >
              {personInfo.name}
              </Typography>
              <Typography variant="body1" className={classes.ProductCommonText}>
                
              </Typography>
              <Typography variant="body2" className={classes.ProductCommonText}>
              {personInfo.address}
              </Typography>
              <Typography variant="body2" className={classes.ProductCommonText}>{personInfo.phone}</Typography>
              <Typography variant="body2" className={classes.ProductCommonText}>{personInfo.email}</Typography>
            </Box>
          </Box>
          <Box className={classes.flex}>
            <Box
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.4rem",
              }}
            >
              <Typography variant="body1" className={classes.headTypo} >
              Payment Details
              </Typography>
              <Box style={{display:"flex",marginTop:"5%",gap: "5rem",}}>
                <Box style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.7rem",
              }}>
              <Typography variant="body2"  className={classes.payText}>
              Subtotal
              </Typography>
              <Typography variant="body2" className={classes.payText}>Discount</Typography>
              <Typography variant="body2" className={classes.payText}>
              Total
              </Typography>
              <Typography variant="body2" className={classes.payText}>
              Shipping & Handling <br/>(Standard)
              </Typography>
              <Typography variant="body2" className={classes.totalText}>Grand Total</Typography>
              </Box>
              <Box style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.7rem",
              }}>
              <Typography variant="h6" className={classes.rupeeText}>
              {paymentInfo.subtotal}
              </Typography>
              <Typography variant="body2" className={classes.rupeeText}>{paymentInfo.discount}</Typography>
              <Typography variant="body2" className={classes.rupeeText}>
              {paymentInfo.total}
              </Typography>
              <Typography variant="body2" className={classes.rupeeText}>
              Rs. <span className={classes.lineThrough}>15</span> <span className={classes.freeText}>FREE</span>    
              </Typography>
        
              <Typography variant="body2" className={classes.rupeeText}>
              <br/>{grandTotal}
              </Typography>
          
              </Box>
              </Box>
            </Box>
          </Box>
        </Box>
        {/* Stepper */}

        <Box className={classes.root}>
        <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((step, index) => (
          <Step key={step.label} completed={activeStep >= index}>
            <StepLabel
              StepIconComponent={() => (
                <div className={`${classes.circleIcon} ${activeStep >= index ? classes.completedCircle : classes.incompletedCircle}`}>
                  <img src={activeStep >= index ? step.completedImage : step.image} alt={step.label} className={classes.imageIcon} />
                </div>
              )}
            >
             <Typography className={classes.label}>{step.label}</Typography> 
            </StepLabel>
          </Step>
        ))}
      </Stepper>
          <Box>
            {activeStep === steps.length ? (
              <div>
                <Typography className={classes.instructions}>
                  All steps completed
                </Typography>
                <Button onClick={handleReset}>Reset</Button>
              </div>
            ) : (
              <div>
                {/* <div>
                  <Button
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    className={classes.backButton}
                  >
                    Back
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                  >
                    {activeStep === steps.length - 1 ? "Finish" : "Next"}
                  </Button>
                </div> */}
              </div>
            )}
          </Box>
        </Box>
      </Grid>
    </>
  );
};

export default Page3;
