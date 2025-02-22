import { Box, Grid, Typography } from "@material-ui/core";
import React from "react";

const styles = {
  box1: {
    margin: "10px",
  },
  boxTypo1: {
    fontFamily: "Playfair Display",
    fontWeight: 700,
    marginBottom: "20px",
  },
  boxTypo2: {
    fontFamily: "Nunito Sans",
    fontWeight: 300,
  },
  privacyHead: {
    fontFamily: " Playfair Display",
    fontWeight: 700,
    fontSize: "25px",
    color: "#2D2C2C",
    marginBottom: "2%",
  },
  privacytext: {
    fontFamily: "Nunito Sans",
    fontWeight: 300,
    fontSize: "16px",
    color: "#202123",
  },
};
const TermsAndConditions = () => {
  return (
    <>
      <Grid container style={{ margin: "75px 0" }}>
        <Grid item xs={10} style={{ margin: "0 auto" }}>
          <Box style={styles.box1}>
            <Typography variant="h3" style={styles.boxTypo1}>
              Shipping Policy <br />
            </Typography>
            {/* <Typography style={styles.privacytext}>
              These terms and conditions ("Terms") govern your use of [Your
              Company Name] website ("Website") and any products or services
              offered through the Website. By accessing or using the Website,
              you agree to be bound by these Terms. If you do not agree to these
              Terms, please refrain from using the Website. <br />
              <br />
            </Typography> */}
          
            <Typography variant="body1" style={styles.privacyHead}>
              1. Shipping Times:
            </Typography>
            <Typography style={styles.privacytext}>
              Shipping times vary depending on the shipping method selected and
              your location. Estimated delivery times will be provided during
              the checkout process. <br/>
              The shipping delivery time is for 7 days and order processing time is 3 days.
              <br />
              <br />
            </Typography>
            <Typography variant="body1" style={styles.privacyHead}>
              2. Order Processing Time:
            </Typography>
            <Typography style={styles.privacytext}>
              Orders are typically processed and shipped within 7 business
              days from the date of purchase. Please note that orders placed on
              weekends or holidays may be processed on the next business day.
              <br />
              <br />
            </Typography>
            <Typography variant="body1" style={styles.privacyHead}>
              3. Tracking Information:
            </Typography>
            <Typography style={styles.privacytext}>
              Once your order has been shipped, you will receive a shipping
              confirmation email containing tracking information. You can use
              this information to track the status of your delivery online.
              <br />
              <br />
            </Typography>
            <Typography variant="body1" style={styles.privacyHead}>
              4. Shipping Costs:
            </Typography>
            <Typography style={styles.privacytext}>
              Shipping costs are calculated based on the weight of your order,
              the shipping method selected, and your location. Shipping costs
              will be displayed during the checkout process before you finalize
              your purchase.
              <br />
              <br />
            </Typography>
            <Typography variant="body1" style={styles.privacyHead}>
              5. Shipping Restrictions:
            </Typography>
            <Typography style={styles.privacytext}>
              Some items may be subject to shipping restrictions due to their
              size, weight, or content. Additionally, certain products may not
              be eligible for international shipping due to customs regulations.
              Please review the product details and shipping restrictions
              carefully before placing your order.
              <br />
              <br />
            </Typography>
            <Typography variant="body1" style={styles.privacyHead}>
              6. Shipping Insurance:
            </Typography>
            <Typography style={styles.privacytext}>
              We offer shipping insurance for an additional fee to provide
              protection against loss or damage during transit. If you would
              like to purchase shipping insurance for your order, please select
              this option during checkout.
              <br />
              <br />
            </Typography>
            <Typography variant="body1" style={styles.privacyHead}>
              7. Delivery Attempts:
            </Typography>
            <Typography style={styles.privacytext}>
              Our shipping carriers will make multiple attempts to deliver your
              order to the address provided. If no one is available to receive
              the package after multiple attempts, the package may be returned
              to us, and additional shipping fees may apply for re-delivery.
              <br />
              <br />
            </Typography>
            <Typography variant="body1" style={styles.privacyHead}>
              8. Address Accuracy:
            </Typography>
            <Typography style={styles.privacytext}>
              Please ensure that the shipping address provided during checkout
              is accurate and complete. We are not responsible for orders that
              are lost or delayed due to incorrect or incomplete shipping
              information provided by the customer.
              <br />
              <br />
            </Typography>
            <Typography variant="body1" style={styles.privacyHead}>
              9. Delivery Attempts:
            </Typography>
            <Typography style={styles.privacytext}>
              If you have any questions or concerns regarding our shipping
              policy, please don't hesitate to contact us at 1800-309-1817,
              www.Eleglam.co
              <br />
              <br />
            </Typography>
          </Box>
         
        </Grid>
      </Grid>
    </>
  );
};

export default TermsAndConditions;
