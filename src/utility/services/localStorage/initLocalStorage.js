import * as localStore from "./localStore";

export default function initLocalStorage(products, categories) {
  localStore.saveProducts(products);
  localStore.saveCategories(categories);
  localStore.setUserOld(true);
}
