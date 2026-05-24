import React, { useEffect, useState } from 'react'

const App = () => {
  const [products, setProducts] = useState([])
  const [selectedProduct, setSelectedProduct] = useState(undefined)
  let fetchingData = async ()=>{
    try{
      let response = await fetch("https://fakestoreapi.com/products")
      let products = await response.json()
      // console.log(products)
      setProducts(products)
    }catch(error){
      console.log(error)
    }
  }

  let productHandler = (e)=>{
    // console.log(e.target.value)
    let product = products.find((obj)=>{
      return obj.title == e.target.value
    })
    // console.log(product)
    setSelectedProduct(product)
  }
  
  useEffect(()=>{
    fetchingData()
  },[])

  return (
    <div>
      <h4>Product Viewer</h4>
      <select onChange={productHandler} name="" id="">
        <option value="">Select Product</option>
        {
          products.map((product, index)=>{
            return (
              <option key={index} value={product.title}>{product.title}</option>
            )
          })
        }
      </select>
      <div>
      {
        selectedProduct ? 
        <div>
          <img width={300} height={300} src={selectedProduct.image} alt="" />
          <h5>{selectedProduct.title}</h5>
          <p>{selectedProduct.category}</p>
          <p>{selectedProduct.price}</p>
          <p>{selectedProduct.description}</p>
        </div>
        : "Select a product to view details"
      }
      </div>

    </div>
  )
}

export default App