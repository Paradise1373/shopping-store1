import React from 'react'
import { Container, Navbar, Nav } from 'react-bootstrap'

import './Header.css'

const Header = () => {
  return (
		<header>
			<Navbar className='nav-bg'>
				<Container>
					<Navbar.Brand href='/'>Online Market</Navbar.Brand>
					<Nav>
						<Nav.Link href='/cart'>
							<i className='fa fa-shopping-cart'></i>
						</Nav.Link>
						<Nav.Link href='/account'>
							<i className='fa fa-user'></i>
						</Nav.Link>
						<Nav.Link href='connect'>
							<i className='fa fa-comment'></i>
						</Nav.Link>
						<Nav.Link href='connection'>ارتباط با ما</Nav.Link>
					</Nav>
				</Container>
			</Navbar>
		</header>
	)
}

export default Header
