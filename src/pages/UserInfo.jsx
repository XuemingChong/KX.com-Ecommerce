import { Box } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../theme";
import { mockUserData } from "../data/mockData";
import Header from "../components/Header";
import { useTheme } from "@mui/material";
import moment from "moment";

const UserInfo = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const columns = [
    {
      field: "userId",
      headerName: "User ID",
      flex: 0.5,
      headerAlign: "center",
    },
    {
      field: "name",
      headerName: "Name",
      headerAlign: "center",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      headerAlign: "center",
      align: "center",
    },
    {
      field: "dob",
      headerName: "Birth Date",
      headerAlign: "center",
      align: "center",
      renderCell: (params) =>
      moment(params.row.createDt).format("YYYY-MM-DD"),
    },
    {
      field: "phone",
      headerName: "Phone Number",
      headerAlign: "center",
      align: "center",
      flex: 1,
    },
    {
      field: "email",
      headerName: "Email",
      headerAlign: "center",
      flex: 1,
    },
    {
      field: "country",
      headerName: "Country",
      headerAlign: "center",
      align: "center",
      flex: 1,
    },
    {
      field: "city",
      headerName: "City",
      headerAlign: "center",
      align: "center",
      flex: 1,
    },
    {
      field: "street",
      headerName: "Street",
      headerAlign: "center",
      flex: 1,
    },
    {
      field: "block",
      headerName: "Block",
      headerAlign: "center",
      align: "center",
      flex: 1,
    },
    {
      field: "floor",
      headerName: "Floor",
      headerAlign: "center",
      align: "center",
      flex: 1,
    },
    {
      field: "unitNo",
      headerName: "Unit No.",
      headerAlign: "center",
      align: "center",
      flex: 1,
    },
  ];

  return (
    <Box m="20px">
      <Header title="User Information" subtitle="List of User Information" />
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${colors.grey[100]} !important`,
          },
        }}
      >
        <DataGrid
          rows={mockUserData}
          columns={columns}
          getRowId={(row) => row.userId}
          components={{ Toolbar: GridToolbar }}

          // initial hide the table column
          initialState={{
            columns: {
              columnVisibilityModel: {
                block: false,
                floor: false,
                unitNo: false,
              },
            },
          }}
        />
      </Box>
    </Box>
  );
};

export default UserInfo;
