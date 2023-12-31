import React, { useState } from "react";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { styled, alpha } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import AcUnitRoundedIcon from "@mui/icons-material/AcUnitRounded";
import InputBase from "@mui/material/InputBase";
import Mail from "@mui/icons-material/Mail";
import Badge from "@mui/material/Badge";
import { Notifications } from "@mui/icons-material";
import Avatar from "@mui/material/Avatar";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});
const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "40%",
}));
const Icons = styled(Box)(({ theme }) => ({
  display: "none",
  alignItems: "center",
  gap: "20px",
  [theme.breakpoints.up("sm")]:{
    display: "flex",
  }
}));
const UserBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  [theme.breakpoints.up("sm")]:{
    display: "none",
  }
}));

const Navbar = () => {
    const [open,setOpen]=useState(false)
  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
          MD-DeV
        </Typography>
        <AcUnitRoundedIcon sx={{ display: { xs: "bolck", sm: "none" } }} />
        <Search>
          <InputBase placeholder="search..." />
        </Search>
        <Icons>
          <Badge badgeContent={4} color="error">
            <Mail color="action" />
          </Badge>
          <Badge badgeContent={2} color="error">
            <Notifications color="action" />
          </Badge>
          <Avatar
            alt="Travis Howard"
            src="https://us.123rf.com/450wm/mindsparx/mindsparx2303/mindsparx230364901/200804107-portrait-of-a-handsome-young-man-in-the-autumn-park-men-s-beauty-fashion.jpg?ver=6"
            sx={{ width: 30, height: 30 }}
            onClick={(e)=>setOpen(true)}
          />
        </Icons>
        <UserBox>
        <Avatar
            alt="Travis Howard"
            src="https://us.123rf.com/450wm/mindsparx/mindsparx2303/mindsparx230364901/200804107-portrait-of-a-handsome-young-man-in-the-autumn-park-men-s-beauty-fashion.jpg?ver=6"
            sx={{ width: 30, height: 30 }}
            onClick={(e)=>setOpen(true)}
          />
          <Typography variant="span">
            Mehmet Doğan
          </Typography>
        </UserBox>
      </StyledToolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={(e)=>setOpen(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  );
};

export default Navbar;
