import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import { Avatar, Link } from "@mui/material";
import Image from "../../assets/images/backgroundImage.png";

const Header = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        color="inherit"
        position="static"
        sx={{
          backgroundImage: `url(${Image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Toolbar>
          {/* botton to home */}
          <IconButton sx={{ p: 0 }}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Link
                href="https://www.aqnitio.com.ar/"
                rel="noreferrer"
                target="blank"
              >
                <Avatar
                  variant="square"
                  src="https://www.aqnitio.com.ar/wp-content/uploads/2020/04/logo_aqnitio_sticky.png"
                  sx={{ width: "auto", height: 48, backgroundSize: "cover" }}
                ></Avatar>
              </Link>
            </Box>
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
