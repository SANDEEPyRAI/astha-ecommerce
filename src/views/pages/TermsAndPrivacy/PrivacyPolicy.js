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
    // fontSize:"18"
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
const PrivacyPolicy = () => {
  return (
    <>
      <Grid container style={{ margin: "75px 0%" }}>
        <Grid item xs={10} style={{ margin: "0 auto" }}>
          <Box style={styles.box1}>
            <Typography variant="h3" style={styles.boxTypo1}>
              PRIVACY POLICY
            </Typography>
            <Typography style={styles.privacytext}>
              At ELEGLAM Services Technology Private Limited, we are committed to
              protecting your privacy and ensuring the security of your personal
              information. This Privacy Policy outlines how we collect, use, and
              safeguard your data when you visit our website or use our
              services. <br/> <br/>
            </Typography>

            <Typography variant="body1" style={styles.privacyHead}>
              1. Information We Collect:
            </Typography>
            <Typography style={styles.privacytext}>
              a. Personal Information: When you create an account, place an
              order, or interact with our website, we may collect personal
              information such as your name, email address, shipping address,
              billing address, phone number, and payment details. <br />
            </Typography>
            <Typography style={styles.privacytext}>
              b. Usage Information: We may also collect non-personal information
              about your interactions with our website, such as your IP address,
              browser type, device information, and browsing behavio
              <br />{" "}
            </Typography>
            <Typography variant="body1" style={styles.privacyHead}>
              <br /> 2. How We Use Your Information:
            </Typography>
            <Typography style={styles.privacytext}>
              a. Order Processing: We use your personal information to process
              and fulfill your orders, communicate with you about your
              purchases, and provide customer support. <br />
              b. Account Management: Your personal information may be used to
              create and manage your account, including account registration,
              login authentication, and password recovery.
              <br />
              c. Marketing Communications: With your consent, we may send you
              promotional emails and marketing communications about our
              products, services, and special offers. You can opt out of these
              communications at any time.
              <br />
              d. Website Improvement: We use usage information to analyze
              trends, track user interactions, and improve the performance and
              usability of our website. <br />
            </Typography>
            <Typography variant="body1" style={styles.privacyHead}>
              <br /> 3. Information Sharing:
            </Typography>
            <Typography style={styles.privacytext}>
              a. Third-Party Service Providers: We may share your personal
              information with third-party service providers who assist us in
              processing payments, fulfilling orders, delivering packages, and
              other business operations. These service providers are
              contractually obligated to protect your information and only use
              it for the purposes specified by us. <br />
              b. Legal Compliance: We may disclose your information when
              required by law, to comply with legal processes, or to protect our
              rights, property, or safety, or the rights, property, or safety of
              others.
              <br />
            </Typography>
            <Typography variant="body1" style={styles.privacyHead}>
              <br />
              4. Data Security:
            </Typography>
            <Typography style={styles.privacytext}>
              We implement appropriate security measures to protect your
              personal information from unauthorized access, alteration,
              disclosure, or destruction. However, no method of transmission
              over the internet or electronic storage is 100% secure, and we
              cannot guarantee absolute security.
              <br />
            </Typography>
            <Typography variant="body1" style={styles.privacyHead}>
              <br />
              5. Your Choices: <br />
            </Typography>
            <Typography style={styles.privacytext}>
              a. Account Settings: You can update your account information and
              communication preferences by logging into your account settings.
              <br />
              b. Cookies: You can manage your cookie preferences through your
              browser settings and opt out of certain types of tracking cookies.
              <br />
            </Typography>
            <Typography variant="body1" style={styles.privacyHead}>
              <br />
              6. Children's Privacy: <br />
            </Typography>
            <Typography style={styles.privacytext}> 
              Our website and services are not directed to children under the
              age of 13, and we do not knowingly collect personal information
              from children. If you believe that we have collected personal
              information from a child without parental consent, please contact
              us immediately.
              <br />
            </Typography>
            <Typography variant="body1" style={styles.privacyHead}>
              <br />
              7. Changes to This Policy: <br />
            </Typography>
            <Typography style={styles.privacytext}>
              We reserve the right to update or modify this Privacy Policy at
              any time. Any changes will be posted on this page with a revised
              effective date. We encourage you to review this Privacy Policy
              periodically for any updates.
              <br />
            </Typography>
            <Typography variant="body1" style={styles.privacyHead}>
              <br />
              8. Contact Us: <br />
            </Typography>
            <Typography style={styles.privacytext}>
              If you have any questions or concerns about our Privacy Policy or
              our data practices, please contact us at 1800-309-1817,
              www.Eleglam.co
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

export default PrivacyPolicy;
