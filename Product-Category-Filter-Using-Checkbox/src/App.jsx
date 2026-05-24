import React, { useState } from "react";

const App = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Laptop",
      category: "Electronics",
      price: 50000,
    },
    {
      id: 2,
      name: "T-Shirt",
      category: "Clothing",
      price: 1200,
    },
    {
      id: 3,
      name: "Mobile",
      category: "Electronics",
      price: 30000,
    },
    {
      id: 4,
      name: "Jeans",
      category: "Clothing",
      price: 2000,
    },
  ])

  const [filteredData, setFilteredData] = useState(products)

  const filterHandler = (e) => {
    let electronicsCheckbox = document.querySelector("#electronics")
    let clothingCheckbox = document.querySelector("#clothing")
    let filter
    if (
      (electronicsCheckbox.checked && clothingCheckbox.checked) ||
      (!electronicsCheckbox.checked && !clothingCheckbox.checked)
    ) {
      filter = products
    } else if (electronicsCheckbox.checked && !clothingCheckbox.checked) {
      filter = products.filter((data) => {
        if (data.category == "Electronics") {
          return data
        }
      });
    } else if (clothingCheckbox.checked && !electronicsCheckbox.checked) {
      filter = products.filter((data) => {
        if (data.category == "Clothing") {
          return data
        }
      });
    }
    setFilteredData(filter)
  }

  return (
    <div>
      <table border={1} cellPadding={5} cellSpacing={5}>
        <thead>
          <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>CATEGORY</th>
            <th>PRICE</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((data, index) => {
            return (
              <tr key={index}>
                <td>{data.id}</td>
                <td>{data.name}</td>
                <td>{data.category}</td>
                <td>{data.price}</td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <input
        onClick={filterHandler}
        value="Electronics"
        id="electronics"
        type="checkbox"
      />
      <label htmlFor="electronics">Electronics</label>
      <input
        onClick={filterHandler}
        value="Clothing"
        id="clothing"
        type="checkbox"
      />
      <label htmlFor="clothing">Clothing</label>
    </div>
  );
};

export default App;
