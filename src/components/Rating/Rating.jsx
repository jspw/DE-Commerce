import StarRatings from "react-star-ratings";
export default function Rating({ rating }) {
  return (
    <StarRatings
      rating={rating}
      starRatedColor="blue"
      numberOfStars={5}
      starDimension="20px"
      starSpacing="2px"
    />
  );
}
