import { Box, List, ListItem, ListItemText, Drawer } from "@mui/material";

export default function MenuDrawer({ open, toggleDrawer }) {
  const list = () => (
    <Box
      sx={{ width: "auto" }}
      role="presentation"
      onClick={toggleDrawer}
      onKeyDown={toggleDrawer}
    >
      <List sx={{ paddingBottom: "0px" }}>
        {[
          "Shop",
          "About",
          "Stockists",
          "Press",
          "Story",
          "Contact",
          "Instagram",
        ].map((text, index) => (
          <ListItem button key={text} sx={{ borderBottom: "1px solid black" }}>
            <ListItemText align="center" primary={text} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
  return (
    <Drawer anchor="top" open={open} onClose={toggleDrawer()}>
      {list()}
    </Drawer>
  );
}
