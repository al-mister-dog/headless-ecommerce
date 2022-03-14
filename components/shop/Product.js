import { Box, Typography } from "@mui/material";
import Link from "next/link";
import Image from "next/image";
const Product = ({ product }) => {
  const handle = product.handle;
  const image = product.images.edges[0].node.url;
  return (
    <Link href="/product/[handle]" as={`/product/${handle}`} passHref>
      <Box
        style={{
          width: "350px",
          height: "400px",
          position: "relative",
          cursor: "pointer",
        }}
      >
        <Image src={image} layout="fill" alt="title" />
        <Box
          sx={{
            width: "100%",
            paddingTop: "5px",
            position: "absolute",
            bottom: "0px",
            background: "white",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Typography sx={{ fontSize: "0.7rem", fontWeight: "bold" }}>
            {product.title}
          </Typography>
          <Typography sx={{ fontSize: "0.7rem" }}>From £315</Typography>
        </Box>
      </Box>
    </Link>
  );
};

export default Product;
