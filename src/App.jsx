import { useState, useMemo } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import AllEvents from './components/AllEvents'
import Login from './components/Login'
import UserContext from './context/UserContext'
import Register from './components/Register'


function App() {
  const [userName, setUserName] = useState('John Smith');
  const value = useMemo(
    () => ({ userName, setUserName }), 
    [userName]
  );

  return (

    <div>
      <UserContext.Provider value={value}>
        <Routes>
        <Route path='/events' element={<AllEvents/>}/>
        <Route path='/' element={<Home />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/register' element={<Register/>}/>
      </Routes>
      </UserContext.Provider>
        
      
    </div>
  )
}

export default App
