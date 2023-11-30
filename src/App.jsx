import { BrowserRouter, Routes, Route} from 'react-router-dom'
import NavBar from './components/navBar'
import Home from './pages/home'
import Products from './pages/products'
import About from './pages/about'
import Login from './pages/login'
import ProductsList from './pages/productsList'
import SingleProduct from './pages/singleProduct'

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/products' element={<Products />}>
          <Route index element={<ProductsList />}/>
          <Route path=':id' element={<SingleProduct />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
