import { useState, useMemo, useEffect, useContext, createContext } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import AllEvents from './components/AllEvents'
import Login from './components/Login'
import {users as allusers} from './placeholderdata/users.json'
import Register from './components/Register'
import Dashboard from './components/Dashboard'
import ShoppingCar from './components/ShoppingCar'
import ShoppingCartContext from './context/ShoppingCartContext'
import ViewEvent from './components/ViewEvent'


function App() {
  const [userName, setUserName] = useState(JSON.parse(localStorage.getItem('userName')) || []);
  const [cartItems, setCartItems] = useState(JSON.parse(localStorage.getItem('cartItems')) || []);
  const [shoppingCartForm, setShoppingCartForm] = useState(false);
  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    if (showNotification) {
      const timeout = setTimeout(() => {
        setShowNotification(false);
      }, 1000);

      return () => clearTimeout(timeout);
    }
  }, [showNotification]);

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  

  useEffect(() => {
    localStorage.setItem('userName', JSON.stringify(userName));
  }, [userName]);

  useEffect(() => {
    if (showNotification) {
      const timeout = setTimeout(() => {
        setShowNotification(false);
      }, 1000);

      return () => clearTimeout(timeout);
    }
  }, [showNotification]);

  const onChangeUser = (newUsername) => {
    setUserName(newUsername);
  };

  const changeShoppingCart = () => {
    setShoppingCartForm(!shoppingCartForm)
  }

  const addToCart = (item) => {
    setCartItems((prevCartItems) => [...prevCartItems, item]);
  };

  const removeFromCart = (index) => {
    setCartItems((prevCartItems) => {
      const updatedCartItems = [...prevCartItems];
      updatedCartItems.splice(index, 1);
      return updatedCartItems;
    });
  };

  const handleShowNotification = () => {
    setShowNotification(true);
  };

  const cartContextValues = {
    shoppingCartForm,
    changeShoppingCart,
    cartItems,
    addToCart,
    removeFromCart,
    showNotification,
    handleShowNotification,
    onChangeUser,
    userName
  }

  return (

    <div>
      <ShoppingCartContext.Provider value={cartContextValues}>
      <Routes>
        
        <Route path='/events' element={<AllEvents/>}/>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/shoppingcart' element={<ShoppingCar />}/>
        <Route path="view/:eId" element={<ViewEvent  />} />
       
        
      </Routes> 
      </ShoppingCartContext.Provider>
        
      
    </div>
  )
}

export default App
