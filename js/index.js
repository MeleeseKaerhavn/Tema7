let grid = document.querySelector(".choose_grid")


fetch("https://kea-alt-del.dk/t7/api/categories")
.then(response => response.json())
 .then(data => {
    let markup = data.map(kategori => `
        <article>
          <a href="productlist.html?category=${kategori.category}">${kategori.category}</a>
        </article>
      `).join("");
 
  grid.innerHTML = markup;
});
         