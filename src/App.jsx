
import './App.css'
import ItemDetailContainer from './components/ItemDetailContainer'
//import ItemCount from './components/ItemCount'
import ItemListContainer from './components/ItemListContainer'
import Navbar from './components/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Error from './components/Error'
import Footer from './components/footer'

function App() {


  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<ItemListContainer saludo='Bienvenidos a LA RONDA MATE' />} />
        <Route path='/category/:type' element={<ItemListContainer saludo='Bienvenidos a la categoria:  ' />} />
        <Route path='/item/:id' element={<ItemDetailContainer />} />
        <Route path='*' element={<Error />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
