import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, ListGroup, Image, Button, Card } from 'react-bootstrap'

import { addToCart, removeFromCart } from '../action/CartAction'

const Cart = () => {
  const { id } = useParams()
  const productId = id

  const dispatch = useDispatch()

  const cart = useSelector((state) => state.cart)
  const { cartItems } = cart

  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId))
    }
  }, [dispatch, productId])

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id))
  }

  return (
    <div>
      <Row>
        <Col md={8}>
          <h2>سبد خرید</h2>
          {cartItems.length === 0 ? (
            <h5>! سبد خرید خالی است </h5>
          ) : (
            <ListGroup variant='flush'>
              {cartItems.map((item) => (
                <ListGroup.Item key={item.product}>
                  <Row>
                    <Col md={2}>
                      <Image src={item.image} alt={item.name} fluid rounded />
                    </Col>
                    <Col md={3}>{item.name}</Col>
                    <Col md={2}>{item.price} $</Col>
                    <Col md={2}>
                      <Button
                        type='button'
                        variant='light'
                        onClick={() => removeFromCartHandler(item.product)}
                      >
                        <i className='fa fa-trash'></i>
                      </Button>
                    </Col>
                  </Row>
                </ListGroup.Item>
              ))}
            </ListGroup>
          )}
        </Col>
        <Col md={4}>
          <Card>
            <ListGroup variant='flush'>
              <ListGroup.Item>
                مجموع قیمت : ${' '}
                {cartItems.reduce((acc, item) => acc + item.price, 0)}
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </div>
  )
}

export default Cart
