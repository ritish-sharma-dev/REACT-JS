import React, { useEffect } from "react";

const App = () => {
  const products = [
    {
      id: 101,
      name: "Laptop",
      price: 85000,
      category: "Electronics",
      stock: 15,
    },
    {
      id: 102,
      name: "Office Chair",
      price: 12000,
      category: "Furniture",
      stock: 0,
    },
    {
      id: 103,
      name: "Smart Watch",
      price: 5000,
      category: "Electronics",
      stock: 4,
    },
    {
      id: 104,
      name: "Desk Lamp",
      price: 1500,
      category: "Furniture",
      stock: 8,
    },
    {
      id: 105,
      name: "Mechanical Keyboard",
      price: 7000,
      category: "Electronics",
      stock: 25,
    },
    {
      id: 106,
      name: "Gaming Mouse",
      price: 3500,
      category: "Electronics",
      stock: 2,
    },
  ]

  let average = 0;
  products.forEach((product)=>{
    average+= product.price
  })
  average /= products.length

  return (
    <div>
      <table border={1} cellPadding={3} cellSpacing={5}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Category</th>
            <th>Price</th>
            <th>Stock</th>
            <th>Availability Status</th>
          </tr>
        </thead>
        <tbody>
          {
            products.map((product, index)=>{
              return (
                <tr 
                style={{
                  color : product.stock == 0 ? "Red" : product.stock>=1 && product.stock<=10 ? "Orange" : product.stock>10 && product.price > 50000 ? "Green"  :  "Black"
                }}
                key={index}>
                  <td>{product.name}</td>
                  <td>{product.category}</td>
                  <td>{product.price}</td>
                  <td>{product.stock}</td>
                  <td>{product.stock == 0 ? "Out of Stock" : product.stock>=1 && product.stock<=10 ? "Limited Stock" : product.stock>10 ? "In Stock"  :  ""}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>

      <div>
        <h4>Catalog Statistics</h4>
        <p>Total Items In Catalog: {products.length}</p>
        <p>Average Product Price: {average}</p>
      </div>

      <div>
        <h4>Premium Products</h4>
        {
          products.map((product)=>{
            if (product.price > 10000){
              return <p>{product.name}</p>
            }
          })
        }
      </div>

      <div>
        <h4>Electronics Clearance</h4>
        {
          products.map((product)=>{
            if (product.stock >= 1 && product.stock <= 5){
              return <p>{product.name} - Only {product.stock} left</p>
            }
          })
        }
      </div>
    </div>
  )
};

export default App;
