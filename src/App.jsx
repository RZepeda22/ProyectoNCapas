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
    const savedCartItems = localStorage.getItem('cartItems');
    if (savedCartItems) {
      setCartItems(JSON.parse(savedCartItems));
    }
  }, []);

  const onChangeUser = (newUsername) => {
    setUserName(newUsername);
  };

  const changeShoppingCart = () => {
    setShoppingCartForm(!shoppingCartForm)
  }

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  const removeFromCart = (index) => {
    const updatedCartItems = [...cartItems];
    updatedCartItems.splice(index, 1);
    setCartItems(updatedCartItems);
  };

  const cartContextValues = {
    shoppingCartForm,
    changeShoppingCart,
    cartItems,
    addToCart,
    removeFromCart
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
