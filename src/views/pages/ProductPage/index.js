import React, { useState } from "react";
import { Box, Typography, Button, Card, CardContent } from "@mui/material";

const styles = {
  mainImageContainer: {
    display: "flex",
    paddingLeft: "70px",
    paddingRight: "70px",
    aspectRatio: "1/1",
    maxWidth: "400px",
  },
  thumbnailImage: {
    width: 80,
    height: 80,
    borderRadius: "4px",
    cursor: "pointer",
    // border: "1px solid #ddd",
    // transition: "all 0.3s ease",
  },
  activeThumbnail: {
    // filter: "blur(2px)", // Apply blur effect to the active thumbnail
    border: "1.5px solid #ddd", // Highlight active thumbnail
  },
  mainImage: {
    width: "100%",
    borderRadius: "8px",
    boxShadow: "0px 4px 6px rgba(0,0,0,0.1)",
  },
  button: {
    borderRadius: "25px", // Rounded corners
    padding: "15px 40px",
    fontSize: "16px",
    fontWeight: "bold",
    textTransform: "none", // Prevent all-uppercase text
    transition: "background 0.3s ease",
  },
};

const thumbnails = [
  { src: "/Image/Green690.jpg", alt: "Thumbnail 1" },
  { src: "/Image/2TriplelayerRyby950.jpg", alt: "Thumbnail 2" },
  { src: "/Image/tripleayeredgreen800.jpg", alt: "Thumbnail 3" },
];

const ProductPage = () => {
  const [mainImage, setMainImage] = useState("/Image/tripleayeredgreen800.jpg");

  const handleThumbnailClick = (image) => {
    setMainImage(image);
  };

  return (
    <Box display="flex" flexDirection={{ xs: "column", md: "row" }} p={4}>
      {/* Left Section - Product Image Gallery */}
      <Box
        width={{ xs: "100%", md: "50%" }}
        display="flex"
        flexDirection="column"
        alignItems="center"
      >
        {/* Main Image */}
        <Box
          width={{ xs: "100%", md: "80%" }}
          mb={2}
          sx={styles.mainImageContainer}
        >
          <img
            src={mainImage}
            alt="Turquoise Magna Shesha Jhumkis"
            style={styles.mainImage}
          />
        </Box>
        {/* Thumbnail Images */}
        <Box display="flex" gap={2}>
          {thumbnails.map((thumbnail, index) => (
            <img
              key={index}
              src={thumbnail.src}
              alt={thumbnail.alt}
              onClick={() => handleThumbnailClick(thumbnail.src)}
              style={{
                ...styles.thumbnailImage,
                ...(mainImage === thumbnail.src ? styles.activeThumbnail : {}),
              }}
            />
          ))}
        </Box>
      </Box>

      {/* Right Section - Product Details */}
      <Box width={{ xs: "100%", md: "50%" }} pl={{ md: 4 }}>
        <Typography variant="h4" component="h1" fontWeight="bold" mb={2}>
          Turquoise Magna Shesha Jhumkis
        </Typography>
        <Box display="flex" alignItems="center" mb={2}>
          <Typography
            variant="body1"
            color="textSecondary"
            sx={{ textDecoration: "line-through", mr: 1 }}
          >
            ₹2,362.00
          </Typography>
          <Typography variant="h6" color="#fff">
            ₹1,063.00
          </Typography>
        </Box>
        <Typography variant="body2" color="textSecondary" mb={1}>
          Ships within 24 hours
        </Typography>
        <Typography variant="body2" color="#fff" mb={3}>
          Free Shipping on Prepaid Orders (India) Save ₹1,299.00
        </Typography>

        {/* Buttons */}
        <Box display="flex" flexDirection={{ xs: "column" }} gap={2} mb={4}>
          <Button
            variant="contained"
            sx={{ ...styles.button, background: "#fff", color: "#000" }}
            fullWidth
          >
            Add to Cart
          </Button>
          <Button
            variant="contained"
            sx={{ ...styles.button, background: "#000", color: "#fff" }}
            fullWidth
          >
            Buy It Now
          </Button>
        </Box>

        {/* Description Section */}
        <Card>
          <CardContent>
            <Typography variant="h6" component="h2" gutterBottom>
              Description
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Immerse yourself in the elegance of our Turquoise Magna Shesha
              Designer Jhumkis. Perfectly crafted to elevate your style.
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
};

export default ProductPage;
