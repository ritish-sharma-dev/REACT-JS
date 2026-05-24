import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import ProductTable from './components/ProductTable'

const App = () => {
  const [products, setProducts] = useState(undefined)

  const fetchingData = async ()=>{
    try{
      const response = await fetch("https://fakestoreapi.com/products")
      const products = await response.json()
      setProducts(products)
    } catch(error){
      console.log("Failed to load products.")
    }
  }

  useEffect( ()=>{
    fetchingData()
  },[])

  return (
    <div>
      {products != undefined ? <ProductTable products={products}/> : "Loading....."}
    </div>
  )
}

export default App