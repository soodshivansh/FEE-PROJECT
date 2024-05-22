import './App.css';
import { Navbar } from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Shop } from './Pages/Shop';
import { ShopCategory } from './Pages/ShopCategory';
import { Product } from './Pages/Product';
import { Cart } from './Pages/Cart';
import { LoginSignup } from './Pages/LoginSignup';
import { Footer } from './Components/Footer/Footer';
import Signup from './Components/Signup'
import Login from './Components/Login'

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/> 
      <Routes>
        <Route path='/' element = {<Shop/>}/>
        <Route path='/books' element = {<ShopCategory category = "books"/>}/>
        <Route path='/clothing' element = {<ShopCategory category = "clothing"/>}/>
        <Route path='/items' element = {<ShopCategory category = "items"/>}/>
        <Route path='/product' element = {<Product/>}>
          <Route path=':productID' element = {<Product/>}/>
        </Route>
        <Route path='/cart' element = {<Cart/>}/>
        <Route path='/signup' element = {<Signup/>}/>
        <Route path='/login' element = {<Login/>}/>
      </Routes>     
      <Footer/>
      </BrowserRouter>

    </div>
  );
}

export default App;
