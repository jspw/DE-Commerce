import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import NavBar from "./components/NavBar/NavBar";
import ShopContextProvider from "./Context/shopContext";

function App() {
  return (
    <ShopContextProvider>
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </BrowserRouter>
    </ShopContextProvider>
  );
}

export default App;
