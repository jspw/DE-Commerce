import { LazyLoadImage } from "react-lazy-load-image-component";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import OrderCompleteIcon from "../../assets/images/order-complete.png";
import defaultImage from "../../assets/images/default_product.png";

export default function OrderSuccess() {
  const history = useHistory();

  const {
    location: { done },
  } = history;

  if (!done) history.push("/");

  return (
    <div>
      <div className="m-4 p-4 w flex flex-col justify-center items-center border-l border-r border-green-400 bg-white rounded shadow space-y-6">
        <LazyLoadImage
          alt="order complete"
          className="w-1/5"
          effect="blur"
          src={OrderCompleteIcon}
          visibleByDefault={defaultImage}
        />

        <p className="text-xl  font-medium text-gray-500">
          Order placed successfully !
        </p>
        <Link to="/">
          <button className="text-lg font-semibold font-mono text-white bg-green-500 pl-6 pr-6 pt-1 pb-1   border border-white rounded hover:text-green-600 hover:bg-white hover:border-green-700 ">
            Home
          </button>
        </Link>
      </div>
    </div>
  );
}
