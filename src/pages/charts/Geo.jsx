import { Box, useTheme } from "@mui/material";
import GeoChart from './../../components/general/GeoChart';
import Header from "../../components/general/Header";
import { tokens } from "../../theme";

const Geo = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box m="20px">
      <Header title="Geography" />

      <Box
        height="75vh"
        border={`1px solid ${colors.grey[100]}`}
        borderRadius="4px"
      >
        <GeoChart />
      </Box>
    </Box>
  );
};

export default Geo;