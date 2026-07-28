// AboutUs.jsx

import React from "react";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <div className="about-container">

      {/* Hero Section */}
      <section className="hero-section">
        <h1>Welcome to Paradise Nursery</h1>
        <p>
          Bringing Nature Closer to Every Home. We believe every plant tells a
          story and every garden creates happiness.
        </p>
      </section>

      {/* Company Introduction */}
      <section className="about-section">
        <h2>Who We Are</h2>
        <p>
          Paradise Nursery is one of the leading online plant stores dedicated
          to providing premium-quality indoor plants, outdoor plants, flowering
          plants, succulents, bonsai, gardening accessories, and eco-friendly
          products. Since our establishment, we have been committed to helping
          customers build greener, healthier, and more beautiful living spaces.
        </p>

        <p>
          Whether you are a beginner starting your first home garden or an
          experienced gardener expanding your collection, Paradise Nursery
          offers carefully selected plants grown with love and care by our
          experienced horticulture experts.
        </p>
      </section>

      {/* Mission */}
      <section className="about-section">
        <h2>Our Mission</h2>

        <p>
          Our mission is to inspire people to embrace nature by making
          high-quality plants affordable, accessible, and easy to care for. We
          strive to educate our customers about sustainable gardening while
          creating a healthier environment for future generations.
        </p>
      </section>

      {/* Vision */}
      <section className="about-section">
        <h2>Our Vision</h2>

        <p>
          We envision a world where every home, office, and community is filled
          with greenery. Our goal is to become the most trusted online nursery
          by delivering exceptional products, expert guidance, and outstanding
          customer service.
        </p>
      </section>

      {/* Why Choose Us */}
      <section className="about-section">
        <h2>Why Choose Paradise Nursery?</h2>

        <ul>
          <li>🌿 Premium Quality Healthy Plants</li>
          <li>🚚 Fast & Secure Nationwide Delivery</li>
          <li>💚 Affordable Prices</li>
          <li>🌱 Eco-Friendly Packaging</li>
          <li>👨‍🌾 Expert Gardening Support</li>
          <li>⭐ Trusted by Thousands of Happy Customers</li>
        </ul>
      </section>

      {/* Our Products */}
      <section className="about-section">
        <h2>Our Products</h2>

        <p>
          We provide a wide variety of gardening products including:
        </p>

        <ul>
          <li>Indoor Plants</li>
          <li>Outdoor Plants</li>
          <li>Flowering Plants</li>
          <li>Medicinal Plants</li>
          <li>Succulents & Cactus</li>
          <li>Bonsai Trees</li>
          <li>Plant Pots & Containers</li>
          <li>Organic Fertilizers</li>
          <li>Gardening Tools</li>
          <li>Plant Care Accessories</li>
        </ul>
      </section>

      {/* Sustainability */}
      <section className="about-section">
        <h2>Our Commitment to Sustainability</h2>

        <p>
          Sustainability is at the heart of everything we do. We use
          environmentally responsible packaging, encourage organic gardening
          practices, reduce plastic usage wherever possible, and support tree
          plantation initiatives to create a greener future.
        </p>

        <p>
          Every purchase made at Paradise Nursery contributes toward spreading
          environmental awareness and encouraging sustainable living.
        </p>
      </section>

      {/* Customer Promise */}
      <section className="about-section">
        <h2>Our Promise</h2>

        <p>
          Customer satisfaction is our highest priority. Every plant is
          carefully inspected before shipping to ensure it reaches you healthy
          and fresh. Our support team is always ready to help you with plant
          care tips, product recommendations, and after-sales assistance.
        </p>
      </section>

      {/* Statistics */}
      <section className="stats-section">

        <div className="stat-card">
          <h2>50,000+</h2>
          <p>Plants Delivered</p>
        </div>

        <div className="stat-card">
          <h2>15,000+</h2>
          <p>Happy Customers</p>
        </div>

        <div className="stat-card">
          <h2>500+</h2>
          <p>Plant Varieties</p>
        </div>

        <div className="stat-card">
          <h2>100%</h2>
          <p>Eco-Friendly Commitment</p>
        </div>

      </section>

      {/* Closing */}
      <section className="footer-message">
        <h2>Grow With Us 🌿</h2>

        <p>
          Thank you for choosing Paradise Nursery. Together, let's make the
          world greener—one plant at a time.
        </p>
      </section>

    </div>
  );
};

export default AboutUs;
