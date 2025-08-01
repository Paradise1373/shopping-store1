import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams, useNavigate } from 'react-router-dom'
import { Row, Col, ListGroup, Image, Button } from 'react-bootstrap'
// import axios from 'axios'

import { productDetailAction } from '../action/ProductAction'

const Product = () => {
  // const [product, setProduct] = useState({})
  const dispatch = useDispatch()

  const productDetail = useSelector((state) => state.productDetail)

  const { loading, product } = productDetail

  const { id } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    dispatch(productDetailAction(id))

    // const sendRequest = async () => {
    //   const response = await axios.get(
    //     `http://localhost:8000/api/products/${id}`
    //   )
    //   setProduct(response.data)
    // }

    // sendRequest()
  }, [dispatch, id]) 

  // useEffect(() => {
  //   const sendRequest = async () => {
  //     const response = await fetch(`http://localhost:8000/api/products/${id}`)
  //     const responseData = await response.json()
  //     setProduct(responseData)
  //   }
  
  //   sendRequest()
  // }, [id])

  const addToCartHandler = () => {
    navigate(`/cart/${id}`)
  }

  return (
    <div className='mb-4'>
      <Link to='/' className='btn btn-light my-3'>
        بازگشت به صفحه اصلی
      </Link>
      {loading ? (
        <h2 className='text-center'>... در حال دریافت محصول</h2>
      ) : (
        <Row>
          <Col md={6}>
            <Image src={product.image} fluid />
          </Col>
          <Col md={3}>
            <ListGroup variant='flush'>
              <ListGroup.Item>
                <h3>{product.name}</h3>
              </ListGroup.Item>
              <ListGroup.Item>قیمت : $ {product.price}</ListGroup.Item>
              <ListGroup.Item>موجودی انبار : {product.status}</ListGroup.Item>
              <ListGroup.Item>" {product.description} "</ListGroup.Item>
            </ListGroup>
          </Col>
          <Col md={3}>
            <ListGroup variant='flush'>
              <ListGroup.Item>
                <Button
                  onClick={addToCartHandler}
                  className='btn-block'
                  type='button'
                >
                  افزودن به سبد خرید
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
      )}
    </div>
  )
}

export default Product
