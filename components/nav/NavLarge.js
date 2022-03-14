import { useState } from "react";
import { StyledTabs, StyledTab } from "./StyledTabs";
import { Box, Toolbar, Typography } from "@mui/material";

import Button from "@mui/material/Button";
import Link from "next/link";
import MenuDrawer from "./MenuDrawer";
import Logo from "./Logo";
import TabsNav from "./TabsNav";
import TabsUser from "./TabsUser";
export default function Nav() {
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
    <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
      <MenuDrawer open={open} toggleDrawer={toggleDrawer} />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Logo />
        <Button onClick={toggleDrawer()}>......</Button>
        <TabsNav />
      </Box>
      <TabsUser />
    </Toolbar>
  );
}
