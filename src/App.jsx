import { useState } from 'react';
import './All.css';
import Header from './Header';
import NavBar from './NavBar';
import SideBar from './SideBar';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Categories from './Categories';
import Products from './Products';
import Customers from './Customers';
import Setting from './Setting';
import LoginForm from './components/loginForm/LoginForm';
import RegisterForm from './components/loginForm/RegisterForm';


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
          <Route path='/products' exact component={Products}/>
          <Route path='/categories' exact component={Categories}/>
          <Route path='/customers' exact component={Customers}/>
          <Route path='/setting' exact component={Setting}/>
        </Switch>
      </Router>

      

      <Header OpenSidebar={OpenSidebar} />
      
      <SideBar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
      
      </div>
    </div>
  );
}

export default App;
