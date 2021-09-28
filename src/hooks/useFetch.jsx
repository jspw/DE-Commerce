import { useContext, useEffect } from "react";
import { StateContext } from "../Context/StateContext";
import * as localStore from "../utility/services/localStorage/localStore";
import { getProducts } from "../api/products";
import initLocalStorage from "../utility/services/localStorage/initLocalStorage";
import { getCategories } from "../utility/product/productActions";
export default function useFetch() {
  const { setStateChanged } = useContext(StateContext);
  useEffect(function () {
    if (!localStore.isUserOld())
      getProducts()
        .then(function (response) {
          initLocalStorage(response.data, getCategories(response.data));
          setStateChanged((preState) => !preState);
        })
        .catch(function (error) {
          console.log(error);
        });
  });
}
