function fetchProducts() {
    return fetch('./api/products')
            .then((response) => response.json())
            .then((data) => data)
            .catch((err) => {
                console.log(err);
            })
}

function createProductCard(product) {
    let productString= `
                        <div class="col-sm-12 col-md-6 col-lg-4 my-2">
                            <div class="card p-4">
                                <h4 class="product-name">${product.name}</h4>
                                <div class="product-manufacturer">${product.manufacturer}</div>
                                <div class="row">
                                    <div class="col m-3 p-1">
                                        <b>₹${product.price}</b>
                                    </div>
                                    <button class="btn col btn-primary m-3 p-1" value=${product.id}>Buy</button>
                                </div>
                            <div>
                        </div>`
    let productHtml = new DOMParser().parseFromString(productString, 'text/html')
    console.log(productHtml.body.firstElementChild);
    return productHtml.body.firstElementChild
}

function addNewProduct (name, manufacturer, price) {
    let product = {name: name, manufacturer: manufacturer, price: price}
    fetch('./api/products', {
        method: 'post',
        body: JSON.stringify(product),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    })
        .then((response) => response.json())
        .then((product) => {
            console.log(product);
            alert(product.name + ' was added to the database')
        })
        .catch((err) => {
            console.error(err);
        })
}

function signUp (name, pass, flag) {
    let user = {name: name, pass: pass, flag: flag}
    console.log(user);
    fetch('../api/users', {
        method: 'post',
        body: JSON.stringify(user),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    })
        .then((response) => response.json())
        .then((user) => {
            alert(user.name + ' : Sign up successful!')
        })

}

function logIn (name, pass, flag) {
    let user = {name: name, pass: pass, flag: flag}
    fetch('../api/users', {
        method: 'post',
        body: JSON.stringify(user),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    })
        .then((response) => response.json())
        .then((user) => {
            console.log(user);
        })
        .catch((err) => {
            console.log(err);
        })
}