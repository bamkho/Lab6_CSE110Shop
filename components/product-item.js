// product-item.js
var itemCount = 0;

class ProductItem extends HTMLElement {
  // TODO
  constructor(product) {
    super();

    this.attachShadow({ mode: 'open' });

    const productStyle = document.createElement('style');
    productStyle.textContent = `.price {
      color: green;
      font-size: 1.8em;
      font-weight: bold;
      margin: 0;
    }
    
    .product {
      align-items: center;
      background-color: white;
      border-radius: 5px;
      display: grid;
      grid-template-areas: 
      'image'
      'title'
      'price'
      'add';
      grid-template-rows: 67% 11% 11% 11%;
      height: 450px;
      filter: drop-shadow(0px 0px 6px rgb(0,0,0,0.2));
      margin: 0 30px 30px 0;
      padding: 10px 20px;
      width: 200px;
    }
    
    .product > button {
      background-color: rgb(255, 208, 0);
      border: none;
      border-radius: 5px;
      color: black;
      justify-self: center;
      max-height: 35px;
      padding: 8px 20px;
      transition: 0.1s ease all;
    }
    
    .product > button:hover {
      background-color: rgb(255, 166, 0);
      cursor: pointer;
      transition: 0.1s ease all;
    }
    
    .product > img {
      align-self: center;
      justify-self: center;
      width: 100%;
    }
    
    .title {
      font-size: 1.1em;
      margin: 0;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    
    .title:hover {
      font-size: 1.1em;
      margin: 0;
      white-space: wrap;
      overflow: auto;
      text-overflow: unset;
    }`;

    console.log(localStorage.getItem(product.id.toString()));

    this.shadowRoot.appendChild(productStyle);

    const listItem = document.createElement('li');
    listItem.setAttribute("class", "product");

    this.shadowRoot.appendChild(listItem);

    const productImage = document.createElement('img');
    productImage.setAttribute("src", product.image);
    productImage.setAttribute("width", 200);
    productImage.setAttribute("alt", product.title);

    listItem.appendChild(productImage);

    const productTitle = document.createElement('p');
    productTitle.setAttribute("class", "title");
    productTitle.textContent = product.title;

    const productPrice = document.createElement('p');
    productPrice.setAttribute("class", "price");
    productPrice.textContent = "$" + product.price;

    listItem.appendChild(productTitle);
    listItem.appendChild(productPrice);

    const productButton = document.createElement('button');

    console.log(localStorage.getItem(product.id.toString));



    if (localStorage.getItem(product.id.toString()) === null) {
      localStorage.setItem(product.id.toString(), '1');
      productButton.setAttribute("onclick", "alert('Added to Cart!')");
      productButton.textContent = "Add to Cart";
      listItem.appendChild(productButton);
    }
    else if (localStorage.getItem(product.id.toString()) === '1') {
      productButton.setAttribute("onclick", "alert('Added to Cart!')");
      productButton.textContent = "Add to Cart";
      listItem.appendChild(productButton);
    }
    else {
      productButton.setAttribute("onclick", "alert('Removed from Cart!')");
      productButton.textContent = "Remove from Cart";
      listItem.appendChild(productButton);
      itemCount++;
      document.getElementById('cart-count').textContent = itemCount;
    }

    productButton.onclick = function () {

      if (localStorage.getItem(product.id.toString()) === '1') {
        alert('Added to Cart!');
        itemCount = parseInt(document.getElementById('cart-count').textContent, 10);
        itemCount++;
        document.getElementById('cart-count').textContent = itemCount;
        productButton.textContent = "Remove from Cart";
        productButton.setAttribute("onclick", "alert('Removed from Cart!')");
        localStorage.setItem(product.id.toString(), '2');
      }
      else {
        itemCount = parseInt(document.getElementById('cart-count').textContent, 10);
        itemCount--;
        document.getElementById('cart-count').textContent = itemCount;
        productButton.textContent = "Add to Cart";
        localStorage.setItem(product.id.toString(), '1');
      }


    }

  }

}

customElements.define('product-item', ProductItem);