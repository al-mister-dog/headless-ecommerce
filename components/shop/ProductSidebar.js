import { Box, List, ListItem, Typography} from "@mui/material";

export default function ProductSidebar({ listItems }) {
  // const listItems = ["Finger", "Ear", "Wrist", "Body", "Bespoke"];
  return (
    <Box
      sx={{
        flexBasis: "22%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <List style={{ marginBottom: "70px" }}>
        {listItems.map((item, index) => {
          return (
            <ListItem
              key={index}
              button
              component="a"
              style={{ padding: "3px 10px 3px 10px" }}
            >
              <Typography style={{ fontSize: "0.8rem" }}>{item}</Typography>
            </ListItem>
          );
        })}
      </List>
    </Box>
  );
}
