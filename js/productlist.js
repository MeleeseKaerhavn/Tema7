const productContainer = document.querySelector(".choose_grid");

fetch(`https://kea-alt-del.dk/t7/api/products`)
.then(response => response.json())
.then (data => showList(data));

function showList(products) {
    let markup = "";
products.map(product => { markup +=
    `        <article class="card discount">
                <a href="product.html">
                <img src="https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp" alt=""></a>
                <h4>Model Name: ${product.productdisplayname}</h4>
                <h5>Type: ${product.articletype} </h5>
                <a class="cart" href="">ADD TO CART</a>
            </article>`;
    }).join("");
    productContainer.innerHTML = markup;
} 