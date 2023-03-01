import data from "./components/back/Data/Data";
import Header from "./components/frontend/Header/Header";
import RoutesThings from "./components/frontend/Routes/RouterThings";
import { BrowserRouter as Router } from 'react-router-dom'
import { useState } from "react";
const App = () => {
  const { productItems } = data;
  const [cartItems, setCartItems] = useState([]);

  const handleRemoveProduct = (product) => {
    const ProductExit = cartItems.find((item) => item.id === product.id);
    if (ProductExit.quantity === 1) {
      setCartItems(cartItems.filter((item) => item.id !== product.id));
    }
    else {
      setCartItems(cartItems.map((item) => item.id === product.id ? { ...ProductExit, quantity: ProductExit.quantity - 1 } : item))
    }
  }

  const handleAddProduct = (product) => {
    const ProductExit = cartItems.find((item) => item.id === product.id);
    if (ProductExit) {
      setCartItems(cartItems.map((item) => item.id === product.id ?
        { ...ProductExit, quantity: ProductExit.quantity + 1 } : item)
      );
    }
    else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };



  return (
    <div>
      <Router>
        <Header />
        <RoutesThings productItems={productItems} cartItems={cartItems} handleAddProduct={handleAddProduct} handleRemoveProduct={handleRemoveProduct}/>
      </Router>
    </div>
  );
}

export default App;
