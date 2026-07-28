import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addItem,
  removeItem,
  updateQuantity,
  clearCart,
} from "../redux/CartSlice";
import { Link } from "react-router-dom";
import "./CartItem.css";

function CartItem() {
  const dispatch = useDispatch();

  const { cartItems, totalAmount, totalQuantity } = useSelector(
    (state) => state.cart
  );

  const increaseQuantity = (item) => {
    dispatch(addItem(item));
  };

  const decreaseQuantity = (item) => {
    dispatch(removeItem(item.id));
  };

  const removeProduct = (item) => {
    dispatch(updateQuantity({ id: item.id, quantity: 0 }));
  };

  if (cartItems.length === 0) {
    return (
      <div className="empty-cart">
        <h1>🛒 Your Shopping Cart</h1>

        <h2>Your cart is empty.</h2>

        <p>
          Browse our beautiful collection of plants and add your
          favorites to the cart.
        </p>

        <Link to="/products">
          <button className="shop-btn">
            Continue Shopping
          </button>
        </Link>
      </div>
    );
  }

  return (
    <div className="cart-page">

      <h1>🌿 Paradise Nursery Shopping Cart</h1>

      <div className="cart-container">

        <div className="cart-items">

          {cartItems.map((item) => (

            <div className="cart-card" key={item.id}>

              <img
                src={item.image}
                alt={item.name}
              />

              <div className="cart-details">

                <h2>{item.name}</h2>

                <p>
                  <strong>Category:</strong> {item.category}
                </p>

                <p>
                  <strong>Price:</strong> ${item.price}
                </p>

                <p>
                  <strong>Total:</strong> $
                  {(item.price * item.quantity).toFixed(2)}
                </p>

                <div className="quantity-box">

                  <button
                    onClick={() => decreaseQuantity(item)}
                  >
                    -
                  </button>

                  <span>{item.quantity}</span>

                  <button
                    onClick={() => increaseQuantity(item)}
                  >
                    +
                  </button>

                </div>

                <button
                  className="remove-btn"
                  onClick={() => removeProduct(item)}
                >
                  Remove Item
                </button>

              </div>

            </div>

          ))}

        </div>

        <div className="cart-summary">

          <h2>Order Summary</h2>

          <hr />

          <div className="summary-row">
            <span>Total Items</span>
            <span>{totalQuantity}</span>
          </div>

          <div className="summary-row">
            <span>Subtotal</span>
            <span>${totalAmount.toFixed(2)}</span>
          </div>

          <div className="summary-row">
            <span>Shipping</span>
            <span>FREE</span>
          </div>

          <div className="summary-row">
            <span>Tax</span>
            <span>$0.00</span>
          </div>

          <hr />

          <div className="summary-total">
            <strong>Total</strong>
            <strong>${totalAmount.toFixed(2)}</strong>
          </div>

          <button
            className="checkout-btn"
            onClick={() => alert("Proceeding to Checkout...")}
          >
            Proceed to Checkout
          </button>

          <button
            className="clear-btn"
            onClick={() => dispatch(clearCart())}
          >
            Clear Cart
          </button>

          <Link to="/products">
            <button className="continue-btn">
              Continue Shopping
            </button>
          </Link>

        </div>

      </div>

    </div>
  );
}

export default CartItem;
