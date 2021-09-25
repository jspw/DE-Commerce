import axiosClient from "./client";

export function getProducts() {
  return axiosClient.get("/products");
}
