# Shopping Cart Website

A shopping cart website made using React.JS and Bootstrap for the frontend. The products are fetched from a backend API created in NodeJS using the Express framework. The API has an end point to add new products into the inventory.

## API Documentation

```
1. `GET /api/products`

Fetches the products, an additional query parameter (named `q`) may be supplied in the request to search products by name.

2. `POST /api/products`

Adds new products in the database, the request body must contain the a `name`, `price` and `imgUrl` for the product.
```

## Screenshots

![Initial cart page](./screenshots/Screenshot%20(8).png)

![Page after adding some products to the cart](./screenshots/Screenshot%20(9).png)

![Open cart](./screenshots/Screenshot%20(10).png)

![Searching products](./screenshots/Screenshot%20(11).png)