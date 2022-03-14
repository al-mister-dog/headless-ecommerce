import { useState } from "react";
import { Box, Toolbar, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import MenuDrawer from "./MenuDrawer";
import Logo from "./Logo";
import TabsUser from "./TabsUser";

export default function NavSmall() {
  const [open, setOpen] = useState(false);

  const toggleDrawer = () => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setOpen(!open);
  };

  return (
    <Toolbar
      sx={{
        display: "flex",
        "@media screen and (max-width: 600px)": {
          flexDirection: "column",
        },
        justifyContent: "space-between",
      }}
    >
      <MenuDrawer open={open} toggleDrawer={toggleDrawer} />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <IconButton onClick={toggleDrawer()}>
          <MenuIcon />
        </IconButton>
        <Logo />
      </Box>

      <TabsUser />
    </Toolbar>
  );
}
