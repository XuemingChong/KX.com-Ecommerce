import { Box } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataProduct } from "../../data/mockData";
import Header from "../../components/Header";
import { useTheme } from "@mui/material";

import UserProfile from "../../images/user.png";
import { ProductImage, ProductActions } from "./ProductManagementConfig";

const UserInfo = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const columns = [
    {
      field: "pId",
      headerName: "Product ID",
      headerAlign: "center",
      align: "center",
      flex: 0.5,
    },
    {
      field: "prodImg",
      headerName: "Photo",
      headerAlign: "center",
      align: "center",
      renderCell: (params) => <ProductImage src= {UserProfile}/>,
      sortable: false,
      filterable: false,
      flex: 1,
    },
    {
      field: "name",
      headerName: "Product Name",
      headerAlign: "center",
      align: "center",
      flex: 1,
    },
    {
      field: "description",
      headerName: "Description",
      headerAlign: "center",
      align: "center",
      flex: 2,
    },
    {
      field: "qtyInStock",
      headerName: "Stock",
      headerAlign: "center",
      align: "center",
      type: "number",
      flex: 0.5,
    },
    {
      field: "basePrice",
      headerName: "Price",
      headerAlign: "center",
      align: "center",
      flex: 1,
    },
    {
      field: "mId",
      headerName: "Added By",
      headerAlign: "center",
      align: "center",
      flex: 1,
    },
    {
      headerName: "Actions",
      headerAlign: "center",
      align: "center",
      type: "actions",
      renderCell: () => <ProductActions />,
      flex: 1,
    },
  ];

  return (
    <Box m="20px">
      <Header title="Product Management" />
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
          rows={mockDataProduct}
          columns={columns}
          getRowId={(row) => row.pId}
          checkboxSelection
          components={{ Toolbar: GridToolbar }}
        />
      </Box>
    </Box>
  );
};

export default UserInfo;
