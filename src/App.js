import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Products from "./pages/productList";
import ShopContextProvider from "./context/shopContext";
import Nav from "./compenents/nav";
import CartData from "./pages/cartpage";
import { useState } from "react";
import Dropdown from "./compenents/dropdown";
import Description from "./pages/description";
function App() {
  const [isOpen, setIsOpen] = useState(false);
  const navtoggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <ShopContextProvider>
      <Router>
        <Nav toggle={navtoggle} />

        <div className="max-w-screen-2xl w-full m-auto shadow-xl px-6">
          <Dropdown toggle={navtoggle} isOpen={isOpen} />

          <Switch>
            <Route path="/" exact component={Products} />
            <Route path="/cart" component={CartData} />
            <Route path="/des" component={Description} />
          </Switch>
        </div>
      </Router>
    </ShopContextProvider>
  );
}

export default App;
