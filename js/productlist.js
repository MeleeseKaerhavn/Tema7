const myCategory = new URLSearchParams(window.location.search).get("category");
const productContainer = document.querySelector(".choose_grid"); // Min grid container der holder alle mine elementer i produktliste

fetch(`https://kea-alt-del.dk/t7/api/products?category=${myCategory}`) // link til listen med alle productinformationer for alle id
.then(response => response.json())
.then (data => showList(data));

function showList(products) {
    let markup = "";
products.map(product => { 
    markup +=
    `        <article class="card ${product.discount && "discount"} ${product.soldout && "sold-out"}">
                <a href="product.html?id=${product.id}">
                <img src="https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp" alt=""></a>
                <h4>Model Name: ${product.productdisplayname}</h4>
                <h5>Type: ${product.articletype} </h5>
                <h6>Price: ${product.price} </h6>
                <a class="cart" href="">ADD TO CART</a>
            </article>`;
    }).join(""); // samler og gør listen forståeligt uden mærkelige tegn
    productContainer.innerHTML = markup; // redigerer i den HTML du har ovenfor
} 