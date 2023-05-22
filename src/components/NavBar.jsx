import searchIcon from '../assets/icons/search_black_24dp.svg'
import shoppingCart from '../assets/icons/shopping_cart_black_24dp.svg'
import userIcon from '../assets/icons/person_black_24dp.svg'

function NavBar() {
    return(<nav className="flex w-screen items-center h-20">
            <img src="https://i.ibb.co/4M3W5Vp/Logo.png" className="w-40 h-16 hover:cursor-pointer" />
            <li className="flex list-none ml-16 font-rubik gap-10 text-lg">
            <a className="text-blue-400 hover:cursor-pointer">
                Events
            </a>
            <a className="text-blue-800 hover:cursor-pointer">
                Cartelera
            </a>
            
            </li>
            <form className="flex content-center">
            <input className="ml-24 h-10 w-[32rem] outline-blue-500 rounded-xl bg-gradient-to-r from-blue-200 to-blue-100 pl-4 text-gray-600"/>
            <button className="transition duration-300 ml-1 rounded-xl w-12 h-10 bg-gradient-to-r from-blue-100 to-blue-200 "><img src={searchIcon} className="ml-3" /></button>
            </form>
            <button className="transition duration-300 rounded-xl w-48 h-16 ml-10  hover:bg-blue-200">
                <div className="flex flex-row">
                    <img src={userIcon} className="ml-4"/>
                    <article className="ml-3 flex flex-col font-rubik">
                        <b>Welcome</b>
                        <b>Login/Register</b>
                    </article>
                </div>
            </button>
            <button className="transition duration-300 flex flex-col items-center h-16 w-9 ml-auto mr-10 rounded-xl hover:bg-blue-200">
                <b>0</b>
                <img className="w-9" src={shoppingCart}/>
            </button>
        
      </nav>
)
}

export default NavBar
