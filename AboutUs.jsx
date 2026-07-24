import React from "react";

const AboutUs = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>About Us</h1>

      <p style={styles.paragraph}>
        Welcome to our company! We are committed to delivering high-quality
        technology solutions that help businesses and individuals achieve their
        goals. Our team focuses on innovation, customer satisfaction, and
        continuous improvement.
      </p>

      <h2 style={styles.subHeading}>Our Mission</h2>
      <p style={styles.paragraph}>
        To provide reliable, innovative, and user-friendly digital solutions
        that create value for our customers and contribute to their success.
      </p>

      <h2 style={styles.subHeading}>Our Vision</h2>
      <p style={styles.paragraph}>
        To become a trusted global technology partner by delivering excellence,
        embracing innovation, and building long-term customer relationships.
      </p>

      <h2 style={styles.subHeading}>Our Values</h2>
      <ul style={styles.list}>
        <li>Integrity</li>
        <li>Innovation</li>
        <li>Customer Satisfaction</li>
        <li>Teamwork</li>
        <li>Excellence</li>
      </ul>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "800px",
    margin: "40px auto",
    padding: "20px",
    fontFamily: "Arial, sans-serif",
    lineHeight: "1.8",
    backgroundColor: "#f8f9fa",
    borderRadius: "10px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
  },
  heading: {
    textAlign: "center",
    color: "#2c3e50",
  },
  subHeading: {
    color: "#34495e",
    marginTop: "20px",
  },
  paragraph: {
    color: "#555",
  },
  list: {
    color: "#555",
    paddingLeft: "20px",
  },
};

export default AboutUs;
