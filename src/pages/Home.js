import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col } from 'react-bootstrap'
// import axios from 'axios'

import Product from './components/Product/Product'
import { productListAction } from '../action/ProductAction'

const Home = () => {
  // const [products, setProducts] = useState([])
  const dispatch = useDispatch()

  const productList = useSelector((state) => state.productList)

  const { loading, products } = productList

  useEffect(() => {
    dispatch(productListAction())
    // const sendRequest = async () => {
    //   const response = await axios('http://localhost:8000/api/products')
    //   setProducts(response.data)
    // }

    // sendRequest()
  }, [dispatch])

  // useEffect(() => {
  //   const sendRequest = async () => {
  //     const response = await fetch('http://localhost:8000/api/products')
  //     const responseData = await response.json()

  //     setProducts(responseData)
  //   }
  //
  //   sendRequest()
  // }, [])

  return (
    <div>
      <h1 className='py-3 text-center'>محصولات</h1>
      {loading ? (
        <h2 className='text-center'>... در حال دریافت محصولات</h2>
      ) : (
        <Row>
          {products.map((item) => {
            return (
              <Col key={item._id} sm={12} md={6} lg={4}>
                <Product product={item} />
              </Col>
            )
          })}
        </Row>
      )}
    </div>
  )
}

export default Home
