export function cartProductFormate({ id, title, image, cartCount, price }) {
  return {
    id,
    title,
    image,
    cartCount,
    price,
  };
}

export function cartFormate(products) {
  let payableAmount = 0;
  products.forEach(
    (product) => (payableAmount += product.price * product.cartCount)
  );

  return {
    id: Date.now() + Math.random(),
    products,
    payableAmount,
  };
}
