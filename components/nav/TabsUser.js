import { useState } from "react";
import { StyledTabs, StyledTab } from "./StyledTabs";
import Link from "next/link";
import { Typography } from "@mui/material";

export default function TabsUser() {
  const [value, setValue] = useState(0);
  const [language, setLanguage] = useState(true);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const toggleLanguage = () => {
    setLanguage(!language);
  };
  return (
    <StyledTabs
      value={value}
      onChange={handleChange}
      indicatorColor="transparent"
      textColor="black"
    >
      <Link href="/account" passHref>
        <StyledTab label="Account" />
      </Link>
      <Link href="/cart" passHref>
        <StyledTab label="Cart   (0)" />
      </Link>

      <StyledTab
        onClick={toggleLanguage}
        label={
          <Typography sx={{ fontSize: "0.8rem" }}>
            <span
              style={{
                marginRight: "5px",
                fontWeight: language && `bold`,
              }}
            >
              EN
            </span>
            <span
              style={{
                marginLeft: "5px",
                fontWeight: !language && `bold`,
              }}
            >
              FR
            </span>
          </Typography>
        }
      />
    </StyledTabs>
  );
}
