import { Box } from "@mui/material";
import { storefront } from "../utils";

import ProductSidebar from "../components/shop/ProductSidebar";
import ProductList from "../components/shop/ProductList";

const shop = ({products}) => {
  const listItems = ["Finger", "Ear", "Wrist", "Body", "Bespoke"];
  return (
    <Box sx={{ height: "100vh", display: "flex" }}>
      <ProductSidebar listItems={listItems} />
      <ProductList products={products} />
    </Box>
  );
}

export async function getStaticProps() {
  const gql = String.raw;
  const productsQuery = gql`
    query Products {
      products(first: 3) {
        edges {
          node {
            id
            handle
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
      }
    }
  `;
  const { data } = await storefront(productsQuery);
  return {
    props: {
      products: data.products,
    },
  };
}

export default shop