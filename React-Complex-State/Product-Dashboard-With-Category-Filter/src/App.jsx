import React, { useState } from "react";

const App = () => {
  const [products, setProducts] = useState([
    { id: 1, name: "Laptop", price: 80000, category: "Premium" },
    { id: 2, name: "Mouse", price: 500, category: "Basic" },
    { id: 3, name: "Keyboard", price: 1500, category: "Basic" },
    { id: 4, name: "Smartphone", price: 60000, category: "Premium" },
    { id: 5, name: "Monitor", price: 12000, category: "Deluxe" },
    { id: 6, name: "Headphones", price: 3000, category: "Deluxe" },
  ])

  const [filteredProducts, setFilteredProducts] = useState(products)

  const filterHandler = (e)=>{
    const selectedCategory = e.target.value;
    if (selectedCategory === "All") {
      setFilteredProducts(products)
      return
    }
    const filter = products.filter((product) => product.category === selectedCategory)
    setFilteredProducts(filter)
  }

  return (
    <div>

      <select onChange={filterHandler} name="Type" id="" defaultValue="All">
        <option value="All">All</option>
        <option value="Premium">Premium</option>
        <option value="Deluxe">Deluxe</option>
        <option value="Basic">Basic</option>
      </select>

      <div style={{
        display: "grid",
        gridTemplateRows: "repeat(2,1fr)",
        gridTemplateColumns: "repeat(3,1fr)",
        gap: "1rem",
        border: "1px solid black",
        padding: "1rem"
      }}>
        {filteredProducts.map((product, index) => {
          return (
            <div style={{
              border: "1px solid black",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }} 
            key={index}>
              <h4>{product.name}</h4>
              <p>{product.price}</p>
              <p>{product.category}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;
