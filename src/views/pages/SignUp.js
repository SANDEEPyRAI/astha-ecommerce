import {
  Box,
  Divider,
  Grid,
  Typography,
  Button,
  FormControlLabel,
  Checkbox,
  TextField,
} from "@material-ui/core";
import React, { useState } from "react";
import { Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { apiConfig } from "src/apiconfig/ApiConfig";
import axios from "axios";
import { Link } from "react-router-dom";
import OtpDialog from "./OtpDialog";
import { useHistory } from "react-router-dom";
import { toast } from "react-hot-toast";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  outerContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    backgroundColor: "#f5f5f5",
  },
  formContainer: {
    width: "100%",
    maxWidth: "500px",
    padding: theme.spacing(4),
    backgroundColor: "white",
    borderRadius: theme.spacing(2),
    boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.1)",
    border: "1px solid #ddd",
    [theme.breakpoints.down("xs")]: {
      padding: theme.spacing(2), // Smaller padding on small screens
    },
  },
  formHeading: {
    fontSize: "48px",
    fontWeight: "700",
    fontFamily: "Playfair Display",
    color: "#2D2C2C",
    marginBottom: theme.spacing(3),
    [theme.breakpoints.down("sm")]: {
      fontSize: "36px",
      marginBottom: theme.spacing(2),
    },
  },
  formDetail: {
    fontSize: "22px",
    fontWeight: "400",
    fontFamily: "Nunito Sans",
    color: "#4F4F4F",
    marginBottom: theme.spacing(3),
    [theme.breakpoints.down("sm")]: {
      fontSize: "18px",
      marginBottom: theme.spacing(2),
    },
  },
  divider: {
    height: "5px",
    width: "95px",
    marginTop: theme.spacing(1),
    backgroundColor: "#7E563D",
    marginBottom: theme.spacing(2),
  },
  formBox: {
    display:"flex",
    flexDirection:"column",
    gap:"10px",
    margin: theme.spacing(2, 0),
    [theme.breakpoints.down("sm")]: {
      margin: theme.spacing(1, 0),
    },
  },
  formKey: {
    fontSize: "18px",
    fontWeight: "600",
    fontFamily: "Nunito Sans",
    marginBottom: theme.spacing(1),
    color: "#4F4F4F",
    [theme.breakpoints.down("sm")]: {
      fontSize: "16px",
      marginBottom: theme.spacing(1),
    },
  },
  btnBox: {
    marginTop: theme.spacing(5),
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    [theme.breakpoints.down("sm")]: {
      marginTop: theme.spacing(0),
    },
  },
  submitBtn: {
    height: "50px",
    width: "30%",
    backgroundColor: "#7E563D",
    borderRadius: "30px",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
    textTransform: "none",
    fontSize: "20px",
    fontWeight: "700",
    fontFamily: "Nunito Sans",
    color: "white",
    "&:hover": {
      backgroundColor: "#7E563D",
    },
    "&:active": {
      backgroundColor: "#7E563D",
    },
    [theme.breakpoints.down("sm")]: {
      width: "50%",
      fontSize: "18px",
    },
  },
  checkBoxText: {
    fontSize: "14px",
    fontWeight: "400",
    fontFamily: "Nunito Sans",
    [theme.breakpoints.down("sm")]: {
      fontSize: "12px",
    },
  },
  textFieldStyle: {
    background: "#00000008",
    borderRadius: "30px",
    marginBottom: theme.spacing(2),
    "& .MuiOutlinedInput-root": {
      "&.Mui-focused fieldset": {
        borderColor: "none",
      },
    },
    [theme.breakpoints.down("sm")]: {
      marginBottom: theme.spacing(1),
    },
  },
  getCode: {
    fontFamily: "Open Sans",
    fontSize: "12px",
    fontWeight: 600,
    color: "#174B70",
    width: "100px",
    marginRight: theme.spacing(1),
    [theme.breakpoints.down("sm")]: {
      fontSize: "10px",
    },
  },
  errorMessage: {
    color: "red",
    fontSize: "12px",
    marginTop: theme.spacing(1),
    [theme.breakpoints.down("sm")]: {
      fontSize: "10px",
    },
  },
}));

const validationSchema = Yup.object().shape({
  fullName: Yup.string().required("Please enter your email address or phone number."),
  verificationCode: Yup.string().required("Please enter verification code."),
});

const Signup = () => {
  const classes = useStyles(); // Use the makeStyles hook
  const [isEmailFocused, setEmailFocused] = useState(false);
  const [isEmailFocused2, setEmailFocused2] = useState(false);
  const [state, setState] = useState("");
  const [openOtp, setOpenOtp] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const history = useHistory();

  const handleClickOpen = async () => {
    try {
      const res = await axios.post("https://eleglam.vercel.app/api/v1/user/send-otp", {
        "phone": state,
      });
      if (res.status === 200) {
        toast.success(res?.data?.responseMessage);
      } else {
        toast.error(res?.data?.responseMessage);
      }
    } catch (error) {
      toast.error(
        error?.response?.data?.responseMessage ?? "Something went wrong!"
      );
    }
  };

  // Function to handle form submission (Sign In)
  const handleSubmit = async (values) => {
    setIsSubmitting(true);
    try {
      const res = await axios.post("https://eleglam.vercel.app/api/v1/user/verify-otp", {
        "phone": state,
        "otp": String(values.verificationCode),
      });
      if (res.status === 200) {
        toast.success(res?.data?.responseMessage);
        history.push("/dashboard"); // Redirect to dashboard or other page on success
      } else {
        toast.error(res?.data?.responseMessage);
      }
    } catch (error) {
      toast.error(
        error?.response?.data?.responseMessage ?? "Invalid OTP. Try again."
      );
    }
    setIsSubmitting(false);
  };

  

  return (
    <Box className={classes.outerContainer}>
      <Box className={classes.formContainer}>
        <Grid container>
          <Grid item xs={12}>
            <Typography className={classes.formHeading} variant="h2">Welcome!</Typography>
            <Typography className={classes.formDetail} variant="h4">
              Let's Sign In To Your Account!
            </Typography>
            <Divider className={classes.divider} />
            <Box className={classes.formBox}>
              <Formik
                initialValues={{
                  fullName: "",
                  verificationCode: "",
                }}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
              >
                {({
                  touched,
                  errors,
                  values,
                  handleChange,
                  handleSubmit,
                  setFieldValue,
                }) => (
                  <Form onSubmit={handleSubmit}>
                    <Box
                      className={isEmailFocused ? classes.mainBoxBorder : ""}
                      onBlur={() => setEmailFocused(false)}
                    >
                      <Typography className={classes.formKey} variant="body1">
                        Enter Email or Phone Number
                      </Typography>
                      <TextField
                        fullWidth
                        autoComplete="off"
                        id="emailOrPhone"
                        name="fullName"
                        onFocus={() => setEmailFocused(true)}
                        value={values.fullName}
                        onChange={(e) => {
                          setState(e.target.value);
                          setFieldValue("fullName", e.target.value);
                        }}
                        placeholder="Enter email address or phone number"
                        className={classes.textFieldStyle}
                        InputProps={{
                          endAdornment: (
                            <Button
                              className={classes.getCode}
                              onClick={handleClickOpen}
                            >
                              Get Code
                            </Button>
                          ),
                        }}
                      />
                      <ErrorMessage
                        name="fullName"
                        component="div"
                        className={classes.errorMessage}
                      />
                    </Box>

                    <Box
                      className={isEmailFocused2 ? classes.mainBoxBorder : ""}
                      onBlur={() => setEmailFocused2(false)}
                    >
                      <Typography className={classes.formKey} variant="body1">
                        Verification Code
                      </Typography>
                      <TextField
                        fullWidth
                        type="number"
                        name="verificationCode"
                        autoComplete="off"
                        onFocus={() => setEmailFocused2(true)}
                        value={values.verificationCode}
                        onChange={handleChange}
                        placeholder="Enter 6 digit code"
                        className={classes.textFieldStyle}
                      />
                      <ErrorMessage
                        name="verificationCode"
                        component="div"
                        className={classes.errorMessage}
                      />
                    </Box>

                    <FormControlLabel
                      control={<Checkbox />}
                      label={
                        <span className={classes.checkBoxText}>
                          I agree with the{" "}
                          <Link to="#">Privacy Policy</Link> &amp;{" "}
                          <Link to="#">Terms of Use</Link>.
                        </span>
                      }
                    />

                    <Box className={classes.btnBox}>
                      <Button
                        variant="contained"
                        type="submit"
                        disabled={isSubmitting}
                        className={classes.submitBtn}
                      >
                        Sign In
                      </Button>
                    </Box>
                  </Form>
                )}
              </Formik>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Signup;
