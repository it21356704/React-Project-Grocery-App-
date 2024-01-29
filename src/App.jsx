import { useState } from 'react';
import './pages/All.css';
import Header from './pages/Header';
import NavBar from './pages/NavBar';
import SideBar from './pages/SideBar';
import Home from './pages/Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Categories from './pages/Categories';
import Products from './pages/Products';
import Customers from './pages/Customers';
import Setting from './pages/Setting';
import LoginForm from './components/loginForm/LoginForm';
import RegisterForm from './components/loginForm/RegisterForm';
import Cart from './pages/Cart';
import { CartProvider } from 'react-use-cart';

function App() {

  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }
  
  return (

    
    <div >

      

      <Router>
        <Switch>
          <Route path='/' exact component={LoginForm}/>
          <Route path='/registerform' exact component={RegisterForm}/>
        </Switch>
      </Router>

      <div className='grid-cotainer'>
      
      <Router>
        <Switch>
          <Route path='/home' exact component={Home}/>
          
          <Route path='/categories' exact component={Categories}/>
          <Route path='/customers' exact component={Customers}/>
          <Route path='/setting' exact component={Setting}/>
          <CartProvider>
          <Route path='/products' exact component={Products}/>
          <Route path='/cart' exact component={Cart}/>
          </CartProvider>
        </Switch>
      </Router>

      

      <Header OpenSidebar={OpenSidebar} />
      
      <SideBar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
      
      </div>
    </div>
  );
}

export default App;
