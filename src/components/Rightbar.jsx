import React from "react";
import Box from "@mui/material/Box";

const Rightbar = () => {
  return (
    <Box
      bgcolor="skyblue"
      flex={1}
      p={2}
      sx={{ display: { xs: "none", sm: "block" } }}
    >
      right
    </Box>
  );
};

export default Rightbar;
