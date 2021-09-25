import { Switch, Route } from "react-router-dom";
import Category from "../components/Category/Category";
import Checkout from "../components/Checkout/Checkout";
import OrderSuccess from "../components/Checkout/OrderSuccess";
import Home from "../components/Home/Home";
import Page404 from "../components/Page404/Page404";
import ProductDetail from "../components/ProductDetail/ProductDetail";

export default function AppRoutes() {
  return (
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/category/:category" exact>
        <Category />
      </Route>
      <Route path="/product/:title" exact>
        <ProductDetail />
      </Route>
      <Route path="/checkout" exact>
        <Checkout />
      </Route>
      <Route path="/order-complete" exact>
        <OrderSuccess />
      </Route>
      <Route path="*">
        <Page404 />
      </Route>
    </Switch>
  );
}
