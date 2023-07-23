import { useState } from "react";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers";
import { TextField } from "@mui/material";

const MuiDatePicker = () => {
  const [selectedDate, setSelectedDate] = useState();
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        label="Date of Birth"
        value={selectedDate}
        onChange={(newValue) => setSelectedDate(newValue)}
        renderInput={(props) => <TextField {...props} />}
      />
    </LocalizationProvider>
  );
};

export default MuiDatePicker;

{/* <MuiDatePicker
onChange={handleChange}
value={values.dob}
name="dob"
error={!!touched.dob && !!errors.dob}
helperText={touched.dob && errors.dob}
/> */}
