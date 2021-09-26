export default function productFormatter({
  id,
  title,
  price,
  description,
  image,
  category,
  quantity = 1,
  rating,
}) {
  console.log("qq",quantity);
  return {
    id,
    title,
    price,
    description,
    category,
    image,
    quantity: quantity || 1,
    rating,
  };
}
