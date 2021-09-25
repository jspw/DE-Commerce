import { Switch, Route } from "react-router-dom";
import Checkout from "../components/Checkout/Checkout";
import OrderSuccess from "../components/Checkout/OrderSuccess";
import Home from "../components/Home/Home";
import Page404 from "../components/Page404/Page404";

export default function AppRoutes() {
  return (
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/category/:category" exact></Route>
      <Route path="/product/:product" exact></Route>
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
