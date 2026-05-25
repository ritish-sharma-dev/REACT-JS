import React from 'react'
import {Outlet, NavLink} from "react-router-dom"

const ProductsPage = () => {
  return (
    <div>
       <h1>Products Page</h1>
      <NavLink to={"Electronics"}>Electronics</NavLink>
      <NavLink to={"Clothing"}>Clothing</NavLink>
      <NavLink to={"Furniture"}>Furniture</NavLink>
      <Outlet/>
      </div>
  )
}

export default ProductsPage