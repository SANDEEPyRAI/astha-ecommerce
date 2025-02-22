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
const RefundPolicy = () => {
  return (
    <>
      <Grid container style={{ margin: "75px 0" }}>
        <Grid item xs={10} style={{ margin: "0 auto" }}>
          <Box style={styles.box1}>
            <Typography variant="h3" style={styles.boxTypo1}>
              Refund Policy
            </Typography>
            <Typography style={styles.privacytext}>
              At ELEGLAM Services Technology Private Limited, we strive to ensure
              customer satisfaction with every purchase and subscription.
              However, we understand that there may be instances where you need
              to request a refund. Please read the following policy carefully to
              understand your options regarding refunds:.
              <br />
              <br />
            </Typography>
            <Typography variant="body1" style={styles.privacyHead}>
              1. Refund Eligibility:
            </Typography>
            <Typography style={styles.privacytext}>
              a. E-commerce Platform:
              <br />
              Physical Goods: You are eligible for a refund if the item you
              purchased arrives damaged, defective, or significantly different
              from what was described on our website
              <br /> Digital Goods: Refunds for digital products such as
              e-books, software, or downloadable content will be provided only
              if there is a technical issue preventing access or if the product
              does not perform as advertised.
              <br />
              b. Subscription Business Model (e.g., GFM Prime):
              <br />
              Annual Subscriptions: Annually Subscriptions: Refunds for yearly
              subscription fees will be provided if the request is made within
              10 days of the initial purchase. After 7 working days, refunds
              will be prorated based on the remaining subscription period.
              <br />
              <br />
            </Typography>
            <Typography variant="body1" style={styles.privacyHead}>
              2. Refund Process:
            </Typography>
            <Typography style={styles.privacytext}>
              To request a refund, please follow these steps:
              <br />
              Contact our customer support team at 1800-309-1817,
              www.Eleglam.co, and provide details of your purchase or
              subscription.
              <br />
              Include any relevant documentation, such as order confirmation
              emails or screenshots, to expedite the process.
              <br />
              Our team will review your request and respond within 2-3 business
              days with instructions on how to proceed.
              <br />
              <br />
            </Typography>
            <Typography variant="body1" style={styles.privacyHead}>
              3. Refund Methods:
            </Typography>
            <Typography style={styles.privacytext}>
              Refunds will be issued using the original payment method whenever
              possible. If this is not feasible, refunds will be provided via
              bank transfer.
              <br />
              your refund will be processed, and a credit will automatically be
              applied to your original method of payment within 7 days.
              <br />
              <br />
            </Typography>
            <Typography variant="body1" style={styles.privacyHead}>
              4. Non-Refundable Items:
            </Typography>
            <Typography style={styles.privacytext}>
              Please note that certain items may not be eligible for refunds,
              including:
              <br />
              Products or services that have been used or consumed. <br />
              Items damaged due to misuse or mishandling. <br />
              Digital products accessed or downloaded beyond the refund period.{" "}
              <br />
              <br />
            </Typography>
            <Typography variant="body1" style={styles.privacyHead}>
              5. Charge-backs:
            </Typography>
            <Typography style={styles.privacytext}>
              If you initiate a charge-back with your credit card company or
              payment provider without first contacting us for a refund, we
              reserve the right to dispute the charge-back and may pursue legal
              action to recover the disputed amount.
              <br />
              <br />
            </Typography>
            <Typography variant="body1" style={styles.privacyHead}>
              6. Exceptions:
            </Typography>
            <Typography style={styles.privacytext}>
              In rare circumstances, exceptions to this refund policy may be
              granted at the discretion of ELEGLAM Services Technology Private
              Limited management.
              <br />
              <br />
            </Typography>
            <Typography variant="body1" style={styles.privacyHead}>
              7. Contact Us:
            </Typography>
            <Typography style={styles.privacytext}>
              If you have any questions or concerns regarding our refund policy,
              please don't hesitate to contact us at 1800-309-1817,
              www.Eleglam.co
              <br />
              <br />
            </Typography>
            <Typography variant="body1" style={styles.privacyHead}>
              8. Return Policy:
            </Typography>
            <Typography style={styles.privacytext}>
              You have 7 days to return an item from the date you received it.
              To be eligible for a return, your item must be unused and in the
              same condition that you received it. Your item must be in the
              original packaging.
              <br />
              Your item needs to have the receipt or proof of purchase.
              <br />
              <br />
            </Typography>
          </Box>
          {/* <Box style={styles.box1}>
            <Typography variant="h4" style={styles.boxTypo1}>
              Natural Products
            </Typography>
            <Typography style={styles.boxTypo2}>
              In publishing and graphic design, Lorem ipsum is a placeholder
              text commonly used to demonstrate the visual form of a document or
              a typeface without relying on meaningful content. Lorem ipsum may
              be used as a placeholder before the final copy is available. In
              publishing and graphic design, Lorem ipsum is a placeholder text
              commonly used to demonstrate the visual form of a document or a
              typeface without relying on meaningful content. Lorem ipsum may be
              used as a placeholder before the final copy is available. In
              publishing and graphic design, Lorem ipsum is a placeholder text
              commonly used to demonstrate the visual form of a document or a
              typeface without relying on meaningful content. Lorem ipsum may be
              used as a placeholder before the final copy is available.
            </Typography>
          </Box>
          <Box style={styles.box1}>
            <Typography variant="h4" style={styles.boxTypo1}>
              Natural Products
            </Typography>
            <Typography style={styles.boxTypo2}>
              In publishing and graphic design, Lorem ipsum is a placeholder
              text commonly used to demonstrate the visual form of a document or
              a typeface without relying on meaningful content. Lorem ipsum may
              be used as a placeholder before the final copy is available. In
              publishing and graphic design, Lorem ipsum is a placeholder text
              commonly used to demonstrate the visual form of a document or a
              typeface without relying on meaningful content. Lorem ipsum may be
              used as a placeholder before the final copy is available. In
              publishing and graphic design, Lorem ipsum is a placeholder text
              commonly used to demonstrate the visual form of a document or a
              typeface without relying on meaningful content. Lorem ipsum may be
              used as a placeholder before the final copy is available.
            </Typography>
          </Box>
          <Box style={styles.box1}> 
            <Typography variant="h4" style={styles.boxTypo1}>
              Natural Products
            </Typography>
            <Typography style={styles.boxTypo2}>
              In publishing and graphic design, Lorem ipsum is a placeholder
              text commonly used to demonstrate the visual form of a document or
              a typeface without relying on meaningful content. Lorem ipsum may
              be used as a placeholder before the final copy is available. In
              publishing and graphic design, Lorem ipsum is a placeholder text
              commonly used to demonstrate the visual form of a document or a
              typeface without relying on meaningful content. Lorem ipsum may be
              used as a placeholder before the final copy is available. In
              publishing and graphic design, Lorem ipsum is a placeholder text
              commonly used to demonstrate the visual form of a document or a
              typeface without relying on meaningful content. Lorem ipsum may be
              used as a placeholder before the final copy is available.
            </Typography>
          </Box> */}
        </Grid>
      </Grid>
    </>
  );
};

export default RefundPolicy;
