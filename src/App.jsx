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
  const [userName, setUserName] = useState(localStorage.getItem('userName') || "");
  const [cartItems, setCartItems] = useState([]);
  const [shoppingCartForm, setShoppingCartForm] = useState(false);
  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    if (showNotification) {
      // After 1 second, hide the notification
      const timeout = setTimeout(() => {
        setShowNotification(false);
      }, 1000);

      // Cleanup function to clear the timeout if the component unmounts or the notification is hidden manually
      return () => clearTimeout(timeout);
    }
  }, [showNotification]);

  useEffect(() => {
    const savedCartItems = JSON.parse(localStorage.getItem('cartItems'));
    if (savedCartItems) {
      setCartItems(savedCartItems);
    } else {
      localStorage.setItem('cartItems', JSON.stringify([]));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  

  useEffect(() => {
    localStorage.setItem('userName', userName)
  }, [userName]);

  useEffect(() => {
    const item = localStorage.getItem('userName');
    console.log(item)
    if(item === null){
      localStorage.setItem('userName', "")
    }else{
      setUserName(item);
    }
     
  }, []);

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
    handleShowNotification
  }

  return (

    <div>
      <ShoppingCartContext.Provider value={cartContextValues}>
      <Routes>
        
        <Route path='/events' element={<AllEvents userName={userName}/>}/>
        <Route path='/' element={<Home userName={userName}/>}/>
        <Route path='/login' element={<Login userName={userName} onChangeUser={onChangeUser}/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/dashboard' element={<Dashboard userName={userName} onChangeUser={onChangeUser}/>} />
        <Route path='/shoppingcart' element={<ShoppingCar userName={userName}/>}/>
        <Route path="view/:eId" element={<ViewEvent userName={userName} />} />
       
        
      </Routes> 
      </ShoppingCartContext.Provider>
        
      
    </div>
  )
}

export default App
