import Product from "./Product";
import { Box } from "@mui/material";
const ProductList = ({ products }) => {
  return (
    <Box
      sx={{
        flexBasis: "78%",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        flexWrap: "wrap",
        overflowX: "hidden",
      }}
    >
      {products.edges.map((prod) => {
        const product = prod.node;
        console.log(product.description)
        return <Product key={product.handle} product={product} />;
      })}
    </Box>
  );
};

export default ProductList;
