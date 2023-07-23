import { Box, IconButton, Tooltip } from "@mui/material";
import { Delete, Edit} from '@mui/icons-material';

// import { Select, MenuItem } from "@mui/material";
// import { CheckCircleOutline, CancelOutlined } from "@mui/icons-material";

export const UserGroupActions = () => {
  return (
    <Box>
      <Tooltip title="Edit this user">
        <IconButton onClick={() => {}}>
            {/*       
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
            */}
          <Edit />
        </IconButton>
      </Tooltip>
      <Tooltip title="Delete this user">
        <IconButton onClick={() => {}}>
          <Delete />
        </IconButton>
      </Tooltip>
    </Box>
  );
};

