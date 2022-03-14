import Link from "next/link";
import { Button, Typography } from "@mui/material";
const Logo = () => {
  return (
    <>
      <Link href="/" passHref>
        <Button sx={{ flexGrow: 1, color: "black", fontWeight: "bold" }}>
          JOANNE GUIRAUD
        </Button>
      </Link>
      <Typography
        sx={{
          flexGrow: 1,
          color: "black",
          fontWeight: "bold",
          margin: "0 5px 0 5px",
        }}
      >
        {" "}
        |{" "}
      </Typography>
      <Typography>LDN</Typography>
    </>
  );
};

export default Logo;
