import { useState } from "react";
import { styled } from "@mui/material/styles";
import NavLarge from "./NavLarge"
import NavSmall from "./NavSmall"

import {
  AppBar,
  Box,

  useMediaQuery,
  useTheme,
} from "@mui/material";


export default function Nav() {
  const theme = useTheme();

  return (
    <Box sx={{ flexGrow: 1 }}>
      
      <AppBar
        position="sticky"
        sx={{ background: "transparent", boxShadow: "none", color: "black" }}
      >
        {useMediaQuery(theme.breakpoints.down("md")) ? <NavSmall /> : <NavLarge />}
      </AppBar>
    </Box>
  );
}
