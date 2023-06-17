import { useState, useEffect, useContext } from "react";
import {FaCartPlus} from "react-icons/fa"
import ShoppingCartContext from "../context/ShoppingCartContext";
import Notification from "./popupnotifications/Notification";

function Ticket({title, tier, cost, image }){

    const {addToCart, showNotification, handleShowNotification} = useContext(ShoppingCartContext)

    const onAddToCartHandler = () => {
        handleShowNotification()
        addToCart({title, tier, cost, image})
    }

    return(
        <div>
            {showNotification && (<Notification isError={false} message="Ticket agregado al carrito"/>)}
            <div className="pt-4 pb-4 border-b-2 p-8 rounded-md hover:bg-blue-100 transition ease-in-out">
                        <h2 className="line-clamp-2 font-semibold italic leading-tight">{title}</h2>
                        <li className="flex flex-row mt-2">
                        <img src={image}
                        className="w-24 h-20 rounded-lg"/>
                        <section className="flex flex-col ml-2">
                            <small className="font-bold bg-green-200 rounded-md p-1 text-center">{tier}</small>
                            <small className="font-semibold">Disponibilidad: 1</small>
                            <button className="rounded mt-1 p-1 hover:bg-blue-400 transition ease-in-out"
                            onClick={onAddToCartHandler}>
                                <section className="flex flex-row justify-center">
                                    <FaCartPlus className="w-10 h-6"/>
                                </section>
                                </button>
                        </section>
                        <b className="ml-auto mr-8">${cost}</b>
                    </li>
            </div>
        </div>
    )
}

export default Ticket;