import { useState } from "react";

import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Box,
  Button,
  TextField,
  InputAdornment,
  IconButton,
} from "@mui/material";
import { borders } from "@mui/system";
import { Formik } from "formik";
import useMediaQuery from "@mui/material/useMediaQuery";

import { checkoutSchema, initialValues } from "./AdminCreationConfig";
import Header from "../../components/Header";
import MuiDatePicker from "../../components/MuiDatePicker";

const AdminCreation = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");

  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleFormSubmit = (values) => {
    console.log(values);
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
    >
      <Header title="Create New Administrator Account" />
      <Box
        m="30px"
        sx={{ border: 1, borderRadius: "16px", borderWidth: "2px" }}
        width="800px"
      >
        <Box m="50px">
          <Formik
            onSubmit={handleFormSubmit}
            initialValues={initialValues}
            validationSchema={checkoutSchema}
          >
            {({
              values,
              errors,
              touched,
              handleBlur,
              handleChange,
              handleSubmit,
            }) => (
              <form onSubmit={handleSubmit}>
                <Box
                  display="grid"
                  gap="30px"
                  gridTemplateColumns="repeat(4, minmax(0, 1fr))"
                  sx={{
                    "& > div": {
                      gridColumn: isNonMobile ? undefined : "span 4",
                    },
                  }}
                >
                  <TextField
                    fullWidth
                    variant="filled"
                    type="text"
                    label="Username"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.username}
                    name="username"
                    error={!!touched.username && !!errors.username}
                    helperText={touched.username && errors.username}
                    sx={{ gridColumn: "span 4" }}
                  />
                  <TextField
                    fullWidth
                    variant="filled"
                    type={showPassword ? "text" : "password"}
                    label="Password"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.password}
                    name="password"
                    inputProps={{ maxLength: 12 }}
                    error={!!touched.password && !!errors.password}
                    helperText={touched.password && errors.password}
                    sx={{
                      gridColumn: "span 4",
                      display: "flex",
                    }}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            // to hide the visibility icon background color
                            sx={{
                              backgroundColor: "transparent",
                              "&:hover": {
                                backgroundColor: "transparent",
                              },
                            }}
                          >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>{" "}
                        </InputAdornment>
                      ),
                    }}
                  />
                  <TextField
                    fullWidth
                    variant="filled"
                    type="text"
                    label="First Name"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.firstName}
                    name="firstName"
                    error={!!touched.firstName && !!errors.firstName}
                    helperText={touched.firstName && errors.firstName}
                    sx={{ gridColumn: "span 2" }}
                  />
                  <TextField
                    fullWidth
                    variant="filled"
                    type="text"
                    label="Last Name"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.lastName}
                    name="lastName"
                    error={!!touched.lastName && !!errors.lastName}
                    helperText={touched.lastName && errors.lastName}
                    sx={{ gridColumn: "span 2" }}
                  />
                  <TextField
                    fullWidth
                    variant="filled"
                    type="text"
                    label="Email"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.email}
                    name="email"
                    error={!!touched.email && !!errors.email}
                    helperText={touched.email && errors.email}
                    sx={{ gridColumn: "span 4" }}
                  />
                  <TextField
                    fullWidth
                    variant="filled"
                    type="text"
                    label="Phone Number"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.phoneNum}
                    name="phoneNum"
                    inputProps={{maxLength: "12"}}
                    error={!!touched.phoneNum && !!errors.phoneNum}
                    helperText={touched.phoneNum && errors.phoneNum}
                    sx={{ gridColumn: "span 4" }}
                  />
                </Box>
                <Box display="flex" justifyContent="center" mt="30px">
                  <Button
                    type="submit"
                    color="secondary"
                    variant="contained"
                    sx={{ textDecoration: "none" }}
                  >
                    Create New User
                  </Button>
                </Box>
              </form>
            )}
          </Formik>
        </Box>
      </Box>
    </Box>
  );
};

export default AdminCreation;
