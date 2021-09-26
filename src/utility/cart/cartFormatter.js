export function cartProductFormate({ id, title, image, cartCount, price }) {
  return {
    id,
    title,
    image,
    cartCount,
    price,
  };
}

export function cartFormatter(products) {
  // let payableAmount = 0;

  // const products = products.values();
  // for (product of getProductsValue)
  //   payableAmount += product.price * product.quantity;

  // if (payableAmount === 0) return null;

  return {
    id: Date.now() + Math.random(),
    products,
    // payableAmount,
  };
}
