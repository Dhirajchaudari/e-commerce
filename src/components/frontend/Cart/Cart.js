import React from "react";
import './Cart.css'
const Cart = ({ cartItems, handleAddProduct, handleRemoveProduct }) => {

    const totalPrice = cartItems.reduce((price, item)=> price +  item.quantity * item.price,0);

    return (
        <div className="cart-items">
            <div className="cart-items-header">Cart Items</div>


            {cartItems.length === 0 &&
                (<div className="cart-items-empty">No Items added in the cart</div>)}

            <div>
                {cartItems.map((items) => (
                    <div key={items.id} className="cart-items-list">
                        <img className="cart-items-image" src={items.image} alt={items.name} />
                        <div className="cart-item-name">{items.name}</div>
                        <div className="cart-item-function">
                            <button className="cart-item-add" onClick={() => handleAddProduct(items)}>+</button>
                            <button className="cart-item-remove" onClick={() => handleRemoveProduct(items)}>-</button>
                        </div>
                        <div className="cart-item-price">
                            {items.quantity} * ${items.price}
                        </div>
                    </div>
                ))}
            </div>
            <div className="cart-item-total-price-name">
                Total price 
                <div className="cart-item-total-price">${totalPrice}</div>
            </div>
        </div>
    )
}
export default Cart;