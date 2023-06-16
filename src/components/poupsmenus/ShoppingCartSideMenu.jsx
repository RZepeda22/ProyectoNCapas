import { useContext, useState, useEffect } from "react";
import ShoppingCartContext from "../../context/ShoppingCartContext";

function ShoppingCartSideMenu(){
    const {cartItems, changeShoppingCart } = useContext(ShoppingCartContext)

    const handleShoppingCartForm = () => {
        changeShoppingCart();
    }

    return(
        
        <div className="fixed top-0 w-full h-full bg-black bg-opacity-40">
            <div className="fixed top-0 right-0 w-9/12 md:w-1/4 h-full bg-gray-100 font-rubik">
            <section className="flex flex-col pt-6 pl-6 w-full h-fit">
                <strong className="text-2xl">
                    Carrito de compra
                    <button className="ml-20"
                    onClick={() => handleShoppingCartForm()}>X</button>
                </strong>
                <h1 className="mt-2">2 items</h1>
                    
                <ul className="w-full h-fit">
                    {/* Do a ForEach of each element in local storage */}
                    {/*Start of each element*/}
                    {cartItems.map((item, index) =>{
                        return(
                            <div key={index} className="pt-4 pb-4 border-b-2">
                        <h2 className="line-clamp-2 font-semibold italic leading-tight">{item[index].title}</h2>
                        {console.log(item[index].title)}
                        <li className="flex flex-row mt-2">
                        <img src="https://www.applaudhr.com/hubfs/HRTechx.jpg"
                        className="w-24 h-20"/>
                        <section className="flex flex-col ml-2">
                            <small className="font-bold bg-green-200 rounded-md p-1">{item[index].tier}</small>
                            <small>Cantidad: 1</small>
                            <button className="border border-black rounded mt-1">Remover</button>
                        </section>
                        <b className="ml-auto mr-8">{item[index].cost}</b>
                    </li>
                    </div>
                    )})}
                    
                    {/*End of each element*/}
                    
                </ul>
            </section>

        </div>
        </div>
        
    )
}

export default ShoppingCartSideMenu;