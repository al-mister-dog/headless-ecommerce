export async function storefront(query, variables = {}) {
  const response = await fetch(process.env.SHOPIFY_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
      "X-Shopify-Access-Token": process.env.ADMIN_TOKEN, //Admin API access token
    },
    body: JSON.stringify({ query, variables }),
  });
  return response.json()
}

