const productContainer = document.querySelector(".choose_grid"); // Min grid container der holder alle mine elementer i produktliste

fetch(`https://kea-alt-del.dk/t7/api/products?limit=100`) // link til listen med alle productinformationer for alle id
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
                <h6>Price: ${product.price} </h6>
                <a class="cart" href="">ADD TO CART</a>
            </article>`;
    }).join(""); // samler og gør listen forståeligt uden mærkelige tegn
    productContainer.innerHTML = markup; // redigerer i den HTML du har ovenfor
} 