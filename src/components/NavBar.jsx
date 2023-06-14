import searchIcon from '../assets/icons/search_black_24dp.svg'
import shoppingCart from '../assets/icons/shopping_cart_black_24dp.svg'
import userIcon from '../assets/icons/person_black_24dp.svg'
import { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import ShoppingCartSideMenu from './poupsmenus/ShoppingCartSideMenu'
import ShoppingCartContext from '../context/ShoppingCartContext'

const NavBar = ({userName}) => {

    const {shoppingCartForm, changeShoppingCart } = useContext(ShoppingCartContext)

    const handleShoppingCartForm = () => {
        changeShoppingCart();
    }

    return(
        
            <nav className="flex flex-col w-full items-center md:flex-row pt-2 pb-2">
                <Link to='/'>
                    <img src="https://i.ibb.co/4M3W5Vp/Logo.png" className="w-fit h-16 ml-6 hover:cursor-pointer"/>
                </Link>
            {shoppingCartForm && <ShoppingCartSideMenu />}
            
           
            <ul>
                <li className="flex list-none md:ml-16 font-rubik gap-10 text-lg">
                    <Link to='/events' className="text-blue-400 hover:cursor-pointer">
                    Events
                    </Link>
                    <a className="text-blue-800 hover:cursor-pointer">
                    Cartelera
                    </a>
            
            </li>
            </ul>
            
            <form className="flex content-center">
            <input className="md:ml-24 h-10 w-fit md:w-[32rem] outline-blue-500 rounded-xl bg-gradient-to-r from-blue-200 to-blue-100 pl-4 text-gray-600"/>
            <button className="transition duration-300 ml-1 rounded-xl w-12 h-10 bg-gradient-to-r from-blue-100 to-blue-200 hover:border-blue-500 hover:border-2">
                <img src={searchIcon} className="ml-3" />
            </button>
            </form>
            <div className="flex flex-row mt-1 md:mt-0">
            {
                        userName.length === 0 ? 
                        <>
                        <Link to='/login'>
                        <button className="transition duration-300 rounded-xl w-48 h-16 md:ml-10  hover:bg-blue-200">
                        <div className="flex flex-row">
                        <img src={userIcon} className="ml-4"/>
                        <article className="ml-3 flex flex-col font-rubik">
                        <b>Welcome</b>
                        <b>Register/Log in</b>
                        </article>
                        </div>
                        </button>
                        </Link>
                        </>
                         :
                         <>
                        <Link to='/dashboard'>
                        <button className="transition duration-300 rounded-xl w-48 h-16 md:ml-10  hover:bg-blue-200">
                        <div className="flex flex-row">
                         <img src={userIcon} className="ml-4"/>
                         <article className="ml-3 flex flex-col font-rubik">
                         <b>Welcome</b>
                         <b>{userName}</b>
                        </article>
                        </div>
                        </button>
                        </Link>
                        </>
                         

                    }
                    
                
                <button className="transition duration-300 flex flex-col items-center md:ml-32 h-16 w-9 md:mr-10 rounded-xl hover:bg-blue-200"
                onClick={() => handleShoppingCartForm()}>
                <b>0</b>
                <img className="w-9" src={shoppingCart}/>
            </button>
            
        
            </div>
            
                
                    
      </nav>
)
}

export default NavBar
