export default function Product({
  product: {
    id,
    title,
    description,
    price,
    image,
    cartCount,
    rating: { rate: rating, count: ratingCount },
  },
}) {
  return (
    <div className="m-2 p-4 col-span-1 shadow cursor-pointer  space-y-4">
      <div className="flex justify-center">
        <img className="w-48 h-48" src={image} />
      </div>
      <div>
        <p className="text-center">{title}</p>
      </div>

      <div className="flex flex-row justify-between space-x-2">
        <div>${price}</div>
        <p>{rating}</p>
      </div>
    </div>
  );
}
