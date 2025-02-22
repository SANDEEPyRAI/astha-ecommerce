/* eslint-disable import/no-anonymous-default-export */
export default {
  h1: {
    fontSize: "80px",
    lineHeight: "60px",
    fontWeight: "600",
    "@media(max-width:1024px)": {
      fontSize: "50px !important",
      lineHeight: "40px !important",
    },
    "@media(max-width:767px)": {
      fontSize: "40px !important",
    },
  },
  h2: {
    fontSize: "40px",
    fontWeight: "500",
    lineHeight: "50px",
    "@media(max-width:767px)": {
      fontSize: "25px !important",
      lineHeight: "30px",
    },
  },
  h3: {
    fontSize: "30px",
    fontWeight: "500",
    lineHeight: "40px",
    "@media(max-width:767px)": {
      fontSize: "20px !important",
      lineHeight: "25px !important",
    },
  },
  h4: {
    fontSize: "25px",
    fontWeight: "400",
    lineHeight: "30px",
    fontFamily: "Playfair Display",
    "@media(max-width:767px)": {
      fontSize: "20px !important",
    },
  },
  h5: {
    fontSize: "20px",
    fontWeight: "400",
    lineHeight: "25px",
    "@media(max-width:605px)": {
      fontSize: "18px",
    },
  },
  h6: {
    fontSize: "18px",
    lineHeight: "20px",
    fontWeight: "400",
    "@media(max-width:767px)": {
      fontSize: "16px",
    },
  },

  body1: {
    fontSize: "14px",
    fontWeight: "300",
    lineHeight: "22px",
    "@media(max-width:605px)": {
      // fontSize: "12px !important",
      fontSize: "18px !important",
      lineHeight: "15px",
    },
    // textWrap :"nowrap"
  },
  body2: {
    fontSize: "16px",
    lineHeight: "22px",
    fontWeight: "400",
    "@media(max-width:605px)": {
      // fontSize: "12px !important",
      fontSize: "18px !important",
      lineHeight: "20px !important",
    },
  },
};
