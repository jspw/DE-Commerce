export default function productFormatter({
  id,
  title,
  price,
  image,
  quantity,
}) {
  return {
    id,
    title,
    price,
    image,
    quantity: quantity || 1,
  };
}
