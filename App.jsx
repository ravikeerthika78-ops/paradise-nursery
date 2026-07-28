import React from "react";
import "./App.css";

function App() {
  return (
    <div className="app">
      <div className="content">

        <h1>🌿 Paradise Nursery</h1>

        <p>
          Welcome to Paradise Nursery, your trusted destination for healthy,
          beautiful, and affordable plants. Our mission is to bring nature
          closer to every home by providing premium-quality indoor plants,
          outdoor plants, flowering plants, bonsai, succulents, and gardening
          accessories. Whether you are a beginner or an experienced gardener,
          we are here to help you create a greener and healthier lifestyle.
        </p>

        <a href="/products">
          <button className="get-started">
            Get Started
          </button>
        </a>

        <div className="features">

          <div className="card">
            <h3>🌱 Premium Plants</h3>
            <p>
              Carefully selected healthy plants grown by professional
              horticulturists for long-lasting freshness.
            </p>
          </div>

          <div className="card">
            <h3>🚚 Fast Delivery</h3>
            <p>
              Secure packaging and quick delivery ensure every plant arrives
              fresh and healthy at your doorstep.
            </p>
          </div>

          <div className="card">
            <h3>🌍 Eco Friendly</h3>
            <p>
              We promote sustainable gardening using recyclable packaging and
              environmentally friendly growing practices.
            </p>
          </div>

          <div className="card">
            <h3>👨‍🌾 Expert Support</h3>
            <p>
              Our gardening experts are always available to guide you with
              plant care tips and maintenance advice.
            </p>
          </div>

        </div>

        <div className="stats">

          <div className="stat">
            <h2>50K+</h2>
            <span>Plants Sold</span>
          </div>

          <div className="stat">
            <h2>15K+</h2>
            <span>Happy Customers</span>
          </div>

          <div className="stat">
            <h2>500+</h2>
            <span>Plant Varieties</span>
          </div>

          <div className="stat">
            <h2>100%</h2>
            <span>Customer Satisfaction</span>
          </div>

        </div>

        <div className="footer">
          <p>
            © 2026 Paradise Nursery. Bringing Nature Closer to Every Home.
          </p>
        </div>

      </div>
    </div>
  );
}

export default App;
