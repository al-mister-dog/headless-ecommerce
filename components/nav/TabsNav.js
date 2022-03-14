import { useState } from "react";
import { StyledTabs, StyledTab } from "./StyledTabs";
import Link from "next/link";

const tabs = [
  { href: "/shop", label: "Shop" },
  { href: "/about", label: "About" },
  { href: "/story", label: "Story" },
  { href: "/press", label: "Press" },
];

export default function TabsNav() {
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <StyledTabs
      value={value}
      onChange={handleChange}
      indicatorColor="transparent"
      textColor="black"
    >
      {tabs.map((tab) => {
        const { href, label } = tab;
        return (
          <Link key={href} href={href} passHref>
            <StyledTab label={label} />
          </Link>
        );
      })}
    </StyledTabs>
  );
}
