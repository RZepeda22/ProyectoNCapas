import { useState, useMemo, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import AllEvents from './components/AllEvents'
import Login from './components/Login'
import {users as allusers} from './placeholderdata/users.json'
import Register from './components/Register'
import Dashboard from './components/Dashboard'
import ShoppingCar from './components/poupsmenus/ShoppingCar'


function App() {
  const [userName, setUserName] = useState(localStorage.getItem('userName'));

  useEffect(() => {
    localStorage.setItem('userName', userName)
  }, [userName]);

  useEffect(() => {
    const item = localStorage.getItem('userName');
     setUserName(item);
  }, []);

  const onChangeUser = (newUsername) => {
    setUserName(newUsername);
  };

  

  return (

    <div>
      <Routes>
        <Route path='/events' element={<AllEvents userName={userName}/>}/>
        <Route path='/' element={<Home userName={userName} />}/>
        <Route path='/login' element={<Login userName={userName} onChangeUser={onChangeUser}/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/dashboard' element={<Dashboard userName={userName} onChangeUser={onChangeUser}/>} />
        <Route path='/shoppingcart' element={<ShoppingCar userName={userName}/>}/>
      </Routes>
        
      
    </div>
  )
}

export default App
