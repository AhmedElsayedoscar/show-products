const showBtn = document.getElementById("showBtn"),
      productsContainer = document.getElementById("productsContainer");

showBtn.addEventListener("click", function() {
  productsContainer.innerHTML = `
    <div class="text-center">
      <h3>Loading...</h3>
    </div>
  `;

  fetch("https://dummyjson.com/products")

//   اللي هي داتا i
.then(i => i.json())
    .then(function(i) {
      productsContainer.innerHTML = "";
    //  let = Object.array
      let products = i.products;
      
      products.forEach(function(i) {
        productsContainer.innerHTML += `
          <div class="col-12 col-sm-6 col-md-4 col-lg-3">
            <div class="card product-card shadow-sm">
              <img src="${i.thumbnail}" class="card-img-top product-image" alt="${i.title}">
              <div class="card-body">
                <h5 class="card-title">${i.title}</h5>
                <p class="text-muted">${i.category}</p>
                <p class="card-text product-description">${i.description}</p>
                <h5 class="text-success">$${i.price}</h5>
                <button class="btn btn-primary w-100 mt-2">View Product</button>
              </div>
            </div>
          </div>
        `;
      });
    })
    .catch(function(i) {
      productsContainer.innerHTML = `
        <div class="text-center">
          Something went wrong !!!!!
        </div>
      `;
    });
});