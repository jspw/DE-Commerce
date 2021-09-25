export default function Rating({ rating }) {
  return (
    <div className="flex flex-row space-x-2 items-baseline">
      <p className="text-yellow-400 font-medium">{rating}</p>
      <i
        className={`text-yellow-400  ${
          rating >= 4 ? "fa fa-star" : "fa fa-star-half-empty"
        } `}
      ></i>
    </div>
  );
}
