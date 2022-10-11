import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";

import Stack from "@mui/material/Stack";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

const NavBar = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <AppBar position="static" color="primary">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Avatar
            alt="spoonshot"
            sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
            src={require("../images/spoonshot.png")}
          />
          {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              paddingLeft: 1,
              display: { xs: "none", md: "flex" },
              fontFamily: "Arial",
              fontWeight: 700,
              letterSpacing: ".1rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Books Inventory
          </Typography>
          <Avatar
            alt="spoonshot"
            src={require("../images/spoonshot.png")}
            sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}
          />
          {/* <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} /> */}
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "Arial",
              fontWeight: 700,
              letterSpacing: ".1rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Books Inventory
          </Typography>
          <Box sx={{ flexGrow: 0, marginLeft: "auto" }}>
            <Tooltip title="My Details">
              <IconButton onClick={handleClickOpen} sx={{ p: 0 }}>
                <Avatar alt="Hemy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Stack direction="column" spacing={2}>
              <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
              >
                <DialogTitle
                  fontWeight="bold"
                  align="center"
                  id="alert-dialog-title"
                >
                  {"My Details"}
                </DialogTitle>
                <DialogContent>
                  <DialogContentText
                    textAlign="center"
                    id="alert-dialog-description"
                  >
                    <Avatar
                      alt="Foto"
                      sx={{
                        display: { xs: "flex", md: "flex" },
                        mr: 1,
                        width: 56,
                        height: 56,
                        margin: "auto",
                      }}
                      src={require("../images/Pic.jpeg")}
                    />
                    <p>Hamsavardhan D</p>
                    <p>AE20B026</p>
                    <p>
                      IIT Madras
                    </p>
                    <p>
                      A budding web development enthusiast with about 2 years of
                      experience.
                    </p>
                  </DialogContentText>
                </DialogContent>
                <DialogActions>
                  <Button sx={{margin:'auto'}} onClick={handleClose} autoFocus>
                    Close
                  </Button>
                </DialogActions>
              </Dialog>
            </Stack>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default NavBar;
