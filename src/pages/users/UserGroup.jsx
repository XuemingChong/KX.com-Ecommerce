import React, { useState } from "react";

import { Box, useTheme, Avatar } from "@mui/material";
import { CheckCircleOutline, CancelOutlined } from "@mui/icons-material";

import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockUserData } from "../../data/mockData";
import moment from "moment";

import Header from "../../components/general/Header";
import UserProfile from "../../images/user.png";
import { UserGroupActions } from "./UserGroupConfig";

const UserGroup = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed] = useState(false);

  const columns = [
    { field: "userId", headerName: "User ID", headerAlign: "center" },
    {
      field: "img",
      headerName: "Avatar",
      headerAlign: "center",
      align: "center",
      renderCell: () => <Avatar src={UserProfile} />,
      sortable: false,
      filterable: false,
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
      field: "createDt",
      headerName: "Creation Time",
      headerAlign: "center",
      flex: 1,
      align: "center",
      renderCell: (params) =>
        moment(params.row.createDt).format("YYYY-MM-DD HH:MM:SS"),
    },
    {
      field: "statusId",
      headerName: "Status",
      headerAlign: "center",
      align: "center",
      sortable: false,
      filterable: false,
      editable: true,
      type: "singleSelect",
      valueOptions: ["active", "inactive"],
      valueGetter: (params) => {
        return params.row.statusId;
      },
      renderCell: (params) => {
        const { value } = params;
        return (
          <div style={{ display: "flex", justifyContent: "center" }}>
            {value === "active" ? (
              <CheckCircleOutline style={{ color: colors.greenAccent[500] }} />
            ) : (
              <CancelOutlined style={{ color: colors.redAccent[500] }} />
            )}
          </div>
        );
      },

      flex: 1,
    },
    {
      field: "role",
      headerName: "User Roles",
      headerAlign: "center",
      align: "center",
      flex: 1,
    },
    {
      field: "actId",
      headerName: "Actions",
      headerAlign: "center",
      align: "center",
      type: "actions",
      renderCell: () => <UserGroupActions />,
      flex: 1,
    },
  ];

  return (
    <Box m="20px" width={isCollapsed ? "100%" : "calc(100% - 64px)"}>
      <Header title="User Roles" />
      <Box
        m="40px 0 0 0"
        height="75vh"
        width={isCollapsed ? "100%" : "100%"}
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
          checkboxSelection
          rows={mockUserData}
          columns={columns}
          getRowId={(row) => row.userId}
          components={{ Toolbar: GridToolbar }}
        />
      </Box>
    </Box>
  );
};

export default UserGroup;
