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
  privacyHead:{
    fontFamily: " Playfair Display",
    fontWeight: 700,
    fontSize:"25px",
    color:"#2D2C2C",
    marginBottom:"2%"
  },
  privacytext:{
    fontFamily: "Nunito Sans",
    fontWeight: 300,
    fontSize:"16px",
    color:"#202123"
  }
};
const TermsAndConditions = () => {
  return (
    <>
      <Grid container style={{ margin: "75px 0" }}>
        <Grid item xs={10} style={{ margin: "0 auto" }}>
          <Box style={styles.box1}>
            <Typography variant="h3" style={styles.boxTypo1}>
              Terms and Conditions
            </Typography>
            <Typography style={styles.privacytext}>
              These terms and conditions ("Terms") govern your use of ELEGLAM website and any products or services
              offered through the Website. By accessing or using the Website,
              you agree to be bound by these Terms. If you do not agree to these
              Terms, please refrain from using the Website. <br /><br />
            </Typography>
            <Typography variant="body1" style={styles.privacyHead}>
              1. Website Use:
            </Typography>
            <Typography style={styles.privacytext}>
              a. You must be at least 18 years old to use the Website. By using
              the Website, you represent that you are at least 18 years old or
              have the legal capacity to enter into these Terms. <br />
              b. You agree to use the Website only for lawful purposes and in
              compliance with all applicable laws and regulations. <br />
              <br />
            </Typography>
            <Typography variant="body1" style={styles.privacyHead}>
              2. Account Registration:
            </Typography>
            <Typography style={styles.privacytext} >
              a. In order to access certain features of the Website, you may be
              required to create an account. You agree to provide accurate,
              current, and complete information during the registration process
              and to keep your account information updated.
              <br />
              b. You are responsible for maintaining the confidentiality of your
              account credentials and for any activities that occur under your
              account. You agree to notify us immediately of any unauthorized
              use of your account or any other breach of security. <br />
              <br />
            </Typography>
            <Typography variant="body1" style={styles.privacyHead}>
              3. Product Purchases:
            </Typography>
            <Typography style={styles.privacytext} >
              a. All purchases made through the Website are subject to our
              Shipping Policy, Refund Policy, and Privacy Policy.
              <br />
              b. Prices for products and services are subject to change without
              notice. We reserve the right to modify or discontinue any product
              or service at any time. <br />
              <br />
            </Typography>
            <Typography variant="body1" style={styles.privacyHead}>
              4. Intellectual Property:
            </Typography>
            <Typography style={styles.privacytext} >
              a. The content on the Website, including text, graphics, logos,
              images, and software, is protected by copyright, trademark, and
              other intellectual property laws. You may not reproduce,
              distribute, modify, or create derivative works of any content
              without our prior written consent.
              <br />
              b. You retain ownership of any content you submit or upload to the
              Website. By submitting or uploading content, you grant us a
              non-exclusive, royalty-free, perpetual, irrevocable, and
              sublicensable right to use, reproduce, modify, adapt, publish,
              translate, distribute, and display such content worldwide.
              <br />
              <br />
            </Typography>
            <Typography variant="body1" style={styles.privacyHead}>
              5. Limitation of Liability:
            </Typography>
            <Typography style={styles.privacytext} >
              a. To the fullest extent permitted by law, we shall not be liable
              for any indirect, incidental, special, consequential, or punitive
              damages, or any loss of profits or revenue, arising out of or in
              connection with your use of the Website or any products or
              services purchased through the Website.
              <br />
              b. Our total liability for any claim arising out of or relating to
              these Terms or the Website shall not exceed the amount paid by you
              for the product or service giving rise to the claim.
              <br />
              <br />
            </Typography>
            <Typography variant="body1" style={styles.privacyHead}>
              6. Indemnification:
            </Typography>
            <Typography style={styles.privacytext} >
              You agree to indemnify, defend, and hold harmless [Your Company
              Name], its affiliates, officers, directors, employees, agents, and
              licensors from and against any and all claims, liabilities,
              damages, losses, costs, expenses, or fees (including reasonable
              attorneys' fees) arising out of or in connection with your use of
              the Website or any violation of these Terms.
              <br />
              <br />
            </Typography>
            <Typography variant="body1" style={styles.privacyHead}>
              7. Governing Law and Jurisdiction:
            </Typography>
            <Typography style={styles.privacytext} >
              These Terms shall be governed by and construed in accordance with
              the laws of Indian Laws, without regard to its conflict of laws
              principles. Any dispute arising out of or relating to these Terms
              or the Website shall be subject to the exclusive jurisdiction of
              the courts located in Chandigarh.
              <br />
              <br />
            </Typography>
            <Typography variant="body1" style={styles.privacyHead}>
              8. Changes to Terms:
            </Typography>
            <Typography style={styles.privacytext} >
              We reserve the right to update or modify these Terms at any time
              without prior notice. Any changes will be effective immediately
              upon posting on the Website. Your continued use of the Website
              after the posting of revised Terms constitutes your acceptance of
              the changes.
              <br />
              <br />
            </Typography>
            <Typography variant="body1" style={styles.privacyHead}>
            9. Contact Us:
            </Typography>
            <Typography style={styles.privacytext} >
            If you have any questions or concerns about these Terms, please contact us at 1800-309-1817, www.Eleglam.co



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

export default TermsAndConditions;
