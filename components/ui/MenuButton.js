import { Button } from "@mui/material";
import { styled } from "@mui/system";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const StyledButton = styled((props) => (
  <Button {...props} endIcon={<KeyboardArrowDownIcon />} />
))(({ theme }) => ({
  color: "black",
  width: "150px",
  padding: "10px 20px",
  width: "8rem",
  border: "1px solid",
  borderRadius: "35px",
  fontSize: "0.8em",
  justifyContent: "space-between",
  textTransform: "none",
}));

export default StyledButton;