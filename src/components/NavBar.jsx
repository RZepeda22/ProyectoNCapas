import searchIcon from '../assets/icons/search_black_24dp.svg'
import shoppingCart from '../assets/icons/shopping_cart_black_24dp.svg'
import userIcon from '../assets/icons/person_black_24dp.svg'
import { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import UserContext from '../context/UserContext'

function NavBar() {
    const {userName} = useContext(UserContext)

    return(
        
            <nav className="flex flex-row w-fit items-center h-20">
                <Link to='/'>
                    <img src="https://i.ibb.co/4M3W5Vp/Logo.png" className="w-fit h-16 ml-6 hover:cursor-pointer"/>
                </Link>
           
            <ul>
                <li className="flex list-none ml-16 font-rubik gap-10 text-lg">
                    <Link to='/events' className="text-blue-400 hover:cursor-pointer">
                    Events
                    </Link>
                    <a className="text-blue-800 hover:cursor-pointer">
                    Cartelera
                    </a>
            
            </li>
            </ul>
            
            <form className="flex content-center">
            <input className="ml-24 h-10 w-[32rem] outline-blue-500 rounded-xl bg-gradient-to-r from-blue-200 to-blue-100 pl-4 text-gray-600"/>
            <button className="transition duration-300 ml-1 rounded-xl w-12 h-10 bg-gradient-to-r from-blue-100 to-blue-200 hover:border-blue-500 hover:border-2">
                <img src={searchIcon} className="ml-3" />
            </button>
            </form>
            <Link to='/login'>
                <button className="transition duration-300 rounded-xl w-48 h-16 ml-10  hover:bg-blue-200">
                <div className="flex flex-row">
                    <img src={userIcon} className="ml-4"/>
                    <article className="ml-3 flex flex-col font-rubik">
                        <b>Welcome</b>
                        <b></b>
                    </article>
                </div>
            </button>
            </Link>
            
            <button className="transition duration-300 flex flex-col items-center ml-32 h-16 w-9 mr-10 rounded-xl hover:bg-blue-200">
                <b>0</b>
                <img className="w-9" src={shoppingCart}/>
            </button>
        
      </nav>
)
}

export default NavBar
