import React from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../redux/CartSlice";

const plants = [
  {
    id: 1,
    name: "Snake Plant",
    category: "Indoor Plants",
    price: 499,
    image: "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?w=400",
  },
  {
    id: 2,
    name: "Peace Lily",
    category: "Indoor Plants",
    price: 599,
    image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=400",
  },
  {
    id: 3,
    name: "Aloe Vera",
    category: "Medicinal Plants",
    price: 299,
    image: "https://images.unsplash.com/photo-1512428813834-c702c7702b78?w=400",
  },
  {
    id: 4,
    name: "Tulsi",
    category: "Medicinal Plants",
    price: 199,
    image: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=400",
  },
  {
    id: 5,
    name: "Rose",
    category: "Flowering Plants",
    price: 399,
    image: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=400",
  },
  {
    id: 6,
    name: "Jasmine",
    category: "Flowering Plants",
    price: 349,
    image: "https://images.unsplash.com/photo-1468327768560-75b778cbb551?w=400",
  },
];

function ProductList() {
  const dispatch = useDispatch();

  const categories = [...new Set(plants.map((plant) => plant.category))];

  return (
    <div style={{ padding: "30px", background: "#f5f5f5" }}>
      <h1 style={{ textAlign: "center", color: "#2E7D32" }}>
        🌿 Paradise Nursery
      </h1>

      {categories.map((category) => (
        <div key={category} style={{ marginBottom: "40px" }}>
          <h2>{category}</h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "20px",
            }}
          >
            {plants
              .filter((plant) => plant.category === category)
              .map((plant) => (
                <div
                  key={plant.id}
                  style={{
                    background: "#fff",
                    padding: "15px",
                    borderRadius: "10px",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                    textAlign: "center",
                  }}
                >
                  <img
                    src={plant.image}
                    alt={plant.name}
                    style={{
                      width: "100%",
                      height: "200px",
                      objectFit: "cover",
                      borderRadius: "8px",
                    }}
                  />

                  <h3>{plant.name}</h3>

                  <p>
                    <strong>₹{plant.price}</strong>
                  </p>

                  <button
                    onClick={() => dispatch(addItem(plant))}
                    style={{
                      background: "#2E7D32",
                      color: "#fff",
                      border: "none",
                      padding: "10px 20px",
                      borderRadius: "5px",
                      cursor: "pointer",
                    }}
                  >
                    Add to Cart
                  </button>
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
