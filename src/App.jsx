import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import NavBar from "./components/NavBar/NavBar";
import ProductsContextProvider from "./Context/ProductsContext";

function App() {
  return (
    <ProductsContextProvider>
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </BrowserRouter>
    </ProductsContextProvider>
  );
}

export default App;
