const myId = new URLSearchParams(window.location.search).get("id");

let productContainer = document.querySelector("#single_view");

fetch(`https://kea-alt-del.dk/t7/api/products/${myId}`)
    .then(respons => respons.json())
    .then(data => {
        productContainer.innerHTML = `
        <img src="https://kea-alt-del.dk/t7/images/webp/640/${myId}.webp" alt="${data.productdisplayname}">
            <h2>${data.productdisplayname}</h2>
            <h3>${data.articletype} - ${data.brandname}</h3>
            <p><strong>Model Name</strong>
                <br> ${data.productdisplayname}
                <br><strong>Color</strong>
                <br> ${data.basecolour}
                <br><strong>Inventory number</strong>
                <br> ${data.id}</p>
            
            <label for="size">Choose your size</label>
            <select name="size" id="size-select">
                <option value="xs">XS</option>
                <option value="s">S</option>
                <option value="m">M</option>
                <option value="l">L</option>
                <option value="xl">XL</option>
                <option value="surprise">Surprise me</option>
            </select>

            <a class="cart" href="#">ADD TO CART</a>
        `;
    })