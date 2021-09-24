import { BrowserRouter, Switch, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import NavBar from "./components/NavBar/NavBar";
import CategoryContextProvider from "./Context/CategoryContext";
import ShopContextProvider from "./Context/ShopContext";

function App() {
  return (
    <CategoryContextProvider>
      <ShopContextProvider>
        <BrowserRouter>
          <NavBar />
          <Switch>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
          <Footer />
        </BrowserRouter>
      </ShopContextProvider>
    </CategoryContextProvider>
  );
}

export default App;
