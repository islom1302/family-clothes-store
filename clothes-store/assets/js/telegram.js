// ===============================
// TELEGRAM CONFIG (SET ONCE)
// ===============================
const TELEGRAM_USERNAME = "kilouzqarshi";

// ===============================
// CREATE TELEGRAM ORDER LINK
// ===============================
function getTelegramLink(product) {
  const message =
    `Salom!\n` +
    `Mahsulot: ${product.name}\n` +
    `Narxi: ${product.price}\n` +
    `Link: ${window.location.href}`;

  return `https://t.me/${TELEGRAM_USERNAME}?text=${encodeURIComponent(message)}`;
}

// ===============================
// OPEN TELEGRAM ORDER
// ===============================
function orderProduct(name, price) {
  const link = getTelegramLink({ name, price });
  window.open(link, "_blank");
}
