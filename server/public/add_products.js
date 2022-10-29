let productName = document.getElementById('productName')
let productManufacturer = document.getElementById('productManufacturer')
let productPrice = document.getElementById('productPrice')
let btnAddProduct = document.getElementById('btnAddProduct')

btnAddProduct.addEventListener('click', () => {
    addNewProduct(productName.value, productManufacturer.value, productPrice.value)
})