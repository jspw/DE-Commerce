import {
  LazyLoadImage,
  LazyLoadComponent,
} from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import defaultProductImage from "../../../assets/images/default_product.png";
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
    <LazyLoadComponent>
      <div className="m-2 p-4 col-span-1 shadow cursor-pointer  space-y-4">
        <div className="flex justify-center">
          <LazyLoadImage
            // alt={title}
            src={image}
            effect="blue"
            placeholderSrc={defaultProductImage}
            className="w-48 h-48"
          />
        </div>
        <div>
          <p className="text-center">{title}</p>
        </div>

        <div className="flex flex-row justify-between space-x-2">
          <div>${price}</div>
          <p>{rating}</p>
        </div>
      </div>
    </LazyLoadComponent>
  );
}
