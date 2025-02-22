/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-unused-vars */
import React from "react";
import { Box, Button, Grid, Typography } from "@material-ui/core";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import tea from "../Images/tea.png";
import tea1 from "../Images/tea1.png";
import beauty from "../Images/beauty.png";
import boy from "../Images/boy.jpeg";
import girl from "../Images/girl.jpeg";
import boy2 from "../Images/boy2.jpeg";

const styles = {
  mainImageContainer: {
    display: "flex",
    // margin: "20px 40px",

    paddingLeft: "70px",
    paddingRight: "70px",
  },
  imageContainer: {
    display: "flex",
    justifyContent: "center",

    flexWrap: "wrap",
    gap: "3px",

    // margin: "0 auto",
    marginBottom: "20px",
    // "@media (max-width: 1275px)": {
    //   width: "307px",
    //   height: "394px",
    // },
    // "@media (max-width: 600px)": {
    //   width: "407px",
    //   height: "494px",
    // },
    // "@media (max-width: 600px)": {
    //   width: "307px",
    //   height: "394px",
    // },
  },
  heading1: {
    fontFamily: "Playfair Display",
    fontSize: "48px",
    fontWeight: 700,
    lineHeight: "81.6px",
    textAlign: "center",
  },
  heading1Typo: {
    fontFamily: "Nunito Sans",
    fontSize: "18px",
    fontWeight: 400,
    lineHeight: "34px",
    textAlign: "center",
  },
  heading2: {
    fontFamily: "Playfair Display",
    fontSize: "48px",
    fontWeight: 700,
    lineHeight: "81.6px",
    textAlign: "center",
  },
  heading2Typo: {
    fontFamily: "Nunito Sans",
    fontSize: "16px",
    fontWeight: 400,
    lineHeight: "34px",
    textAlign: "center",
    textWrap: "wrap",
    marginTop: "10px",
  },
  contentBox: {
    margin: "20px 80px",
  },
  joinBox: {
    display: "flex",
    // backgroundColor: "#f6931f",
    margin: "20px 40px",
    "@media (max-width: 600px)": {
      flexDirection: "column",
    },
  },
  joinBoxButton: {
    background: "#7E563D",
    color: "#000",
    width: "170px",
    textTransform: "none",
    "&:hover": {
      // Apply styles on hover
      color: "#000", // Change text color to white
      backgroundColor: "#7E563D", // Change background color to black
    },
  },
  joinBoxButtonBox: {
    display: "flex",
    alignItems: "center",
  },
  joinBoxTypo: {
    color: "#7E563D",
    fontFamily: "Playfair Display",
  },
  teamTypo: {
    fontFamily: "Playfair Display",
    textAlign: "center",
    margin: "20px 0",
  },
  teamBox: {
    display: "flex",
    justifyContent: "space-between",
    margin: "20px 0",
    flexWrap: "Wrap",
    "@media (max-width: 693px)": {
      justifyContent: "center",
    },
  },
  teamImgBox: {
    margin: "20px 0",
  },
  teamMemberName: {
    textAlign: "center",
    margin: "5px 0",
    fontFamily: "Playfair Display",
  },
  teamMemberDes: {
    textAlign: "center",
    fontFamily: "Playfair Display",
  },
  textOverlay: {
    fontWeight: "600",
    fontSize: "50px",
    fontFamily: "Playfair Display",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    textAlign: "center",
    color: "#7E563D",
    zIndex: 999, // Ensure it's above the image and icons
  },
};

const AboutUs = () => {
  return (
    <>
      <Box style={{ width: "auto", height: "400px", position: "relative" }}>
        <img
          src="/Image/cattleimg.png"
          height="100%"
          width="100%"
          style={{ objectFit: "cover" }}
        />
        {/* Text overlay */}
        <Typography style={{ ...styles.textOverlay, zIndex: 2 }}>
          ABOUT US
        </Typography>
      </Box>

      <Grid container style={{ margin: "2% 0%" }}>
        <Grid item xs={12}>
          <Grid container style={styles.mainImageContainer}>
            <Grid item xs={12} sm={6} md={4}>
              <Box style={styles.imageContainer} m={2}>
                <img
                  style={{
                    width: "100%",
                    height: "594px",
                  }}
                  src={tea}
                  alt="tea"
                />
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Box style={styles.imageContainer} m={2}>
                <img
                  style={{
                    width: "100%",
                    height: "594px",
                  }}
                  src="image/about2.png"
                  alt="beauty"
                />
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Box style={styles.imageContainer} m={2}>
                <img
                  style={{
                    width: "100%",
                    height: "594px",
                  }}
                  src="image/about3.png"
                  alt="tea1"
                />
              </Box>
            </Grid>
          </Grid>
        </Grid>
        {/* <Grid item xs={12} style={{ margin: "40px 0" }}>
          <Grid item xs={12} sm={8} style={{ margin: "0 auto" }}>
            <Box>
              <Typography style={styles.heading1}>Our Best Qualities</Typography>
              <Typography style={styles.heading1Typo}>
              We Complete Every 11 Months GFM Prime Subscription with Extra Care as Customer Need.
              </Typography>
            </Box>
          </Grid>
        </Grid> */}
        <Grid
          container
          xs={12}
          spacing={2}
          style={{ display: "flex", justifyContent: "center" }}
        >
          <Grid item xs={12} sm={12}>
            <Box style={styles.contentBox}>
              <Typography style={styles.heading2}>About Us: </Typography>
              {/* <Typography style={styles.heading2Typo}><br/><br/>
             <StarBorderIcon style={{color:"orange"}} /> We Complete Every 11 Months GFM Prime Subscription with Extra Care as Customer Need.<br/><br/>
             <StarBorderIcon style={{color:"orange"}} /> Ele Ally is offering best computerized, fintech, data innovation administrations & you will get best.<br/><br/>
             <StarBorderIcon style={{color:"orange"}} />  Equipped Professionals.<br/><br/>
             <StarBorderIcon style={{color:"orange"}} />  RC Successful High rate.<br/><br/>
             <StarBorderIcon style={{color:"orange"}} />  Reasonable Prices.<br/><br/>
             <StarBorderIcon style={{color:"orange"}} />  Quick Services.<br/><br/>
             <StarBorderIcon style={{color:"orange"}} />  An online Fintech Platform That Enables user's Solutions.<br/><br/>
             <StarBorderIcon style={{color:"orange"}} />  GFM provides real time trading graph to users. It makes easy to buy or sell manually for a user.<br/><br/>

              </Typography> */}
              <Typography variant="body1" style={styles.heading2Typo}>
                ELEGLAM, founded by Aastha, is a distinguished jewelry and
                necklace brand based in Delhi. Since its inception, ELEGLAM has
                been dedicated to providing exquisite and unique jewelry pieces
                that combine elegance with contemporary design. Our Mission
                ELEGLAM aims to offer premium-quality jewelry that enhances the
                style and sophistication of our customers. We are committed to
                delivering products that reflect the highest standards of
                craftsmanship and design. Our Offerings At ELEGLAM, we
                specialize in a wide range of jewelry, including stunning
                necklaces and other elegant pieces. Our collection is curated to
                cater to various tastes and occasions, ensuring that every piece
                is a perfect blend of luxury and affordability. Our Vision Our
                vision is to become a leading name in the jewelry industry,
                known for our innovation, quality, and customer satisfaction. We
                strive to make every purchase a memorable experience, offering
                exceptional value and service. Explore Our Collection To
                discover our latest collections and learn more about ELEGLAM,
                please visit our website at www.Eleglam.co. Contact Us For more
                information about our products or to explore personalized
                jewelry options, please get in touch with us through our
                website.
              </Typography>
            </Box>
          </Grid>
          {/* <Grid item xs={12} sm={6}>
            <Box style={styles.contentBox}>
              <Typography style={styles.heading2}>Affordable Price</Typography>
              <Typography style={styles.heading2Typo}>
                Quisque ut nisi at mi venenatis blandit. In ante risus,
                hendrerit sed tempus eget, eleifend id massa. Nam neque felis,
                iaculis cursus libero id, mattis convallis nisi.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box style={styles.contentBox}>
              <Typography style={styles.heading2}>Fresh & Hygiene</Typography>
              <Typography style={styles.heading2Typo}>
                Quisque ut nisi at mi venenatis blandit. In ante risus,
                hendrerit sed tempus eget, eleifend id massa. Nam neque felis,
                iaculis cursus libero id, mattis convallis nisi.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box style={styles.contentBox}>
              <Typography style={styles.heading2}>Awardable Products</Typography>
              <Typography style={styles.heading2Typo}>
                Quisque ut nisi at mi venenatis blandit. In ante risus,
                hendrerit sed tempus eget, eleifend id massa. Nam neque felis,
                iaculis cursus libero id, mattis convallis nisi.
              </Typography>
            </Box>
          </Grid> */}
        </Grid>
        {/* <Grid item xs={12} style={{ background: "#f6931f" }}>
          <Box style={styles.joinBox}>
            <Box>
              <Typography style={styles.joinBoxTypo} variant="h5">
                Join Us :
              </Typography>
              <Typography style={styles.joinBoxTypo}>
                Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed
                fringilla mauris sit amet nibh. Donec sodales sagittis magna.
                Sed consequat, leo eget bibendum sodales, augue velit cursus
                nunc.
              </Typography>
            </Box>
            <Box style={styles.joinBoxButtonBox}>
              <Button style={styles.joinBoxButton}>View Help Videos</Button>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={11} style={{ margin: "0 auto" }}>
          <Typography variant="h4" style={styles.teamTypo}>
            Our Team
          </Typography>
          <Box style={styles.teamBox}>
            <Box style={styles.teamImgBox}>
              <img
                style={{ width: "307px", height: "383px" }}
                src={boy}
                alt="boy"
              />
              <Typography style={styles.teamMemberName}>Bill Burgess</Typography>
              <Typography style={styles.teamMemberDes}>
                AREA SALES MANAGER
              </Typography>
            </Box>
            <Box style={styles.teamImgBox}>
              <img
                style={{ width: "307px", height: "383px" }}
                src={girl}
                alt="girl"
              />
              <Typography style={styles.teamMemberName}>Freda Casey</Typography>
              <Typography style={styles.teamMemberDes}>SALES OFFICER</Typography>
            </Box>
            <Box style={styles.teamImgBox}>
              <img
                style={{ width: "307px", height: "383px" }}
                src={boy2}
                alt="boy2"
              />
              <Typography style={styles.teamMemberName}>Andy Harris</Typography>
              <Typography style={styles.teamMemberDes}>
                ASSISTANT MANAGER
              </Typography>
            </Box>
          </Box>
        </Grid> */}
      </Grid>
    </>
  );
};

export default AboutUs;
