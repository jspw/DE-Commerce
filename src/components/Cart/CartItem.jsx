import { LazyLoadImage } from "react-lazy-load-image-component";

export default function CartItem({
  product: { title, image, cartCount, price },
}) {
  return (
    <div className="flex flex-row justify-between items-center m-2 p-2">
      <div className="flex flex-row space-x-2 items-center justify-around align-center">
        <div className="flex justify-center border">
          <LazyLoadImage
            src={image}
            effect="blur"
            className="w-16 h-16 rounded-lg p-1"
          />
        </div>

        <div className="space-y-1">
          <div>
            <p className="text-base text-gray-500 font-serif">{title}</p>
          </div>
          <div className="flex flex-row space-x-1 text-base font-medium">
            <p className="">${price}</p>
            <p>x</p> <p>{cartCount}</p>
          </div>
          <div className="flex flex-row space-x-2">
            <button className="border pl-3 pr-3">-</button>
            <p>{cartCount}</p>
            <button className="border pl-3 pr-3">+</button>
          </div>
        </div>
      </div>
      <div>
        <i className="fa fa-trash text-red-600 p-2"></i>
      </div>
    </div>
  );
}
