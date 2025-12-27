async function renderProducts(category) {
  const container = document.getElementById("products");
  container.innerHTML = "";

  try {
    const response = await fetch("../data/products.json");
    const products = await response.json();

    const filtered = products.filter(
      (p) => p.category === category
    );

    if (filtered.length === 0) {
      container.innerHTML = "<p>Mahsulotlar topilmadi.</p>";
      return;
    }

    filtered.forEach((product) => {
      const col = document.createElement("div");
      col.className = "col-md-4";

      col.innerHTML = `
        <div class="card product-card h-100 shadow-sm">
          <img src="${product.image}" class="card-img-top" alt="${product.name}">
          <div class="card-body">
            <h5 class="card-title">${product.name}</h5>
            <p class="fw-bold">${product.price}</p>
            <button
              class="btn btn-outline-dark w-100"
              onclick="orderProduct('${product.name}', '${product.price}')"
            >
              Buyurtma berish
            </button>
          </div>
        </div>
      `;

      container.appendChild(col);
    });

  } catch (error) {
    container.innerHTML = "<p>Xatolik yuz berdi.</p>";
    console.error(error);
  }
}
