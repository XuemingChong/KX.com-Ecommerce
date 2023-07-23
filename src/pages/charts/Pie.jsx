import { Box } from "@mui/material";
import Header from "../../components/general/Header";
import PieChart from "../../components/PieChart";

const Pie = () => {
  return (
    <Box m="20px">
      <Header title="Statistics On Revenue Across Product Category"/>
      <Box height="75vh">
        <PieChart />
      </Box>
    </Box>
  );
};

export default Pie;