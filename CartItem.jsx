import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  removeItem,
  updateQuantity,
} from "../redux/CartSlice";

function CartItem() {
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart.items);

  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const increaseQuantity = (item) => {
    dispatch(
      updateQuantity({
        id: item.id,
        quantity: item.quantity + 1,
      })
    );
  };

  const decreaseQuantity = (item) => {
    if (item.quantity > 1) {
      dispatch(
        updateQuantity({
          id: item.id,
          quantity: item.quantity - 1,
        })
      );
    } else {
      dispatch(removeItem(item.id));
    }
  };

  return (
    <div
      style={{
        padding: "30px",
        backgroundColor: "#f5f5f5",
        minHeight: "100vh",
      }}
    >
      <h1 style={{ textAlign: "center", color: "#2E7D32" }}>
        🛒 Shopping Cart
      </h1>

      {cartItems.length === 0 ? (
        <h2 style={{ textAlign: "center" }}>
          Your cart is empty.
        </h2>
      ) : (
        <>
          {cartItems.map((item) => (
            <div
              key={item.id}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                background: "#fff",
                padding: "20px",
                margin: "20px 0",
                borderRadius: "10px",
                boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
              }}
            >
              <img
                src={item.image}
                alt={item.name}
                style={{
                  width: "120px",
                  height: "120px",
                  objectFit: "cover",
                  borderRadius: "8px",
                }}
              />

              <div style={{ flex: 1, marginLeft: "20px" }}>
                <h2>{item.name}</h2>

                <p>
                  <strong>Price:</strong> ₹{item.price}
                </p>

                <p>
                  <strong>Subtotal:</strong> ₹
                  {item.price * item.quantity}
                </p>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    marginTop: "10px",
                  }}
                >
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
              </div>

              <button
                onClick={() => dispatch(removeItem(item.id))}
                style={{
                  background: "red",
                  color: "#fff",
                  border: "none",
                  padding: "10px 20px",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
              >
                Remove
              </button>
            </div>
          ))}

          <div
            style={{
              textAlign: "center",
              marginTop: "30px",
            }}
          >
            <h2>Total: ₹{totalAmount}</h2>

            <button
              style={{
                margin: "10px",
                padding: "12px 25px",
                background: "#2E7D32",
                color: "#fff",
                border: "none",
                borderRadius: "6px",
                cursor: "pointer",
              }}
              onClick={() => window.history.back()}
            >
              Continue Shopping
            </button>

            <button
              style={{
                margin: "10px",
                padding: "12px 25px",
                background: "#1565C0",
                color: "#fff",
                border: "none",
                borderRadius: "6px",
                cursor: "pointer",
              }}
              onClick={() => alert("Checkout Successful!")}
            >
              Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default CartItem;
