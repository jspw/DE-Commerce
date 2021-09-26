import { useEffect } from "react";
import { useHistory } from "react-router";
import * as localStore from "../../utility/services/localStorage/localStore";

export default function OrderPreview() {
  const history = useHistory();

  const {
    location: { order: preOrder },
  } = history;

  const order = preOrder || localStore.getOrder();

  if (!order) history.push("/");

  return order ? (
    <div className="flex border flex-col justify-top items-center bg-white m-5 p-10 space-y-5 ">
      <div>
        <div className="text-xl font-serif font-semibold">Order Preview</div>
        <hr />
      </div>
      <div className="flex flex-col space-y-2">
        <div className="flex flex-row justify-between space-x-2">
          <p className="text-gray-600">Total items : </p>
          <p>{order.totalItems}</p>
        </div>
        <div className="flex flex-row justify-between space-x-2">
          <p className="text-gray-600">Sub Total : </p>
          <p>${Math.round(order.subTotal)}</p>
        </div>
        <div className="flex flex-row justify-between space-x-2">
          <p className="text-gray-600">Discount : </p>
          <p>{order.discount}</p>
        </div>
        <hr />
        <div className="flex flex-row justify-between space-x-2">
          <p className="text-gray-600 ">Payable Amount : </p>
          <p className="font-semibold">${order.subTotal - order.discount}</p>
        </div>
      </div>
    </div>
  ) : (
    ""
  );
}
