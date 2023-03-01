import React from "react";
import { Route, Routes} from "react-router-dom";
import Cart from "../Cart/Cart";
import Products from "../Products/Products";

const RoutesThings = ({productItems, cartItems, handleAddProduct, handleRemoveProduct}) =>{
    return(
        <div>
            <Routes>
                <Route path="/" element={<Products productItems={productItems} handleAddProduct={handleAddProduct}/>} />
                <Route path="cart" element={<Cart cartItems={cartItems} handleAddProduct={handleAddProduct} handleRemoveProduct={handleRemoveProduct}/>} />
            </Routes>
        </div>
    )
}

export default RoutesThings;