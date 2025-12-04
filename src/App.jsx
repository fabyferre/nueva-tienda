
import './App.css'
import ItemDetailContainer from './components/ItemDetailContainer'
import ItemListContainer from './components/ItemListContainer'
import Navbar from './components/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Error from './components/Error'
import Footer from './components/footer'
import { CartProvider } from './context/CartContext'
import 'bootstrap/dist/css/bootstrap.min.css';
import CartContainer from './components/CartContainer';
import Checkout from './components/Checkout';


function App() {


  return (
    <BrowserRouter>
      <CartProvider>
        <Navbar />
        <Routes>
          <Route path='/' element={<ItemListContainer saludo='Bienvenidos a LA RONDA MATE' />} />
          <Route path='/category/:type' element={<ItemListContainer saludo='Bienvenidos a la categoria:  ' />} />
          <Route path='/item/:id' element={<ItemDetailContainer />} />
          <Route path='*' element={<Error />} />
          <Route path='/checkout' element={<Checkout />} />
          <Route path='/cart' element={<CartContainer />} />
        </Routes>
      </CartProvider>
      <Footer />
    </BrowserRouter>
  )
}

export default App
