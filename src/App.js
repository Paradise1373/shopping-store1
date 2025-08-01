import { Routes, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'

import Home from './pages/Home'
import Product from './pages/Product'
import Connection from './pages/Connection'
import Cart from './pages/Cart'
import Connect from './pages/Connect'
import Account from './pages/Account'

import Header from './pages/components/Header/Header'
import Footer from './pages/components/Footer/Footer'
import NotFound from './pages/components/NotFound/NotFound'

import './App.css'

const App = () => {
  return (
    <div>
      <Header />
      <main className='main py-3'>
        <Container>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/product/:id' element={<Product />} />
            <Route path='/connection' element={<Connection />} />
            <Route path='/account' element={<Account />} />
            <Route path='/cart/:id?' element={<Cart />} />
            <Route path='/connect' element={<Connect />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </Container>
      </main>
      <Footer />
    </div>
  )
}

export default App
