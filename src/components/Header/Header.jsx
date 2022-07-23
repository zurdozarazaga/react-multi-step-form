import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Avatar } from "@mui/material";
import Image from '../../assets/images/backgroundImage.png'

const Header = () => {
  const handleHome = () => {
    console.log("Home");
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        color="inherit"
        position="static"
        sx={{backgroundImage:
          `url(${Image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Toolbar>
        {/* botton to home */}
          <IconButton onClick={handleHome} sx={{ p: 0 }}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Avatar
                variant="square"
                src="https://www.aqnitio.com.ar/wp-content/uploads/2020/04/logo_aqnitio_sticky.png"
                sx={{ width: 'auto', height: 48,
                  backgroundSize: 'cover',
                 }}
                 >
                <img src="https://www.aqnitio.com.ar/wp-content/uploads/2020/04/logo_aqnitio_sticky.png" alt="logo" />
              </Avatar>
            </Box>
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
