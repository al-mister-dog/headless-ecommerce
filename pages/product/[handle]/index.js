import { storefront } from "../../../utils";
import { Box, Typography } from "@mui/material";
import VariantButtons from "../../../components/ui/VariantButtons";
import Button from "../../../components/ui/Button";
import React from "react";

import Image from "next/image";
import Description from "../../../components/shop/Description";
const product = ({ product }) => {
  const { title, description, images, variants } = product;
  const image = images.edges[0].node.url;
  const variantsMap = variants.edges.map((v) => {
    return {
      id: v.node.id,
      title: v.node.title.slice(0, v.node.title.indexOf("/")).trim(),
      size: v.node.title.slice(v.node.title.indexOf("/") + 1).trim(),
      price: v.node.price,
    };
  });

  const materials = variantsMap.filter(
    (variant, index, self) =>
      index === self.findIndex((v) => v.title === variant.title)
  );
  const sizes = variantsMap.filter(
    (variant, index, self) =>
      index === self.findIndex((v) => v.size === variant.size)
  );
  const lowestPrice = parseInt(
    variantsMap.reduce((prev, curr) => {
      return parseInt(prev.price) < parseInt(curr.price) ? prev : curr;
    }).price
  );

  return (
    <Box
      sx={{
        display: "flex",
        height: "90vh",
      }}
    >
      <Box sx={{ flexBasis: "55%" }}>
        <Box style={{ width: "100%", height: "100%", position: "relative" }}>
          <Image src={image} layout="fill" alt={title}></Image>
        </Box>
      </Box>
      <Box
        sx={{
          flexBasis: "45%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "1.5rem 2.5rem",
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Typography variant="h5" sx={{ marginBottom: "0.5rem" }}>
            {title}
          </Typography>
          <Typography>from £{lowestPrice}</Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            flexBasis: "30%",
          }}
        >
          <VariantButtons materials={materials} sizes={sizes} />
        </Box>
        <Box sx={{ flexBasis: "30%", width: "87%" }}>
          <Description />
        </Box>
        <Button sx={{ marginTop: "2rem" }}>Add to Bag</Button>
      </Box>
    </Box>
  );
};

export async function getStaticProps({ params }) {
  const gql = String.raw;
  const singleProductQuery = gql`
    query SingleProduct($handle: String!) {
      productByHandle(handle: $handle) {
        id
        title
        description
        images(first: 1) {
          edges {
            node {
              id
              url
            }
          }
        }
        variants(first: 6) {
          edges {
            node {
              id
              title
              price
            }
          }
        }
      }
    }
  `;
  const { data } = await storefront(singleProductQuery, {
    handle: params.handle,
  });
  return {
    props: {
      product: data.productByHandle,
    },
  };
}

export const getStaticPaths = async () => {
  const { data } = await storefront(`
    {
      products(first: 3) {
        edges {
          node {
            handle
          }
        }
      }
    }
    `);
  return {
    paths: data.products.edges.map((product) => ({
      params: { handle: product.node.handle },
    })),
    fallback: false,
  };
};

export default product;
