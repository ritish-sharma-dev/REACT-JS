import React from "react";
import ProductsPage from "./components/ProductsPage";
import {Route, Routes } from "react-router-dom";
import Electronics from "./components/Electronics";
import Clothing from './components/Clothing'
import Furniture from "./components/Furniture";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/products" element={<ProductsPage />}>
          <Route path="Electronics" element={<Electronics/>}></Route>
          <Route path="Clothing" element={<Clothing/>}></Route>
          <Route path="Furniture" element={<Furniture/>}></Route>
        </Route>
      </Routes>
    </div>
  );
};

export default App;
