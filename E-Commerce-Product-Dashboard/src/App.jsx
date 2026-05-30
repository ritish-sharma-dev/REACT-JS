import React, { useEffect, useState } from 'react'

const App = () => {
  const [products, setProducts] = useState([])
  const [filterProducts, setFilterProducts] = useState(products)

  let fetchingData = async () => {
    let response = await fetch("https://fakestoreapi.com/products")
    let p = await response.json()
    setProducts(p)
    setFilterProducts(p)
  }

  let filterHandler = (e)=>{
    let filter;
    if (e.target.value == "LowToHigh"){
      filter = [...products].sort((a,b)=> a.price - b.price)
    }else if (e.target.value == "HighToLow"){
      filter = [...products].sort((a,b)=> b.price - a.price)
    }else{
      filter = products
    }
    console.log(filter)
    setFilterProducts(filter)
  }


  useEffect(() => {
    fetchingData()
  }, [])

  useEffect(() => {
    console.log(products)
  }, [products])

  return (
    <div>
      <select onChange={filterHandler} name="" id="">
        <option value="">---------</option>
        <option value="LowToHigh">Low To High</option>
        <option value="HighToLow">High To Low</option>
      </select>
      <table border={1} cellPadding={3} cellSpacing={3}>
        <thead>
          <tr>
            <td>ID</td>
            <td>ProductName</td>
            <td>Price</td>
            <td>Category</td>
            <td>Rating</td>
            <td>Image</td>
          </tr>
        </thead>
        <tbody>
          {
            filterProducts.map((product, index) => {
              return (
                <tr key={index}>
                  <td>{product.id}</td>
                  <td>{product.title}</td>
                  <td>{product.price}</td>
                  <td>{product.category}</td>
                  <td>{product.rating.rate}</td>
                  <img width={100} height={100} src={product.image} alt="" />
                </tr>
            )
            })
          }
        </tbody>
      </table>
    </div>
  )
}

export default App