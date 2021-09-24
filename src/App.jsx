import { BrowserRouter, Switch, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import NavBar from "./components/NavBar/NavBar";
import Page404 from "./components/Page404/Page404";
import CategoryContextProvider from "./Context/CategoryContext";
import ShopContextProvider from "./Context/ShopContext";

function App() {
  return (
    <CategoryContextProvider>
      <ShopContextProvider>
        <BrowserRouter>
          <NavBar />
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/category/:category" exact></Route>
            <Route path="/product/:product" exact></Route>
            <Route path="/order" exact></Route>
            <Route path="*">
              <Page404 />
            </Route>
          </Switch>
          <Footer />
        </BrowserRouter>
      </ShopContextProvider>
    </CategoryContextProvider>
  );
}

export default App;
