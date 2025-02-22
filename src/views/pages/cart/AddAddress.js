/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Grid,
  Typography,
  makeStyles,
  useMediaQuery,
  Button,
  TextField,
  FormControl,
  Select,
  MenuItem,
} from "@material-ui/core";
import { Formik, Form, Field, ErrorMessage } from "formik";
import axios from "axios";
import { apiConfig } from "src/apiconfig/ApiConfig";
import toast from "react-hot-toast";

const useStyles = makeStyles((theme) => ({
  profileContainer: {
    margin: "0px 10px",
  },
  profileData: {
    padding: "20px 0px 50px 0px",
  },
  profileHeader: {
    height: "100px",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "start",
  },
  profileHeaderHeading: {
    color: "#2D2C2C",
    marginLeft: "20px",
    fontFamily: "Playfair Display",
  },
  customButton: {
    width: "169px",
    height: "50px",
    fontSize: "16px !important",
    marginTop: "10px",
    borderRadius: "30px",
    backgroundColor: "#7E563D",
    fontWeight: "400 !important",
    color: "white",
    lineHeight: "20px",
    "&:hover": {
      backgroundColor: "#7E563D",
    },
  },
  MainHeading: {
    fontFamily: "Playfair Display",
    color: "#2D2C2C",
    fontWeight: "700",
  },
  leftContent: {
    fontFamily: "Playfair Display",
    fontSize: "16px",
    fontWeight: "500",
    color: "#2D2C2C",
  },
  rightContent: {
    color: "#4F4F4F",
    fontFamily: "Nunito Sans",
    fontSize: "16px",
    fontWeight: "400",
  },
  profileSmallContainer: {
    margin: "0px 30px",
  },
  label: {
    fontFamily: "Nunito Sans",
    fontSize: "16px",
    fontWeight: "500",
    color: "#2D2C2C",
    marginBottom: "20px",
  },
  error: {
    color: "red",
    fontSize: "14px",
    marginTop: "5px",
  },
}));

// Custom dropdown component
const CustomDropdown = ({ field, form, ...props }) => {
  const error = form && form.errors ? form.errors[field.name] : undefined;
  const touched = form && form.touched ? form.touched[field.name] : undefined;

  return (
    <FormControl fullWidth>
      <TextField
        select
        {...field}
        {...props}
        InputProps={{
          style: {
            border: "1px solid #4F4F4F",
            borderRadius: "10px",
          },
        }}
        error={error && touched}
        helperText={error && touched ? error : ""}
      >
        {props.children}
      </TextField>
    </FormControl>
  );
};

const AddAddress = ({editAddress, isEdit}) => {
  console.log("isEdit",isEdit )
  const {firstName ,lastName,email ,phone ,addressLine1 ,city ,state ,country ,postalCode,_id
  } = editAddress;
  const classes = useStyles();
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const handleImageResponsive = useMediaQuery((theme) =>
    theme.breakpoints.down(1150)
  );

  // Formik initial values and validation
  const initialValues = {
    firstName: isEdit ? firstName : "",
    lastName: isEdit ? lastName : "",
    email: isEdit ? email : "",
    phoneNumber: isEdit ? phone : "",
    streetOrArea: isEdit ? addressLine1 : "",
    city: isEdit ? city : "",
    state:isEdit ? state : "",
    country:isEdit ? country : "",
    postalCode: isEdit ? postalCode : "",
  };

  const validate = (values) => {
    const errors = {};

    if (!values.firstName) {
      errors.firstName = "First Name is Required";
    } else if (values.firstName.length < 2 || values.firstName.length > 50) {
      errors.firstName = "First Name should be between 2 and 50 characters";
    }

    if (!values.lastName) {
      errors.lastName = "Last Name is Required";
    } else if (values.lastName.length < 2 || values.lastName.length > 50) {
      errors.lastName = "Last Name should be between 2 and 50 characters";
    }

    if (!values.email) {
      errors.email = "Email is Required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = "Invalid email address";
    }

    if (!values.phoneNumber) {
      errors.phoneNumber = "Phone Number is Required";
    } else if (!/^\+?\d{8,15}$/.test(values.phoneNumber)) {
      errors.phoneNumber = "Invalid phone number";
    }

    if (!values.streetOrArea) {
      errors.streetOrArea = "Street or Area is Required";
    } else if (
      values.streetOrArea.length < 2 ||
      values.streetOrArea.length > 100
    ) {
      errors.streetOrArea =
        "Street or Area should be between 2 and 100 characters";
    }

    if (!values.city) {
      errors.city = "City is Required";
    } else if (values.city.length < 2 || values.city.length > 50) {
      errors.city = "City should be between 2 and 50 characters";
    }

    if (!values.state) {
      errors.state = "State is Required";
    } else if (values.state.length < 2 || values.state.length > 50) {
      errors.state = "State should be between 2 and 50 characters";
    }

    if (!values.country) {
      errors.country = "Country is Required";
    }

    // if (!values.postalCode) {
    //   errors.postalCode = "Postal Code is Required";
    // } else if (!/^\d{5,}$/.test(values.postalCode)) {
    //   errors.postalCode = "Invalid postal code";
    // }

    return errors;
  };

  const addOrUpdateAddress = async (values) => {
    console.log("Form values",values);
    const data ={
      firstName: values.firstName,
      lastName: values.lastName,
      addressLine1: values.streetOrArea,
      city: values.city,
      state: values.state,
      postalCode: values.postalCode,
      country: values.country,
      phone: values.phoneNumber,
      email: values.email,
    }
    const data1 ={
      firstName: values.firstName,
      lastName: values.lastName,
      addressLine1: values.streetOrArea,
      city: values.city,
      state: values.state,
      postalCode: values.postalCode,
      country: values.country,
      phone: values.phoneNumber,
      email: values.email,
      addressId: _id 
    }
    try {
      const res = await axios({
        method: "POST",
        url: apiConfig.addOrUpdateAddress,
        headers: {
          token: window.sessionStorage.getItem("ELEGLAMToken"),
        },
        data: isEdit ? data1 : data
      });
      if (res.data?.responseCode === 200) {
        toast.success(res.data?.responseMessage); 
      } else {
        toast.error(
          res.data?.responseMessage || "Something went wrong. Please try again."
        );
      }
    } catch (error) {
      console.log("err",error)
    }
  };

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    console.log("Form values",values);
    try {
      await addOrUpdateAddress(values);
      resetForm();
      // window.location.reload();
    } catch (error) {
      console.error("Error in add address:", error);
    }
    setSubmitting(false);
  };

  return (
    <div
      className={
        isSmallScreen ? classes.profileSmallContainer : classes.profileContainer
      }
    >
      <Grid container className={classes.profileData} spacing={3}>
        <Grid item xs={12} sm={12} md={12}>
          <Formik
            initialValues={initialValues}
            validate={validate}
            // onSubmit={(values, { setSubmitting, resetForm }) => addOrUpdateAddress(values,setSubmitting, resetForm)}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form>
                <Grid container spacing={3}>
                  {/* Basic Info */}
                  <Grid item xs={12}>
                    <Typography variant="h4" className={classes.MainHeading}>
                      Add Address
                    </Typography>
                  </Grid>
                  {/* First Name */}
                  <Grid item xs={12} sm={6}>
                    <Typography variant="body1" className={classes.label}>
                      First Name:
                    </Typography>
                    <Field
                      name="firstName"
                      as={TextField}
                      // variant="outlined"

                      fullWidth
                      className={classes.leftContent}
                      InputProps={{
                        style: {
                          border: "1px solid #4F4F4F",
                          borderRadius: "10px",
                        },
                        inputProps: {
                          placeholder: "Enter first Name", // Change placeholder text as needed
                          style: {
                            color: "#00000066",
                            fontFamily: "Nunito Sans",
                            fontWeight: "400",
                            fontSize: "16px",
                          },
                        },
                      }}
                    />
                    <ErrorMessage
                      name="firstName"
                      component="div"
                      className={classes.error}
                    />
                  </Grid>
                  {/* last Name */}
                  <Grid item xs={12} sm={6}>
                    <Typography variant="body1" className={classes.label}>
                      Last Name:
                    </Typography>
                    <Field
                      name="lastName"
                      as={TextField}
                      placeholder="Enter last Name"
                      fullWidth
                      className={classes.leftContent}
                      InputProps={{
                        style: {
                          border: "1px solid #4F4F4F",
                          borderRadius: "10px",
                        },
                        inputProps: {
                          placeholder: "Enter last Name", // Change placeholder text as needed
                          style: {
                            color: "#00000066",
                            fontFamily: "Nunito Sans",
                            fontWeight: "400",
                            fontSize: "16px",
                          },
                        },
                      }}
                    />
                    <ErrorMessage
                      name="lastName"
                      component="div"
                      className={classes.error}
                    />
                  </Grid>
                  {/* Email */}
                  <Grid item xs={12} sm={6}>
                    <Typography variant="body1" className={classes.label}>
                      Email:
                    </Typography>
                    <Field
                      name="email"
                      as={TextField}
                      fullWidth
                      className={classes.leftContent}
                      InputProps={{
                        style: {
                          border: "1px solid #4F4F4F",
                          borderRadius: "10px",
                        },
                        inputProps: {
                          placeholder: "Enter email address", // Change placeholder text as needed
                          style: {
                            color: "#00000066",
                            fontFamily: "Nunito Sans",
                            fontWeight: "400",
                            fontSize: "16px",
                          },
                        },
                      }}
                    />
                    <ErrorMessage
                      name="email"
                      component="div"
                      className={classes.error}
                    />
                  </Grid>
                  {/* Mobile Number */}
                  <Grid item xs={12} sm={6}>
                    <Typography variant="body1" className={classes.label}>
                      Phone Number:
                    </Typography>
                    <Field
                      name="phoneNumber"
                      as={TextField}
                      fullWidth
                      className={classes.leftContent}
                      InputProps={{
                        style: {
                          border: "1px solid #4F4F4F",
                          borderRadius: "10px",
                        },
                        inputProps: {
                          placeholder: "Enter Phone Number", // Change placeholder text as needed
                          style: {
                            color: "#00000066",
                            fontFamily: "Nunito Sans",
                            fontWeight: "400",
                            fontSize: "16px",
                          },
                        },
                      }}
                    />
                    <ErrorMessage
                      name="phoneNumber"
                      component="div"
                      className={classes.error}
                    />
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <Typography variant="body1" className={classes.label}>
                      Street or Area:
                    </Typography>
                    <Field
                      name="streetOrArea"
                      as={TextField}
                      fullWidth
                      className={classes.leftContent}
                      InputProps={{
                        style: {
                          border: "1px solid #4F4F4F",
                          borderRadius: "10px",
                        },
                        inputProps: {
                          placeholder: "Enter Street or Area", // Change placeholder text as needed
                          style: {
                            color: "#00000066",
                            fontFamily: "Nunito Sans",
                            fontWeight: "400",
                            fontSize: "16px",
                          },
                        },
                      }}
                    />
                    <ErrorMessage
                      name="streetOrArea"
                      component="div"
                      className={classes.error}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Typography variant="body1" className={classes.label}>
                      City:
                    </Typography>
                    <Field
                      name="city"
                      as={TextField}
                      fullWidth
                      className={classes.leftContent}
                      InputProps={{
                        style: {
                          border: "1px solid #4F4F4F",
                          borderRadius: "10px",
                        },
                        inputProps: {
                          placeholder: "Enter your city", // Change placeholder text as needed
                          style: {
                            color: "#00000066",
                            fontFamily: "Nunito Sans",
                            fontWeight: "400",
                            fontSize: "16px",
                          },
                        },
                      }}
                    />
                    <ErrorMessage
                      name="city"
                      component="div"
                      className={classes.error}
                    />
                  </Grid>
                  {/* State Dropdown */}
                  <Grid item xs={12} sm={6}>
                    <Typography variant="body1" className={classes.label}>
                      State:
                    </Typography>
                    <Field
                      name="state"
                      as={CustomDropdown}
                      fullWidth
                      InputProps={{
                        style: {
                          border: "1px solid #4F4F4F",
                          borderRadius: "10px",
                        },
                      }}
                    >
                      <MenuItem value="">Select State</MenuItem>
                      <MenuItem value="state1">State 1</MenuItem>
                      <MenuItem value="state2">State 2</MenuItem>
                      <MenuItem value="state3">State 3</MenuItem>
                    </Field>
                    <ErrorMessage
                      name="state"
                      component="div"
                      className={classes.error}
                    />
                  </Grid>

                  {/* Country Dropdown */}
                  <Grid item xs={12} sm={6}>
                    <Typography variant="body1" className={classes.label}>
                      Country:
                    </Typography>
                    <Field
                      name="country"
                      as={CustomDropdown}
                      fullWidth
                      className={classes.formControl}
                      placeholder="Select Country"
                      InputProps={{
                        style: {
                          border: "1px solid #4F4F4F",
                          borderRadius: "10px",
                        },
                      }}
                    >
                      <MenuItem value="">Select Country</MenuItem>
                      <MenuItem value="country1">Country 1</MenuItem>
                      <MenuItem value="country2">Country 2</MenuItem>
                      <MenuItem value="country3">Country 3</MenuItem>
                    </Field>
                    <ErrorMessage
                      name="country"
                      component="div"
                      className={classes.error}
                    />
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <Typography variant="body1" className={classes.label}>
                      Postal Code:
                    </Typography>
                    <Field
                      name="postalCode"
                      as={TextField}
                      placeholder="Postal Code"
                      fullWidth
                      className={classes.leftContent}
                      InputProps={{
                        style: {
                          border: "1px solid #4F4F4F",
                          borderRadius: "10px",
                        },
                      }}
                    />
                    <ErrorMessage
                      name="postalCode"
                      component="div"
                      className={classes.error}
                    />
                  </Grid>

                  <Grid item xs={12} sm={12}>
                    <Button
                      variant="contained"
                      className={classes.customButton}
                      type="submit"
                      disabled={isSubmitting}
                    >
                      Add Address
                    </Button>
                  </Grid>
                </Grid>
              </Form>
            )}
          </Formik>
        </Grid>
      </Grid>
    </div>
  );
};

export default AddAddress;
