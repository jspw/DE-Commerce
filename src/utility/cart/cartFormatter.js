export function cartFormatter(products) {
  let payableAmount = 0;
  let totalProducts = 0;
  let totalQuantity = 0;

  Object.values(products).forEach((product) => {
    totalProducts++;
    totalQuantity = +product.quantity;
    payableAmount += product.price * product.quantity;
  });

  if (payableAmount === 0) return null;

  return {
    id: Date.now() + Math.random(),
    products,
    totalProducts,
    totalQuantity,
    payableAmount,
  };
}
