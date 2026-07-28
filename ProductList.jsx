import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../redux/CartSlice";
import "./ProductList.css";

const products = [
  {
    id: 1,
    name: "Snake Plant",
    category: "Indoor",
    price: 15,
    image: "https://images.unsplash.com/photo-1463320726281-696a485928c7",
  },
  {
    id: 2,
    name: "Peace Lily",
    category: "Indoor",
    price: 20,
    image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6",
  },
  {
    id: 3,
    name: "Aloe Vera",
    category: "Medicinal",
    price: 18,
    image: "https://images.unsplash.com/photo-1459156212016-c812468e2115",
  },
  {
    id: 4,
    name: "Rose Plant",
    category: "Flowering",
    price: 22,
    image: "https://images.unsplash.com/photo-1490750967868-88aa4486c946",
  },
  {
    id: 5,
    name: "Bonsai",
    category: "Bonsai",
    price: 45,
    image: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735",
  },
  {
    id: 6,
    name: "Cactus",
    category: "Succulent",
    price: 12,
    image: "https://images.unsplash.com/photo-1512428559087-560fa5ceab42",
  },
];

function ProductList() {
  const dispatch = useDispatch();

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [addedItems, setAddedItems] = useState([]);

  const filteredProducts = products.filter((item) => {
    const categoryMatch =
      category === "All" || item.category === category;

    const searchMatch = item.name
      .toLowerCase()
      .includes(search.toLowerCase());

    return categoryMatch && searchMatch;
  });

  const handleAddToCart = (item) => {
    dispatch(addItem(item));

    if (!addedItems.includes(item.id)) {
      setAddedItems([...addedItems, item.id]);
    }
  };

  return (
    <div className="product-page">

      <h1>🌿 Paradise Nursery</h1>

      <p>
        Browse our premium collection of indoor, outdoor,
        flowering and medicinal plants.
      </p>

      <div className="toolbar">

        <input
          type="text"
          placeholder="Search plants..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option>All</option>
          <option>Indoor</option>
          <option>Flowering</option>
          <option>Medicinal</option>
          <option>Bonsai</option>
          <option>Succulent</option>
        </select>

      </div>

      <div className="product-grid">

        {filteredProducts.map((plant) => (

          <div className="product-card" key={plant.id}>

            <img
              src={plant.image}
              alt={plant.name}
            />

            <h2>{plant.name}</h2>

            <h4>{plant.category}</h4>

            <p>
              Healthy premium quality plant for your home
              and office decoration.
            </p>

            <h3>${plant.price}</h3>

            <button
              disabled={addedItems.includes(plant.id)}
              onClick={() => handleAddToCart(plant)}
            >
              {addedItems.includes(plant.id)
                ? "Added ✓"
                : "Add to Cart"}
            </button>

          </div>

        ))}

      </div>

    </div>
  );
}

export default ProductList;
