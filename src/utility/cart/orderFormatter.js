export function orderFormate({
  totalItems,
  subTotal,
  discount,
  payableAmount,
}) {
  return {
    totalItems,
    subTotal,
    discount,
    payableAmount,
  };
}
