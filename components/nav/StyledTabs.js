import { styled } from "@mui/material/styles";
import { Tabs, Tab } from "@mui/material";

const StyledTabs = styled((props) => (
  <Tabs
    {...props}
    TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
  />
))({
  "& button": {
    minWidth: 105,
  },
});

const StyledTab = styled((props) => <Tab {...props} />)(({ theme }) => ({
  fontSize: theme.typography.pxToRem(13),
  color: "black",
  fontWeight: "normal",
  textTransform: "none",
}));

export { StyledTabs, StyledTab };
