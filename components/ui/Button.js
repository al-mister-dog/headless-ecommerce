import { styled } from "@mui/system";

import Button from "@mui/material/Button";



const StyledButton = styled(Button)(({ theme }) => ({
  color: "black",
  width: "150px",
  padding: "10px 20px",
  width: "8rem",
  border: "1px solid",
  borderRadius: "35px",
  fontSize: theme.typography.pxToRem(13),
  textTransform: "none"
}));

export default StyledButton;
