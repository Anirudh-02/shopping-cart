let productList = document.getElementById('product-list')

fetchProducts()
    .then((fetchedProducts) => {
        for (product of fetchedProducts) {
            productList.appendChild(createProductCard(product))
        }
    })
    .catch((err) => {
        console.error(err);
    })
