// ===============================
// TELEGRAM CONFIG (SET ONCE)
// ===============================
const TELEGRAM_USERNAME = "kilouzqarshi";

// ===============================
// CREATE TELEGRAM ORDER LINK
// ===============================
function getTelegramLink(product) {
  const message =
    `Salom!%0A` +
    `Mahsulot: ${product.name}%0A` +
    `Narxi: ${product.price}%0A` +
    `Link: ${window.location.href}`;

  return `https://t.me/${TELEGRAM_USERNAME}?text=${message}`;
}

// ===============================
// OPEN TELEGRAM ORDER
// ===============================
function orderProduct(name, price) {
  const link = getTelegramLink({ name, price });
  window.open(link, "_blank");
}
