export default function productFormate({
  id,
  title,
  price,
  description,
  image,
  category,
  cartCount = 0,
  rating: { rate: rating, count: reviews },
}) {
  return {
    id,
    title,
    price,
    description,
    category,
    image,
    cartCount,
    rating,
    reviews,
  };
}
