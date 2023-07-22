import { Box, IconButton, Tooltip, Avatar } from "@mui/material";
import { Delete, Edit, Preview } from "@mui/icons-material";

export const ProductImage = ({ src }) => {
  return (
    <div>
      <Avatar src={src} variant="square" sx={{ borderRadius: "10px" }} />
    </div>
  );
};

export const ProductActions = () => {
  return (
    <Box>
      <Tooltip title="View this product">
        <IconButton onClick={() => {}}>
          <Preview />
        </IconButton>
      </Tooltip>
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
      <Tooltip title="Delete this product">
        <IconButton onClick={() => {}}>
          <Delete />
        </IconButton>
      </Tooltip>
    </Box>
  );
};
