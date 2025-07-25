import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap'

import './Footer.css'

const Footer = () => {
  return (
    <footer className='footer'>
      <Container>
        <Row>
          <Col>
            <Link to='/account'>حساب کاربری</Link>
          </Col>
          <Col>
            <Link to='/cart'>سبد خرید</Link>
          </Col>
          <Col>
            <Link to='/connection'>ارتباط باما</Link>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
