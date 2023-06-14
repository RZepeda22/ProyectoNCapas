import { useContext } from "react";
import EventSlideShow from "./EventSlideShow";
import Events from "./Events";
import NavBar from "./NavBar";
import ShoppingCartContext from "../context/ShoppingCartContext";

function Home({userName}){
    const {shoppingCartValue, setShoppingCart } = useContext(ShoppingCartContext)

    console.log(shoppingCartValue)
    return(
        <div className="pb-10">
        <NavBar userName={userName}/>
        <EventSlideShow />
        <Events/>
        </div>
       
    )
}

export default Home;