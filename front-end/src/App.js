import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Route,Routes} from 'react-router-dom';
import Shop from './Pages/Shop';
import ShopCatagory from './Pages/ShopCatagory';
import Product from './Pages/Product';
import LoginSignup from './Pages/LoginSignup';
import Signin from './Pages/Signin'
import { UserProvider } from './Context/UserContext';
import Cart from './Pages/Cart';
import Footer from './Components/Footer/Footer';
import men_banner from './Components/Assets/banner_mens.png';
import women_banner from './Components/Assets/banner_women.png';
import kid_banner from './Components/Assets/banner_kids.png';

import { Bounce, ToastContainer } from 'react-toastify';


function App() {
  return (
    <div>
      <BrowserRouter>
      <UserProvider> 
      <Navbar/>
      <Routes>
        <Route path='/' element={<Shop/>}></Route>
        <Route path='/mens' element={<ShopCatagory banner={men_banner} category = "men"/>}></Route>
        <Route path='/womens' element={<ShopCatagory banner={women_banner} category = "women"/>}></Route>
        <Route path='/kids' element={<ShopCatagory banner={kid_banner} category = "kid"/>}></Route>
        <Route path='/product' element={<Product/>}>
          <Route path=':productId' element={<Product/>}/>
        </Route>

        <Route path='/cart' element={<Cart/>}></Route>
        <Route path='/login' element={<LoginSignup/>}/>
        <Route path='/signin' element={<Signin/>}/>
      </Routes>
      <Footer/>
      </UserProvider>
      </BrowserRouter>
      <ToastContainer
        position="top-center"
        autoClose={1000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
        theme="colored"
        transition={Bounce}
/>

      
      
      
      
    </div>
  );
}

export default App;
