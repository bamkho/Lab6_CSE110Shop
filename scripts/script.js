// Script.js

var obj;
var productList = document.getElementById("product-list");


window.addEventListener('DOMContentLoaded', () => {
  // TODO


  fetch('https://fakestoreapi.com/products').then(res => res.json()).then((data) => {

    obj = data;
    console.log(obj);
    localStorage.setItem('product-data', JSON.stringify(obj));
    var product = JSON.parse(localStorage.getItem('product-data'));
    product.forEach(function (e) {
      productList.appendChild(new ProductItem(e));
    })


  })

});


