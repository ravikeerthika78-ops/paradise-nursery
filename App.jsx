import React from "react";
import "./App.css";

function App() {
  const handleGetStarted = () => {
    alert("Welcome to Paradise Nursery!");
    // You can replace this with navigation if needed.
    // Example: window.location.href = "/products";
  };

  return (
    <div className="App">
      <section className="landing-page">
        <div className="landing-content">
          <h1>🌿 Paradise Nursery</h1>

          <p>
            Welcome to Paradise Nursery, your one-stop destination for beautiful
            indoor and outdoor plants. We provide healthy plants, gardening
            essentials, and expert care tips to help you create a greener,
            healthier home.
          </p>

          <button
            className="start-shopping-btn"
            onClick={handleGetStarted}
          >
            Get Started
          </button>
        </div>
      </section>
    </div>
  );
}

export default App;
