import { Box } from "@mui/material";
import Header from "../../components/general/Header";
import LineChart from "../../components/LineChart";

const Line = () => {
  return (
    <Box m="20px">
      <Header title="Statistics On Consuming Capability In 2023 Across Countries"/>
      <Box height="75vh">
        <LineChart />
      </Box>
    </Box>
  );
};

export default Line;