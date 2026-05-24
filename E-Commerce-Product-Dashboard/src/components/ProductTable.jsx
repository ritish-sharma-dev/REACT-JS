import React from "react";
import { useState } from "react";

const ProductTable = ({ products }) => {
  let [filter, setFilter] = useState(products)
  
  let filterHandler = (e) => {
    let filteredProducts = [...filter];
    if (e.target.value == "lowtohigh") {
        filteredProducts = filteredProducts.sort((a, b)=> a.price - b.price)
    }else if (e.target.value == "hightolow"){
        filteredProducts = filteredProducts.sort((a, b)=> b.price - a.price)
    }else {
        filteredProducts = products
    }
    setFilter(filteredProducts)
  }

  return (
    <div>
      <p>Price</p>
      <select onChange={filterHandler} name="price" id="">
        <option value="">------</option>
        <option value="lowtohigh">Low to High</option>
        <option value="hightolow">High to Low</option>
      </select>

      <table border={1} cellPadding={3} cellSpacing={5}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Product Name</th>
            <th>Price</th>
            <th>Category</th>
            <th>Rating</th>
            <th>Product Image</th>
          </tr>
        </thead>
        <tbody>
          {filter.map((product, index) => {
            return (
              <tr key={index}>
                <td>{product.id}</td>
                <td>{product.title}</td>
                <td>{product.price}</td>
                <td>{product.category}</td>
                <td>{product.rating.rate}</td>
                <td>
                  <img width={50} height={50} src={product.image} alt="" />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ProductTable;
